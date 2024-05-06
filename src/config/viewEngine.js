const path = require('path');
const express = require('express')

const viewEngine = (app, dirname = __dirname) => {
    if (!app) return;
    app.set('views', path.join(dirname, 'views'))
    app.set('view engine', 'ejs')

    // config static files
    app.use(express.static(path.join(dirname, 'public')))
}

module.exports = viewEngine;