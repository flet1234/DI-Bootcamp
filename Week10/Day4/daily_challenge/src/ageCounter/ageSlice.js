import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const initialState={
    age:32,
    status:''
}

export const ageUp=createAsyncThunk('age/ageUp', async()=>{
   const delay = (time) => new Promise(resolve=> setTimeout(resolve,time))
   await delay(3000)
   return 1
})
export const ageDown=createAsyncThunk('age/ageDown', async()=>{
    const delay = (time) => new Promise(resolve=> setTimeout(resolve,time))
    await delay(3000)
    return -1
})

const ageSlice = createSlice({
    name:'age',
    initialState,
    reducer:{

    },
    extraReducers(builder){
        builder
        .addCase(ageUp.fulfilled, (state,action)=>{
            state.status=''
            state.age++
        })
        .addCase(ageUp.pending, (state,action)=>{
            state.status='pending'
        })
        .addCase(ageDown.pending, (state,action)=>{
            state.status='pending'
        })
        .addCase(ageDown.fulfilled, (state,action)=>{
            state.status=''
            state.age--
        })
    }
})

export default ageSlice.reducer