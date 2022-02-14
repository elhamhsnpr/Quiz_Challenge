require('dotenv').config();

const jwt = require('jsonwebtoken');



//Token generate by using jsonwebtoken library. to sign the a token, there were 3 pieces of information:
//  - data to hash in the token 
//  - the token secret ( the token secret is long random string used to encrypt and decrypt the data.
//       it generates like this : require('crypto').randomBytes(64).toString('hex') )
//  - the token expire time

module.exports.GenerateToken = (user) => {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30m' },);
}



// Authentication a token,
// when a request is made to a specific route, you can have the (req, res) variables,
// by using req.headers['authorization'], verifyToken() function  verifies the user have access and can send 
// or receive protected data.

module.exports.verifyToken = (req, res, next) => {

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