// this page is how to connect database using JS cose
const Sequelize = require('sequelize'); //requires the npm package 
require('dotenv').config(); //hides sensitive data (username, password, etc.)

let sequelize;
// if statement: to deploy your database to internet
if(process.env.JAWSDB_URL){ 
    sequelize = new Sequelize(process.env.JAWSDB_URL);
//else statement: the normal sequelize call to connect to my database in my computer
} else {
    sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            host: 'localhost',
            dialect: 'mysql',
            port: 3306 // where database lives in my computer
        }
    )
};

module.exports = sequelize;

