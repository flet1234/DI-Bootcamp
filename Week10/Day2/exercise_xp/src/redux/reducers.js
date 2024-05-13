import { ADDING, DELETE, TOGGLE } from "./action";

const initialState = {
    tasks:[]
}

let counter = 1

export const reducer = (state = initialState,action) => {
    switch (action.type) {
        case ADDING:

            let newTasks = [...state.tasks]
            let newTask = {id:counter,task:action.payload,complete:false}
            newTasks.push(newTask)
            counter++
            return {...state, tasks:newTasks}
        case DELETE:
            let filtered = [...state.tasks].filter(item=>item.id!==action.payload)
            return {...state, tasks:filtered}
        case TOGGLE:
            let newToggledTasks = state.tasks.map(item => {
                if(item.id===action.payload){
                    return {...item, complete:!item.complete}
                }
                return task
            })
            return {...state,tasks:newToggledTasks}
        default:
            return state
    }
}