const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const connection = require('../database/index.js');
const authenticate = require('./authenticate.js');
const bcrypt = require('bcrypt');

module.exports = (passport) => {
  passport.use(new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'pass'
    },
    (email, pass, done) => {
      let queryUser = `SELECT * from users WHERE email = '${email}';`;
      connection.query(queryUser, (err, user) => {
        if (err) {
          return done(err)
        } if (!user || user.rows.length < 1) {
          return done(null, false, { message: 'Incorrect username.' })
        }
        bcrypt.compare(pass, user.rows[0].pass, (err, result) => {
          if (err) throw (err)
          if (result) {
            return done(null, user.rows)
          } else {
            return done(null, false, { message: 'Incorrect password.' });
          }
        })
      })
    }
  ))
}




passport.serializeUser((user, done) => { // serialization of sessions
  done(null, user[0].email)
})

passport.deserializeUser((email, callback) => {
  if (email) {
    connection.query(`SELECT email FROM users where email='${email}';`, (err, results) => {
      if (err) throw err;
      if (results.rows.length < 1) {
        return callback("No email was found in database")
      }
      callback(null, results.rows[0].email)
    })
  } else {
    callback("Could not deserialize user with email of " + email, null)
  }
})

