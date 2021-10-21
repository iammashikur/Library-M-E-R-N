const mongoose = require('mongoose');

const borrowSchema = new mongoose.Schema({
    user_id : {
        type: String,
        required: true,
        min: 3,
        max:255,
        unique: false,
    },
    book_id : {
        type: String,
        required: true,
        min: 1,
        max:255,
        unique: false,
    },
    status : {
        type: Number,
        default: 0,
        unique: false,
    },
    date : {
        type: Date,
        default: Date.now,
        unique: false,
    },
});

module.exports = mongoose.model('Borrow', borrowSchema);