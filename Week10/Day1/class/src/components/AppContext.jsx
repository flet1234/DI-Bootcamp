import { useState, createContext } from 'react'
import './App.css'
import Display from './components/Display'
import Action from './components/Action'


export const AppContext = createContext()


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h2>UseContext / createContext</h2>
    <AppContext.Provider value={{counter:count,action:setCount, name:'zivush',}}>
      <Display />
      <Action />
    </AppContext.Provider>

    </>
  )
}

export default App
