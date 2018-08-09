const mongoose = require('mongoose');

const userProjectSchema = mongoose.Schema({
    _idProject: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
    text: String,
    projectUrl: String,
})

module.exports = mongoose.model('UserProject', submissionSchema);