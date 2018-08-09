const Project = require("../models/project");

module.exports = {

    getProjects: async (req, res) => {
        try {
            const params = {
                categories: { $in: req.body.tags, },
            }
            const foundProjects = await Project.find({params});
            res.json(foundProjects);
        } catch (err) {
            console.log(err);
        }
    },
}