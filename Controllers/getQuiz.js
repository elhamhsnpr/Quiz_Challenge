const db = require("../Models");

const Quiz = db.quiz;

exports.getQuiz= (req, res) => {


    const { page = 1, limit = 1 } = req.query;

    Quiz.find().select('_id title description score ').limit(limit * 1).skip((page - 1) * limit).exec((err, result) => {

        if (err) {
            console.log(err);
            return res.status(500).send({ message: err });

        }
        if (!result) {
            return res.status(404).send({ message: "Quiz not fount with this title" });
        }

        return res.status(200).send({ data: result });

    })
}