// CreatQuiz API
// jwt.verifyToken function verifies the uses token 

const express = require("express");
const { createQuiz } = require("../Controllers/createQuiz");
const jwt = require('../Utils/jwt');

const router = express.Router();

router.post('/quiz/create', jwt.verifyToken, createQuiz);


module.exports = router;