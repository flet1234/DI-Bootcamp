import { useState, useEffect } from 'react'
import './App.css'
import Form from './component/Form'

function App() {
  const [count, setCount] = useState('pidr')

  useEffect(()=>{
    getRes()
  },[])

  const getRes = async() => {
    const res = await fetch('http://localhost:5000/api/hello')
    const data = await res.json()
    setCount(data)
  }

  return (
    <>
      {count.msg}
      <Form/>
    </>
  )
}

export default App
