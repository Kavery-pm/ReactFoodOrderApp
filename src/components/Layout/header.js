import React from "react";
import cover from "../../assets/cover.png";
import classes from "./header.module.css";
const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>React Order App</h1>
        <button>Cart</button>
      </header>
      <div>
        <img src={cover} className={classes['main-image']}></img>
      </div>
    </React.Fragment>
  );
};

export default Header;
