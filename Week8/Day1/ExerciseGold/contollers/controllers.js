const blogPosts = [
    {   
        id:1,
        title: "Introduction to JavaScript",
        content: "JavaScript is a programming language that is widely used for web development.",
        timestamp: new Date("2022-03-15T10:00:00")
    },
    {
        id:2,
        title: "Getting Started with React",
        content: "React is a JavaScript library for building user interfaces.",
        timestamp: new Date("2022-03-20T14:30:00")
    },
    {
        id:3,
        title: "Node.js Fundamentals",
        content: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
        timestamp: new Date("2022-03-25T09:45:00")
    }
];

const getAllPosts = (req,res)=>{
    res.json(blogPosts)
}

const getPost = (req,res) => {
    let id = parseInt(req.params.id)
    let post = blogPosts.find(item => item.id === id)
    if (!post){
        res.status(404).send('There is no such id')
    }
    else{
        res.json(post)
    }
}

const createPost = (req,res) =>{
    let id = blogPosts.length+1
    let {title,content,timestamp} = req.body
    let newPost = {id,title,content,timestamp}
    blogPosts.push(newPost)
    res.json(newPost)
}

const updatePost = (req,res) =>{
    let id = parseInt(req.params.id)
    let {title,content,timestamp} = req.body
    let index = blogPosts.findIndex(item => item.id === id)
    if (index === -1){
        res.status(404).send('There is no id like that')
    }
    else{
        blogPosts[index].title=title
        blogPosts[index].content=content
        blogPosts[index].timestamp=timestamp
        res.json(blogPosts[index])
    }
}

const deletePost = (req,res)=>{
    let id = parseInt(req.params.id)
    let index = blogPosts.findIndex(item => item.id === id)
    if (index === -1){
        res.status(404).send('There is no id like that')
    }
    else{
        blogPosts.splice(index,1)
        res.json(blogPosts)
    }
}

module.exports ={
    getAllPosts,
    getPost,
    createPost,
    updatePost,
    deletePost
}