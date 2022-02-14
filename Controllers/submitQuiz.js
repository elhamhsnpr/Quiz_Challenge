// users submit the quiz,
// users choose the answers, for each question, they choose the correct answer,
// they got score. the questions, user's answer, quizId and user's score store in quizResult collection.

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

        //calculate the quiz score, each of the question have 1 point, so quiz score calculate by the number of the question * 1.
        let totalScore = quiz.quiz.length * 1;


        // the answers have the isCorrect field to verify the correct answer 
        // for ech question I compare the user's answer and correct answer,
        // if the user chooses the correct answer, user scores increase.
        for (q of quiz.quiz) {

            if (q._id != quizResult[i].questionId)
                return res.send(500);

            for (ans of q.answers) {
                if (quizResult[i].answerId == ans._id && ans.isCorrect == true) {
                    score++;
                }
            }
            i++;
        };

        // the questions and the user's answers, store as list dictionary in DB,
        // because the users can find out their answers for each question.
        // dictionary key:questionId value:answerId
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

            // every time users submit the quiz, the attempt field increase 
            // if the user's score in that quiz is equal with totalScore, that mean the user complete quiz successfully and the completion field increase
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