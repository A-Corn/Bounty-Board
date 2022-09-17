const Submission = require('../models/resume.model');
require('dotenv');
const jwt = require('jsonwebtoken');

module.exports = {

    findAll: async (req, res) => {
        try{
            const allSubmissions = await Submission.find({});
            return res.json(allSubmissions);
        }catch(err){
            console.log('Could not find all', err)
        }
    },

    findOne: async (req, res) => {
        try{
            const oneSubmission = await Submission.findOne({_id: req.params.id});
            return res.json(oneSubmission);
        }catch(err){
            console.log('Could not find one', err)
        }

    },

    updateSubmission: async (req, res) => {
        try{
            const updatedSubmission = await Submission.findByIdAndUpdate({_id: req.params.id}, req.body, {
                new: true,
                runValidators: true
            });
            return res.json(updatedSubmission)
        }catch(err){
            console.log('Could not update submission', err)
        }
    },

    createSubmission: async (req, res) => {
        let newSubmission = new Submission(req.body)
        try{
            newSubmission = await newSubmission.save();
            res.json(newSubmission);
            return;
        }catch(err){
            res.status(401).json(err);
            console.log('Could not create submission', err);
            return;
        }
    },

    deleteSubmission: async (req, res) =>{
        try{
            const deletedSubmission = await Submission.deleteOne({_id: req.params.id});
            return res.json(deletedSubmission);
        }catch(err){
            console.log('Could not delete', err)
        }
    }


}


