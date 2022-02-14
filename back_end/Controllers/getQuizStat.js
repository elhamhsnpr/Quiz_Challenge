//users can view the stat of the quiz 
const db = require("../Models");

const Stat = db.quizStat;


exports.getQuizStat = (req, res) => {

    quizId = req.params.quizId;

    Stat.find({ quizId }).exec((err, stat) => {

        if (err) {
            console.log(err);
            return res.status(500).send({ message: err });

        }

        return res.status(200).json({ data: stat });

    })





}