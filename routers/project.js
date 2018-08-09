const express = require('express');
const router = express.Router();
const controller = require('../controller/project');

router.post('/projects', controller.getProjects);


module.exports = router;