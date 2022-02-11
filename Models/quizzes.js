const mongoose = require("mongoose");

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


        }]

    })

);

module.exports = Quiz;