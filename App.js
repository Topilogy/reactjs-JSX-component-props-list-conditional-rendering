import './App.css';

function App() {
  const age = 15;
  if (age >= 18) {
    return (
      <h1>OVER AGE</h1>
    );
  }
  else {
    return (
      <div className = "App">
        <h1>UNDER AGE</h1>
      </div>
    )
  }
}


export default App;