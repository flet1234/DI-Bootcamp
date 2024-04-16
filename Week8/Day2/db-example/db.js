// const postgres = require('postgres')

// const sql = postgres({
//     host:'localhost',
//     port:'5432',
//     username:'postgres',
//     database:'postgres',
//     password:'rfrfirf1234'
// })

// // async function getVersion() {
// //     const result = await sql`select * from products where id = 2`
// //     console.log(result);
// // }
// // getVersion()

const knex = require('knex');

const db = knex({
    client:'pg',
    connection: {
        host:'localhost',
        port:'5432',
        user:'postgres',
        database:'postgres',
        password:'rfrfirf1234'
    }
})

const test = async () => {
    try {
        const trx = await db.transaction()

        const product1 = await db('products')
        .insert({name:'aaa',price:111},["*"]).transacting(trx)

        const product2 = await db('products')
        .insert({name:'bbb',price:222},["*"]).transacting(trx)

        console.log("");

        await trx.commit()
    } catch (error) {
        console.log(error);
        await trx.rollback()
    }
}

test()
// async function getVersion() {
//     const result = await db.raw('select id,name,price from products where id = 2')
//     console.log(result.rows);
// }

// getVersion()

// db('products')
// .orderBy('name')
// .select('id','name','price')
// .where({id:3})

// .insert([
//     {name:'sansubg s25',price:888},
//     {name:'samnsung s26',price:999}
// ],['id','name','price']
// )


// .update({name:'iphone15'},['id','name','price'])
// .where({id:'1'})

// db('products')
// .where ({id:6})
// .del()
// .returning('*')


// .then(data=>{
//     console.log(data);
// })
// .catch(e=>{
//     console.log(e);
// })