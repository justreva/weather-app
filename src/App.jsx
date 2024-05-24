import WeatherApp from "./components/WeatherApp/WeatherApp";
import { WeatherProvider } from "../src/context/WeatherContext";

function App() {
  return (
    <WeatherProvider>
      <WeatherApp />;
    </WeatherProvider>
  );
}

export default App;
