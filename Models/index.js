const mongoose = require("mongoose");

//Initialize mongoose
const db = {};
db.mongoose = mongoose;
db.user = require("./users");
db.quiz = require("./quiz");

module.exports = db;