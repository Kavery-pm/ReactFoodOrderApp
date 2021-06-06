import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/header";
import Meals from "./components/Meals/Meals";

function App() {
  const [CartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <React.Fragment>
      {CartIsShown && <Cart onClose={hideCartHandler}></Cart>}
      <Header onShowCart={showCartHandler}></Header>
      <Meals></Meals>
    </React.Fragment>
  );
}

export default App;
