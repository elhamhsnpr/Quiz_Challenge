const mongoose = require("mongoose");

//Initialize mongoose
const db = {};
db.mongoose = mongoose;
db.user = require("./users");
db.quiz = require("./quiz");
db.quizResult = require("./quizResult");
db.quizStat = require("./quizStat");

module.exports = db;