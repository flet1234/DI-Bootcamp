import { useCallback } from "react";
import { createSelector } from "@reduxjs/toolkit";
// import { useDispatch,useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../app/store";
import { add, remove, check, clear, active, EnumActiveState, tasksState, filterState, toggleEdit , edit} from './slice'

export const useTasks = () => {
    return useAppSelector(
        createSelector([tasksState,filterState], (tasks,filter)=> {
            switch (filter) {
                case EnumActiveState.Active:
                    return tasks.filter((task) => !task.checked)
                case EnumActiveState.Completed:
                    return tasks.filter((task) => task.checked)
                default:
                    return tasks
            }
        })
    )
}

export const useTask = (id:string) => {
    return useAppSelector(
        createSelector([tasksState],(tasks) => {
            tasks.find((task) => task.id === id)
        })
    )
}

// get filter

export const useFilter = () => {
    return useAppSelector(createSelector([filterState],(filter)=>filter))
}

// set filter

export const useSetFilter = () => {
    const dispatch = useAppDispatch()
    return useCallback(
        (filter:EnumActiveState)=>{
            dispatch(active(filter))
        }, [dispatch]
    )
}

export const useAddTask = () => {
    const dispatch = useAppDispatch()
    return useCallback(
        (task:string)=>{
            dispatch(add(task))
        }, [dispatch]
    )
}

// remove task

export const useRemoveTask = () => {
    const dispatch=useAppDispatch()
    return useCallback(
        (id:string) => {
            dispatch(remove(id))
        },[dispatch]
    )
}

// check

export const useCheckTask = () => {
    const dispatch = useAppDispatch()
    return useCallback(
        (id:string) => {
            dispatch(check(id))
        },[dispatch]
    )
}

//clear

export const useClearTask = () => {
    const dispatch = useAppDispatch()
    return useCallback(()=>{
        dispatch(clear())
    },[dispatch])
}

export const useToggleEdit = () => {
    const dispatch = useAppDispatch()
    return useCallback((id:string)=>{
        dispatch(toggleEdit(id))
    },[dispatch])
}

export const useEdit = () => {
    const dispatch = useAppDispatch()
    return useCallback((item:string)=>{
        dispatch(edit(item))
    },[dispatch])
}