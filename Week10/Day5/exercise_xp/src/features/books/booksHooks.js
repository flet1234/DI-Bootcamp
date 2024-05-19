import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { state } from "./booksSlice";

export const useBooksInventory = () => {
    const selectorBooks = createSelector(state, (state) => state.books)
    return useSelector(selectorBooks)
}
export const useAdventureInventory = () => {
    const selectorBooks = createSelector(state, (state) => state.books.filter(item => {
       return item.genre === "Adventure"
    }))
    return useSelector(selectorBooks)
}
export const useRomanceInventory = () => {
    const selectorBooks = createSelector(state, (state) => state.books.filter(item => {
       return item.genre === "Romance"
    }))
    return useSelector(selectorBooks)
}
export const useFictionInventory = () => {
    const selectorBooks = createSelector(state, (state) => state.books.filter(item => {
       return item.genre === "Fiction"
    }))
    return useSelector(selectorBooks)
}
