const db = require("../Models");

const Quiz = db.quiz;

exports.getQuizByTitle = (req, res) => {


    Quiz.find().select('_id title description ').exec((err, result) => {

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