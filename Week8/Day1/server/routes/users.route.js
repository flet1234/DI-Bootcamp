const express = require('express')
const {users} = require('../config/data.js')
const {getUsersById} = require('../controller/users.controller.js')
const {auth} = require('../midlewres/utils.js')

const router = express.Router()

router.get('/',auth,(req,res)=>{
    res.json(users)
})

router.get('/:id',getUsersById)

router.get('/', (req,res)=>{
    let x = req.query.name
    let y = users.filter(item =>{
        return item.name.toLowerCase().includes(x.toLocaleLowerCase())
    })
    if (y.length == 0){
        return res.status(404).json({msg:'Nobody in there'})
    }
    res.json(y)
})


router.post('/',(req,res)=>{
    users.push(req.body)
    res.json(users)
})

router.put('/:id',(req,res)=>{
    let z=req.params.id
    let {name,email}=req.body
    let user = users.find(user=>user.id == z)
    user.name=name
    user.email=email
    res.json(user)
})

router.delete('/:id',(req,res)=>{
    const id=req.params.id
    console.log(id);
    const index = users.findIndex(item =>item.id == id)
    console.log(index);
    users.splice(index,1)
    res.json(users)
})

module.exports = router;