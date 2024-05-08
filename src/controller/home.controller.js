const connection = require("../config/database")
const { getUsers } = require("../service/crud.service")

// route: /
const getHomePage = async (_, res) => {
    const users = await getUsers();
    res.render('home.ejs', { users })
}

module.exports = {
    getHomePage,
}