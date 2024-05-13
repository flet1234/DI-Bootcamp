import { ADDING, DELETE, TOGGLE , EDIT } from "./action";

const initialState = {
    days:[{ date:'2024-05-08',
            tasks:[{task:'pukat',
                    complete:false
            }]
    }]
}

let counter = 1

export const reducer = (state = initialState,action) => {
    switch (action.type) {
        case ADDING:
            let newDays = state.days.map(day => {
                if (day.date === action.payload.date) {
                    return {
                        ...day,
                        tasks: [
                            ...day.tasks,
                            {
                                id: counter,
                                task: action.payload.task,
                                complete: false
                            }
                        ]
                    };
                }
                return day;
            });
            if (!newDays.some(day => day.date === action.payload.date)) {
                newDays.push({
                    date: action.payload.date,
                    tasks: [
                        {
                            id: counter,
                            task: action.payload.task,
                            complete: false
                        }
                    ]
                });
            }
            counter++; 
            return { ...state, days: newDays };
        case DELETE:
            let filtered = state.days.map(day => {
                let filteredTask = day.tasks.filter(item=>item.id!==action.payload)
                return {...day, tasks: filteredTask}
            })
            return {...state, days:filtered}
        case TOGGLE:
            let newToggledDays = state.days.map(day => {
                let newToggledTasks = day.tasks.map(item => {
                    if(item.id === action.payload) {
                        return {...item, complete : !item.complete}
                    }
                    return item
            })
                return {...day, tasks: newToggledTasks}
                })  
                return {...state,days:newToggledDays}
        case EDIT:
            let newEditedDays = state.days.map(item => {
                item.tasks.map(task => {
                    if(task.id === action.payload.id){
                        return {...task, task:action.payload.task}
                    }
                    return task
                })  
                })  
                return {...state,days:newEditedDays}
        default:
            return state
    }
}