const router = require('express').Router();
const User = require('../models/User');
const {RegValidation, LogValidation} = require('../validation');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
dotenv.config();

router.post('/register', async (req, res) => {

    const valid = RegValidation(req.body);
    const email = await User.findOne({ email: req.body.email })
    const phone = await User.findOne({ phone: req.body.phone })
    const nid   = await User.findOne({ phone: req.body.nid   })

    if(email){
        return res.send({
            error : true,
            message : "email already exist!"
        });
    }

    if(phone){
        return res.send({
            error : true,
            message : "phone already exist!"
        });
    }

    if(nid){
        return res.send({
            error : true,
            message : "nid already exist!"
        });
    }

    if(valid.error){
        return res.send({
            error : true,
            message : res.send(valid.error.details[0].message)
        });
    }

    const salt = await bcrypt.genSalt(10);
    const pass = await bcrypt.hash(req.body.password, salt);
    
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        nid: req.body.nid,
        password: pass,
    });

    try {
        const saveUser = await user.save();
        res.send({
            error : false,
            message : 'User Created!',
            data: saveUser
        });
    } catch (error) {
        res.status(300).send(error);
    }

});

router.post('/login', async (req, res) => {

    const valid = LogValidation(req.body);

    // Validation
    if(valid.error){
        return res.send({
            error : true,
            message : res.send(valid.error.details[0].message)
        });
    }

    // Check Email
    const user = await User.findOne({ email: req.body.email })
    if(!user){
        return res.send({
            error : true,
            message : "email does not exist!"
        });
    }

    // Check Password
    const pass = await bcrypt.compare(req.body.password, user.password);
    if(!pass){
        return res.send({
            error : true,
            message : "wrong password!"
        });
    }

    const token = await jwt.sign({_id: user._id}, process.env.SECRET);
    
    return res.send({
        error : false,
        message : "logged in successfully!",
        token : token
    });


});

module.exports = router;