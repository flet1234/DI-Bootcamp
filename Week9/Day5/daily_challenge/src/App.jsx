import { useState } from 'react'

import './App.css'

function App() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const [result,setResult] = useState()
  const [select,setSelect] = useState('addition')

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(select==='substraction'){
      setResult(parseInt(count1)-parseInt(count2))
    } else if(select==='multiplication'){
      setResult(parseInt(count1)*parseInt(count2))
    } else if(select==='division'){
      setResult(parseInt(count1)/parseInt(count2))
    } else{
      setResult(parseInt(count1)+parseInt(count2))
    }
    
  }
  
  return (
    <><h1>Calculator 3000</h1>
      <form onSubmit={handleSubmit}>
      <select onChange={(e)=>setSelect(e.target.value)} type="number" >
          <option value={'addition'}>Addition</option>
          <option value={'substraction'}>Substraction</option>
          <option value={'multiplication'}>Multiplication</option>
          <option value={'division'}>Division</option>
        </select> <br />
        <input onChange={(e)=>setCount1(e.target.value)} type="number" />
        <input onChange={(e)=>setCount2(e.target.value)} type="number" /> <br />
        <input type="submit" value={'Add them'}/> <br />
        <h1>Result is: {result}</h1>
      </form>
    </>
  )
}

export default App
