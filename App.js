import './App.css';

function App() {
  return (
    <div className="App"> 
      <User name = "Temitope" age = {15} email = "topilogy@gmail.com" />
      <User name = "Funmilayo" age = {10} email = "funmi@gmail.com" />
      <User name = "Dupe" age = {12} email = "dupe@gmail.com" /> 
    </div>
  );
}

const User = (props) => {
  return (
    <div>
      <h1> {props.name} </h1>
      <h1> {props.age} </h1>
      <h1> {props.email} </h1>
    </div>
  );
};


export default App;