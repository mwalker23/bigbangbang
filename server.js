const express = require('express');
const controllers = require('./controllers');
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');
//NEED THIS TO DEPLOY TO THE SERVER SO IT BINDS TO NEAREST PORT (process.env.PORT)
const PORT = process.env.PORT || 3001;
const app = express();

//to access the public folder = front-end
app.use(express.static('public'));
// to use handlebars
const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set("view engine", "handlebars");


//NEEDED TO DO POST REQUESTS
app.use(express.json());
app.use(express.urlencoded({extended: true }));
// const models = require(".models");
app.use(controllers); // requires the folder

// connect to the database and then run the server 
sequelize.sync({force:false}).then(() =>{
    app.listen(PORT, () => {
        console.log("Dad where are you at  right now?");
    })
});

