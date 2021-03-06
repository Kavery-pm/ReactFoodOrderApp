import { useReducer } from "react";
import CartContext from "./cart-context";
const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
      const existingCartItemIndex = state.items.findIndex(item=>item.id === action.item.id);
      const existingCartItem = state.items[existingCartItemIndex];
      let updatedItems;
      let updatedItem;
      if(existingCartItem){
         updatedItem = {
             ...existingCartItem,
             amount: existingCartItem.amount + action.item.amount
         }
         updatedItems = [...state.items];
         updatedItems[existingCartItemIndex]=updatedItem;
      }else updatedItems = state.items.concat(action.item);
    const updatedAmount =
      state.totalAmount + action.item.amount * action.item.price;
    return {
      items: updatedItems,
      totalAmount: updatedAmount,
    };
  }
  return defaultCartState;
};
const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD_ITEM", item: item });
  };
  const removeItemFromCartHandler = (id) => {};
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
