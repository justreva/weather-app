import { CiSearch } from "react-icons/ci";
import "./SearchBar.css";
export default function SearchBar({handleSubmit, handleChange}) {


  
  return  <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <input className="search-bar__input" placeholder="Enter the city..." onChange={(e) => handleChange(e)}/>
        <button className="search-bar__button">
          <CiSearch />
        </button>
      </form>
    </div>
 
}
