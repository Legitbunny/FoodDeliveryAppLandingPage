import logo from "../assets/logo.png";
import { FaSearch } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="navbar flex flex-row px-10 md:w-10/12 justify-between items-center md:mx-auto pt-4 md:items-center ">
      <div className="logo">
        <img src={logo} className="md:h-[3.5rem] h-[2rem] " />
      </div>

      <div className="searchbar bg-white w-[13rem] md:w-[22rem] rounded-md h-[2.5rem] shadow-md flex items-center content-between py-0 px-1">
        <input
          placeholder="Search for restaurants and food"
          className="focus:outline-none bg-transparent border-none text-xs sm:text-[1rem] ml-1 w-full h-full"
        />

        <FaSearch
          id="search-icon"
          className="text-neutral-700 mr-[0.2rem] flex items-center justify-center"
        />
      </div>
    </div>
  );
}
