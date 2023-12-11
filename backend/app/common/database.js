const mysql = require('mysql2');

let connection = null;
const DB_CONNECTION_POOL_WAIT_FOR_CONNECTIONS = true;
const DB_CONNECTION_POOL_LIMIT = 10;
const DB_CONNECTION_POOL_MAX_IDLE = 10;
const DB_CONNECTION_POOL_IDLE_TIMEOUT = 60000;
const DB_CONNECTION_POOL_QUEUE_LIMIT = 0;
const DB_CONNECTION_POOL_IS_ENABLE_KEEP_ALIVE = true;
const DB_CONNECTION_POOL_KEEP_ALIVE_INITIAL_DELAY = 0;
function isDBConnect() {
    return connection != null ? true : false;
}

function initDBConnect() {
    // create the connection to database
    try {
        const pool = mysql.createPool({
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            user: process.env.DB_USER,
            database: process.env.DB_NAME,
            password: process.env.DB_ROOT_PASSWORD,
            waitForConnections: DB_CONNECTION_POOL_WAIT_FOR_CONNECTIONS,
            connectionLimit: DB_CONNECTION_POOL_LIMIT,
            maxIdle: DB_CONNECTION_POOL_MAX_IDLE,
            idleTimeout: DB_CONNECTION_POOL_IDLE_TIMEOUT,
            queueLimit: DB_CONNECTION_POOL_QUEUE_LIMIT,
            enableKeepAlive: DB_CONNECTION_POOL_IS_ENABLE_KEEP_ALIVE,
            keepAliveInitialDelay: DB_CONNECTION_POOL_KEEP_ALIVE_INITIAL_DELAY
        });
        connection = pool.promise();
    } catch (error) {
        console.log("DB error: ", error);
    }
}

function getDBConnect() {
    if (!isDBConnect()) {
        initDBConnect();
        return connection;
    }
    return connection;
}

module.exports = {isDBConnect, initDBConnect, getDBConnect}