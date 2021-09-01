const jwt = require('jsonwebtoken');
const User = require('../models/User');

// User Middleware
const studentMiddleware = async (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) {
        return res.status(401).send('Access Denied!');
    }
    try {

        const verified = jwt.verify(token, process.env.SECRET);
        req.user = verified;

        const user = await User.findOne({
            _id: req.user._id
        });

        if (user.user_type !== 1) {
            return res.status(401).send('Access Denied!');
        }

        next();

    } catch (err) {
        return res.status(401).send('Invalid Token!');
    }

}

// Mentor Middleware
const mentorMiddleware = async (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) {
        return res.status(401).send('Access Denied!');
    }
    try {

        const verified = jwt.verify(token, process.env.SECRET);
        req.user = verified;

        const user = await User.findOne({
            _id: req.user._id
        });

        if (user.user_type !== 2) {
            return res.status(401).send('Access Denied!');
        }

        next();

    } catch (err) {
        return res.status(401).send('Invalid Token!');
    }

}

// Admin Middleware
const adminMiddleware = async (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) {
        return res.status(401).send('Access Denied!');
    }
    try {

        const verified = jwt.verify(token, process.env.SECRET);
        req.user = verified;

        const user = await User.findOne({
            _id: req.user._id
        });

        if (user.user_type !== 3) {
            return res.status(401).send('Access Denied!');
        }

        next();

    } catch (err) {
        return res.status(401).send('Invalid Token!');
    }

}


// Office Admin Middleware
const officeAdminMiddleware = async (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) {
        return res.status(401).send('Access Denied!');
    }
    try {

        const verified = jwt.verify(token, process.env.SECRET);
        req.user = verified;

        const user = await User.findOne({
            _id: req.user._id
        });

        if (user.user_type !== 4) {
            return res.status(401).send('Access Denied!');
        }

        next();

    } catch (err) {
        return res.status(401).send('Invalid Token!');
    }

}


module.exports.studentMiddleware = studentMiddleware;
module.exports.mentorMiddleware = mentorMiddleware;
module.exports.adminMiddleware = adminMiddleware;
module.exports.officeAdminMiddleware = officeAdminMiddleware;