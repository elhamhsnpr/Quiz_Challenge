const express = require("express");
const bodyParser = require('body-parser')
const db = require("./Models");

const singUp = require("./Routers/signUp");
const singIn = require("./Routers/singIn");
const createQuiz = require("./Routers/createQuiz");
const getQuiz = require("./Routers/getQuiz");
const getQuizByTitle = require("./Routers/getQuizByTitle");
const getQuizById = require("./Routers/getQuizById");
const submitQuiz = require("./Routers/submitQuiz");


const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(singUp);
app.use(singIn);
app.use(createQuiz);
app.use(getQuiz);
app.use(getQuizByTitle);
app.use(getQuizById);
app.use(submitQuiz);

// connect to mongoDB by using mongoose
db.mongoose
    .connect(`mongodb://localhost:27017/quizChallenge`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Successfully connect to MongoDB.");

    })
    .catch(err => {
        console.error("Connection error", err);
        process.exit();
    });






app.listen(port, () => {
    console.log(`Server is running ${port}`);
})