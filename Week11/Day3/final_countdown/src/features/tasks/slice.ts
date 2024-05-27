import {createSlice, nanoid, PayloadAction} from '@reduxjs/toolkit'
import ListItem from '../../model/ListItem';
import { StoreStateType } from '../../app/store';


export type ActiveState = 'all' | 'active' | 'completed';

export enum EnumActiveState {
    All,
    Active,
    Completed,
}

export type InitialState = {
    tasks: ListItem[];
    filter: EnumActiveState 
}

const initialState: InitialState = {
    tasks:[],
    filter: EnumActiveState.All
}

export const tasksSlice = createSlice({
    name:'tasks',
    initialState,
    reducers:{ 
        add : (state, action:PayloadAction<string>)=>{
            const task:ListItem =  new ListItem(nanoid(),action.payload)
            state.tasks.push(task.serialize() as ListItem)
        },
        remove : (state,action:PayloadAction<string>)=>{
            state.tasks=state.tasks.filter((item)=>{return item.id !== action.payload})
        },
        check : (state,action:PayloadAction<string>) => {
            const indx=state.tasks.findIndex(item=>item.id === action.payload)
            state.tasks[indx].checked=!state.tasks[indx].checked
        },
        clear : (state) => {
            state.tasks=[]
        },
        active : (state,action:PayloadAction<EnumActiveState>) => {
            state.filter = action.payload
        },
        toggleEdit: (state,action:PayloadAction<string>)=>{
            const indx=state.tasks.findIndex(item=>item.id === action.payload)
            state.tasks[indx].edit=!state.tasks[indx].edit
        },
        edit: (state,action:PayloadAction<string>)=>{
            const indx=state.tasks.findIndex(item=>item.id === action.payload)
            state.tasks[indx].item=action.payload
        },
        
    }, // add, remove, check, clear, active
})

export const tasksState = (state:StoreStateType) => state.tasksReducer.tasks
export const filterState = (state: StoreStateType) => state.tasksReducer.filter

export default tasksSlice.reducer
export const {add , remove, check, clear, active, toggleEdit, edit} = tasksSlice.actions

//Tasks
// TaskTitle
// TaskFilterButtons
// Taskinput
// TaskLise
//   TaskItem
//      TaskRemove