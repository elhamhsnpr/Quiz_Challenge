const { user } = require("../Models");
const db = require("../Models");

const Quiz = db.quiz;

exports.createQuiz = (req, res) => {

    let quizID = 0;

    const quiz = new Quiz({
    
        title: req.body.title,
        description: req.body.description,
        quiz: req.body.quiz,
        userId: req.token.id



    });

    quiz.save((err, quiz) => {

        if (err) {
            console.log(err);
            return res.status(500).send({ message: err });

        }

        return res.status(200).json({ data: quiz });


    })

};