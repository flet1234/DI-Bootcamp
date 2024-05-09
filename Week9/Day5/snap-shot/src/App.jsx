import { useState } from 'react'
import './App.css'
import searchIcon from './assets/search_8094123.png'
import Gallery from './components/Gallery'
import { Link, createBrowserRouter, RouterProvider, Outlet, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Root = () => {
  const [query,setQuery]=useState('space')
  const [query1,setQuery1]=useState('30')
  
  

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/${query}/${query1}`)

  }

  useEffect(()=>{
    navigate(`/${query}/${query1}`)
  },[])

  return(
    <>
    <h1>SnapShot</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input onChange={(e)=>setQuery(e.target.value)} placeholder='Search...'/><br/>
          <input type="number" onChange={(e)=>setQuery1(e.target.value)} placeholder='Quantity? default is 30'/>
        </div>
        <button type='submit' >{<img style={{width:'20px'}} src={searchIcon} alt='search icon'/>}</button>
      </form>
      <div></div>
    <Link className='link' to={'/sun/30'}>Sun  </Link>
    <Link className='link' to={'/sleep/30'}>Sleep  </Link>
    <Link className='link' to={'/hulahoop/30'}>Hulahoop  </Link>
    <Link className='link' to={'/pain/30'}>Pain</Link>
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
        path:'/:id/:num',
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
