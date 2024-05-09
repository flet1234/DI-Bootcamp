import { useState } from 'react'
import './App.css'
import searchIcon from './assets/search_8094123.png'
import Gallery from './components/Gallery'
import { Link, createBrowserRouter, RouterProvider, Outlet, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Root = () => {
  const [query,setQuery]=useState('')
  
  

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/${query}`)

  }

  useEffect(()=>{
    navigate(`/${query}`)
  },[])

  return(
    <>
    <h1>SnapShot</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={(e)=>setQuery(e.target.value)} placeholder='Search...'/><button type='submit' >{<img style={{width:'30px'}} src={searchIcon} alt='search icon'/>}</button>
      </form>
      <div></div>
    <Link to={'/sun'}>Sun  </Link>
    <Link to={'/sleep'}>Sleep  </Link>
    <Link to={'/hulahoop'}>Hulahoop  </Link>
    <Link to={'/pain'}>Pain</Link>
     <Outlet/>
    </>
  )
}


const router = createBrowserRouter([
  {
    path:'/',
    element:<Root/>,
    errorElement:<h1>Somethng went wrong</h1>,
    children:[
      {
        path:'/:id/',
        element:<Gallery />
      },
    ]
  }
])

function App() {

  return (
    <>
 
      <RouterProvider router={router}/>
 
    </>
  )
}

export default App
