const express = require('express');
const controller = require('../controller/userProject');


const router = express.Router();

router.get('/userProjects', controller.getUserProjects);

router.get('/projects/:_idProject/userProjects', controller.getProjects);

router.get('/userProjects/:_idUserProject', controller.getUserProject);

router.post('/userProjects', controller.createUserProject);

router.put('/userProjects/:_idUserProject/submit', controller.submitUserProject);

router.put('/userProjects/:_idUserProject/tasks', controller.updateTasks);

module.exports = router;