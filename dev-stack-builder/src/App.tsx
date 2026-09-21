import technologies from "./data/technologies.json";

function App() {
  console.log(technologies);

  return (
    <div>
      <h1>{technologies[0].name}</h1>
    </div>
  );
}

export default App;
