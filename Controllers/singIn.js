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
        let token = JWT.GenerateToken(users);

        //Save token in the cookie
        res.cookie('authcookie', token, { maxAge: 90000 });



        return res.status(200).json({ data: user, accessToken: token });
    })
}

