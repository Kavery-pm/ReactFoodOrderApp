import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/header";
import Meals from "./components/Meals/Meals";
import Modal from "./components/UI/Modal";


function App() {
  const [state, setstate] = useState(false)<
  return <React.Fragment>
    <Cart></Cart>
    <Header></Header>
    <Meals></Meals>
  </React.Fragment>
}

export default App;
