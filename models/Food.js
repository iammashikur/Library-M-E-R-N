const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
        min: 3,
        max:255,
        unique: false,
    },
    price : {
        type: Number,
        required: true,
        min: 1,
        max:255,
        unique: false,
    },
    disabled_price : {
        type: Number,
        default: 0,
        unique: false,
    },
});

module.exports = mongoose.model('Food', foodSchema);