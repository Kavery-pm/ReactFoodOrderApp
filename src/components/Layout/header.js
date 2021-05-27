import React from "react";
import cover from '../../assets/cover.png';
const Header = (props) => {
  return <React.Fragment>
      <header> <h1>React Order App</h1>
      <button>Cart</button></header>
      <div>
         <img src ={cover} ></img> 
      </div>
  </React.Fragment>;
};

export default Header;
