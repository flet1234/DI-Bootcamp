import Hello from './components/Hello';
import HelloClass from './components/HelloClass';
import './App.css';
import ShowUsers from './components/users';
import React from 'react'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      number:0,
      users:[]
    }
    console.log('constructor');
  }
  // get1up = () => {
  //   this.setState({number:this.state.number+1})
  // }

  // get1down = () => {
  //   this.setState({number:this.state.number-1})
  // }

  setCount = (num) => {
    this.setState({number:this.state.number+num})
  }

  componentDidMount = () => {
    console.log('did mount');
    this.setState({number: 15})
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        this.setState({users:data})
      })
  }

  componentDidUpdate = (prevProps, prevState) => {
    console.log('Update', prevState);
    if(prevState.users.length > 0){
      // this.setState({number:20})
    }
  }


  render(){
    console.log('render');
     return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => this.setCount(1)}>+</button>
        {this.state.number}
        <button onClick={()=> this.setCount(-1)}>-</button>
        <h2>Users</h2>
        {
          this.state.users.map(item => {
            return <div>{item.name}</div>
          })
        }
      </header>
    </div>
  );
  }
}




export default App;
