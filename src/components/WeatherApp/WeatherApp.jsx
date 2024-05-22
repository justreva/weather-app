import { useEffect, useState } from "react";

import { Error } from "../Error/Error";
import SearchBar from "../SearchBar/SearchBar";
import WeatherCard from "../WeatherCard/WeatherCard";
import { Forecast } from "../Forecast/Forecast";

import { WeatherProvider } from "../../context/WeatherContext";

import "./WeatherApp.css";
export default function WeatherApp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    
    setCity(adjustedCity);
  };


  return (
    <>
      <WeatherProvider>
        <SearchBar />
      </WeatherProvider>
      {/* <div className="weather">
        <WeatherCard weather={weather} />
        <Forecast />
      </div> */}
    </>
  );
}
