const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser')
const app = express();
const html = require('./views/main');
const {db} = require('./models/index');



const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/user');

const models = require('./models');


app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/wiki', wikiRouter);
app.use('/user/' userRouter);

app.get ('/', (req, res) => {
  res.send(html());
})

db.authenticate().
then(() => {
  console.log('connected to the database');
})
const PORT = 1337;

const init = async () => {
  // await models.User.sync()
  // await models.Page.sync()
  console.log('syncing database');
 await models.db.sync({force: true})

  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
}

// models.db.sync({force: true})


init();







