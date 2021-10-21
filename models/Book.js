const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({

    name : {
        type: String,
        required: true,
        min: 3,
        max:255,
        unique: false,
    },
    stock : {
        type: Number,
        required: true,
        min: 1,
        max:255,
        unique: false,
    },
    writer : {
        type: String,
        required: true,
        min: 3,
        max:255,
        unique: false,
    },
    subject : {
        type: String,
        required: true,
        min: 3,
        max:255,
        unique: false,
    },
    type : {
        type: String,
        required: true,
        min: 3,
        max:255,
        unique: false,
    },
    publisher : {
        type: String,
        required: true,
        min: 3,
        max:255,
        unique: false,
    }

});

module.exports = mongoose.model('Book', bookSchema);