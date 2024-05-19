import { useState } from "react"
import { useBooksInventory, useAdventureInventory, useFictionInventory, useRomanceInventory } from "./booksHooks"

const BookInventory = (props) => {

    const [genre,setGenre] = useState('')

    const books = useBooksInventory()
    const adventureBooks = useAdventureInventory()
    const fictionBooks = useFictionInventory()
    const romanceBooks = useRomanceInventory()

    const printBooks = () => {
        if(genre === 'Romance'){
            return romanceBooks.map(item => <div key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.author}</p>
                </div>)
        }
        if(genre === 'Adventure'){
            return adventureBooks.map(item => <div key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.author}</p>
                </div>)
        }
        if(genre === 'Fiction'){
            return fictionBooks.map(item => <div key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.author}</p>
                </div>)
    }
}


    return (
        <>
            <h1>Books</h1>
            <select onChange={(e)=>setGenre(e.target.value)}>
                <option value="">--Choose Your Desteny--</option>
                <option value="Romance">Romance</option>
                <option value="Fiction">Fiction</option>
                <option value="Adventure">Adventure</option>
            </select>
            {printBooks()}
        </>
    )
}

export default BookInventory