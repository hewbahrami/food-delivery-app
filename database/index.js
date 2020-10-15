const Pool = require('pg').Pool;
require('dotenv').config();

const config = {
  user: 'hewbahrami',
  database: 'foodapp',
  password: '',
  port: 5432
}

const pool = new Pool(config);

pool.connect()
  .then(console.log('Connected to DB'))
  .catch((err) => console.log(err));

module.exports = pool;