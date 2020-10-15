const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const connection = require('../database/index.js'); // database connection

let loginInfo = {
  username: 'email',
  password: 'pass'
}

passport.use(new LocalStrategy(loginInfo,
  (email, pass, done) => {
    let queryUser = `SELECT * from users WHERE email = '${email}';`;
    connection.query(queryUser, (err, user) => {
      if (err) {
        return done(err)
      }
      if (!user || user.row.length < 1) {
        return done(null, false, { message: 'Incorrect username.' })
      }
      if (!user.validPassword(pass)) {
        return done(null, false, { message: 'Incorrect password.' });
      }

      return done(null, user)
    })
  }
))

passport.serializeUser((user, done) => { // serialization of sessions
  done(null, user[0].email)
})

passport.deserializeUser((email, callback) => {
  if (email) {
      connection.query(`SELECT id, email FROM users where email='${email}';`, (err, results) => {
        if(results.rows.length < 1) {
          return callback("No email was found in database")
        }
        callback(null, results.rows[0].email)
      })
    } else {
        callback("Could not deserialize user with email of " + email, null)
    }
  })

