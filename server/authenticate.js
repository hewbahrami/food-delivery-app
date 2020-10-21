const bcrypt = require('bcrypt');

const hashPassword = (pass, hashLength, callback) => {
  bcrypt.hash(pass, hashLength, callback);
}


module.exports = hashPassword;