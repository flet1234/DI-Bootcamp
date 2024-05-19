import  {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    posts:[],
    status:''
}

export const getPosts = createAsyncThunk('posts/getPosts', async()=>{
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        return res.data
    } catch (error) {
        console.error(error);
    }
})

const postSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{
        adreaction: (state,action)=>{
            const {id,name}=action.payload
            const post = state.posts.find(post => post.id === id) 
            if(post){
                post.reaction[name]++
            }
        }
    },
    extraReducers(builder){
        builder
        .addCase(getPosts.fulfilled, (state,action)=>{
            state.status = ''
            const loadedPosts = action.payload.map(post => {
                post.reaction = {
                    thumbsUp: 0,
                    wow: 0,
                    heart: 0,
                    rocket: 0,
                    coffee: 0,
                }
                return post
            })
                state.posts = loadedPosts


        })
        .addCase(getPosts.rejected, (state,action)=>{
            state.status = 'failed'
        })
        .addCase(getPosts.pending, (state,action)=>{
            state.status = 'loading'
        })
    }
})

export const posts = (state)=> state.postsReducer.posts
export const status = (state)=> state.postsReducer.status
export const {adreaction} = postSlice.actions

export default postSlice.reducer
