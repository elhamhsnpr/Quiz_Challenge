const { user } = require("../Models");
const db = require("../Models");

const Quiz = db.quiz;

exports.createQuiz = (req, res) => {

    const quiz = new Quiz({
        question: req.body.question,
        answers: req.body.answers,
        userId: req.token.id



    });

    // console.log(quiz)

    quiz.save((err, quiz) => {

        if (err) {
            console.log(err);
            return res.status(500).send({ message: err });

        }

        return res.status(200).json({ data: quiz });


    })

};