import React, { useState } from "react";
import Weather from "./components/weather";
import "./styles/style.css";
const App = () => {
  const [city, setCity] = useState("");
  const handleInputChange = (e) => {
    setCity(e.target.value);
  };
  return (
    <div className="app">
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={handleInputChange}
      />
      <Weather city={city} />
    </div>
  );
};
export default App;
