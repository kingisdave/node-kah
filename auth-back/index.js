const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require ('dotenv').config();
const app = express();
// const jwt = require('jsonwebtoken');

const port = process.env.PORT;
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '/public')));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authorization");
    next();
});

const URI = process.env.MONGO_URI;
// mongoose.connect(URI,  { useUnifiedTopology: true, useNewUrlParser: true });

mongoose.connect('mongodb://localhost/project-kahoot', {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection;

db.on('connected', ()=>console.log("CONNECTED TO THE DATABASE"));
db.on('error', ()=>console.log("Error Occured"))

const userRouter = require('./routes/user.route');
app.use('/auth', userRouter);

const appRouter = require('./routes/app.route');
// const verifyToken = require('./middlewares/auth.middleware');

app.use('/app', appRouter)
// app.use('/app', verifyToken, appRouter)

app.listen(port, (res)=>{
    console.log(`Server started and listening on port ${port} `)
})