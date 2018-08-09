const Category = require("../models/category");

module.exports = {

    getCategories: async (req, res) => {
        try {
            const foundCategories = await Project.find();
            return res.json(foundCategories);
        } catch (err) {
            console.log(err);
        }
    },

    createCategory: async (req, res) => {
        try {
            const data = {
                name: req.body.name
            }
            const createdCategory = await Category.create(data);
            return res.json(createdCategory);
        } catch (err) {
            console.log(err)
        }
    },


}