const control = require('../controllers/control.js')
const express = require('express')
const routes = express.Router()

routes.get('/todos',control.getTodo)
routes.get('/todos/:id',control.getTodoById)
routes.post('/todos',control.postTodo)
routes.put('/todos/:id',control.updateTodo)
routes.delete('/todos/:id',control.deleteTodo)

module.exports = routes