import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { FaCaretDown } from "react-icons/fa";

function Dropdown() {
  const { getAllCountries, setSelectedOption, selectedOption, countries } =
    useContext(AppContext);

  // Handler function to update the selected value
  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  return (
    <div className="dropdown flex">
      <label htmlFor="dropdown" className="pl-4 ">
        Filter by Area:
      </label>

      <div class="dropdown">
        <button type="button" className="dropdown-toggle ">
          Select Country...
        </button>
        <ul
          class="dropdown-menu hover:cursor-pointer h-[20rem]  overflow-y-auto"
          value={selectedOption}
          onChange={handleDropdownChange}
        >
          {countries.map((country, index) => {
            return (
              <li key={index} value={country.strArea}>
                <label for={country.strArea} className="hover:cursor-pointer">
                  <input
                    type="radio"
                    id={country.strArea}
                    name="myRadio"
                    value={country.strArea}
                    className="m-2"
                  />
                  {country.strArea}
                </label>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Dropdown;
