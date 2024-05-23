// import Heading from './components/Heading'
import './App.css'
// import Section from './components/Section'
// import Counter from './components/Counter'
import { useRef, KeyboardEvent, MouseEvent, useCallback , useMemo, ChangeEventHandler} from 'react'
// import List from './components/List'
type fibFunc = (n:number) => number

const fib:fibFunc = (n) => {
  if(n<2) return n
  return fib(n-1) + fib (n-2)
}

const myNum: number = 40

function App() {
  // const [count,setCount]=useState<number>(0)

  const inputRef = useRef<HTMLInputElement>()

  console.log(inputRef.current?.value);
  
  const numRef = useRef<number>(0)

  console.log(numRef.current);

  const handleChange = (e:any):void => {
    console.log(e.currentTarget.value);
    
  }

  const add = useCallback((e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>):void=>{
  console.log(e);
  },[])


const fibResult = useMemo<number>(()=> fib(myNum), [myNum])

  return (
    <>
      <input type="text" ref={inputRef} onInput={handleChange}/>
      <button onClick={add}>Click ME</button>
      {fibResult}
     {/* <h2>Typescript react</h2>
     <Heading title="My Header"/>
     <Section >
      <h3>My children</h3>
     </Section>
     <Counter setCount={setCount}><h2>{count}</h2></Counter>
     <List items={[1,2,3,'df']}/> */}
    </>
  )
}

export default App
