//GetQuiz API
const express = require("express");
const { getQuiz} = require("../Controllers/getQuiz");

const router = express.Router();

router.get('/quiz', getQuiz)

module.exports = router;
