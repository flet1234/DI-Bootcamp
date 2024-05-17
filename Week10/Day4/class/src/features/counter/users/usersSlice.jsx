import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    users:[],
    status: ''
}

export const getUsers = createAsyncThunk('users/getUsers', async()=>{
        try {
            let res = await fetch('https://jsonplaceholder.typicode.com/users')
            let data = await res.json()
             return data
        } catch (error) {
            console.log(error);
        }
        
       
        
    })


export const usersSlice = createSlice({
    name:'users',
    initialState,
    reducers:{
        adduser:(state,action) => {
            state.users.push({id:nanoid(), name: action.payload})
        },
        adduserPrepare: {
            reducer(state,action) {
                state.users.push(action.payload)
            },
            prepare(param1) {
                return {payload:{id:nanoid(),
                                name:param1
                }}
            }
        }
    },
    extraReducers(builder) {
        builder
        .addCase(getUsers.fulfilled, (state,action)=>{
            state.users = action.payload
            state.status = ''

    })
        .addCase(getUsers.pending, (state,action)=>{
            state.status = 'loading'

    })
        .addCase(getUsers.rejected, (state,action)=>{
            state.status = 'failed'

    })
}})

export default usersSlice.reducer
export const {adduser, adduserPrepare} = usersSlice.actions