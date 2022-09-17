const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },

    email: {
        type: String,
        required: [true, 'Email is required'],
        //use regex to validate email address
        validate: {
            validator: function(val){
                return /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val);
            },
            message: 'Please enter a valid email address'
        }
    },

    password: {
        type: String
    }
}, {timestamps: true})

UserSchema.virtual('confirmPassword')
    .get(()=> this._confirmPassword)
    .set((value)=> (this._confirmPassword = value));

UserSchema.pre('validate', function(next){
    if (this.password !== this.confirmPassword){
        this.invalidate('confirmPassword', 'Passwords must match');
    }
    next();
});

UserSchema.pre('validate', function(next){
    bcrypt.hash(this.password, 10)
    .then((hash)=> {
        this.password = hash;
        next();
    })
    .catch((err)=> {
        console.log(err)
    });
});

module.exports = mongoose.model('User', UserSchema);