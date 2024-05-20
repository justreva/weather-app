import { useEffect, useState } from "react";

import { Error } from "../Error/Error";
import SearchBar from "../SearchBar/SearchBar";
import WeatherCard from "../WeatherCard/WeatherCard";
import { Forecast } from "../Forecast/Forecast";

import "./WeatherApp.css";
export default function WeatherApp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    let newCity = e.target.value;
    let adjustedCity =
      newCity.trim().slice(0, 1).toUpperCase() +
      newCity.trim().slice(1).toLowerCase();
    setCity(adjustedCity);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!city.trim()) {
      setError(true);
      return;
    }

    //USE YOUR OWN API KEY FROM https://openweathermap.org/api
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=71a410fb7f8d6bd2c232b0bead54e418`;

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setWeather(data);
        setError(false);
      })
      .catch((err) => {
        setError(true);
      });
  };

  return (
    <>
      <SearchBar handleSubmit={handleSubmit} handleChange={handleChange} />
      <div className="weather">
        <WeatherCard weather={weather} />
        <Forecast />
      </div>
    </>
  );
}
