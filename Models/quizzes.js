const mongoose = require("mongoose");
const User = require("./users");

const Quiz = mongoose.model(
    "Quiz",

    new mongoose.Schema({

        question: String,
        answers: [{
            text: String,
            isCorrect: {
                type: Boolean,
                default: false
            }


        }],
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: User
        }

    })

);

module.exports = Quiz;