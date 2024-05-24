import { useContext } from "react";
import { WeatherContext } from "../../context/WeatherContext";

import { Error } from "../Error/Error";
import SearchBar from "../SearchBar/SearchBar";
import WeatherCard from "../WeatherCard/WeatherCard";
import { Forecast } from "../Forecast/Forecast";

import "./WeatherApp.css";
export default function WeatherApp() {
  const { weather, error } = useContext(WeatherContext);
  console.log(weather, error);

  return (
    <>
      <SearchBar />
      {weather ? <WeatherCard weather={weather} /> : <Error />}

     {/* <Forecast /> */}
    </>
  );
}
