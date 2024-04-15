const express = require('express')
const router = express.Router()
const {getQuestion,submitQuestion,showScore}=require('../controllers/funcs.js')

router.get('/',getQuestion)

router.post('/',submitQuestion)

router.get('/score',showScore)

module.exports = router