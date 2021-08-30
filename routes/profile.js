const router = require('express').Router();
const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
const middleware = require('./middleware');
const User = require('../models/User');


router.get('/profile', middleware , async (req, res) => {

    const user = await User.findOne({ _id: req.user._id })
    res.send(user);

});

module.exports = router;