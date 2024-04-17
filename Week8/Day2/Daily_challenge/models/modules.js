const db = require('../config/config.js')

const _getAllUsers = () =>{
    return db('users').select('id','email','username','first_name','last_name').orderBy('id')
}

const _getUserById = (id) => {
    return db('users').select('id','email','username','first_name','last_name').where({id})
}

const _registerUser = async (body,usernameAndHash) => {
    let trx;
    try {
        const result = await db.transaction(async (transaction)=>{
            trx = transaction
            await trx('hashpwd').insert(usernameAndHash)
            const insertedUser = await trx('users').insert(body).returning(['id','email','username','first_name','last_name'])
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

const _updateUser = async (id,body,username) => {
    let trx
    try{
        const result = await db.transaction(async (transaction)=>{
            trx = transaction
            await trx('hashpwd').update(body).where({username})
            const insertedUser = await trx('users').update(body).where({id}).returning(['id','email','username','first_name','last_name'])
            return insertedUser
        })
        await trx.commit()
        return result
    } catch (error) {
        if(trx){
            await trx.rollback()
        }
        throw error
    }
}

const _loginUser = (username) => {
    return db('users').select('id','email','username','first_name','last_name').where({username}).first()
}

module.exports={
    _loginUser,
    _getAllUsers,
    _getUserById,
    _updateUser,
    _registerUser
}