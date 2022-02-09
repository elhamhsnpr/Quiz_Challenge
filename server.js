const express = require("express");
const db = require("./Models");
const mongoose = require("mongoose");

const app = express();
const port = 3000;

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