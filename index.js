const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser')
const app = express();
const html = require('./views/main');


app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({extended: true}));

app.get ('/', (req, res) => {
  res.send(html());
})


const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
})


