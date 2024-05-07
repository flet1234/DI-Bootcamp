import { useState, useEffect} from 'react'
import './App.css'
import Search from './componnet/Search'

function App() {
  const [users, setUsers] =useState([])
  const [search,setSearch]=useState('')
  useEffect(()=>{
    getData()
    
    
  },[])

  const getData = async()=>{
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await res.json()
      setUsers(data)
    } catch (error) {
      console.log(error);
    }
  }

  const filter = users.filter(item=>{
      return item.name.toLowerCase().includes(search.toLowerCase())
    })

  return (
    <>
     <h2>Users:</h2>
     <Search a={setSearch}/>
     {filter.map((item)=>{
      return <div key={item.id}>{item.name}</div>
     })}
    </>
  )
}

export default App
