import { createSelector } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { posts,getPosts,status } from "./postSlice";
import { useCallback } from "react";

export const usePostsSelector = () => {
    const selectorPosts = createSelector((posts), (posts) => posts)
    return useSelector(selectorPosts)
}

export const useStatusSelector = () => {
    const selectorStatus = createSelector((status), (status) => status)
    return useSelector(selectorStatus)
}

export const useGetPosts = () => {
    const dispatch = useDispatch()
    return useCallback (()=>{
        dispatch(getPosts())
    },[dispatch])
}