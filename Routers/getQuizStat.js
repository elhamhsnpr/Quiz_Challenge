// getQuizStat API
const express = require("express");
const { getQuizStat } = require("../Controllers/getQuizStat");


const router = express.Router();

router.get('/quizStat/:quizId', getQuizStat);


module.exports = router;