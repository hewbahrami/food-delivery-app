const express = require('express');
const expressSession = require('express-session');
const app = express();
const path = require('path');
const passport = require('passport');
const db = require('../database/index.js');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const authenticate = require('./authenticate.js');
const queryFunctions = require('../database/controller.js');

app.use(bodyParser.json());

app.use(expressSession(
  {
    secret: "chismosaymimosa",
    resave: true,
    saveUninitialized: true
  }
));
app.use(cookieParser("chismosaymimosa"));


app.use(passport.initialize());
app.use(passport.session());
require('./passport.js')(passport);


app.use('/', express.static(path.join(__dirname, '../public')));
// app.use('/register', express.static(path.join(__dirname, '../public')));
app.use('/login', express.static(path.join(__dirname, '../public')));


app.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    // console.log(user)
    if (err) {
      return next(err);
    } if (!user) {
      res.send('No user exists')
    } else {
      req.logIn(user, err => {
        if (err) throw(err);
        res.send('Successfully Authenticated');
        console.log(req.user)
      })
    }
  })(req, res, next)
})

app.post('/register', (req, res) => {
  const {firstName, lastName, phone, email, pass} = req.body;
  queryFunctions.getUserByEmail(req.body, (err, result) => {
    if (err) {
      console.log(err)
    } if (!result.length) {
      authenticate.hashPassword(pass, 10, (err, hash) => {
        if (err) {
          console.log(err)
        } else {
          req.body.pass = hash
          queryFunctions.addNewUser(req.body, (err, result) => {
            if (err) throw err;
            console.log(result)
          })
        }
      })
    }
  })
})

const port = 1234;

app.listen(port, () => console.log(`Connected to port ${port}`))