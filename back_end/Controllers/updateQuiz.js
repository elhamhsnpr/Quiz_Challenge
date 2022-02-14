// users can manipulate their created quiz , they can update the quiz
const db = require("../Models");

const Quiz = db.quiz;

exports.updateQuiz = (req, res) => {

    let _id = req.params.id;

    let { title, description, quiz } = req.body;

    Quiz.findOneAndUpdate({ _id }, { title, description, quiz }).exec((err, quiz) => {

        if (err) {
            console.log(err);
            return res.status(500).send({ message: err });

        }
        if (!quiz) {
            return res.status(404).send({ message: "Quiz not fount" });
        }

        return res.status(200).json({ data: quiz })

    })
}