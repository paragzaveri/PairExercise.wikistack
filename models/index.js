const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {
logging: false
});


const User = db.define('user', {
  name:{
    type: Sequelize.STRING,
    allowNull: false
  },
  email:{
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  }
});

const Page = db.define('page', {
  title:{
    type: Sequelize.STRING,
    allowNull: false
  },
  slug:{
    required: false,
    type: Sequelize.STRING,
    allowNull: true
  },
  content:{
    type: Sequelize.TEXT,
    allowNull: false
  },
  status:{
    type: Sequelize.ENUM('open', 'closed')
  }
});
// async function sync()  {
//   await db.sync({force: true});
// }

// sync();
module.exports = {db, Page, User};
