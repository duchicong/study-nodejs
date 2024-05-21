const connection = require('../config/database');
// const { getUserById, updateUserById, deleteUserById } = require("../service/crud.service")
const { createNewUser, getAllUsers, getUserById, updateUserData, deleteUserById, handleUserLogin } = require('../service/user.service');
const { paginate } = require('../utils/paginate');

const getUsers = async (req, res) => {
    const data = await getAllUsers();
    // Send the paginated products and total pages as the API response
    return res.status(200).json({
        message: 'ok',
        data
    });
}

const getUserDetail = async (req, res) => {
    try {
        const data = await getUserById(req.params?.id)

        return res.status(200).json({
            message: 'ok',
            data
        })
    } catch (err) {
        console.log('loi ', err)
        return res.status(404).json(err);
    }
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
    try {
        const result = await createNewUser(req.body);
        return res.status(200).json(result);
    } catch (err) {
        return res.status(400).json({ status_code: 'create_user_failed' });
    }
}

/**
 * @method PUT
 * @description update user
*/
const updateUser = async (req, res) => {
    const data = req.body;

    let avatar = '';
    if (req.file?.filename) {
        avatar = req.file?.filename;
    }

    try {
        const result = await updateUserData(data);
        if (!result) throw new Error('update_failed')
        return res.status(200).json({ message: 'ok' })
    } catch (err) {
        return res.status(400).json({ ...err })
    }
}

/**
 * @method DELETE
 * @description delete user
*/
const deleteUser = async (req, res) => {
    const { id } = req.params;
    const role = req.body.role;

    try {
        const result = await deleteUserById(id, role);
        res.status(200).json({ message: 'ok', data: result })
    } catch (err) {
        return res.send('Error delete user')
    }
}

/**
 * @method POST
 * @description authenticate
*/
const userLogin = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({
            message: 'Form data not has email and password',
            error_code: 'invalid'
        })
    }
    const data = await handleUserLogin(email, password)
    res.status(200).json({ data })
}

module.exports = {
    getAddUser,
    addUser,
    getUpdateUser,
    updateUser,
    getDeleteUser,
    deleteUser,
    getDetailUser,
    getUsers,
    getUserDetail,
    userLogin
}
