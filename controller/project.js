const Project = require("../models/project");

module.exports = {

    getProjects: async (req, res) => {
        try {
            const params = {
                categories: { $in: mongoose.Types.Schema.ObjectId(req.body.tags), },
            }
            const foundProjects = await Project.find({params});
            return res.json(foundProjects);
        } catch (err) {
            console.log(err);
        }
    },

    getProject: async (req, res) => {
        try {
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
                tasks: req.body.tasks.map(task => ({ ...task, _id: mongoose.Types.Schema.ObjectId() })),
                categories: req.body.categories,
                links: req.body.links,
            }
            const updatedProject = await Project.findByIdAndUpdate(req.params._idProject, data);
        } catch(err) {
            console.log(err);
        }
    },

    removeProject: async(req, res) => {
        try {
            const foundProject = await Project.findById(req.params._idProject);
            if(foundProject.author == req.loggedUser._id) {
                Project.findByIdAndRemove(req.params._idProject);
            } else {
                throw new Error("Tentando remover projeto criado por outro usuario, seu Saufado");
            }
        } catch(err) {
            console.log(err);
        }
    },

    createProject: async (req, res) => {
        try {
            const data = {
                name: req.body.name,
                description: req.body.description,
                type: req.body.type,
                tasks: req.body.tasks.map(task => ({ ...task, _id: mongoose.Types.Schema.ObjectId() })),
                author: req.loggedUser._id,
                categories: req.body.categories,
                links: req.body.links,
            }
            const createdProject = await Project.create(data);
            return res.json(createdProject);
        } catch (err) {
            console.log(err)
        }
    },


}