import logo from './logo.svg';
import './App.css';
import UserFavoriteAnimals from './UserFavoriteAnimals';
import Exercise from './Exercise3';

const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals : ['Horse','Turtle','Elephant','Monkey']
};

const Animals = [
  "Dog",
  "Cat",
  "Elephant",
  "Tiger",
  "Penguin"
];

function App() {
  const myelement = <h1>I love JSX!</h1>
  const sum = 5+5
  return (
    <div className="App">
      <Exercise/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {myelement}
        </a>
        <p>
          React is {sum} times better with JSX!
        </p>
        <h3>{user.firstName}</h3>
        <h3>{user.lastName}</h3>
        <UserFavoriteAnimals favAnimals={Animals}/>
        
      </header>
    </div>
  );
}

export default App;
