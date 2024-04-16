const knex = require('knex')
require('dotenv').config()

const {PGHOST,PGDATABASE,PGUSER,PGPASSWORD,PGPORT} = process.env

const db = knex({
    client:'pg',
    connection: {
        host:PGHOST,
        port:PGPORT,
        user:PGUSER,
        database:PGDATABASE,
        password:PGPASSWORD
    }
})




const users =[
    {id:1,name:'John',email:'garbaim@gmail.com'},
    {id:2,name:'Johny',email:'garaaam@gmail.com'},
    {id:3,name:'Kohn',email:'garbcccc@gmail.com'},
];

const products =[
    {id:1,name:'iphone',price:'100'},
    {id:2,name:'ipad',price:'200'},
    {id:3,name:'iwathc',price:'300'},
];

module.exports ={
    users,
    products,
    db
}