import React from "react";
import MealsAvailibility from "./MealsAvalibility";
import MealsSummary from "./MealsSummary";

const Meals = (props) => {
  return (
    <React.Fragment>
      <MealsSummary></MealsSummary>
      <MealsAvailibility></MealsAvailibility>
    </React.Fragment>
  );
};

export default Meals;
