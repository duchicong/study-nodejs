require('dotenv').config();
const express = require('express');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./router/web');
const env = require('./config/env');
const morgan = require('morgan');
const apisRoutes = require('./router/api');
const connectDB = require('./config/database')
const cors = require('cors');

const app = express()
const port = env.PORT;

app.use(morgan('combined'))

// config cors
app.use(cors())

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
app.use('/api/v1/', apisRoutes);

// handle not found
app.use((req, res) => {
  res.render('404.ejs')
})

connectDB();
// app.use(express.urlencoded({ extended: true }))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})