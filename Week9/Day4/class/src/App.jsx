import About from './componnents/About'
import Home from './componnents/Home'
import Form from './componnents/From'
import './App.css'
import Shop from './componnents/Shop'
import Product from './componnents/Products'
import { Link, createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

/** Routering */
const Root = () =>{
  return(
    <>
      <header>
        <nav>
          <Link to={'/'}>Home</Link>
          <Link to={'/about'}>About</Link>
          <Link to={'/shop'}>Shop</Link>
        </nav>
      </header>
      <Outlet/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path:'/',
    element:<Root/>,
    errorElement: <h2>Opps...</h2>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/shop',
        element:<Shop/>
      },
      {
        path:'/product/:id',
        element:<Product/>
      }
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
