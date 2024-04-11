const express = require('express')
const app = express()

const books = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", publishedYear: 1925 },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", publishedYear: 1960 },
    { id: 3, title: "1984", author: "George Orwell", publishedYear: 1949 },
    { id: 4, title: "The Catcher in the Rye", author: "J.D. Salinger", publishedYear: 1951 }
];

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.listen(5000,()=>{
    console.log('Server is running...')
})

app.get('/api/books',(req,res)=>{
    res.json(books)
})

app.get('/api/books/:id',(req,res)=>{
    let id = req.params.id
    let book = books.find(book=> book.id == id)
    if (book == undefined){
        return res.status(404).send('Book not found')
    }
    console.log(book);
    res.status(200).json(book)
})

app.post('/api/books',(req,res)=>{
    let {title,author,publishedYear}=req.body
    let idNum = books.length+1
    let newBook = {
        id:idNum,
        title:title,
        author:author,
        publishedYear:publishedYear
    }
    books.push(newBook)
    res.status(200).send(newBook)
})

