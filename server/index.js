const express = require('express');
const app = express();
const path = require('path');
const passport = require('passport');
const db = require('../database/index.js');

app.use('/', express.static(path.join(__dirname, '../public')));

app.use(passport.initialize());
app.use(passport.session());

app.post('/login',
  passport.authenticate('local'), (req, res) => {
    res.redirect('/users/' + req.user.username)
  }
)

const port = 1234;

app.listen(port, () => console.log(`Connected to port ${port}`))