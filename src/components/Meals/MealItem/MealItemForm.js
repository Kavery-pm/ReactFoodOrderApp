import classes from "./MealItemForm.module.css";
import Inputf from "../../UI/Inputf";
import { useRef, useState } from "react";
const MealItemForm = (props) => {
  const [amountIsValid, setamountIsValid] = useState(true);
  const amountRef = useRef();
  const submitHandler = event =>{
    event.preventDefault();
    const enteredAmount = amountRef.current.value;
    const amountNumber = +enteredAmount;
    if(enteredAmount.trim().length===0 || amountNumber<1 || amountNumber>5) {
      setamountIsValid(false);
      return;
    }
    props.addToCart(amountNumber);
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Inputf
        ref={amountRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          min: 1,
          max: 5,
          step: 1,
          type: "number",
          defaultValue: 1,
        }}
      ></Inputf>
     
      <button>Add a meal</button>
      {!amountIsValid && <p>enter valid number between 1to 5</p>}
    </form>
  );
};
export default MealItemForm;
