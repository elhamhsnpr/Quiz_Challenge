// users can manipulate their created quiz , they can delete the quiz
const db = require("../Models");

const Quiz = db.quiz;

exports.deleteQuiz = (req, res) => {

    let _id = req.params.id;


    Quiz.findByIdAndDelete({ _id }).exec((err, quiz) => {

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