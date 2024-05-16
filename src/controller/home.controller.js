const connection = require("../config/database")
const { getUsers } = require("../service/crud.service")
const db = require('../model');

// route: /
const getHomePage = async (_, res) => {
    try {
        const users = await db.User.findAll();
        console.log('users ', users)
        res.render('home.ejs', { users })
    } catch (err) {
        console.log('Error >>> ', err)
    }
}

module.exports = {
    getHomePage,
}