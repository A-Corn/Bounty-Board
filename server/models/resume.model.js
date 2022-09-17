const mongoose = require('mongoose');

const ResumeSubmissionSchema = new mongoose.Schema({
    company: {
        type: String
    },

    position: {
        type: String
    },
    contact: {
        type: String
    },

    date: {
        type: String
    },

    nextStep: {
        type: String
    },
}, {timestamps: true})

module.exports = mongoose.model('ResumeSubmission', ResumeSubmissionSchema);