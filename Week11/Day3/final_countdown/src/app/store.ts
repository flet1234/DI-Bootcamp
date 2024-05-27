import { configureStore, combineReducers} from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import tasksReducer from '../features/tasks/slice.ts'

const combineReducersApp = combineReducers({ tasksReducer})

const store = configureStore({
    reducer:combineReducersApp
})

export type StoreStateType = ReturnType<typeof store.getState>
export type StoreDispatchType = typeof store.dispatch

export const useAppDispatch: () => StoreDispatchType = useDispatch
export const useAppSelector: TypedUseSelectorHook<StoreStateType> = useSelector

export default store