const db = require('../config/config.js')

function _getTodo() {
    return db('todolist').select('id','title','completed').orderBy('id')
}

function _getTodoById(id) {
    return db('todolist').select('id','title','completed').where({id})
}

function _postTodo(body) {
    return db('todolist').insert(body).returning(['id','title','completed'])
}

function _updateTodo(body,id) {
    return db('todolist').update(body).where({id}).returning(['id','title','completed'])
}

function _deleteTodo(id) {
    return db('todolist').del().where({id}).returning(['id','title','completed'])
}

module.exports = {
    _getTodo,
    _getTodoById,
    _postTodo,
    _deleteTodo,
    _updateTodo
}