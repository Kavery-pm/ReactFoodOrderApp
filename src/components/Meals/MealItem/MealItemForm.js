import classes from "./MealItemForm.module.css";
import Inputf from "../../UI/Inputf";
import { useRef } from "react";
const MealItemForm = (props) => {
  const amountRef = useRef();
  return (
    <form className={classes.form}>
      <Inputf
        ref={amountRef}
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
