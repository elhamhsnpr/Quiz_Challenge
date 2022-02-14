// updateQuiz API
const express = require("express");
const { updateQuiz } = require("../Controllers/updateQuiz");
const jwt = require('../Utils/jwt');

const router = express.Router();

router.put('/quiz/update/:id', jwt.verifyToken, updateQuiz);


module.exports = router;