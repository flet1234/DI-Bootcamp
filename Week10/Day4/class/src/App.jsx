import { useState } from 'react'
import Counter from './features/counter/Counter'
import './App.css'
import Users from './features/counter/users/Users'

function App() {

  return (
    <>
      <h2>Redux Tollkit</h2>
      <Counter/>
      <Users/>
    </>
  )
}

export default App
