const express = require('express')
const control = require('../control/control.js')
 
const routes = express.Router()

routes.get('/grid',control.getAllGrid)
routes.get('/grid/:id',control.getGrid)
routes.put('/grid',control.putMakeStep)

module.exports = routes