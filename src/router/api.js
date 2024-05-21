const express = require('express');
const UserController = require('../controller/user.controller');

let router = express.Router();

router.get('/users', UserController.getUsers);
router.get('/users/:id', UserController.getUserDetail);
router.post('/users/create', UserController.addUser);
router.put('/users/update', UserController.updateUser);
router.delete('/users/delete/:id', UserController.deleteUser);
router.post('/login', UserController.userLogin);

module.exports = router;