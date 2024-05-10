import "./Forecast.css";
import Clear from "../../assets/clear.png"
export const Forecast = () => {
  return (
    <div className="forecast-container">
      <div className="forecast__content">
        <ul className="forecast__list">
          <li className="forecast__element">
            <div className="forecast__box">
              <h3 className="forecast__city">Moscow</h3>
              <span>21.03.2024</span>
            </div>

            <div className="forecast__tempeture">
							<img src={Clear} alt="" />
              <h3>9°C</h3>
            </div>
						<div className="forecast__box">
              <h3>53%</h3>
							<span>Humidity</span> 
            </div>
          </li>
          <li className="forecast__element">
            <div className="forecast__box">
              <h3 className="forecast__city">Moscow</h3>
              <span>21.03.2024</span>
            </div>
          </li>
          <li className="forecast__element">
            <div className="forecast__box">
              <h3 className="forecast__city">Moscow</h3>
              <span>21.03.2024</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
