require('dotenv').config();
const express = require('express');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./router/web');
const connection = require('./config/database');
const env = require('./config/env');

const app = express()
const port = env.PORT;

// config template engine
configViewEngine(app, __dirname);

/**
 * @description config request.body data 
 * @note alway before init routes
*/
app.use(express.json()) // for json
/**
 * parsing the URL-encoded data with the querystring library (when false) or the qs library (when true).
 * The “extended” syntax allows for rich objects and arrays to be encoded into the URL-encoded format,
 * allowing for a JSON-like experience with URL-encoded.
 * */ 
app.use(express.urlencoded({ extended: true }))

// init routes
app.use('/', webRoutes);

// app.use(express.urlencoded({ extended: true }))

// A simple SELECT query
// connection.query(
//   'SELECT * FROM Users',
//   function (err, results, fields) {
//     console.log(results); // results contains rows returned by server
//     console.log(fields); // fields contains extra meta data about results, if available
//   }
// );

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})