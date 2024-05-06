import Hello from './components/Hello';
import HelloClass from './components/HelloClass';
import './App.css';
import ShowUsers from './components/users';
import React from 'react'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      users:[]
    }
  }

  // getUsers = () => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(res=> res.json())
  //   .then(data => {
  //     console.log(data);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   })
  getUsers = async() =>{
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await res.json()
      console.log(data);
      this.setState({users:data})
    } catch (error) {
      console.log(error);
    }
  }

  render(){
     return (
    <div className="App">
      <header className="App-header">
        <button onClick={this.getUsers}>Click Me!</button>
        {this.state.users.map(item => {
          return <ShowUsers key={item.id} {...item}/>
        })}
      </header>
    </div>
  );
  }
}




export default App;
