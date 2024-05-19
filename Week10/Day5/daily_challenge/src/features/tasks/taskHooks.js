import { useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import { state } from "./taskSlice";

export const useTaskFilter = (category,complete) => {
    if(category!==undefined && complete !==''){
        const selectorTasks = createSelector(state, (state) => state.tasks.filter(item => {
       return  item.category === category && item.complete === Boolean(Number(complete))}))
    return useSelector(selectorTasks)
    } if(category!==undefined){
        const selectorTasks = createSelector(state, (state) => state.tasks.filter(item => {
       return  item.category === category}))
    return useSelector(selectorTasks)
    } 
    else {
        const selectorTasks = createSelector(state, (state) => state.tasks)
        return useSelector(selectorTasks)
    }
    
}