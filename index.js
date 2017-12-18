const express = require('express');
const http = require('http');
const util = require('util');
const bodyParser = require('body-parser');
const BigQuery = require('@google-cloud/bigquery');
const {testDevice} = require('./fake-bacnet-device');
const {bacnetDeviceRequest} = require('./fake-bacnet-device-request');
const {flattenObject} = require('./utils');

//TODO: use Kubernetes to hide this
const keyFilename = '/Users/kevind/candi/device-provisioning/device-provisioning-5cbd98bb6878.json';

const app = express();
const server = http.createServer(app);
const jsonParser = bodyParser.json()

// Your Google Cloud Platform project ID
const projectId = 'device-provisioning';
const datasetId = 'deviceProvisioning';
const tableId = 'bacnetDevice';

// Creates a client
const bigquery = new BigQuery({
  projectId: projectId,
  keyFilename: keyFilename
});

app.get('/', (req, res) => {
  res.send(testDevice);
});

//save device provisioning configurations
app.post('/bacnet_devices', jsonParser, (req, res) => {
	if (!req || !req.body) return res.sendStatus(400)
	const {
		discovered: {
			'display-name': displayName,
			'device-identifier': deviceIdentifier,
			address,
			saddress,
			'system-status': systemStatus,
			'vendor-name': vendorName,
			'vendor-identifier': vendorIdentifier,
			'model-name': modelName,
			'standard-version': standardVersion,
			'software-version': softwareVersion,
			'bacnet-network': bacnetNetwork,
			multiread,
			router,
			objects = {}
		} = {},
		device: {
			siteCd,
			deviceCd,
			userCd,
			deviceInfos = [],
			product: {
				productCd,
				name,
				make,
				model,
				imageLink,
				baseProtocol
			} = {}
		} = {}
	} = req.body

	let dataPoints = []
	for (let dpKey in objects) {
		const obj = objects[dpKey]

		dataPoints.push({
			objectType: obj['object-type'],
			objectTypeId: parseInt(dpKey.split(':')[1]),
			objectIdentifier: obj['object-identifier'],
			objectName: obj['object-name'],
			value: obj.value,
			units: obj.units,
			description: obj.description
		})
	}

	const record = {
		displayName,
		deviceIdentifier,
		address,
		saddress,
		systemStatus,
		vendorName,
		vendorIdentifier,
		modelName,
		standardVersion,
		softwareVersion,
		bacnetNetwork,
		multiread,
		router,
		dataPoints,
		product: {
			productCd,
			name,
			make,
			model,
			imageLink,
			baseProtocol
		},
		device: {
			siteCd,
			deviceCd,
			userCd,
			deviceInfos: deviceInfos.filter(info =>
				info.infoTypeLcd === 'IT_SUB_ADDRESS_GENERIC' &&
				info.values &&
				info.values.length > 1
			).map(info => {
				return {
					deviceInfoCd: info.deviceInfoCd,
					infoTypeLcd: info.infoTypeLcd,
					text: info.text,
					objectTypeId: parseInt(info.values[0]),
					objectIdentifier: parseInt(info.values[1])
				}
			})
		}
	}

	//save to db
	bigquery
		.dataset(datasetId)
		.table(tableId)
		.insert(record)
		.then(insertErrors => {
		  console.log('Inserted:');
		  if (insertErrors && insertErrors.length > 0) {
		    console.log('Insert errors:');
		    insertErrors.forEach(err => console.error(err));
		  }

		  res.status(200);
		  res.json(record);
		})
		.catch(err => {
		  console.log("ERROR here: ", util.inspect(err, {showHidden: false, depth: null}))
		  res.status(409);
		  res.json(err);
		});
});

//predict device provisioning configurations
//NOTE: using POST instead of GET because the request will contain lots of info
app.post('/bacnet_devices/predict', jsonParser, (req, res) => {
	if (!req.body) return res.sendStatus(400)

	bigquery
	  .dataset(datasetId)
	  .table(tableId)
	  .getRows()
	  .then(results => {
	    console.log("bigquery results: ", results)

	    console.log("results count: ", results.length)
	    res.status(200);
	    res.json(results);
	  })
	  .catch(err => {
	    console.error('ERROR:', err);

	    res.status(409);
	    res.json(err)
	  });
});

//Update existing record
app.put('/bacnet_devices', jsonParser, (req, res) => {
	// if (!req.body) return res.sendStatus(400) //why is this getting thrown? has to do with put
	const options = createUpdateQuery({
		projectId,
		datasetId,
		tableId,
		reqBody: req.body
	})

	//TODO: uncomment
	bigquery
		.startQuery(options) //Run as JOB - necessary to update while buffer stream is still open (from writing)
		// .query(options)
		.then(results => {
			console.log("query results: ", results);

			res.status(200);
			res.json(results);
		})
		.catch(err => {
      console.error('QUERY ERROR:', err);

      res.status(409);
      res.json(err);
    });

})


server.listen(8080, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`Example app listening at http://${host}:${port}`);
});


function createUpdateQuery({
	projectId,
	datasetId,
	tableId,
	reqBody: {
		device: {
			siteCd, //NOTE: do not change
			deviceCd, // do not change
			userCd,
			deviceInfos
		} = {},
		product: {
			productCd,
			name,
			make,
			model,
			imageLink,
			baseProtocol
		} = {},
		discovered //Should never need to update this...
	} = {}
}) {
	let updateArr = []

	if (!deviceCd || !siteCd) {
		console.error("cannot update record without deviceCd and siteCd")
		return
	}

	if (userCd) {
		updateArr.push(`device.userCd='${userCd}'`)
	}

	//TODO: determing objectTypeId and objectIdentifier
	if (deviceInfos) {
		const infoStructs = deviceInfos.map(info => {
			return `STRUCT(\
				"deviceInfoCd" as \`${info.deviceInfoCd}\`,\
				"infoTypeLcd" as \`${info.infoTypeLcd}\`,\
				"text" as \`${info.text}\`,\
				"objectTypeId" as \`${parseInt(info.values[0])}\`,\
				"objectIdentifier" as \`${parseInt(info.values[1])}\`\
			)`
		})
		updateArr.push(`device.deviceInfos=[${infoStructs.join(', ')}]`)
	}
	if (productCd) {
		updateArr.push(`product.productCd='${productCd}'`)
	}
	if (name) {
		updateArr.push(`product.name='${name}'`)
	}
	if (make) {
		updateArr.push(`product.make='${make}'`)
	}
	if (model) {
		updateArr.push(`product.model='${model}'`)
	}
	if (imageLink) {
		updateArr.push(`product.model='${imageLink}'`)
	}
	if (baseProtocol) {
		updateArr.push(`product.baseProtocol='${baseProtocol}'`)
	}

	if (discovered) {
		console.log("Should never need to update Discovered Device Attributes")
	}

	const sqlQuery = `\
		UPDATE \`${projectId}.${datasetId}.${tableId}\`\
		SET ${updateArr.join(', ')}\
		WHERE device.deviceCd='${deviceCd}' AND device.siteCd='${siteCd}';`
	const options = {
		query: sqlQuery.replace(/\s/g, ''),
		useLegacySql: false // Use standard SQL syntax for queries. - needed for DELETE and UPDATE
	}

	console.log("sqlQuery: ", sqlQuery.replace(/\s/g, ''))

	return options

}

