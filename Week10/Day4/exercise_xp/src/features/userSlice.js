import { createSlice , createAsyncThunk } from '@reduxjs/toolkit'

export const fetchUsers = createAsyncThunk('users/fetchUsers', async() => {
    let res = await fetch('https://jsonplaceholder.typicode.com/users')
    if(res.status !== 200){
        throw new Error(`Status: ${res.status}`)
    } else {
        let data = await res.json()
        // return rej(data)
        return data
    }
})

const initialState={
    users:[],
    status:''
}

export const userSlice = createSlice({
    name:'users',
    initialState,
    reducers:{

    },
    extraReducers(builder) {
        builder
        .addCase(fetchUsers.fulfilled, (state,action)=>{
            state.users=action.payload
            state.status=''
        })
        .addCase(fetchUsers.rejected, (state,action)=>{
            state.status='rejected'
            state.users=action.error.message
        })
        .addCase(fetchUsers.pending, (state,action)=>{
            state.status='pending'
        })
    }
})

export default userSlice.reducer