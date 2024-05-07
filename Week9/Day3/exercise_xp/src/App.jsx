import { useState } from 'react'
import './App.css'
import BuggyCounter from './componnent/BuggyCounter'
import ErrorBoundary from './componnent/ErrorBoundary'
import Color from './componnent/Color'

function App() {
  
  

  return (
    <>
    <ErrorBoundary >
      <BuggyCounter/>
      <BuggyCounter/>
    </ErrorBoundary>
    <br></br>
    <hr></hr>
    <ErrorBoundary>
        <BuggyCounter/>
    </ErrorBoundary>
    <ErrorBoundary>
        <BuggyCounter/>
    </ErrorBoundary>
    <br></br>
    <hr></hr>
    <BuggyCounter/>
    <Color/>
    </>
  )
}

export default App
