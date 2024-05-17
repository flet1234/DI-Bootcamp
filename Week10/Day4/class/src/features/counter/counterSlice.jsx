import { createSlice, createAsyncThunk } from  '@reduxjs/toolkit'

const initialState = {
    count: 0,
    count1: 0
}

export const delayIncrementThunk = createAsyncThunk('counter/delay', () => {
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            rej(-101)
        },5000)
    })
})

export const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        // counter/increment
        increment: (state) => {
            state.count++
        },
        decrement: (state) => {
            state.count--
        },
        reset: (state) => {
            state.count = 0
        },
        byNumber: (state,action) => {
            state.count += parseInt(action.payload)
        },
        incrementWithPrepare: {
            reducer(state, action){
                state.count += action.payload
            },
            prepare(param1,param2) {
                return {payload: param1 + param2}
            }
        },
        increment1: (state) => {
            state.count1++
        },
        // delayIncrement : (state ,action) => {
        //     setTimeout(()=>{
        //         state.count+=101
        //     },3000)
        // }
    },
    extraReducers(builder) {
        builder
        .addCase(delayIncrementThunk.pending, (state,action) => {
            state.count += 4
        })
        .addCase(delayIncrementThunk.rejected, (state,action)=>{
            state.count = action.error.message
        })
        .addCase(delayIncrementThunk.fulfilled, (state,action) => {
            state.count += action.payload
        })
    }
})

export const {increment , increment1} = counterSlice.actions
export const {decrement,reset,byNumber, incrementWithPrepare, delayIncrement} = counterSlice.actions
export default counterSlice.reducer