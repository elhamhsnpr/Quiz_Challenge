const express = require("express");
const { getQuizByTitle } = require("../Controllers/getQuizByTitle");


const router = express.Router();

router.get('/quiz/:title', getQuizByTitle);


module.exports = router;