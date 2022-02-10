const express = require("express");
const bodyParser = require('body-parser')
const db = require("./Models");
// const mongoose = require("mongoose");
const singUp  = require("./Routers/signUp");

const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(singUp);

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