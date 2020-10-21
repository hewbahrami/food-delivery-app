const express = require('express');
const expressSession = require('express-session');
const app = express();
const path = require('path');
const passport = require('passport');
const db = require('../database/index.js');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const hash = require('./authenticate.js');
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

app.use('/', express.static(path.join(__dirname, '../public')));
app.use('/register', express.static(path.join(__dirname, '../public')));
app.use('/login', express.static(path.join(__dirname, '../public')));



app.post('/register', (req, res) => {
  const {firstName, lastName, phone, email, pass} = req.body;
  queryFunctions.getUserByEmail(req.body, (err, result) => {
    if (err) {
      console.log(err)
    } if (!result.length) {
      hash(pass, 10, (err, hash) => {
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