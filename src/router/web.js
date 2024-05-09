const express = require('express');
const {
    getHomePage,
} = require('../controller/home.controller');
const {
    addUser,
    getAddUser,
    getUpdateUser,
    updateUser,
    getDeleteUser,
    deleteUser
} = require('../controller/user.controller');

const router = express.Router();

router.get('/', getHomePage)
router.get('/add-user', getAddUser)
router.post('/add-user', addUser)
router.get('/update-user/:id', getUpdateUser)
router.post('/update-user', updateUser)
router.get('/delete-user/:id', getDeleteUser)
router.post('/delete-user/:id', deleteUser)

module.exports = router;