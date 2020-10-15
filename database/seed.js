const faker = require('faker');
const db = require('./index.js');

const makeUser = () => {
  let user = {
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber().replace(/\D/g, '').slice(0, 10),
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    pass: faker.internet.password()
  };
  return user;
};

const generateUsers = () => {
  let users = [];
  for (let i = 0; i < 10; i++) {
    users.push(makeUser());
  }
  return users;
};

const allUsers = generateUsers();

const addUserToDB = () => {
  allUsers.forEach((user) => {
    console.log(user)
    let query = `INSERT into users(email, phone, first_name, last_name, pass) values ('${user.email}', '${user.phone}', '${user.first_name}', '${user.last_name}', '${user.pass}')`;
    db.query(query, (err) => {
      if (err) throw err;
      console.log("Seeded users");
    });
  });
};

addUserToDB();