import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState([]);
  const [error, setError] = useState("")

  const handleChange = (e) => {
    setCity(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    getWeather(city)
  }

  const getWeather = (city) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=71a410fb7f8d6bd2c232b0bead54e418`
      )
      .then((res) => {
        setWeather(res.data)
        setError(false)
      })
      .catch((err) => {
        setWeather([])
        setError(true)

      });
  };

  useEffect(() => {
    getWeather(city)
    console.log("changed")
  }, [city])

  return (
    <WeatherContext.Provider value={{ getWeather , handleChange, handleSubmit,  error, weather }}>
      {children}
    </WeatherContext.Provider>
  );
};
