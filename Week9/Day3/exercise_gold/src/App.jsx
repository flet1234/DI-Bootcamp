import { useState } from 'react'
import Modal from './Modal'
import ErrorBoundary from './ErrorBoundary'

function App() {
  const [show,setShow] = useState(true)


  if(show){
    return <>
      <button onClick={()=>setShow(!show)}>Occur an Error</button>
    </>
  }
  return (<ErrorBoundary>
        <Modal/>
      </ErrorBoundary>
  )
}

export default App
