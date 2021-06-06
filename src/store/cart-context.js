import { useContext } from "react";

const CartContext = useContext({
items: [],
totalAmount: 0,
addItem: ()=>{},
removeItem: ()=>{}
});

export default CartContext;