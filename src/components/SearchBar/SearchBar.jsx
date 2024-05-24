import { useContext } from "react";
import { WeatherContext } from "../../context/WeatherContext";

import { CiSearch } from "react-icons/ci";

import "./SearchBar.css";

export default function SearchBar() {
  const {handleChange, handleSubmit} = useContext(WeatherContext)

  return (
    <div className="search-bar">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          className="search-bar__input"
          placeholder="Enter the city..."
          name="city"
          onChange={(e) => handleChange(e)}
        />
        <button type="submit" className="search-bar__button">
          <CiSearch />
        </button>
      </form>
    </div>
  );
}
