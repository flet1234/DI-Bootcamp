import Navbar from './components/Navbar'
import './App.css'
import Footer from './components/Footer'
import MainPage from './components/MainPage'
import {Link , createBrowserRouter, RouterProvider, Outlet, useNavigate } from 'react-router-dom'





function App() {
  
  return (
    <>
      <Navbar/>
      <MainPage/>
      <Footer/>
    </>
  )
}

export default App
