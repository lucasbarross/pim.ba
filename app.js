const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./models/user');


const app = express();

mongoose.connect('mongodb://heroku_049w18tj:rilo6f7d19ihmdgo10cd439cbh@ds117422.mlab.com:17422/heroku_049w18tj', { useNewUrlParser: true }, () => console.log("show"))

User.create({ username: 'Rafael', password: '123456'})
    .then((doc) => console.log(doc));


app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, () => console.log('Listening on 3000'));