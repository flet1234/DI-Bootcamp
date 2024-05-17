import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice.jsx'
import  usersSlice  from "../features/counter/users/usersSlice.jsx";

export default configureStore({
    reducer:{
        counterReducer,
        usersSlice
    }
})