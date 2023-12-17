const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/submitFormData', (req, res) => {
  const formData = req.body;

  // Append the form data to an existing CSV file
  const csvData = `${formData.name},${formData.email}\n`;
  fs.appendFile('data.csv', csvData, (err) => {
    if (err) throw err;
    console.log('Data appended to data.csv');
  });

  res.send('Form data submitted successfully!');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
