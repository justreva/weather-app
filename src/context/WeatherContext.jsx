import { createContext, useEffect, useState } from "react";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
	const [weather, setWeather] = useState([])

	useEffect(() => {
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
	}, [])
};


