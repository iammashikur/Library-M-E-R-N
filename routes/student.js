const router = require('express').Router();
const {studentMiddleware} = require('./middlewares');
const User = require('../models/User');
const Book = require('../models/Book');
const Borrow = require('../models/Borrow');


router.get('/books', studentMiddleware , async (req, res) => {
     Book.find({}, function(err, book) {
        var bookMap = {};
        book.forEach(function(book) {
          bookMap[book._id] = book;
        });
    
        res.send(bookMap);  
      });
});

router.get('/books/borrowed', studentMiddleware , async (req, res) => {

 
    var dbcourse = [];
  
// Finding courses of category Database
Course.find({ category: "Database" })
    .then(data => {
        console.log("Database Courses:")
        console.log(data);
  
        // Putting all course id's in dbcourse arrray
        data.map((d, k) => {
            dbcourse.push(d._id);
        })
  
        // Getting students who are enrolled in any
        // database course by filtering students
        // whose courseId matches with any id in
        // dbcourse array
        Student.find({ courseId: { $in: dbcourse } })
            .then(data => {
                console.log("Students in Database Courses:")
                console.log(data);
            })
            .catch(error => {
                console.log(error);
            })
    })
    .catch(error => {
        console.log(error);
    })

   
   

});


router.get('/profile', studentMiddleware , async (req, res) => {

    const user = await User.findOne({ _id: req.user._id });
    res.send(user);

});

// Profile Update
router.post('/profile/update', studentMiddleware , async (req, res) => {

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

module.exports = router;