const express = require('express');
const routes = require('./routes');
const PORT = 3001;
const app = express();

app.use(routes); // requires th folder

app.listen(PORT, () => {
    console.log("Dad where are you at  right now?");
})