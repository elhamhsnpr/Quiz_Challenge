const mongoose = require("mongoose");

//Initialize mongoose
const db = {};
db.mongoose = mongoose;
db.user = require("./users");
db.quiz = require("./quizzes");

module.exports = db;