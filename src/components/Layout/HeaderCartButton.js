import CartIcon from "../Cart/CartIcon"
import classes from './HeaderCart.module.css';
const HeaderCartButton = props =>{
return <button className={classes.button} onClick={props.onClick}>
    <span><CartIcon></CartIcon></span>
    <span>Your cart</span>
    <span className={classes.badge}>
     3
    </span>
</button>
}

export default HeaderCartButton;