import React from "react";
import Search from "./Search";
import Weather from "./Weather";
import Forecast from "./Forecast";

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />
      <Weather />
      <Forecast />
      <footer>
        This project was coded by Amanda Pepin and is{" "}
        <a href="https://github.com/mandyeightysix/weather-bird-react" target="_blank" rel="noreferrer">
          open-sourced on GitHub
        </a>
        </footer>
        </div>
    </div>
  );
}

export default App;
