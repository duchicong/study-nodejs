const express = require('express');
const UserController = require('../controller/user.controller');
const AllCodeController = require('../controller/allCode.controller');

let router = express.Router();

router.get('/users', UserController.getUsers);
router.get('/users/:id', UserController.getUserDetail);
router.post('/users/create', UserController.addUser);
router.put('/users/update', UserController.updateUser);
router.delete('/users/delete/:id', UserController.deleteUser);
router.post('/login', UserController.userLogin);

router.get('/codes', AllCodeController.getCodes);

module.exports = router;