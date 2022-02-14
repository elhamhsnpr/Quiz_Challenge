const mongoose = require("mongoose");
const Quiz = require("./quiz");
const User = require("./users");

const QuizResult = mongoose.model(
    "QuizResult",

    new mongoose.Schema({

        attendeeId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: User
        },
        quizId: {

            type: mongoose.Schema.Types.ObjectId,
            ref: Quiz

        },

        quizResult: {},

        attendeeScore: {
            type: Number
        },
       
    })

);

module.exports = QuizResult;