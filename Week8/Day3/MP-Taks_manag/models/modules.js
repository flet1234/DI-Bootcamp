const db = require('../config/config.js')

const _getAlltasks = () =>{
    return db('mp_task_managment').select('id','name','complete','date').orderBy('id')
}

const _getTaskById = (id) => {
    return db('mp_task_managment').select('id','name','complete','date').where({id})
}

const _postTask = (body) => {
    return db('mp_task_managment').insert(body).returning(['id','name','complete','date'])
}

const _updateTask = (id,body) => {
    return db('mp_task_managment').update(body).where({id}).returning(['id','name','complete','date'])
}

const _delTask = (id) => {
    return db('mp_task_managment').del().where({id}).returning(['id','name','complete','date'])
}

module.exports={
    _delTask,
    _getAlltasks,
    _postTask,
    _updateTask,
    _getTaskById
}