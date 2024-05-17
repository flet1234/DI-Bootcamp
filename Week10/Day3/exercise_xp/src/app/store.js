import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todoList/todoSlice";

export default configureStore({
    reducer:{
        todoReducer
    }
})