const db = require('../config/config.js')

const _getAllUsers = () =>{
    return db('usersdc').select('id','username','email','first_name','last_name').orderBy('id')
}

const _getUserById = (id) => {
    return db('usersdc').select('id','username','email','first_name','last_name').where({id})
}

const _registerUser = async (body,hash) => {
    let trx;
    try {
        const result = await db.transaction(async (transaction)=>{
            trx = transaction
            const insertedUser = await trx('usersdc').insert(body).returning(['id','email','username','first_name','last_name'])
            let user_id = insertedUser[0].id;
            await trx('hashdc').insert({hash_password:hash , user_id})
            return insertedUser
        })
        await trx.commit();
        return result
    } catch (error) {
        if(trx){
            await trx.rollback()
        }
        throw error
    }
}

const _updateUser = (id,body) => {
    console.log(body);
    return db('usersdc').update(body).where({id}).returning(['id','email','username','first_name','last_name'])
}

const _loginUser = (username) => {
    return db('usersdc').select('id','username','email','first_name','last_name').where({username})
}

module.exports={
    _loginUser,
    _getAllUsers,
    _registerUser,
    _updateUser,
    _getUserById
}