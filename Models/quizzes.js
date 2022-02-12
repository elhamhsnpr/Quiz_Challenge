const mongoose = require("mongoose");
const User = require("./users");

const Quiz = mongoose.model(
    "Quiz",

    new mongoose.Schema({

        question: {
            type: String,
            required: true,
        },
        answers: [{
            text: String,
            isCorrect: {
                type: Boolean,
                default: false
            },
            required: true,


        }],
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: User
        }

    })

);

module.exports = Quiz;