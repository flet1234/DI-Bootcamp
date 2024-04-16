const {
    _getAllBooks,
    _getBookById
} = require('../models/modules.js')

function getAllBooks(req,res) {
    _getAllBooks().then(data=>{
        res.json(data)
    })
}

function getBookById(req,res) {
        _getBookById(parseInt(req.params.id)).then(data=>{
            console.log(data);
        if (data.length==0){
            res.status(404).json({msg:'There is no book with such id'})
            return
        }
        res.json(data)
    })
}

module.exports = {
    getAllBooks,
    getBookById
}