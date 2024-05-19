import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    books:[
        {
          id: 1,
          title: "To Kill a Mockingbird",
          author: "Harper Lee",
          genre: "Fiction"
        },
        {
          id: 2,
          title: "1984",
          author: "George Orwell",
          genre: "Romance"
        },
        {
          id: 3,
          title: "Pride and Prejudice",
          author: "Jane Austen",
          genre: "Romance"
        },
        {
          id: 4,
          title: "The Great Gatsby",
          author: "F. Scott Fitzgerald",
          genre: "Fiction"
        },
        {
          id: 5,
          title: "Moby-Dick",
          author: "Herman Melville",
          genre: "Adventure"
        }
      ],
}

export const booksSlice = createSlice({
    name:'books',
    initialState,
    reducers:{

    }
})

export const state = (state)=> state.booksReducer

export default booksSlice.reducer