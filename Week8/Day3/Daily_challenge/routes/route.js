const express = require('express')
const {
    updateUser,
    getUserById,
    getAllUsers,
    registerUser,
    loginUser
} = require('../controllers/control.js')
const router = express.Router()

router.get('/users',getAllUsers)

router.get('/users/:id',getUserById)

router.post('/register',registerUser)

router.put('/users/:id',updateUser)

router.post('/login',loginUser)

module.exports = router