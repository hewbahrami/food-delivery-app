const express = require('express');
const app = express();
const path = require('path');
const passport = require('passport');

app.use('/', express.static(path.join(__dirname, '../public')));

app.use(passport.initialize());
app.use(passport.session());

const port = 1234;

app.listen(port, () => console.log(`Connected to port ${port}`))