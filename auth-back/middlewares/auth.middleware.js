const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const secret = process.env.HASH_SECRET;
const verifyToken = (req, res, next) => {
    // console.log(req.headers.authorization, "REQ");
    // return;
    const authorization = req.headers.authorization;
    // console.log(req.body);
    const token = authorization.split(' ')[1];
    if(token){
        jwt.verify(token, secret, (err, decoded) => {
            if(!err){
                let email = decoded.email;
                // if(email){
                    User.findOne({email:email}, (err, result)=>{
                        let username = result.userName;
                        res.status(200).send({username, message: "TOKEN OKAY"})
                    })
                // }
            }else{
                res.status(401).send({message: "Unauthorized"})
            }
        })
    }else{
        res.status(401).send("Unauthorized")
    }
    next();
}

module.exports = verifyToken;