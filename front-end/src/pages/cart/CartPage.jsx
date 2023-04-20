import { useDispatch, useSelector } from 'react-redux';
import { displayPayment } from '../../store/actions/payment.action';
import { useNavigate } from 'react-router-dom';
import classes from './cartPage.module.scss'
import useAxios from '../../hooks/use-axios';
import NavBarLogin from '../../containers/nav/NavBar_log';
import CartList from './CartList';
import Button from '../../composants/button/Button';
import Cart from '../../containers/cart/Cart';
import Payment from '../payment/Payment'




const CartPage = () => {
    // GESTION DU MODAL
    const isShow = useSelector(state=>state.payment.isShow)
    const dispatch = useDispatch()
    const hideCartHandler = () => {dispatch(displayPayment())}


    const navigate = useNavigate();
    const concertCartTickets = useSelector(state=>state.cart.tickets)
    const productCart = useSelector(state=>state.cart.products)
    const totalAmount = concertCartTickets.reduce((acc,cur) => acc + (cur.concert.price*cur.concert.ticketQuantity),0) 
    + productCart.reduce((acc,cur) => acc + (cur.product.price*cur.product.productQuantity),0)
    const { data, loading, error } = useAxios('http://localhost:5000/auth/whoami');
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    const checkoutHandler = () => {
        if (!data.data.id) navigate('/login')
        if (data.data.id) {
            dispatch(displayPayment())
        }
    }
    return (

        <div className={classes.page}>
            <NavBarLogin/>
            {isShow && <Payment onCart={hideCartHandler} totalAmount={totalAmount} />}
                <div className={classes.ctn}>
                    <p className={classes.ctn_title}>👋 {data.data.name}</p>
                        <CartList/>
                    {/* <input className={classes.input} type="text" id="input-text" placeholder="code here..."/> */}
                    <p className={classes.ctn_reduc}>A reduc code 🎉 ?</p>
                    <p className={classes.ctn_total}>Total Amount: {totalAmount} Euros</p>
                    <div className={classes.button}>
                        <Button fn={checkoutHandler} variant="outlined" text='Proceed to payment'/>
                        <Button fn={checkoutHandler} text='Back'/>
                    </div>
                </div>
        </div>
    )
}

export default CartPage