const knex = require('knex')
require('dotenv').config()

const {CONNECTIONSTRING} = process.env

const db = knex({
    client:'pg',
    connection:{
        connectionString:CONNECTIONSTRING
    }
})

// async function test() {
//     const result = await db.raw('select version ()')
//     console.log(result.rows);
// }

// test()

module.exports = db