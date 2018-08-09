const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();


app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, () => console.log('Listening on 3000'));