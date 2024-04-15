const express = require('express')
const app = express()
const router = express.Router()


function getHome(req, res) {
    res.send('Home page');
}

function getAbout(req, res) {
    res.send('About page');
}

router.get('/',getHome)
router.get('/about',getAbout)


module.exports = {
    router
}