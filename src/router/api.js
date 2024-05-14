const express = require('express');
const UserController = require('../controller/user.controller');

let router = express.Router();

router.get('/users', UserController.getUsers);

module.exports = router;