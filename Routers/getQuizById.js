const express = require("express");
const { getQuizById } = require("../Controllers/getQuizById");


const router = express.Router();

router.get('/quizById/:id', getQuizById);


module.exports = router;