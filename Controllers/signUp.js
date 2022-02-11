const db = require("../Models");
const bcrypt = require('bcrypt');

const User = db.user;

exports.singUp = (req, res) => {

    const user = new User({
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8)
    });


    user.save((err, user) => {

        if (err) {
            console.log(err);
            return res.status(500).send({ message: err });

        }

        return res.status(200).json({ data: user });


    })

}

