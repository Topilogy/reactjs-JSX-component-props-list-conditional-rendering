import './App.css';

import './App.css';

function App() {
  const names = ["Temitope", "Busayo", "Johnson", "Kikelomo"];
  return (
    <div className="App">
      {names.map((names, key) => {
        return <h1 key={key}>{names}</h1>
      })}
    </div>
  );
}


export default App;