import { configureStore } from "@reduxjs/toolkit";
import ageReducer from '../ageCounter/ageSlice'

export default configureStore({
    reducer:{
        ageReducer
    }
})