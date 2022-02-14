const db = require("../Models");

const Result = db.quizResult;
const Quiz = db.quiz;

exports.submitQuiz = (req, res) => {


    let quizResult = {};
    quizResult = req.body.quizResult;


    Quiz.findOne({ _id: req.body.quizId }).exec((err, quiz) => {

        let score = 0;
        let i = 0;


        for (q of quiz.quiz) {

            if (q._id != quizResult[i].questionId)
                return res.send(500);

            for (ans of q.answers) {
                if (quizResult[i].answerId == ans._id && ans.isCorrect == true) {
                    score++;
                }
            }
            i++;
        }

        // create dictionary key:questionId value:answerId
        let quizResultDic = Object.assign({}, ...quizResult.map((x) => ({ [x.questionId]: x.answerId })));


        const result = new Result({

            attendeeId: req.token.id,
            quizId: req.body.quizId,
            quizResult: quizResultDic,
            attendeeScore: score,

        });

        result.save((err, result) => {

            if (err) {
                console.log(err);
                return res.status(500).send({ message: err });

            }

            return res.status(200).json({ data: result });


        })
    })


}