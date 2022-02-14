//GetQuizByTitle API
const express = require("express");
const { getQuizByTitle } = require("../Controllers/getQuizByTitle");


const router = express.Router();

router.get('/quizByTitle/:title', getQuizByTitle);


module.exports = router;