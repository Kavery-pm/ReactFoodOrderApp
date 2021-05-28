import React from "react";
import cover from "../../assets/cover.png";
import classes from "./header.module.css";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>React Order App</h1>
       <HeaderCartButton></HeaderCartButton>
      </header>
      <div className={classes['main-image']}>
        <img src={cover} ></img>
      </div>
    </React.Fragment>
  );
};

export default Header;
