const options = require('./options/mysql.config');
const knex = require('knex');

const database = knex(options);

//GET ALL (select * from )
// database.from('cars').select('*')
//     .then(response => console.log(response))
//     .catch(err => console.log(err))
//     .finally(() => database.destroy())

//FILTER (select * from where)
database.from('cars').select('*').where('price', '=', '35000')
    .then(response => console.log(JSON.parse(JSON.stringify(response))))
    .catch(err => console.log(err))
    .finally(() => database.destroy())
