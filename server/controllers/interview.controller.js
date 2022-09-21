const Interview = require('../models/interview.model')
require ('dotenv');

module.exports = {

    addInterview: async (req, res) => { //create a new interview
        let newInterview = new Interview(req.body) //take in the inputs from the form
        try{
            newInterview = await newInterview.save(); //and save them into the database
            res.json(newInterview);
            return;
        } catch(err) {
            res.status(400).json(err);
            console.log("Couldn't add interview", err);
        }
    },

    findAllInterviews: async (req, res) => { //read all interviews
        try{
            const allInterviews = await Interview.find({}); //add all interviews from the database into a variable
            return res.json(allInterviews); //then return it
        } catch(err) {
            console.log("Couldn't find the interviews", err) //print a message and error if something goes wrong
        }
    },

    findOneInterview: async (req, res) => { //read one interview
        try{
            const oneInterview = await Interview.findOne({_id: req.params.id}); //search the database for an interview by id
            return res.json(oneInterview); //then return it
        } catch(err) {
            console.log("Couldn't find interview", err); //print an error message if something goes wrong
        }
    },

    updateInterview: async (req, res) => { //update an interview
        try{
            const updatedInterview = await Interview.findOneAndUpdate({_id: req.params.id}, req.body, { //find the interview in the DB and use the form data to update it
                new:true,
                runValidators:true
            });
            return res.json(updatedInterview); //then return it
        } catch(err) {
            console.log("Couldn't update interview", err); //print an error message if something goes wrong
        }
    },

    deleteInterview: async (req, res) => { //delete an interview
        try{
            const deletedInterview = await Interview.deleteOne({_id: req.params.id}); //search the database for an interview by id and delete it
            return res.json(deletedInterview); 
        } catch(err) {
            console.log("Couldn't delete interview", err) //print an error message if something goes wrong
        }
    }
}