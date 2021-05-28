import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./MealsAvailibility.module.css";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const MealsAvailibility = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.name}
      price={meal.price}
      description={meal.description}
    ></MealItem>
  ));
  return (
    <section className={classes.meals}>
      <ul>
        <Card>
          <li>{mealsList}</li>
        </Card>
      </ul>
    </section>
  );
};

export default MealsAvailibility;
