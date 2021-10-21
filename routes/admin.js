const router = require('express').Router();
const {adminMiddleware} = require('./middlewares');
const User = require('../models/User');
const Book = require('../models/Book');
const Borrow = require('../models/Borrow');
const Food = require('../models/Food');

// Profile
router.get('/profile', adminMiddleware , async (req, res) => {
    const user = await User.findOne({ _id: req.user._id });
    res.send(user);
});

// Profile Update
router.post('/profile/update', adminMiddleware , async (req, res) => {

    User.updateOne({ _id: req.user._id }, {
        $set:{
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            address: req.body.address,
            nid: req.body.nid,
            password: pass,
        }

    } , function(err, result) {

        if(err){
            res.status(300).send(error);
        }else{

            res.send({
                error : false,
                message : 'User Updated!',
                data: result
            });

        }

    });
});

// Books
router.get('/books', adminMiddleware , async (req, res) => {
    const user = await Books();
    res.send(user);
});

// Book Add
router.post('/book/add', adminMiddleware , async (req, res) => {
    const book = new Book({
        name    : req.body.name,
        stock   : req.body.stock,
        writer  : req.body.writer,
        subject : req.body.subject,
        type    : req.body.type,
        publisher : req.body.publisher
    });
    try {
        const addBook = await book.save();
        res.send({
            error : false,
            message : 'Book Added!',
            data: addBook
        });
    } catch (error) {
        res.status(300).send(error);
    }
});


router.post('/book/give', adminMiddleware , async (req, res) => {
    const borrow = new Borrow({
        book_id    : req.body.book_id,
        user_id   : req.body.user_id,
    });
    try {
        const addBorrow = await borrow.save();
        res.send({
            error : false,
            message : 'Book Given!',
            data: addBorrow
        });
    } catch (error) {
        res.status(300).send(error);
    }
});

router.post('/book/return', adminMiddleware , async (req, res) => {
    Borrow.updateOne({ _id: req.body.borrow_id}, {
        $set:{
            status: 1,
        }

    } , function(err, result) {

        if(err){
            res.status(300).send(error);
        }else{

            res.send({
                error : false,
                message : 'Book Returned!',
                data: result
            });

        }

    });
});


// Book Update
router.post('/book/update', adminMiddleware , async (req, res) => {
    Book.updateOne({ _id: req.body.book_id }, {
        $set:{

            name    : req.body.name,
            stock   : req.body.stock,
            writer  : req.body.writer,
            subject : req.body.subject,
            type    : req.body.type,
            publisher : req.body.publisher
        }

    } , function(err, result) {

        if(err){
            res.status(300).send(error);
        }else{

            res.send({
                error : false,
                message : 'Book Updated!',
                data: result
            });

        }

    });
});


// Book Add
router.post('/food/add', adminMiddleware , async (req, res) => {
    const food = new Food({
        name    : req.body.name,
        price   : req.body.price,
        disabled_price  : req.body.disabled_price,
        status : 0,
    });
    try {
        const addBook = await book.save();
        res.send({
            error : false,
            message : 'Food Added!',
            data: addBook
        });
    } catch (error) {
        res.status(300).send(error);
    }
});

// Book Update
router.post('/food/update', adminMiddleware , async (req, res) => {
    Book.updateOne({ _id: req.body.food_id }, {
        $set:{

            name    : req.body.name,
            price   : req.body.price,
            disabled_price  : req.body.disabled_price,
            status : 0,
        }

    } , function(err, result) {

        if(err){
            res.status(300).send(error);
        }else{

            res.send({
                error : false,
                message : 'Food Updated!',
                data: result
            });

        }

    });
});


module.exports = router;