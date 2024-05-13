import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducers";

const store = configureStore({
    reducer:{
        makeText:reducer
    }
})

export default store