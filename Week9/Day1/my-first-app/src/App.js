import logo from './logo.svg';
import './App.css';
import Hello from './Hello'
import users from './users.json'
import ShowUsers from './componnent/users';


console.log(users);

const students = [
  {id:1,name:'John'},
  {id:2,name:'Mary'},
  {id:3,name:'Anne'},

]
export default function App() {
  return (
    <div className="App">
      <header className="App-header">
       {
        students.map(item=>{
          return <Hello name={item.name} key={item.id}/>
        })
       }
       {users.map(item => {
        return <ShowUsers key={item.id} info={item}/>
       })}
      </header>
    </div>
  );
}

// export default App;
