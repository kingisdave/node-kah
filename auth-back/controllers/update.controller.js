
const express = require('express');
// const app =  express();
// const path = require('path');
const User = require('../models/user.model');
// const formidable = require('formidable');
// const fm = require('formidable');
// const jwt = require('jsonwebtoken');
// app.use(express.static(path.join(__dirname, '../public')));


const editUser = (req, res) => {
    const { firstName, lastName, userName, phone, occupation, file } = req.body;        
    User.findOneAndUpdate({userName:userName}, req.body, (err, result)=> {
        console.log(result);
    })
}

const updatePicture= (req, res) => {
    console.log(req.body)
}

const changePass = (req, res) => {
    // const { firstName, lastName, userName, phone, occupation, file } = req.body;
    // console.log(req.body);
    
}

module.exports = { editUser, updatePicture, changePass };