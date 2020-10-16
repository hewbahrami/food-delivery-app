const express = require('express');
const app = express();
const path = require('path');
const passport = require('passport');
const db = require('../database/index.js');

app.use('/', express.static(path.join(__dirname, '../public')));

app.use(passport.initialize());
app.use(passport.session());

app.use('/register', express.static(path.join(__dirname, '../public')));
app.use('/login', express.static(path.join(__dirname, '../public')));


const port = 1234;

app.listen(port, () => console.log(`Connected to port ${port}`))