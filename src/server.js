require('dotenv').config();
const express = require('express');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./router/web');

const app = express()
const port = 8080

// config template engine
configViewEngine(app, __dirname);

// init routes
app.use('/', webRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})