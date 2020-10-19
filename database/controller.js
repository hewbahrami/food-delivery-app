const db = require('./index.js');

module.exports = {
  getUserByEmail: (user, callback) => {
    let checkUser = `SELECT * FROM users WHERE email = '${user.email}'`;
    db.query(checkUser, (err, result) => {
      callback(err, result.rows)
    });
  },
  addNewUser: (user, callback) => {
    let insertUser = `INSERT INTO users (first_name, last_name, phone, email, pass) VALUES ('${user.firstName}', '${user.lastName}', '${user.phone}', '${user.email}', '${user.pass}')`;
    db.query(insertUser, (err, result) => {
      if (err) throw err;
      callback(null, result);
    });
  }
};

// const addNewUser = (user, callback) => {
//   let insertUser = `INSERT INTO users (“firstName”, “lastName”, email, password) VALUES ('${user.firstName}', '${user.lastName}', ''${user.email}', ${user.password}')`;
//   })
// }