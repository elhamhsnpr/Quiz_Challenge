const db = require("../Models");

const Result = db.quizResult;
const Quiz = db.quiz;
const Stat = db.quizStat;



exports.submitQuiz = (req, res) => {


    let quizResult = {};
    quizResult = req.body.quizResult;





    Quiz.findOne({ _id: req.body.quizId }).exec((err, quiz) => {

        let score = 0;
        let i = 0;
        let totalScore = 1;


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

            Stat.findOne({ quizId: result.quizId }).exec((err, stat) => {

                let newCompletion = 0;

                if (result.attendeeScore === totalScore) {

                    newCompletion = stat.completion + 1;
                }

                if (!stat) {

                    const stat = new Stat({
                        quizId: result.quizId,
                        attempt: 1,
                        completion: newCompletion,
                        score: totalScore,

                    })

                    stat.save((err, stat) => {
                        console.log(stat)
                    })

                } else {

                    Stat.updateMany({ quizId: result.quizId }, { $inc: { attempt: 1 }, completion: newCompletion }).exec((err, c) => {
                        console.log(c)
                    })
                }


            });

            return res.status(200).json({ data: result });


        })
    })


}