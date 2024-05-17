import {createSlice , nanoid} from '@reduxjs/toolkit'

const initialState = {
    days:[]
}
// days:[{
//     day:'2002-12-05',
//     tasks:[]},]
// }

export const todoSlice = createSlice({
    name:'tasks',
    initialState,
    reducers:{
        addTask:(state,action) => {
            const index = state.days.findIndex(item=>item.day === action.payload.date)
            if(index===-1){
                state.days.push({
                    day:action.payload.date,
                    tasks:[{id:nanoid(), task:action.payload.task, complete:false, edit:false}]
                })
            } else if(index!==-1){
                state.days[index].tasks.push({id:nanoid(), task:action.payload.task, complete:false, edit:false})
            }
        },
        deleteTask:(state,action)=>{
            const dayIndex = state.days.findIndex(item=>item.day === action.payload.date)
            const taskIndex = state.days[dayIndex].tasks.findIndex(item=> item.id === action.payload.id)
            state.days[dayIndex].tasks.splice(taskIndex,1)
        },
        toggleTask:(state,action)=>{
            const dayIndex = state.days.findIndex(item=>item.day === action.payload.date)
            const taskIndex = state.days[dayIndex].tasks.findIndex(item=> item.id === action.payload.id)
            state.days[dayIndex].tasks[taskIndex].complete = ! state.days[dayIndex].tasks[taskIndex].complete
        
        },
        toggleEdit:(state,action)=>{
            const dayIndex = state.days.findIndex(item=>item.day === action.payload.date)
            const taskIndex = state.days[dayIndex].tasks.findIndex(item=> item.id === action.payload.id)
            state.days[dayIndex].tasks[taskIndex].edit = ! state.days[dayIndex].tasks[taskIndex].edit
        
        },
        editTask:(state,action)=>{
            const dayIndex = state.days.findIndex(item=>item.day === action.payload.date)
            const taskIndex = state.days[dayIndex].tasks.findIndex(item=> item.id === action.payload.id)
            state.days[dayIndex].tasks[taskIndex].task = action.payload.task
        
        }
    }
})

export default todoSlice.reducer
export  const {addTask,deleteTask,toggleTask,editTask,toggleEdit} = todoSlice.actions