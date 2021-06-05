import classes from "./Input.module.css";
const Inputf = props => {
  return (
    <div className={classes.input}>
      <label>{props.label}</label>
      <input {...props.input}></input>
    </div>
  );
};

export default Inputf;
