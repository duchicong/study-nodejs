const connection = require('../config/database');
const { getUserById, updateUserById, deleteUserById } = require("../service/crud.service")

/**
 * @method GET
 * @description get page add user
*/
const getAddUser = (_, res) => {
    res.render('addUser.ejs')
}

/**
 * @method GET
 * @description get page add user
*/
const getUpdateUser = async (req, res) => {
    const { id } = req.params;
    const user = await getUserById(id);
    res.render('editUser.ejs', { user })
}

/**
 * @method GET
 * @description get page add user
*/
const getDeleteUser = async (req, res) => {
    const { id } = req.params;
    const user = await getUserById(id);
    res.render('deleteUser.ejs', { user })
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

/**
 * @method POST
 * @description update user
*/
const updateUser = async (req, res) => {
    const { id, name, email, city } = req.body;

    try {
        const [result] = await updateUserById(id, { name, email, city })
        if (!result.affectedRows) return res.send('Error add user')
        return res.redirect('/')
    } catch (err) {
        return res.send('Error add user')
    }
}

/**
 * @method POST
 * @description delete user
*/
const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await deleteUserById(id);
        if (!result.affectedRows) return res.send('Error add user')
        return res.redirect('/')
    } catch (err) {
        return res.send('Error add user')
    }
}

module.exports = {
    getAddUser,
    addUser,
    getUpdateUser,
    updateUser,
    getDeleteUser,
    deleteUser
}
