const express = require('express');
const router = express.Router();
const controller = require('../controller/user');
const auth = require("../modules/middlewares");

router.get('/me', auth, controller.getUser);

module.exports = router;