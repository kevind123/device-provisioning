const express = require('express');
const http = require('http');
const BigQuery = require('@google-cloud/bigquery');
const {testDevice} = require('./fake-bacnet-device');


const app = express();
const server = http.createServer(app);

// Your Google Cloud Platform project ID
const projectId = 'device-provisioning';
const datasetId = 'deviceProvisioning';
const tableId = 'bacnetDevice';


// Creates a client
const bigquery = new BigQuery({
  projectId: projectId,
});

// Get rows of bacnetDevice table
bigquery
  .dataset(datasetId)
  .table(tableId)
  .getRows()
  .then(results => {
    const dataset = results[0];

    console.log(`Dataset ${dataset.id} created.`);
  })
  .catch(err => {
    console.error('ERROR:', err);
  });

// Inserts data into a table
// bacnetDevice to insert as a test:

// bigquery
//   .dataset(datasetId)
//   .table(tableId)
//   .insert(rows)
//   .then(insertErrors => {
//     console.log('Inserted:');
//     rows.forEach(row => console.log(row));

//     if (insertErrors && insertErrors.length > 0) {
//       console.log('Insert errors:');
//       insertErrors.forEach(err => console.error(err));
//     }
//   })
//   .catch(err => {
//     console.error('ERROR:', err);
//   });


app.get('/', (req, res) => {
  res.send(testDevice);


});

server.listen(8080, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`Example app listening at http://${host}:${port}`);
});