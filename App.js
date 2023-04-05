import './App.css';

function App() {
  const users = [
    {name: "Temitope", age: "26"},
    {name: "Modupe", age: "20"},
    {name: "Funmilayo", age: "16"},
  ];
  return (
    <div className="App">
      {users.map((users, key) => {
        return (
          <User name = {users.name} age = {users.age}/>
        )
      })}
    </div>
  );
}
const User = (props) => {
  return (
    <div>
      {props.name}
      {props.age}
    </div>
  )
}



export default App;