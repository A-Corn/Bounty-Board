const mongoose = require('mongoose');

const InterviewSchema = new mongoose.Schema({ //creating a model for the interview table
    interviewerName : {
        type: String
    },
    interviewerTitle : {
        type: String
    },
    interviewDate : {
        type: String
    },
    email : {
        type: String
    },
    phoneNumber : {
        type: String
    }
}, {timestamps: true})

module.exports = mongoose.model('Interview', InterviewSchema)