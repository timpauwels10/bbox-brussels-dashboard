const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use('/data', express.static(path.join(__dirname, 'data')));

app.get('/api/properties', (req, res) => {
  res.sendFile('properties.json', { root: __dirname });
});

app.get('/api/download/excel', (req, res) => {
  res.download(path.join(__dirname, 'data', 'Bbox_Analyse_Bruxelles.xlsx'), 'Bbox_Analyse_Bruxelles.xlsx');
});

app.get('*', (req, res) => {
  res.sendFile('public/index.html', { root: __dirname });
});

app.listen(PORT, () => {
  console.log(`Bbox Dashboard running on port ${PORT}`);
});
