import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

//creation of context
export const AppContext = createContext();

//provider creation
export default function AppContextProvider({ children }) {
  //define states to get the data during fetch request
  //State to manage the meals
  const [meals, setMeals] = useState([]);
  //State to manage the isSort
  const [isSort, setIsSort] = useState(false);
  //State to manage the countries (area) area from api call to show it into the dropdown
  const [countries, setCountries] = useState([]);
  // State to manage the selected value
  const [selectedOption, setSelectedOption] = useState("Indian");

  //Async function for the api call to  fetch
  //all the meals for a selected area
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

  //Async function for the api call to  fetch
  //all the country names to display in the dropdown list
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

  //Async function for the api call to sort
  //all the meals alphabetically
  //NOTE: As API call itself giving reponse in sorted order
  //there is no need of this function

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
