const express = require('express');
const router = express.Router();
const controller = require('../controller/category');
const auth = require("../modules/middlewares");


router.get('/categories', controller.getCategories);

router.post('/categories', auth, controller.createCategory);

module.exports = router;