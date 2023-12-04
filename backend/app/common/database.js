const mysql = require('mysql2');

let connection = null;
function isDBConnect() {
    return connection != null ? true : false;
}

function initDBConnect() {
    // create the connection to database
    connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        database: provess.env.DB_NAME,
        password: process.env.DB_ROOT_PASSWORD
    });
}

function getDBConnect() {
    return connection;
}

module.exports = {isDBConnect, initDBConnect, getDBConnect}