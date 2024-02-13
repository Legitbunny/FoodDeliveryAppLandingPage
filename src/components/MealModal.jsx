import React, { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { baseUrl } from "../baseUrl";
import { useState } from "react";

const MealModal = ({ meal, showModal, setShowModal }) => {
  let API_MEALDETAILS = `${baseUrl}lookup.php?i=${meal.idMeal}`;

  const [mealDetails, setMealDetails] = useState([]);
  //async func to get the details of
  //the selected meal and set it to meal details
  async function mealDetailsById() {
    try {
      const res = await fetch(API_MEALDETAILS);
      const data = await res.json();
      setMealDetails(data.meals);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    mealDetailsById();
    //hiding scroll when the modal is opened
    document.body.style.overflowY = "hidden";
    return () => {
      //enabling scroll when the modal is closed
      document.body.style.overflowY = "scroll";
    };
  }, []);

  return (
    <div
      className="modal-wrapper overflow-y-auto"
      onClick={() => setShowModal(!showModal)}
    >
      {mealDetails.length > 0 ? (
        <div className="modal-container select-none">
          <div>
            <figure className="card image-container relative overflow-hidden m-1">
              <img
                src={`${meal.strMealThumb}`}
                className="w-full h-[15rem] shadow-md aspect-video object-cover rounded-xl"
              />

              <figcaption
                className="absolute bottom-0 left-0 text-white ml-0.5 p-1 sm:ml-1 sm:p-2  text-sm sm:text-2xl
                                            font-bold rounded-lg 
                    "
              >
                {`${mealDetails[0].strMeal}`}
                <br />
                {`\r\nCategory: ${mealDetails[0].strCategory}`}
              </figcaption>
            </figure>
          </div>
          <IoClose
            onClick={() => setShowModal(!showModal)}
            className="flex absolute top-4 right-4"
          />
          <hr className="mb-2" />
          <div className="details-conatiner p-2">
            <div className="flex justify-between"></div>
            <div
              className={`${
                mealDetails[0].strInstructions.trim().split(/\s+/).length > 100
                  ? "overflow-y-auto h-[12rem]"
                  : ""
              }`}
            >
              <p>
                <span className="font-semibold">Instructions:</span>{" "}
                {mealDetails[0].strInstructions}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default MealModal;
