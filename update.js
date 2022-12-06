const options = require('./options/mysql.config');
const knex = require('knex');

const database = knex(options);

database.from('cars').where('name', 'Audi').update({price: 36000})
    .then(() => console.log('Table updated!'))
    .catch(err => console.log(err))
    .finally(() => database.destroy())