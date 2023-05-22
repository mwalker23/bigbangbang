const express = require('express');
const controllers = require('./controllers');
const sequelize = require('./config/connection');
const PORT = 3001;
const app = express();
// const models = require(".models");
app.use(controllers); // requires the folder

// connect to the database and then run the server 
sequelize.sync({force:false}).then(() =>{
    app.listen(PORT, () => {
        console.log("Dad where are you at  right now?");
    })
})

