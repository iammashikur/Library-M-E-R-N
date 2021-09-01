const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require('./routes/auth');

const studentRoute = require('./routes/student');
const mentorRoute = require('./routes/mentor');
const adminRoute = require('./routes/admin');
const officeAdminRoute = require('./routes/officeadmin');


const cors = require('cors');

dotenv.config();
app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);


mongoose 
 .connect(process.env.DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,   })   
 .then(() => console.log("Database connected!"))
 .catch(err => console.log(err));



 app.use(express.urlencoded({
       extended: true
     }));
app.use(express.json());



app.use("/api/", authRoute);
app.use("/api/student", studentRoute);
app.use("/api/mentor", mentorRoute);
app.use("/api/admin", adminRoute);
app.use("/api/officeadmin", officeAdminRoute);


app.listen(8080, () => console.log("Server started on port 8080"));
