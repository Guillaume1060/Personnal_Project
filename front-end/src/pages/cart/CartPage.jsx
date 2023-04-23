import { useDispatch, useSelector } from 'react-redux';
import { displayPayment } from '../../store/actions/payment.action';
import { resetCart } from '../../store/actions/cart.action';
import { useNavigate } from 'react-router-dom';
import classes from './cartPage.module.scss'
import useAxios from '../../hooks/use-axios';
import axios from 'axios';
import NavBarLogin from '../../containers/nav/NavBar_log';
import CartList from './CartList';
import Button from '../../composants/button/Button';
import Payment from '../../containers/modal/payment/Payment'
import UserBoard from '../../containers/modal/user/UserBoard'
import { displayUser } from '../../store/actions/user.action';
import { useEffect } from 'react';

const CartPage = () => {
    // GESTION DU MODAL
    const isShow = useSelector(state=>state.payment.isShow)
    const isUserBoardShow = useSelector(state=>state.user.isShow)
    const dispatch = useDispatch()
    const hideCartHandler = () => {dispatch(displayPayment())}
    const hideUserBoardHandler = () => {dispatch(displayUser())}
    const navigate = useNavigate();
    const concertCartTickets = useSelector(state=>state.cart.tickets)
    const productCart = useSelector(state=>state.cart.products)
    const totalAmount = concertCartTickets.reduce((acc,cur) => acc + (cur.concert.price*cur.concert.ticketQuantity),0) 
    + productCart.reduce((acc,cur) => acc + (cur.product.price*cur.product.productQuantity),0)
    const { data, loading, error,resetData } = useAxios('http://localhost:5000/auth/whoami');
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    let userName
    if (data.data?.name) {
        userName = (data.data?.name).toUpperCase() || null
    }
    const checkoutHandler = () => {
        console.log(data.data.id);
        if (!data.data.id) navigate('/login')
        if (data.data.id) {
            dispatch(displayPayment())
            dispatch(resetCart())
        }
    }

    
    const disconnect = () => {
        resetData()
    axios.post('http://localhost:5000/auth/signout',{ withCredentials: true })
    .then(res=>console.log('Disconnected'))
    .catch(err=>console.log(err))
    }
    return (

        <div className={classes.page}>
            <NavBarLogin userName={userName} />
            {isShow && <Payment onCart={hideCartHandler} totalAmount={totalAmount} productCart={productCart} ticketCart={concertCartTickets} />}
            {isUserBoardShow && <UserBoard onCart={hideUserBoardHandler} totalAmount={totalAmount} />}
                <div className={classes.ctn}>
                    <p className={classes.ctn_title}>👋 {userName}</p>
                        <CartList/>
                    {/* <input className={classes.input} type="text" id="input-text" placeholder="code here..."/> */}
                    <p className={classes.ctn_reduc}>A reduc code 🎉 ?</p>
                    <p className={classes.ctn_total}>Total Amount: {totalAmount} Euros</p>
                    <div className={classes.button}>
                        <Button fn={checkoutHandler} variant="outlined" text='Proceed to payment'/>
                        <Button fn={()=>navigate('/')} text='Back'/>
                        <Button fn={disconnect} text='Disconnect'/>
                    </div>
                </div>
        </div>
    )
}

export default CartPage