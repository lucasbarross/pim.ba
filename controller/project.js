const Project = require("../models/project");
const mongoose = require('mongoose');


module.exports = {

    getProjects: async (req, res) => {
        try {
            let params = {}
            if(req.query.tags) {
                params = {
                    categories: { $all: req.query.tags },
                };
            }

            console.log(req.query.tags)
            console.log(params)
            const foundProjects = await Project.find(params);
            return res.json(foundProjects);
        } catch (err) {
            console.log(err);
        }
    },

    getProject: async (req, res) => {
        try {
            console.log(req.params)
            const foundProject = await Project.findById(req.params._idProject);
            return res.json(foundProject);
        } catch (err) {
            console.log(err);
        }
    },

    editProject: async(req, res) => {
        try {
            const data = {
                name: req.body.name,
                description: req.body.description,
                type: req.body.type,
                tasks: req.body.tasks.map(task => ({ text: task, _id: mongoose.Types.ObjectId() })),
                categories: req.body.categories ? req.body.categories : [],
                links: req.body.links ? req.body.links : [],
            }
            const updatedProject = await Project.findByIdAndUpdate(req.params._idProject, data);
        } catch(err) {
            console.log(err);
        }
    },

    removeProject: async(req, res) => {
        try {
            const foundProject = await Project.findById(req.params._idProject);
            if(foundProject.author == req.authData.user._id) {
                Project.findByIdAndRemove(req.params._idProject);
            } else {
                throw new Error("Tentando remover projeto criado por outro usuario, seu Saufado");
            }
        } catch(err) {
            console.log(err);
        }
    },

    searchProjects: async (req, res) => {
        try {
            const params = {
                name: { $regex: req.query.q }
            };
            const foundProjects = await Project.find(params);
            return res.json(foundProjects);
        } catch (err) {
            console.log(err);
        }
    },

    createProject: async (req, res) => {
        try {
            console.log(req.body);

            const data = {
                name: req.body.name,
                description: req.body.description,
                type: req.body.type,
                tasks: req.body.tasks.map(task => ({ text: task, _id: mongoose.Types.ObjectId() })),
                author: req.authData.user._id,
                categories: req.body.categories ? req.body.categories : [],
                links: req.body.links ? req.body.links : [],
            };

            console.log(data)
            const createdProject = await Project.create(data);
            return res.json(createdProject);
        } catch (err) {
            console.log(err)
        }
    },


}