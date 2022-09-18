const mongoose = require('mongoose');

const InterviewSchema = new mongoose.Schema({ //creating a model for the interview table
    interviewerName : {
        type: String
    },
    interviewerTitle : {
        type: String
    },
    companyName : {
        type: String,
        required: [true, "Company name is required"]
    },
    interviewDate : {
        type: String,
        required: [true, "Interview date is required"]
    },
    email : {
        type: String
    },
    phoneNumber : {
        type: String
    }
}, {timestamps: true})

module.exports = mongoose.model('Interview', InterviewSchema)