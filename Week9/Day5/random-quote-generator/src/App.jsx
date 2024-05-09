import { useEffect,useState } from 'react'
import './App.css'
import QuotesDatabase from './assets/QuotesDatabase'

function App() {
  const [color,setColor]=useState({})
  const [quoteData,setQuoteData]=useState('')
  const [random,setRandom]=useState(1)
  let randomNum = 1
  
  const newColor = () => {
    let randomNumForColor = Math.floor(Math.random()*256)
    let randomNumForColor2 = Math.floor(Math.random()*256)
    let randomNumForColor3 = Math.floor(Math.random()*256)
    setColor({color1:randomNumForColor,
              color2:randomNumForColor2,
              color3:randomNumForColor3})
  }

  
  const newQuote = (e) => {
    while (randomNum===random){
      randomNum = Math.floor(Math.random()*QuotesDatabase.length)
    }
    setRandom(randomNum)
    setQuoteData(QuotesDatabase[random])
    newColor()
  }

  useEffect(()=>{
      newQuote()
      },[])


  return (
    <div className='bigboy' style={{backgroundColor:`rgb(${color.color1},${color.color2},${color.color3})`}}>
      <div className='smallboy' style={{background:'white'}}>
        <h2 className='mainText' style={{color:`rgb(${color.color1},${color.color2},${color.color3})`}}>{quoteData.quote}</h2>
        <h6 className='mainText' style={{color:`rgb(${color.color1},${color.color2},${color.color3})`}}>-{quoteData.author}-</h6>
        <button onClick={newQuote} style={{background:`rgb(${color.color1},${color.color2},${color.color3})`,color:'white'}}>New quote</button>
      </div>
    </div>
  )
}

export default App
