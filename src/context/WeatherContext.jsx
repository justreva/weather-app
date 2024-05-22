import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState([]);

  const getWeather = (e) => {
    e.preventDefault();
    let city = e.target.city.value;
    let adjustedCity =
      city.trim().slice(0, 1).toUpperCase() +
      city.trim().slice(1).toLowerCase();
    axios.get(
      `https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${adjustedCity}&appid=71a410fb7f8d6bd2c232b0bead54e418`
    ).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    });
  };

  return (
    <WeatherContext.Provider value={{ getWeather }}>
      {children}
    </WeatherContext.Provider>
  );
};
