// User can singIn with email and password
// At first, I check  the DB to find the user's data according the email,
// If there isn't user by this email, user receive the Not Found error.
// If there is user by this email, by using bcrypt library, the entered password compares with stored password,
// when user enters correct password, token creates by using userId and email. now user singIn.

const db = require("../Models");
const bcrypt = require('bcrypt');
const JWT = require("../Utils/jwt");

const User = db.user;

exports.singIn = (req, res) => {

    let email = req.body.email;

    User.findOne({ email }).exec((err, user) => {

        if (err) {
            console.log(err);
            return res.status(500).send({ message: err });

        }
        if (!user) {
            return res.status(404).send({ message: "User Not found." });
        }

        //check password
        let comparedPassword = bcrypt.compareSync(req.body.password, user.password);

        if (!comparedPassword) {
            return res.status(401).send({
                message: "Invalid Password!"
            });

        }

        let users = {
            id: user._id,
            user: user.email,

        };

        // token generates by GenerateToken() function. find this function in Utils/jwt.js.
        let token = JWT.GenerateToken(users);

        

        return res.status(200).json({ data: user, accessToken: token });
    })
}

