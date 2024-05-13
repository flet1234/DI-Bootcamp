import { useState } from 'react'
import countries from '../src/assets/Countries-JSBOOTCAMP-W9-main/Countries'
import './App.css'

function App() {
  const [suggestions, setSuggestions] = useState([])
  const [text, setText] = useState('')

  const handleInput = (e)=>{
    const inputValue = e.target.value.toLowerCase()
    setText(e.target.value)
    setSuggestions(countries.filter((item,i)=>{
      return item.toLocaleLowerCase().includes(inputValue)}))
  }

  const handleClick = (e)=>{
    setText(e.target.textContent)
    setSuggestions([])
  }
  return (
    <>
      <input onChange={handleInput} type="text" placeholder='Input a country' value={text}/>
      <div style={{width:'300px', height:'400px', overflowY:"scroll"}}>{suggestions.map((item,i)=>{
        return (<li key={i} onClick={handleClick}>{item}</li>)
      })}</div>
      <div>Suggested: {suggestions.length}</div>
    </>
  )
}

export default App
