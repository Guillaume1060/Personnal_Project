import classes from './cart.module.scss'
import Modal from '../../composants/modal/Modal'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';


const Cart = (props) => {
const concertCartTickets = useSelector(state=>state.cart.tickets)
const itemCartQty = useSelector(state=>state.cart.itemCount)

const cartItems = <ul className={classes['cart-items']}>{concertCartTickets.map(concert=><li>
    <p>{concert.concert.venue}</p>
    <p>{concert.concert.city}</p>
    <p>{concert.concert.date}</p>

    </li>)}</ul>
console.log(cartItems);

    return (
        <Modal onCart={props.onCart} >
            {cartItems}
            <div className={classes.total} >
                <span>Total Product</span>
                <span>{itemCartQty}</span>
            </div>
            <div className={classes.actions} >
                <button onClick={props.onCart} className={classes['button--alt']}>Close</button>
                <Link to="cart"> 
                    <button className={classes.button}>Order</button> 
                </Link>     
            </div>
        </Modal>
    )
}

export default Cart