const express = require("express");
const app = express();
require('dotenv').config();
const routes = require('./routes/index');
const { initDBConnect } = require("./common/database");

//start

routes(app);

app.listen(process.env.APP_PORT, ()=> {
    console.log("Server started on port ", process.env.APP_PORT);
})