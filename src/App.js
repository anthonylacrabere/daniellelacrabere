import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [people, setPeople] = useState();

  const fetchData = async () => {
    const response = await fetch("https://swapi.dev/api/people");

    const json = await response.json();

    if (json) {
      setPeople(json.results);
    }
  };

  useEffect(() => {
    fetchData();
    console.log(people);
  }, []);

  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
