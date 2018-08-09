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

    createProject: async (req, res) => {
        try {
            const data = {
                name: req.body.name,
                description: req.body.description,
                type: req.body.type,
                tasks: req.body.tasks.map(task => ({ ...task, _id: mongoose.Types.Schema.ObjectId() })),
                author: req.loggedUser,
                categories: req.body.categories,
                links: req.body.links,
            }
            const createdProjet = await Project.create(data);
            return res.json(createdProjet);
        } catch (err) {
            console.log(err)
        }
    },


}