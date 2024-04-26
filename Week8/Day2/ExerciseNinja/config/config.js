const knex = require('knex')
require('dotenv').config()
const {CONNECTIONSTRING}=process.env


const db = knex({
    client:'pg',
    connection:{
        connectionString:CONNECTIONSTRING
    }
})

module.exports = db