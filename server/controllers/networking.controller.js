const NetworkContact = require('../models/networking.model');
require('dotenv');

module.exports = {

    addNetworkContact: async (req, res) => {
        let newContact = new NetworkContact(req.body)
        try{
            newContact = await newContact.save();
            res.json(newContact);
            return;
        } catch(err) {
            res.status(400).json(err);
            console.log("Couldn't add network contact", err);
        }
    },

    findAllContacts: async (req, res) => {
        try{
            const allContacts = await NetworkContact.find({});;
            return res.json(allContacts);
        } catch(err) {
            console.log("Couldn't find the network contacts", err);
        }
    },

    findOneContact: async (req, res) => {
        try{
            const oneContact = await NetworkContact.findOne({_id: req.params.id});
            return res.json(oneContact);
        } catch(err) {
            console.log("Couldn't find network contact", err);
        }
    },

    updateContact: async (req, res) => {
        try{
            const updatedContact = await NetworkContact.findOneAndUpdate({_id: req.params.id}, req.body, {
                new:true,
                runValidators:true
            });
            return res.json(updatedContact);
        } catch(err) {
            console.log("Couldn't update network contact", err);
        }
    },

    deleteContact: async (req, res) => {
        try{
            const deletedContact = await NetworkContact.deleteOne({_id: req.params.id});
            return res.json(deletedContact);
        } catch(err) {
            console.log("Couldn't delete network contact", err)
        }
    }
}