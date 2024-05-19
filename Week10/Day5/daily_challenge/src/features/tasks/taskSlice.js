import {createSlice} from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit'

const initialState = {
    tasks:[]
}

export const tasksSlice = createSlice({
    name:'tasks',
    initialState,
    reducers:{
        addTask: (state,action) => {
            state.tasks.push({id:nanoid(), task:action.payload.task, edit:false, category: action.payload.category, complete:false})
        },
        deleteTask: (state,action) => {
            state.tasks = state.tasks.filter(item=> item.id !== action.payload)
        },
        toogleTask: (state,action) => {
            const indx = state.tasks.findIndex(item=>item.id === action.payload)
            state.tasks[indx].complete = !state.tasks[indx].complete
        },
        editToggleTask: (state,action) => {
            const indx = state.tasks.findIndex(item=>item.id === action.payload)
            state.tasks[indx].edit = !state.tasks[indx].edit
        },
        editTask: (state,action) => {
            const indx = state.tasks.findIndex(item=>item.id === action.payload.id)
            state.tasks[indx].task = action.payload.task
        },
        editCategory: (state,action) => {
            const indx = state.tasks.findIndex(item=>item.id === action.payload.id)
            state.tasks[indx].category = action.payload.category
            state.tasks[indx].edit = !state.tasks[indx].edit
        },
        deleteCategory: (state,action) => {
            state.tasks = state.tasks.filter(item=> item.category !== action.payload)
        },
    }
})

export const {addTask,deleteTask,toogleTask,editToggleTask,editTask,deleteCategory,editCategory} = tasksSlice.actions
export const state = (state)=>state.tasksReducer
export default tasksSlice.reducer