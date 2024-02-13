import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import MealModal from "./MealModal";
import { MdStars } from "react-icons/md";
import "../index.css";

const Card = ({ meal }) => {

  const min = 2;
  const max = 5;
  const diff = max - min;
  const randomDecimal = (Math.random() * diff + min).toFixed(2);

  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <div
        onClick={() => setShowModal(!showModal)}
        className="max-w-sm rounded overflow-hidden w-full hover:scale-95 duration-500"
      >
        <div>
          <figure className="card relative overflow-hidden m-1">
            <div className="overlay">
              <img src={`${meal.strMealThumb}`} className="rounded-2xl" />
            </div>
            <figcaption
              className="absolute bottom-0 left-0 color:block text-white ml-0.5 p-1 sm:ml-1 sm:p-2  text-sm sm:text-2xl
                                        font-bold rounded-lg"
            >
              Discount
            </figcaption>
          </figure>
        </div>
        <div>
          <p className="font-semibold text-sm sm:text-xl mb-0 px-4 pt-2 capitalize">{`${meal.strMeal}`}</p>
        </div>
        <div className="flex items-center gap-1 px-4 pb-[2rem] select-none">
          <MdStars className="text-green-600 text-md sm:text-xl" />
          <p className="text-xs sm:text-base font-semibold ">{randomDecimal}</p>
        </div>
      </div>
      <div>
        {showModal && (
          <MealModal
            meal={meal}
            showModal={showModal}
            setShowModal={setShowModal}
          />
        )}
      </div>
    </div>
  );
};

export default Card;
