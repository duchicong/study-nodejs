const mysql = require('mysql2/promise');
const env = require('./env');

// Create the connection to database
// const connection = mysql.createConnection({
//     host: env.DB_HOST,
//     user: env.DB_USER,
//     password: env.DB_PASSWORD,
//     port: env.DB_PORT,
//     database: env.DB_NAME,
// });

// connection database with pooling
const connection = mysql.createPool({
    host: env.DB_HOST,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    port: env.DB_PORT,
    database: env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = connection;
