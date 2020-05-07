const router = require('express').Router();
const {signUp, logIn} = require("../Controllers/auth");

router.get("/", (req, res) =>{
   res.send("Welcome to my First express app");
});

router.post('/signup', signUp);
router.post("/login", logIn)
   

module.exports = router