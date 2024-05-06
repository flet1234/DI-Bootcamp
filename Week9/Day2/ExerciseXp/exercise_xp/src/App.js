import Car from './components/Car';
import './App.css';
import Events from './components/Events';
import Phone from './components/Phone';
import Color from './components/Color';
import { useEffect } from 'react';

const carinfo = {name: "Ford", model: "Mustang"};


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Color/>
        <Car {...carinfo}/>
        <Events/>
        <Phone/>
      </header>
    </div>
  );
}

export default App;
