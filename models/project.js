const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
    name: String,
    description: String,
    type: Number,
    tasks: [{ 
        _id: mongoose.Schema.Types.ObjectId,
        text: String,
     }],
    categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
    links: [ String ],
    author: { type: mongoose.Schema.Types.ObjectId , ref: 'User'},
})

module.exports = mongoose.model('Project', projectSchema);