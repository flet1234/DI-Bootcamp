import {configureStore} from '@reduxjs/toolkit'
import { tasksReducer } from '../features/tasks/tasksReduser'

export default configureStore({
    reducer: {
        tasksReducer,
    }
})