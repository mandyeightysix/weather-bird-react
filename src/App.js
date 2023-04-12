import React from "react";
import Weather from "./Weather";
import Forecast from "./Forecast";

import './App.css';

function App() {
  return (
    <div className="App">
      <Weather defaultCity = "Hamilton" />
      <Forecast />
      <footer>
        This project was coded by Amanda Pepin and is{" "}
        <a href="https://github.com/mandyeightysix/weather-bird-react" target="_blank" rel="noreferrer">
          open-sourced on GitHub
        </a>
        </footer>
    </div>
  );
}

export default App;
