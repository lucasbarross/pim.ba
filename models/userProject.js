const mongoose = require('mongoose');

const userProjectSchema = mongoose.Schema({
    _idUser: { type: mongoose.Schema.Types.ObjectId, ref: 'User'} ,
    _idProject: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
    doneTasks: [ mongoose.Schema.Types.ObjectId ],
    done: Boolean,
    text: String,
    projectUrl: String,
});

module.exports = mongoose.model('UserProject', userProjectSchema);