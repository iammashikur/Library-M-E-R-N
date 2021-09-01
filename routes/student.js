const router = require('express').Router();
const {studentMiddleware} = require('./middlewares');
const User = require('../models/User');


router.get('/profile', studentMiddleware , async (req, res) => {

    const user = await User.findOne({ _id: req.user._id });
    res.send(user);

});

module.exports = router;