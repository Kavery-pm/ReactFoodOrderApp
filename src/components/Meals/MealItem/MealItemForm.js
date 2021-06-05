import classes from "./MealItemForm.module.css";
import Inputf from "../../UI/Inputf";
const MealItemForm = (props) => {
  return (
    <form className={classes.form}>
      <Inputf
        label="Amount"
        input={{
          id: "amount_" + props.id,
          min: 1,
          max: 1,
          step: 1,
          type: "number",
          defaultValue: 1,
        }}
      ></Inputf>
      <button>Add a meal</button>
    </form>
  );
};
export default MealItemForm;
