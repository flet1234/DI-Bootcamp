const express = require('express')
const control = require('../controllers/control.js')
const router = express.Router()

router.get('/question/:id',control.getQuestionById)
router.get('/answer/:id',control.getAnswerById)
router.get('/option/:id',control.getOptionById)
router.get('/question/option/:id',control.getOptionIds)
router.post('/question/',control.postQuestion)
router.get('/leaderboard',control.getLeaderboard)
router.post('/leaderboard',control.postLeaderboard)

module.exports = router