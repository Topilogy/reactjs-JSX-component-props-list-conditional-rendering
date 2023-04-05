import './App.css';

function App() {
  const planets = [
    {name: "Mars", isGasPlanet: true},
    {name: "Earth", isGasPlanet: false},
    {name: "Jupiter", isGasPlanet: true},
    {name: "Venus", isGasPlanet: false},
    {name: "Uranus", isGasPlanet: true},
  ];

  return (
    <div className="App">
      {planets.map((planet, key) => {
        if (planet.isGasPlanet) return <h1>{planet.name}</h1>;   
      })}
    </div>
  );
}



export default App;