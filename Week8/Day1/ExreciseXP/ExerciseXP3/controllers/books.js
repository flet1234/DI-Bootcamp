const books =[  
    { id: 1, name: 'Book 1', author: 'Author 1' },
    { id: 2, name: 'Book 2', author: 'Author 2' },
    { id: 3, name: 'Book 3', author: 'Author 3' },
            ]

const getAllBooks = (req,res)=>{
    res.json(books)
}

const updateBook = (req,res)=>{
    let {name,author}=req.body
    let id = parseInt(req.params.id)
    let book = books.find(item => item.id === id)
    if(!book){
        res.status(404).json('msg: invalid id')
        return
    }
    book.name = name
    book.author = author
    res.json(books)
}

const addBook = (req,res)=>{
    let {name,author}=req.body
    let id = books.length+1
    let book = {id,name,author}
    books.push(book)
    res.json(books)
}

const deleteBook = (req,res)=>{
    let id = parseInt(req.params.id)
    let index = books.findIndex(item => item.id === id)
    if(index==-1){
        res.status(404).json('msg: invalid id')
        return
    }
    books.splice(index,1)
    res.json(books)
}

module.exports = {
    getAllBooks,
    addBook,
    deleteBook,
    updateBook
}