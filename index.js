const express = require('express');
const http = require('http');
const util = require('util');
const bodyParser = require('body-parser');
const BigQuery = require('@google-cloud/bigquery');
const {testDevice} = require('./fake-bacnet-device');
const {bacnetDeviceRequest} = require('./fake-bacnet-device-request');

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
				info.infoTypeLcd === 'IT_SUB_ADDRESS_GENERIC' && info.values
			).map(info => {
				return {
					...info,
					values: {
						objectTypeId: parseInt(info.values[0]),
						objectIdentifier: parseInt(info.values[1])
					}
				}
			})
		}
	}

	//save to db
	bigquery
		.dataset(datasetId)
		.table(tableId)
		.insert(record) //should be able to pass in single record (not array)
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

	console.log("/bacnet_devices/predict request body: ", req.body);
	bigquery
	  .dataset(datasetId)
	  .table(tableId)
	  .getRows()
	  .then(results => {
	    console.log("bigquery results: ", results)
	    res.status(200);
	    res.json(results);
	  })
	  .catch(err => {
	    console.error('ERROR:', err);

	    res.status(409);
	    res.json(err)
	  });
});


server.listen(8080, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`Example app listening at http://${host}:${port}`);
});