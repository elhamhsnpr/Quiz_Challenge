// Users can creates their own quiz.
// quiz includes several questions and each question has several answers, but the one of these answers is correct
//  quiz stores in quizzes collection in DB

const db = require("../Models");

const Quiz = db.quiz;

exports.createQuiz = (req, res) => {



    const quiz = new Quiz({
    
        title: req.body.title,
        description: req.body.description,
        quiz: req.body.quiz,
        userId: req.token.id,
        score: req.body.score,

    });

    quiz.save((err, quiz) => {

        if (err) {
            console.log(err);
            return res.status(500).send({ message: err });

        }

        return res.status(200).json({ data: quiz });


    })

};