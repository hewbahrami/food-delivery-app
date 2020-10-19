const express = require('express');
const app = express();
const path = require('path');
const passport = require('passport');
const db = require('../database/index.js');
const bodyParser = require('body-parser');
const queryFunctions = require('../database/controller.js');

app.use(bodyParser.json())

app.use(passport.initialize());
app.use(passport.session());

app.use('/', express.static(path.join(__dirname, '../public')));
app.use('/register', express.static(path.join(__dirname, '../public')));
app.use('/login', express.static(path.join(__dirname, '../public')));

app.post('/register', (req, res) => {
  // res.send('ok!')
  queryFunctions.getUserByEmail(req.body, (err, result) => {
    if (err) {
      console.log(err)
    } if (!result.length) {
      queryFunctions.addNewUser(req.body, (err, result) => {
        if (err) throw err;
        console.log(result)
      })
    }
  })
})

const port = 1234;

app.listen(port, () => console.log(`Connected to port ${port}`))