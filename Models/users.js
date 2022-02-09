const mongoose = require("mongoose");

// Define the mongoose model
const User = mongoose.model(
    "User",
    new mongoose.Schema({
        username: String,
        email: String,
        password: String,

    })
);
module.exports = User;