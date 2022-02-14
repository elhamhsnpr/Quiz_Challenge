const mongoose = require("mongoose");
const User = require("./users");

const Quiz = mongoose.model(
    "Quiz",

    new mongoose.Schema({

        title: {
            type: String,
            required: true,
        },
        description: {
            type: String
        },
        quiz: [{

            question: {
                type: String,
                required: true,
            },
            answers: [{
                text: {
                    type: String,
                    required: true,
                },
                isCorrect: {
                    type: Boolean,
                    default: false,
                    required: true,
                },



            }],

        }],
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: User
        },


    })

);

module.exports = Quiz;