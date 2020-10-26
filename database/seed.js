const faker = require('faker');
const db = require('./index.js');
const { uniqueNamesGenerator, adjectives, colors, names } = require('unique-names-generator');

const neighborhoods = ['Bushwick', 'Greenpoint', 'Williamsburg', 'Bedford-Stuyvesant', 'Boerum Hill', 'Carroll Gardens', 'Cobble Hill', 'Brooklyn Heights', 'Brownsville', 'Clinton Hill', 'Crown Heights', 'Cypress Hills', 'DUMBO', 'East New York', 'Fort Greene', 'Gowanus', 'Greenwood Heights', 'New Lots', 'Ocean Hill', 'Park Slope', 'Prospect Heights', 'Stuyvesant Heights', 'Sunset Park', 'Vinegar Hill', 'Windsor Terrace', 'Canarsie', 'Marine Park', 'Mill Basin', 'Brighton Beach', 'Coney Island', 'Gravesend', 'Midwood', 'Sheepshead Bay', 'Bay Ridge', 'Borough Park', 'Dyker Heights', 'New Utrecht', 'Bensonhurst', 'Ditmas Park', 'East Flatbush', 'Flatbush', 'Kensington', 'Prospect Lefferts Gardens'];

const cuisines = ['American', 'BBQ', 'Bagels', 'Burgers', 'Burritos', 'Caribbean', 'Chinese', 'Deli', 'French', 'Indian', 'Italian', 'Japanese', 'Latin American', 'Mediterranean', 'Mexican', 'Pizza', 'Salads', 'Sandwiches', 'Thai', 'Vegetarian']

const makeRestaurant = () => {
  let restaurant = {
    name: uniqueNamesGenerator({ dictionaries: [adjectives, colors, names], length: Math.floor(Math.random() * 3), separator: ' ', style: 'capital'}),
    phone: faker.phone.phoneNumber().replace(/\D/g, '').slice(0, 10),
    address: faker.address.streetAddress().replace(/[^0-9a-zA-Z ]/g),
    neighborhood: neighborhoods[Math.floor(Math.random() * neighborhoods.length)],
    cuisine: cuisines[Math.floor(Math.random() * cuisines.length)],
    total_visits: Math.floor(Math.random() * 50),
    admin: faker.internet.userName(),
    pass: faker.internet.password()
  };
  return restaurant;
};

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
    let query = `INSERT into users(email, phone, first_name, last_name, pass) values ('${user.email}', '${user.phone}', '${user.first_name}', '${user.last_name}', '${user.pass}')`;
    db.query(query, (err) => {
      if (err) throw err;
      console.log("Seeded users");
    });
  });
};

const generateRestaurants = () => {
  let restaurants = [];
  for (let i = 0; i < 300; i++) {
    restaurants.push(makeRestaurant());
  }
  console.log(restaurants)
  return restaurants;
}

const allRestaurants = generateRestaurants();

const addRestaurantToDB = () => {
  allRestaurants.forEach((restaurant) => {
    let query = `INSERT into restaurants(name, phone, address, neighborhood, cuisine, total_visits, admin, pass) VALUES ('${restaurant.name}', '${restaurant.phone}', '${restaurant.address}', '${restaurant.neighborhood}', '${restaurant.cuisine}', '${restaurant.total_visits}', '${restaurant.admin}', '${restaurant.pass}')`;
    db.query(query, (err) => {
      if (err) throw err;
      console.log("Seeded restaurants")
    })
  })
}


addUserToDB();
addRestaurantToDB();

module.exports = neighborhoods;