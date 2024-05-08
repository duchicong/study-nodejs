const express = require('express');
const {
    getHomePage,
} = require('../controller/home.controller');
const {
    addUser,
    getAddUser
} = require('../controller/user.controller');

const router = express.Router();

router.get('/', getHomePage)
router.get('/add-user', getAddUser)
router.post('/add-user', addUser)

module.exports = router;