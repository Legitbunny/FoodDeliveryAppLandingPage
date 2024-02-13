import React, { useState } from "react";
import Dropdown from "./Dropdown";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { IoClose } from "react-icons/io5";

const FiltersSection = () => {
  const { isSort, setIsSort, meals, sortMealsAlphabetically, selectedOption } =
    useContext(AppContext);
  const [activeFilter, setActiveFilter] = useState({
    isSort: false,
    fastDelivery: false,
    rating: false,
    pureVeg: false,
    offer: false,
    rs300to500: false,
    lessThan300: false,
    isNewOnSwiggy: false,
  });
  const [data, setData] = useState();

  const closeIconHandler = () => {
    setData(!activeFilter);
  };

  const handleFilterChange = (filter) => {
    setActiveFilter({ ...activeFilter, [filter]: !activeFilter[filter] });
  };

  const sortChangeHandler = () => {
    setIsSort(!isSort);
    sortMealsAlphabetically(meals);
  };

  return (
    <div className="pt-3 ">
      <p className="text-bold text-xl m-1 mb-3 sm:text-lg md:text-xl lg:text-2xl xl:text-2xl text-center sm:text-left">
        Restaurants with online food delivery in {selectedOption}
      </p>

      <div className="flex flex-wrap gap-1 sm:flex-row filters-wrapper py-4">
        <div
          className="dropdown bg-white  text-gray-700 text-sm px-4 py-2 flex justify-center items-baseline 
                border-[0.15rem] rounded-full select-none"
        >
          <Dropdown />
        </div>

        <div
          className={`bg-white gap-1 select-none hover:cursor-pointer text-gray-700 text-sm px-4 py-2 flex justify-center items-center 
                border-[0.15rem] rounded-full ${
                  activeFilter.isSort ? "active-filter" : ""
                }`}
          onClick={() => handleFilterChange("isSort")}
        >
          <div onClick={sortChangeHandler}>Sort Alphabetically</div>
          {activeFilter.isSort && (
            <IoClose
              onClick={() => handleFilterChange("isSort")}
              className="ml-1"
            />
          )}
        </div>
        <div
          className={`bg-white gap-1 select-none hover:cursor-pointer text-gray-700 text-sm px-4 py-2 flex justify-center items-center 
                border-[0.15rem] rounded-full ${
                  activeFilter.fastDelivery ? "active-filter" : ""
                }`}
          onClick={() => handleFilterChange("fastDelivery")}
        >
          <div>Fast Delivery</div>
          {activeFilter.fastDelivery && (
            <IoClose
              onClick={() => handleFilterChange("fastDelivery")}
              className="ml-1"
            />
          )}
        </div>
        <div
          className={`bg-white gap-1 select-none hover:cursor-pointer text-gray-700 text-sm px-4 py-2 flex justify-center items-center 
                border-[0.15rem] rounded-full ${
                  activeFilter.isNewOnSwiggy ? "active-filter" : ""
                }`}
          onClick={() => handleFilterChange("isNewOnSwiggy")}
        >
          <div>New on Swiggy</div>
          {activeFilter.isNewOnSwiggy && (
            <IoClose
              onClick={() => handleFilterChange("isNewOnSwiggy")}
              className="ml-1"
            />
          )}
        </div>
        <div
          className={`bg-white gap-1 select-none hover:cursor-pointer text-gray-700 text-sm px-4 py-2 flex justify-center items-center 
                border-[0.15rem] rounded-full ${
                  activeFilter.rating ? "active-filter" : ""
                }`}
          onClick={() => handleFilterChange("rating")}
        >
          <div>Ratings 4.0+</div>
          {activeFilter.rating && (
            <IoClose
              onClick={() => handleFilterChange("rating")}
              className="ml-1"
            />
          )}
        </div>
        <div
          className={`bg-white gap-1 select-none hover:cursor-pointer text-gray-700 text-sm px-4 py-2 flex justify-center items-center 
                border-[0.15rem] rounded-full ${
                  activeFilter.pureVeg ? "active-filter" : ""
                }`}
          onClick={() => handleFilterChange("pureVeg")}
        >
          <div>Pure Veg</div>
          {activeFilter.pureVeg && (
            <IoClose
              onClick={() => handleFilterChange("pureVeg")}
              className="ml-1"
            />
          )}
        </div>
        <div
          className={`bg-white gap-1 select-none hover:cursor-pointer text-gray-700 text-sm px-4 py-2 flex justify-center items-center 
                border-[0.15rem] rounded-full ${
                  activeFilter.offer ? "active-filter" : ""
                }`}
          onClick={() => handleFilterChange("offer")}
        >
          <div>Offers</div>
          {activeFilter.offer && (
            <IoClose
              onClick={() => handleFilterChange("offer")}
              className="ml-1"
            />
          )}
        </div>
        <div
          className={`bg-white gap-1 select-none hover:cursor-pointer text-gray-700 text-sm px-4 py-2 flex justify-center items-center 
                border-[0.15rem] rounded-full ${
                  activeFilter.rs300to500 ? "active-filter" : ""
                }`}
          onClick={() => handleFilterChange("rs300to500")}
        >
          <div>Rs.300 - Rs.500</div>
          {activeFilter.rs300to500 && (
            <IoClose
              onClick={() => handleFilterChange("rs300to500")}
              className="ml-1"
            />
          )}
        </div>
        <div
          className={`bg-white gap-1 select-none hover:cursor-pointer text-gray-700 text-sm px-4 py-2 flex justify-center items-center 
                border-[0.15rem] rounded-full ${
                  activeFilter.lessThan300 ? "active-filter" : ""
                }`}
          onClick={() => handleFilterChange("lessThan300")}
        >
          <div>Less than Rs.300</div>
          {activeFilter.lessThan300 && (
            <IoClose onClick={closeIconHandler} className="ml-1" />
          )}
        </div>
      </div>
    </div>
  );
};

export default FiltersSection;
