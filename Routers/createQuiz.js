const express = require("express");
const { createQuiz } = require("../Controllers/createQuiz");
const jwt = require('../Utils/jwt');

const router = express.Router();

router.post('/quiz', jwt.verifyToken, createQuiz);


module.exports = router;