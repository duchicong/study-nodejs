const connection = require('../config/database');
const { getUserById, updateUserById, deleteUserById } = require("../service/crud.service")

const getUsers = async (req, res) => {
    const [rows] = await connection.execute('SELECT * from Users');
    return res.status(200).json({
        message: 'ok',
        data: rows
    });
}

/**
 * @method GET
 * @description get page add user
*/
const getAddUser = (_, res) => {
    res.render('addUser.ejs')
}

const getDetailUser = async (req, res) => {
    const { id } = req.params;
    const user = await getUserById(id);
    res.render('detailUser.ejs', { user })
}

/**
 * @method GET
 * @description get page add user
*/
const getUpdateUser = async (req, res) => {
    const { id } = req.params;
    const user = await getUserById(id);

    console.log('root path ', );
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

    let fileName = '';
    if (req.file?.filename) {
        fileName = req.file?.filename;
    }

    try {
        const [rows] = await connection.query(
            `INSERT INTO Users (email, name, city, avatar) VALUES(?, ?, ?, ?)`,
            [email, name, city, fileName],
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

    let avatar = '';
    if (req.file?.filename) {
        avatar = req.file?.filename;
    }

    try {
        const [result] = await updateUserById(id, { name, email, city, avatar })
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
    deleteUser,
    getDetailUser,
    getUsers
}
