import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { FaCaretDown } from "react-icons/fa";

function Dropdown() {
  const { getAllCountries, setSelectedOption, selectedOption, countries } =
    useContext(AppContext);

  <script src="https://unpkg.com/@themesberg/flowbite@latest/dist/flowbite.bundle.js"></script>;

  // Handler function to update the selected value
  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  return (
    <div className="dropdown flex">
      <label htmlFor="dropdown" className="pr-1">
        Filter by Area:
      </label>
      <div className="select-container flex">
        <select
          id="dropdown"
          className="select-box hover:cursor-pointer"
          name="dropdown"
          value={selectedOption}
          onChange={handleDropdownChange}
        >
          {countries.map((country, index) => {
            return (
              <option
                key={index}
                className="dropdown-option"
                value={country.strArea}
              >
                {country.strArea}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default Dropdown;
