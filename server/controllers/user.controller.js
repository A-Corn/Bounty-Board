const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv');

module.exports = {
    registerUser: async (req, res) => {
        //make sure email is not already registered
        try{
            const verifyUser = await User.findOne({email: req.body.email});
            if (verifyUser){
                res.status(400).json({errors: {
                    message: 'Email already exists!'
                }
            });
                return;
            }
        }catch(err){
            res.status(400).json(err)
        }

        //new code block, create new user if one doesn't exist
        let newUser = new User(req.body)
        try{
            const newUserObject = await newUser.save();
            res.json(newUserObject);
        }catch(error){
            res.status(400).json(error)
        }
    },

    login: async (req, res) => {
        if(!req.body.email){
            res.status(400).json({error: 'No email provided, please provide a valid email'});
            return;
        }
        let userQuery;
        try{
            userQuery = await User.findOne({email: req.body.email})
            if(userQuery === null){
                res.status(400).json({error: 'Email not found here'});
                return;
            }
            const correctPassword = bcrypt.compare(req.body.password, userQuery.password);
            if(!correctPassword){
                res.status(400).json({error: 'Email and password do not match'});
                return;
            }
            //send user jwt if user exists and password matches
            const userToken = jwt.sign({_id: userQuery._id}, process.env.SECRET_KEY);
            res.cookie('userToken', userToken, process.env.SECRET_KEY, {
                httpOnly: true,
                expires: new Date(Date.now() + 9000000)
            }).json({msg: 'Successful Login'})
        }catch(error){
            res.status(400).json({error: 'Email not found'})
        }
    },

    logout: (req, res) => {
        res.clearCookie('userToken');
        res.json({msg: 'Logout Successful'});
    },

    getUser: (req, res) => {
        const user = jwt.verify(req.cookie.userToken, process.env.SECRET_KEY);
        User.findOne({_id: user._id})
        .then((user)=> {
            res.json(user)
        })
        .catch((error)=> {
            console.log(error)
        })
    }

}
