import { useState } from "react"

const Forms2 = (props) => {
    const [sendStatus,setSendStatus]=useState('')
    const [newBook,setNewBook]=useState({})
    const makeNewBook = (e) =>{
        e.preventDefault()
        setNewBook({title:e.target.title.value,
                    author:e.target.author.value,
                    genre:e.target.genre.value,
                    yearPublished:e.target.yearPublished.value
        })
        console.log(newBook);
        setSendStatus('data Sent!')
    }

    return  <form onSubmit={makeNewBook} style={{display:'flex',flexDirection:'column'}}>
              <h1>NewBook</h1>
              <p>{sendStatus}</p>
              <div><label>Title:</label><input name="title"></input></div>
              <div><label>Author:</label><input name="author"></input></div>
              <div><label>Genre:</label><input name="genre"></input></div>
              <div><label>Year Published:</label><input name="yearPublished"></input></div>
              <button type="submit">Submit</button>
            </form>
    
}

export default Forms2