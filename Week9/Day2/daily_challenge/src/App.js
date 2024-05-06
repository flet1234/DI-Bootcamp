import {useState} from 'react'
import './App.css';




function App() {
  const [languages, setLanguages] = useState([
    {name: "Php", votes: 0},
    {name: "Python", votes: 0},
    {name: "JavaSript", votes: 0},
    {name: "Java", votes: 0}
  ])
  const voter = (i) =>{
    const newArray = [...languages]
    newArray[i].votes++
    setLanguages(newArray)
  }
  return (
    <>
    {languages.map((item,i)=>{
      return <div key={i}>{item.votes}  {item.name}  <button onClick={()=>voter(i)}>Click Here</button></div>
    })}
    </>
  );
}

export default App;
