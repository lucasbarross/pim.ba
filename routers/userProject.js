const express = require('express');
const controller = require('../controller/userProject');


const router = express.Router();

router.get('/userProjects', controller.getUserProjects);

router.get('/projects/:_idProject/userProjects/all', controller.getProjects);

router.get('/projects/:_idProject/userProjects/user', controller.getUserProject);

router.post('/userProjects', controller.createUserProject);

router.put('/userProjects/:_idUserProject/submit', controller.submitUserProject);

router.put('/userProjects/:_idUserProject/tasks', controller.updateTasks);

module.exports = router;