import "./WeatherCard.css";

//Weather conditions
import Clear from "../../assets/clear.png";
import Rain from "../../assets/rain.png";
import Drizzle from "../../assets/drizzle.png";
import Snow from "../../assets/snow.png";
import Clouds from "../../assets/clouds.png";
//wind and humidity icons
import Humidity from "../../assets/humidity.png";
import Wind from "../../assets/wind.png";

const converToCelsius = (temp) => {
  return Math.round(((temp - 32) * 5) / 9);
};
const weatherIcons = {
  clear: Clear,
  rain: Rain,
  drizzle: Drizzle,
  snow: Snow,
  clouds: Clouds,
};

const weatherCondition = (condition, obj) => {
  const lowercaseCondition = condition.toLowerCase();
  if (obj.hasOwnProperty(lowercaseCondition)) {
    return obj[lowercaseCondition];
  }
};
export default function WeatherCard({ weather }) {

  if (!weather || !weather.name || !weather.weather || !weather.weather[0]) {
    return <div className="loading">loading...</div>;
  }

  return (
    <div className="weather-card">
      <div className="weather-card__content">
        <h1 className="tittle">Today</h1>
        <div className="weather-card__header">
          <div className="header__titles">
            <h1 className="weather-card__city">{weather.name}</h1>
            <h3 className="weather-card__state">{weather.weather[0].main}</h3>
          </div>

          <img
            src={weatherCondition(weather.weather[0].main, weatherIcons)}
            alt="state"
          />
        </div>

        <div className="weather-card__body">
          <h2 className="weather-card__tempeture">
            {converToCelsius(weather.main.temp)}°C
          </h2>
          <div className="weather-card__state">
            <div className="state__info">
              <img src={Humidity} alt="" />
              <div className="state__desc">
                <span>{weather.main.humidity}%</span>
                <span className="state__name">Humidity</span>
              </div>
            </div>

            <div className="state__info">
              <img src={Wind} alt="" />
              <div className="state__desc">
                <span>{weather.wind.speed.toFixed()} km/h</span>
                <span className="state__name">Wind Speed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
