import React from "react";
import Weather from "./Weather";

import './App.css';

function App() {
  return (
    <div className="App">
      <div class="weather-app-wrapper">
      <Weather defaultCity = "Hamilton" />
      <footer>
        </footer>
    </div>
    </div>
  );
}

export default App;
