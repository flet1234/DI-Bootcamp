import {v4 as uuidv4} from 'uuid'
export const ADD_TASK = 'add_task'
export const DELETE_TASK = 'delete_task'
export const EDIT_TASK = 'edit_task'
export const COMPLETE_TASK = 'complete_task'

const initialState = {
    category:{  name,
                tasks:[]
            }
}

export const taskReducer = (state=initialState,action)=>{
    switch (action.type) {
        case ADD_TASK:
            const newTasks = [...state.category.tasks]
            newTasks.push({id:uuidv4(), task:action.task, complete:false, edit:false})
            const newCategory = {...state.category, name:action.name, tasks:newTasks}
            return {...state, category:newCategory}
        default:
            return state
    }
}