const express = require("express");
const {singIn}= require("../Controllers/singIn");

const router = express.Router();


router.post('/singin', singIn);

module.exports = router;