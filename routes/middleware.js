const router = require('express').Router();
const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");


 const middleware = (req, res, next) => {

    const token = req.header('auth-token');
    if(!token){
        return res.status(401).send('Access Denied!');
    }

    try{

        const verified = jwt.verify(token, process.env.SECRET);
        req.user = verified;
        next();
    }catch(err){
        return res.status(401).send('Invalid Token!');
    }

}

module.exports = middleware;