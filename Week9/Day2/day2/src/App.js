import React from 'react'
import './App.css'


const App = () => {

  // const [state,setState] = useState()
  const [count,setCount] = React.useState(0)
  const [name,setName] = React.useState('John')
  const [users,setUsers] = React.useState()

  React.useEffect(()=>{
    console.log('useEffect');
    if (count ===0){
      setCount(count + 100)
    }
    return () => console.log(('unmount'));
  }, [count])

  const addOne = () => {
    setCount(count+1)
    setName('Dan')
  }



  const getUsers = () =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
      setUsers(data)
    })
    .catch(e=>{
      console.log(e);
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={addOne}>+</button>
        {count}
        {name}
        <div>
          <button onClick={getUsers}>getUsers</button>
          <h2>name of users</h2>
          {
          users ? users.map(item => {
            return item.name
          }):null}
        </div>
      </header>
    </div>
  );
}





export default App;
