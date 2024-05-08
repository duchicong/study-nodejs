const connection = require('../config/database');

/**
 * @method GET
 * @description get page add user
*/
const getAddUser = (_, res) => {
    res.render('addUser.ejs')
}

/**
 * @method POST
 * @description add user
*/
const addUser = async (req, res) => {
    const { name, email, city } = req.body;

    try {
        const [rows] = await connection.query(
            `INSERT INTO Users (email, name, city) VALUES(?, ?, ?)`,
            [email, name, city],
        )
        if (!rows) return res.send('Error add user')
        return res.send('Created user successfully!')
    } catch (err) {
        return res.send('Error add user')
    }
}

module.exports = {
    getAddUser,
    addUser
}
