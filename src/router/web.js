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
    deleteUser,
    getDetailUser
} = require('../controller/user.controller');
const { uploadAvatar } = require('../service/upload.service')

const router = express.Router();

router.get('/', getHomePage)
router.get('/add-user', getAddUser)
router.post('/add-user', uploadAvatar.single('avatar'), addUser)
router.get('/update-user/:id', getUpdateUser)
router.post('/update-user', uploadAvatar.single('avatar'), updateUser)
router.get('/delete-user/:id', getDeleteUser)
router.get('/user/:id', getDetailUser)
router.post('/delete-user/:id', deleteUser)

module.exports = router;