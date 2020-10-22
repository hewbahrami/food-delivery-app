const bcrypt = require('bcrypt');

const hashPassword = (pass, hashLength, callback) => {
  bcrypt.hash(pass, hashLength, callback);
}

const verifyPassword = (pass, user) => {
  bcrypt.compare(pass, user.rows[0].pass, (err, result) => {
    if (err) throw err;
    if (result) {
      return true;
    } else {
      return
    }
  })
}


module.exports.hashPassword = hashPassword;
// module.exports.verifyPassword = verifyPassword;