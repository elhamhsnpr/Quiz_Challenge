const db = require("../Models");

const Result = db.quizResult;

exports.submitQuiz = (req, res) => {


    let quizResult = {};
    quizResult = req.body.quizResult

    // create dictionary key:questionId value:answerId
    let quizResultDic = Object.assign({}, ...quizResult.map((x) => ({ [x.questionId]: x.answerId })));

    // console.log(quizResultDic)

    const result = new Result({

        attendeeId: req.token.id,
        quizId: req.body.quizId,
        quizresult: quizResultDic

    });

    result.save((err, result) => {

        if (err) {
            console.log(err);
            return res.status(500).send({ message: err });

        }

        return res.status(200).json({ data: result });


    })
}