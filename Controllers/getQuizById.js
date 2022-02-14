// users can view the specific quiz that they choose

const db = require("../Models");

const Quiz = db.quiz;

exports.getQuizById = (req, res) => {

    const _id = req.params.id
    

    Quiz.findById({ _id }).exec((err, result) => {

        if (err) {
            console.log(err);
            return res.status(500).send({ message: err });

        }
        if (!result) {
            return res.status(404).send({ message: "Quiz not fount with this title" });
        }

        return res.status(200).send({ data: result });

    })
    return res.status(200)
}