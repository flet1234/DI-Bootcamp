const axios = require('axios')

let url = 'https://jsonplaceholder.typicode.com/posts'

const fetchPosts =  async(url)=>{
    try {
        res = await axios.get(url)
        return res.data
    } catch (error) {
        console.log(error);
    }
}

module.exports={
    fetchPosts
}
