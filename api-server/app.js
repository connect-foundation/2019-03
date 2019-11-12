const express = require('express');

const app = express();

app.use('/', (req, res) => {
  res.send('hello express');
});
app.listen(4000, () => {
  console.log('connected on port 4000');
});
