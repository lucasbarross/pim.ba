const Category = require("../models/category");
const mongoose = require('mongoose');


module.exports = {

    getCategories: async (req, res) => {
        try {
            const foundCategories = await Category.find();
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