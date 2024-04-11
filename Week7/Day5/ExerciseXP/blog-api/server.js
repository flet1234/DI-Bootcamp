// 🌟 Exercise 1: Building A RESTful API
// Instructions
// You’re tasked with building a RESTful API for a blog platform.
// Users should be able to create, read, update, and delete blog posts using different endpoints.

// Create a directory named blog-api.

// Inside the blog-api directory, open a terminal and run npm init to initialize a new Node.js project. Follow the prompts to set up your project.

// Install the express package by running npm install express in the terminal.

// Create a file named server.js.

// In server.js, require the express package and set up an Express app.

// Create a data array to simulate a database. Each item in the array should represent a blog post with properties like id, title, and content.

// Implement the following routes using Express:
// GET /posts: Return a list of all blog posts.
// GET /posts/:id: Return a specific blog post based on its id.
// POST /posts: Create a new blog post.
// PUT /posts/:id: Update an existing blog post.
// DELETE /posts/:id: Delete a blog post.

// Implement error handling for invalid routes and server errors.

// Start the Express app and listen on a specified port (e.g., 3000).
// -->

const express = require('express')
const app = express()

const data = [
    { id: 1, title: 'First Post', content: 'This is the content of the first post.' },
    { id: 2, title: 'Second Post', content: 'This is the content of the second post.' },
    { id: 3, title: 'Third Post', content: 'This is the content of the third post.' },
  ];
  
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.listen(3000,()=>{
  console.log('Servers is running');
})

app.get('/posts',(req,res)=>{
  res.json(data)
})

app.get('/posts/:id',(req,res)=>{
  let id = req.params.id
  let user = data.find(item => item.id == id)
  console.log(user);
  if (user == undefined){
    return res.sendStatus(404)
  }
  res.json(user)
})

app.post('/posts',(req,res)=>{
  data.push(req.body)
  res.json(data)
})

app.put('/posts/:id',(req,res)=>{
  let id = req.params.id
  let index = data.findIndex(item => item.id ==id)
  console.log(index);
  if (index == -1){
    return res.sendStatus(404)
  }
  let {title,content} = req.body
  data[index].title=title
  data[index].content=content
  res.json(data)
})

app.delete('/posts/:id',(req,res)=>{
  let id = req.params.id
  let index = data.findIndex(item => item.id ==id)
  if (index == -1){
    return res.sendStatus(404)
  }
  data.splice(index,1)
  res.json(data)
})