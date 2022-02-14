// SignUp API
const express = require("express");
const { singUp } = require("../Controllers/signUp");


const router = express.Router();


router.post('/singUp', singUp);

module.exports = router;