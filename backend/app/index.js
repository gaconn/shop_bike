const express = require("express");
const app = express();
require('dotenv').config();
const routes = require('./routes/index');
//start
routes(app);

app.listen(process.env.APP_PORT, ()=> {
    console.log("Server started on port ", process.env.APP_PORT);
})