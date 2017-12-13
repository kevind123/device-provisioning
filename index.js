const express = require('express');
const http require('http');
const BigQuery = require('@google-cloud/bigquery');


const app = express();
const server = http.createServer(app);

// Your Google Cloud Platform project ID
const projectId = 'device-provisioning';


// Creates a client
const bigquery = new BigQuery({
  projectId: projectId,
});

// Creates the new dataset
// bigquery
//   .createDataset(datasetName)
//   .then(results => {
//     const dataset = results[0];

//     console.log(`Dataset ${dataset.id} created.`);
//   })
//   .catch(err => {
//     console.error('ERROR:', err);
//   });


app.get('/', (req, res) => {
  res.send('Hello World!');
});

server.listen(8080, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`Example app listening at http://${host}:${port}`);
});