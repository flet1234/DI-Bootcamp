const express = require('express')
const {
    delTask,
    postTask,
    updateTask,
    getAlltasks,
    getTaskById
} = require('../controllers/control.js')
const router = express.Router()

router.get('/',getAlltasks)

router.get('/:id',getTaskById)

router.post('/',postTask)

router.put('/:id',updateTask)

router.delete('/:id',delTask)

module.exports = router