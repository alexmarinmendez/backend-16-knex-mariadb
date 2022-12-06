const options = require('./options/mysql.config');
const knex = require('knex');

const database = knex(options);

let cars = [
    { name: 'Volvo', price: 15000 },
    { name: 'Audi', price: 35000 },
    { name: 'Citroen', price: 25000 },
    { name: 'Hummer', price: 38000 },
    { name: 'Skoda', price: 5000 },
    { name: 'Mercedes', price: 75000 },
]

database('cars').insert(cars)
    .then(response => console.log(response))
    .catch(err => console.log(err))
    .finally(() => database.destroy())