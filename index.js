const express = require('express');

const app = express();
const port = 3000;

app.get('/greeting/:name', (req, res) => {
  res.json({id: 1, content: req.param('name', 'World')});
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});