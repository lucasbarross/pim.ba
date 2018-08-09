const UserProject = require("../models/userProject");

module.exports = {

    getUserProjects: async (req, res) => {
        try {
            const params = {
                _idUser: mongoose.Types.Schema.ObjectId(req.loggedUser._id),
            }
            const foundProjects = await UserProject.find({params});
            return res.json(foundProjects);
        } catch (err) {
            console.log(err);
        }
    },

    getProjects: async (req, res) => {
        try {
            const params = {
                _idProject: mongoose.Types.Schema.ObjectId(req.params._idProject),
                done: true,
            }
            const foundProjects = await UserProject.find({params});
            return res.json(foundProjects);
        } catch (err) {
            console.log(err);
        }
    },

    getUserProject: async (req, res) => {
        try {
            const foundProject = await UserProject.findById(req.params._idUserProject);
            return res.json(foundProject);
        } catch (err) {
            console.log(err);
        }
    },

    createUserProject: async (req, res) => {
        try {
            const data = {
                _idUser: req.loggedUser._id,
                _idProject: req.params._idProject,
                doneTasks: [],
                done: false,
                text: null,
                projectUrl: null,
            }
            const createdUserProject = await UserProject.create(data);
            return res.json(createdUserProject);
        } catch (err) {
            console.log(err);
        }
    },

    submitUserProject: async (req, res) => {        
        try {
            const data = {
                done: true,
                text: req.body.text,
                projectUrl: req.body.url,
            }
            const updatedUserProject = await UserProject.findByIdAndUpdate(req.params._idUserProject, data);
            return res.json(data);
        } catch (err) {
            console.log(err);
        }
    },

    updateTasks: async (req, res) => {
        try {
            const data = {
                doneTasks: req.body.doneTasks,
            }
            const updatedUserProject = await UserProject.findByIdAndUpdate(req.params._idUserProject, data);
            return res.json(data);
        } catch (err) {
            console.log(err);
        }
    }
}