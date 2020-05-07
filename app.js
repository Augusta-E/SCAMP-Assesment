const express = require("express");
const app = express();
const mongoose = require("mongoose");
const authRouth = require("./Routes/auth");


mongoose
.connect(
   "mongodb+srv://DevNetae:ehianeta@cluster0-kngtf.mongodb.net/test?retryWrites=true&w=majority",
   { useNewUrlParser: true, useUnifiedTopology: true }
)
.then(result => {
   console.log("Database connected");
   app.listen(3000);
   })
   
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
   
app.use (authRouth);


