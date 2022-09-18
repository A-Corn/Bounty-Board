const mongoose = require('mongoose');

const NetworkingSchema = new mongoose.Schema({
    contactName: {
        type: String,
        required: [true, "Contact name is required"]
    },
    contactTitle: {
        type: String
    },
    event:{
        type: String
    },
    companyName:{
        type:String
    },
    contactInfo: {
        type:String
    }
})

module.exports = mongoose.model('Networking', NetworkingSchema)