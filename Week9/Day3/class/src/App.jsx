import { useState, useEffect} from 'react'
// import Parent from './componnet/Parent'
// import Child from './componnet/Child'
import './App.css'
import Counter from './componnet/Counter'
import ErrorBoundary from './ErrorBoundary'
import Child from './componnet/Child'


function App() {
  
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type='submit' value='Submit'/>
    </form>
    <h2>Error Boundary</h2>
    {/* <Parent auth='admin'>
      <Child/>
    </Parent> */}
  <ErrorBoundary fallback={<p>Counter 1 is down</p>}>
    <Counter/>
  </ErrorBoundary>
    

    <Counter/>
    </>
  )
}

export default App
