import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Weather.css";
const Weather = ({ city }) => {
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    const fetchWeather = async () => {
      if (city) {
        try {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid={YOUR_API}&units=m
etric`

            //Replace YOUR_API with your actual API key from OpenWeatherMap.org
          );
          setWeather(response.data);
        } catch (error) {
          console.error("Error fetching the weather data", error);
        }
      }
    };
    fetchWeather();
  }, [city]);
  if (!weather) {
    return <div>Please enter a city to get the weather information.</div>;
  }
  return (
    <div className="weather">
      <h2>Weather in {weather.name}</h2>
      <p>Temperature: {weather.main.temp} °C</p>
      <p>Humidity: {weather.main.humidity} %</p>
      <p>Condition: {weather.weather[0].description}</p>
    </div>
  );
};
export default Weather;
