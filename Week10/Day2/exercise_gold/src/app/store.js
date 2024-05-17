import {configureStore} from '@reduxjs/toolkit'
import { taskReducer } from '../features/taskReducer'

export default configureStore({
    reducer:{
        taskReducer
    }
})