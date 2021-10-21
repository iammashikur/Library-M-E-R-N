const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    name : {
        type: String,
        required: true,
        min: 6,
        max:255,
        unique: false,
    },
    email : {
        type: String,
        required: true,
        min: 6,
        max:255
    },
    phone : {
        type: String,
        required: true,
        min: 10,
        max:255
    },
    password : {
        type: String,
        required: true,
        min: 6,
        max:255,
        unique: false,
    },
    address : {
        type: String,
        default: null,
        unique: false,
    },
    nid : {
        type: Number,
        default: null,
        unique: true,
    },
    date : {
        type: Date,
        default: Date.now,
        unique: false,
    },
    user_type : {
        type: Number,
        default: 1
    }

});

module.exports = mongoose.model('User', userSchema);