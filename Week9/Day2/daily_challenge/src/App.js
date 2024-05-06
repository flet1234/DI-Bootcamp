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
    <div style={{width:'200px',margin:'20px auto',backgroundColor:'aliceblue',display:'flex',flexDirection:'column'}}>
    {languages.map((item,i)=>{
      return <div style={{display:'flex',justifyContent:'space-between',border:'solid 1px black', margin:'5px', textShadow:'1px 1px'}}  key={i}>{item.votes}  {item.name}  <button style={{border:'none',color:'green',backgroundColor:'aliceblue'}} onClick={()=>voter(i)}>Click Here</button></div>
    })}
    </div>
  );
}

export default App;
