// users can view the basic quiz's information such as title and description in Home page
// they can choose  the title that they want to attempt the quiz
// one of the most important things to make a website friendly is the response time, and pagination comes for this reason,
// for example you have hundreds quizzes, and you don’t want to see all of them at once. Pagination means displaying a small number of all, by a page.
// so I limit the retrieved data  by using limit and skip options in mongoose. 

const db = require("../Models");

const Quiz = db.quiz;

exports.getQuiz= (req, res) => {


    const { page = 1, limit = 1 } = req.query;

    Quiz.find().select('_id title description ').limit(limit * 1).skip((page - 1) * limit).exec((err, result) => {

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