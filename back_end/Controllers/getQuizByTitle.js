// Users can view all the quizzes with the specific tile
// users choose or search the specific title 
const db = require("../Models");

const Quiz = db.quiz;

exports.getQuizByTitle = (req, res) => {

    let title = req.params.title;

    const { page = 1, limit = 1 } = req.query;

    Quiz.find({ title }).limit(limit * 1).skip((page - 1) * limit).exec((err, result) => {

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