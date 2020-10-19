const User = require('../models/user.model');
const jwt = require('jsonwebtoken');

const secret = process.env.HASH_SECRET;
const signup = (req, res) => {
    const { userName, email, password } = req.body;
    User.findOne({userName:userName}, (err, result)=>{
        if(err) {
            throw err;
        }
        if(!result){
            User.findOne({email: email}, (err, user)=>{
                if(!user){
                    let user = { userName, email, password };   
                    let new_user = new User(user);
                    
                    new_user.save();
                    
                    res.status(200).send({message: "saved new user"});
                }else {
                    res.status(401).send({message: "Email Exist"});
                }
            })
        } else {
            res.status(401).send({message: "Username Exist"});
        }
    })
   
        
}

const signin = (req, res) => {
    const { email, password } = req.body;

    User.findOne({email: email}, (err, user)=>{
        if(!err){
            if(user){
                user.validatePassword(password, (err, same)=>{
                    // console.log(same, "SAME VALUE?")
                    if(err){
                        res.status(500).send({message: "Something went wrong!"})
                    }else if(!same){
                        res.status(401).send({message: "Invalid Credentials"})
                    }else{
                        const payload = { email };
                        console.log(jwt, "THE REAL JJJJ")
                        const token = jwt.sign(payload, secret, {expiresIn: '1h'})
                        
                        res.status(200).json({token: token, message: "Logged In"})
                    }
                })
            }else{
                res.status(401).send({message: "Invalid Email, use a valid one"})
            }
        }
    })
}

module.exports = {signup, signin}