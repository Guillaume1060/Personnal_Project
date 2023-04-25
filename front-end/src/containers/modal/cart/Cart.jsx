import classes from './cart.module.scss'
import Modal from '../../../composants/modal/Modal'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { displayCart } from '../../../store/actions/cart.action.js';


const Cart = (props) => {
// Ci dessous pour que le panier ne réaparaisse par lors d'un retour via la navBar -> A VERIFIER
const dispatch = useDispatch()
const openCartHandler = () => {
dispatch(displayCart())
};

const concertCartTickets = useSelector(state=>state.cart.tickets)
const productCart = useSelector(state=>state.cart.products)
const itemCartQty = useSelector(state=>state.cart.itemCount)

const concertCartItems = 
<ul className={classes['cart-items']}>
    {concertCartTickets.map(concert=>
        <li>
            <p className={classes.art}>{concert.concert.venue}</p>
            <p className={classes.art_1}>{concert.concert.city}</p>
            <p className={classes.art_2}>{concert.concert.date}</p>
            <p className={classes.art_3}>{concert.concert.ticketQuantity} ticket(s)</p>
            <p className={classes.art_1}>Total: {concert.concert.price*concert.concert.ticketQuantity} euros</p>
        </li>)}
    </ul>

const productCartItems = 
<ul className={classes['cart-items']}>
    {productCart.map(product=>
        <li>
            <p className={classes.art}>{product.product.name} x {product.product.productQuantity} </p>
            <p className={classes.art_2}>{product.product.price} euros</p>
            {/* <p className={classes.art_3}>{product.product.productQuantity} pces</p> */}
            <p className={classes.art_1}>Total: {product.product.price*product.product.productQuantity} euros</p>
        </li>)}
    </ul>

return (
    <Modal onCart={props.onCart} >
            <h3 className={classes.title}>TICKETS :</h3>
                {concertCartItems}
            <h3 className={classes.title}>PRODUCTS :</h3>
                {productCartItems}
            <div className={classes.total} >
                <span className={classes.title}>Total Quantity</span>
                <span className={classes.title}>{itemCartQty} piece(s)</span>
            </div>
            <div className={classes.actions} >
                <button onClick={props.onCart} className={classes['button--alt']}>Close</button>
                <Link to="cart"> 
                    <button onClick={openCartHandler} className={classes.button}>Order</button> 
                </Link>     
            </div>
        </Modal>
    )
}

export default Cart