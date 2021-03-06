const bcrypt = require('bcryptjs');
const User = require("../Models/Users");
exports.signUp = (req, res, next) => {
   const email = req.body.email;
   const password = req.body.password;
   if(!email || !password) {
   res.status(400).send({
   status: false,
   message: "All fields are required"
   })
   return;
   }
   User.findOne({ email })
   .then(user => {
   if (user) {
   return res
   .status(423)
   .send({status: false, message: "This email already exists"});
   }
   })
   bcrypt
   .hash(password, 12)
   .then(password => {
   let user = new User({
   email,
   password,
   });
   return user.save();
   })
   .then(() => res.status(200).send(
   { status: true, message: "User registered successfully" }))
   .catch(err => console.log(err));
   };
      
   exports.logIn = (req, res, next) => {
         const email = req.body.email;
         const password = req.body.password;
         res.json({ status:true, data: email })
         }
         