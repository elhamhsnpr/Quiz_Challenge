// deleteQuiz API
const express = require("express");
const { deleteQuiz } = require("../Controllers/deleteQuiz");
const jwt = require('../Utils/jwt');

const router = express.Router();

router.delete('/quiz/delete/:id', jwt.verifyToken, deleteQuiz);


module.exports = router;