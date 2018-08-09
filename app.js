const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./models/user');

const passport = require('passport');
const LocalStrategy = require('passport-local');

const app = express();

mongoose.connect('mongodb://heroku_049w18tj:rilo6f7d19ihmdgo10cd439cbh@ds117422.mlab.com:17422/heroku_049w18tj', { useNewUrlParser: true }, () => console.log("show"))

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(bodyParser.urlencoded({ extended: true }));
app.listen(3000, () => console.log('Listening on 3000'));