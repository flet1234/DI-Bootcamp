const express = require('express')
const router = express.Router()
const {getEmoji,generateGreet} = require('../control/funcs.js')

router.get('/getEmoji',getEmoji)

router.post('/greet',generateGreet)

module.exports=router