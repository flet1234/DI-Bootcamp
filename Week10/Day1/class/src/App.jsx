import { useState, useRef, useEffect} from 'react'
import './App.css'


function App() {
  // const [count, setCount] = useState(0)

  // const divRef = useRef()
  // const h2Ref = useRef()

  // const inputRef = useRef()
  
  // useEffect(()=>{
  //   console.log(divRef.current);
  //   divRef.current.style.color='red'


  // },[])

  // const changeToBlue = () => {
  //   h2Ref.current.style.color='blue'
  // }

  // const handleChange = (e) => {
  //   // inputRef.current = e.target.value
  //   console.log(inputRef.current.value);
  // }

  const [title,setTitle] = useState('My title')
  
  let name = 'Dan'

  const nameRef = useRef('Dan Ref')

  useEffect(()=>{
    name='aaa';
    nameRef.current = 'bbb'
    setTitle('ccc')
  },[])

  const ChangeName = () => {
    name = 'John'
    nameRef.current = 'John ref'
    console.log(nameRef.current);
  }

  const changeTitle = () =>{
    setTitle('Title Titlte')
  }
  return (
    <>
    <div >
       <h1>{name}</h1>
       <button onClick={ChangeName}>Change Name</button>
       <h1>{nameRef.current}</h1>
       <button onClick={ChangeName}>Change name ref</button>
    </div>
    <div>
      <h1>{title}</h1>
      <button onClick={changeTitle}>Change Title</button>
    </div>
    


    </>
  )
}

export default App
