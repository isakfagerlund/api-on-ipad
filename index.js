const express = require('express')
const app = express()

app.get('/', (req, res) => {
  return res.send('This is with live reloading');
});

app.listen("1234", () =>
  console.log(`Example app listening on port 1234!`),
);
