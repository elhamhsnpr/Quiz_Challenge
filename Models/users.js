const mongoose = require("mongoose");

// Define the mongoose model
const User = mongoose.model(
    "User",
    new mongoose.Schema({
        email: {
            type: String,
            required: true,
            match: /.+\@.+\..+/,
            unique: true
        },
        password: String,

    })
);
module.exports = User;