const mongoose = require("mongoose");
const Quiz = require("./quiz");

const QuizStat = mongoose.model(
    "QuizStat",

    new mongoose.Schema({
        quizId: {

            type: mongoose.Schema.Types.ObjectId,
            ref: Quiz

        },
        score: {
            type: Number,
            default: 0

        },
        completion: {
            type: Number,
            default: 0

        },
        attempt: {
            type: Number,
            default: 0
        },
    })

);

module.exports = QuizStat;