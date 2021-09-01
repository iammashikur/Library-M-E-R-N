const router = require('express').Router();
const {mentorMiddleware} = require('./middlewares');
const User = require('../models/User');


router.get('/profile', mentorMiddleware , async (req, res) => {

    const user = await User.findOne({ _id: req.user._id });
    res.send(user);

});

module.exports = router;