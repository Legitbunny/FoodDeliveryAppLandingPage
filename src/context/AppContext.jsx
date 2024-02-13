import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

//creation of context
export const AppContext = createContext();

//provider creation
export default function AppContextProvider({ children }) {
  const [meals, setMeals] = useState([]);
  const [isSort, setIsSort] = useState(false);
  const [countries, setCountries] = useState([]);
  // State to manage the selected value
  const [selectedOption, setSelectedOption] = useState("Indian");

  async function mealsData(selectedOptions) {
    let API_INDIANMEALS = `${baseUrl}filter.php?a=${selectedOptions}`;

    try {
      const res = await fetch(API_INDIANMEALS);
      const data = await res.json();
      setMeals(data.meals);
    } catch (err) {
      console.error(err);
      setMeals([]);
    }
  }

  async function getAllCountries() {
    let API_GETALLCOUNTRIES = `${baseUrl}list.php?a=list`;

    try {
      const res = await fetch(API_GETALLCOUNTRIES);
      const data = await res.json();
      setCountries(data.meals);
    } catch (e) {
      console.log(e);
      setCountries([]);
    }
  }

  function sortMealsAlphabetically(meals) {
    // Use the sort function with a custom comparator based on strMeal
    meals.sort((meal1, meal2) => {
      const name1 = meal1.strMeal.toLowerCase();
      const name2 = meal2.strMeal.toLowerCase();
      if (name1 < name2) {
        return -1;
      } else if (name1 > name2) {
        return 1;
      } else {
        return 0;
      }
    });

    setMeals(meals);
  }

  const value = {
    meals,
    setMeals,
    isSort,
    setIsSort,
    countries,
    setCountries,
    selectedOption,
    setSelectedOption,
    mealsData,
    getAllCountries,
    sortMealsAlphabetically,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
