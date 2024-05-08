import About from './componnents/About'
import Home from './componnents/Home'
import Form from './componnents/From'
import './App.css'
import {Routes, Route, Link} from 'react-router-dom'
import Shop from './componnents/Shop'
import Product from './componnents/Products'

function App() {
 


  return (
    <>
    <header>
      <nav>
        <Link to='/'>Home</Link>{' '}
        <Link to='/about'>About</Link>{' '}
        <Link to='/contact'>Contact</Link>{' '}
        <Link to='/shop'>Shop</Link>
      </nav>
    </header>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<><Form/> <About/></>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/product/:id' element={<Product/>}/>
        <Route path='*' element={<><h2>404 not found</h2></>}/>
      </Routes>
    </>
  )
}

export default App
