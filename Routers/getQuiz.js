const express = require("express");
const { getQuizByTitle } = require("../Controllers/getQuiz");

const router = express.Router();

router.get('/quiz', getQuizByTitle)

module.exports = router;
