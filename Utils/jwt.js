require('dotenv').config();

const jwt = require('jsonwebtoken');



//Generate Token
module.exports.GenerateToken = (user) => {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '60m' },);
}



//Verify Token
module.exports.verifyToken = (req, res, next) => {

    //     console.log('works')
    //   const authcookie = req.cookies.authcookie
    //   console.log(authcookie)
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, token) => {
        // console.log(token)
        if (err) return res.sendStatus(403);
        req.token = token;
        next()
    })

}