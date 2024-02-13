import React, { useContext } from "react";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import { AppContext } from "../context/AppContext";
import Pagination from "./Pagination";

const FoodItemsSection = () => {
  const { meals, mealsData, selectedOption, totalMeals, setTotalMeals } =
    useContext(AppContext);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    mealsData(selectedOption);
  }, [selectedOption]);

  const mealsPerPage = 8;
  const lastIndex = currentPage * mealsPerPage;
  const firstIndex = lastIndex - mealsPerPage;

  const currentMeals = meals ? meals.slice(firstIndex, lastIndex) : [];
  // setMeals(currentMeals);
  const pages = Math.ceil(meals.length / mealsPerPage);
  const numbers = [...Array(pages + 1).keys()].slice(1);

  return (
    <div className="w-full">
      <div
        className={`${
          currentMeals.length % 4 === 0
            ? ` grid-cols-2 grid md:grid-cols-4 md:grid-rows-1`
            : "grid grid-cols-4 grid-rows-2 gap-1 m-3 "
        }`}
      >
        {currentMeals.length ? (
          currentMeals.map((meal) => {
            return <Card key={meal.idMeal} meal={meal} />;
          })
        ) : (
          <div>Data not found</div>
        )}
      </div>
      <div className="flex items-center justify-center mb-4">
        <Pagination
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          numbers={numbers}
          pages={pages}
        />
      </div>
    </div>
  );
};

export default FoodItemsSection;
