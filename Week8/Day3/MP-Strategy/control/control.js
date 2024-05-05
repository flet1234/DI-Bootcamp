
const grid = require('../modules/modules.js')

function getAllGrid(req,res) {
    res.json(grid)
}

function getGrid(req,res) {
    let gridIndex=parseInt(req.param.id)
    try {
        let object = grid[gridIndex]
        res.json(object)
    } catch (error) {
        console.error(error);
        res.status(404).json({msg:'Wrong id'})
    }
   
}

function putMakeStep(req,res) {
    let body = req.body
    let prePosition = parseInt(body.id1)
    let position = parseInt(body.id2)
    let color = body.color
    try {
        let preObject = grid[prePosition]
        let object = grid[position]
        preObject.player='none'
        object.player=color
        res.json(grid)
    } catch (error) {
        console.error(error);
        res.status(404).json({msg:'Something went wrong'})
    }
}

module.exports={
    getAllGrid,
    getGrid,
    putMakeStep
}

