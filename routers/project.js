const express = require('express');
const router = express.Router();
const controller = require('../controller/project');

const auth = require("../modules/middlewares");

router.get('/projects/search', controller.searchProjects);

router.get('/projects', controller.getProjects);

router.get('/projects/:_idProject', controller.getProject);

router.put('/projects/:_idProject', auth, controller.editProject);

router.delete('/projects/:_idProject', auth, controller.removeProject);

router.post('/projects', auth,controller.createProject);

module.exports = router;