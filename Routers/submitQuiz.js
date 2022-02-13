const express = require("express");
const { submitQuiz } = require("../Controllers/submitQuiz");
const jwt = require('../Utils/jwt');

const router = express.Router();

router.post('/quiz/submit', jwt.verifyToken, submitQuiz);


module.exports = router;