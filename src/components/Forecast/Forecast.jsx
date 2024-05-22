import "./Forecast.css";
import Clear from "../../assets/clear.png";
export const Forecast = () => {
  return (
    <div className="forecast-container">
      <div className="forecast__content">
        <ul className="forecast__list">
          <li className="forecast__element">
            <h3 className="forecast__day">Monday</h3>
            <div className="forecast__image">
              <img src={Clear} alt="" />
            </div>
            <h3 className="forecast__tempeture">9°C</h3>
          </li>
        </ul>
      </div>
    </div>
  );
};
