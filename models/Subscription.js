const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
    user_id : {
        type: String,
        required: true,
        min: 3,
        max:255,
        unique: false,
    },
    
    
    subscription_date : {
        type: String,
        default: 0,
        unique: false,
    },

    expire_date : {
        type: String,
        default: 0,
        unique: false,
    },
    status : {
        type: Number,
        default: 0,
        unique: false,
    },
});

module.exports = mongoose.model('Subscription', subscriptionSchema);