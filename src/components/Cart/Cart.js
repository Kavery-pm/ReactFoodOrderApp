import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  console.log(cartCtx);
  const hasItems = cartCtx.items.length > 0;
  const addItemHandler = item =>{
      cartCtx.addItem(item);
  }
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
       <CartItem key={item.id} name={item.name} price={item.price} amount={item.amount} summary={item.summary} onAdd={addItemHandler}></CartItem>
      ))}
    </ul>
  );

  return (
    <Modal onhideModal={props.onClose}>
      {cartItems}
      <div>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button-alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
