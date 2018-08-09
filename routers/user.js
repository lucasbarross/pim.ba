const express = require('express');
const router = express.Router();
const controller = require('../controller/user');
const auth = require("../modules/middlewares");

router.get('/me', auth, controller.getUser);

router.post('/login', controller.loginUser);

router.post('/register', controller.registerUser);

module.exports = router;