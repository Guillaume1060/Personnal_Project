import { useDispatch, useSelector } from 'react-redux';
import { displayPayment } from '../../store/actions/payment.action';
import { resetCart } from '../../store/actions/cart.action';
import { useNavigate } from 'react-router-dom';
import Modal from '../../composants/modal/Modal'
import classes from './cartPage.module.scss'
import useAxios from '../../hooks/use-axios';
import axios from 'axios';
import NavBarLogin from '../../containers/nav/NavBar_log';
import CartList from './CartList';
import Button from '../../composants/button/Button';
import Payment from '../../containers/modal/payment/Payment'
import UserBoard from '../../containers/modal/user/UserBoard'
import { displayUser } from '../../store/actions/user.action';
import { useState } from 'react';

const CartPage = () => {
    // GESTION DU MODAL
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const isPaymentShow = useSelector(state=>state.payment.isShow)
    const isUserBoardShow = useSelector(state=>state.user.isShow)
    const productCart = useSelector(state=>state.cart.products)
    const concertCartTickets = useSelector(state=>state.cart.tickets)
    const [notEnoughMoney,setNotEnoughMoney] = useState(false)
    const totalAmount = concertCartTickets.reduce((acc,cur) => acc + (cur.concert.price*cur.concert.ticketQuantity),0) 
    + productCart.reduce((acc,cur) => acc + (cur.product.price*cur.product.productQuantity),0)
    const hideCartHandler = () => {dispatch(displayPayment())}
    const hideUserBoardHandler = () => {dispatch(displayUser())}

    const { data, loading, error,resetData } = useAxios('http://localhost:5000/auth/whoami',true);
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    let userAmount = data.data?.money
    let userName
    if (data.data?.name) {
        userName = (data.data?.name).toUpperCase() || null
    }

    const paymentHandler = () => {
        if (!data.data.id) navigate('/login')
        if (totalAmount===0) return
        if (totalAmount<=userAmount) {
                dispatch(displayPayment())
                userAmount -= totalAmount
                if (productCart.length > 0) {
                    productCart.map(item=>{
                    axios.post('http://localhost:5000/products-orders',
                    {
                        quantity:parseInt(item.product.productQuantity),
                        products:item.product.productId
                    },{ withCredentials: true })
                    .then(res=>console.log('order Product validated'))
                    .catch(err=>console.log('ici?',err))
                    })
                }
                if (concertCartTickets.length > 0) {
                    concertCartTickets.map(item=>{
                        const concert = item.concert.ticketId
                        axios.post('http://localhost:5000/concert-orders',
                        {
                            concerts:concert,
                            quantity:parseInt(item.concert.ticketQuantity)
                        },{ withCredentials: true })
                        .then(res=>console.log('order Ticket validated'))
                        .catch(err=>console.log(err))
                    })
                }
                axios.patch(`http://localhost:5000/auth/balance/${totalAmount}`,null,{ withCredentials: true })
                .then(res=>console.log('User Account updated'))
                .catch(err=>console.log(err))
                dispatch(resetCart())
                setTimeout(() => {
                    window.location.reload();
                  }, 1500)
            }
            else {
                setNotEnoughMoney(true)
            }
        
    }
    
    const disconnect = () => {
        resetData()
        dispatch(resetCart())
        axios.post('http://localhost:5000/auth/signout',{ withCredentials: true })
        .then(res=>console.log('Disconnected'))
        .catch(err=>console.log(err))
    }

    return (
        <div className={classes.page}>
            <NavBarLogin userName={userName} />
            {notEnoughMoney && <Modal onCart={()=>setNotEnoughMoney(false)}><p className={classes.modal} >Sorry, Not enough money in you account 😒</p></Modal>}
            {isPaymentShow && <Payment onCart={hideCartHandler}/>}
            {isUserBoardShow && <UserBoard onCart={hideUserBoardHandler} totalAmount={totalAmount} />}
                <div className={classes.ctn}>
                    <p className={classes.ctn_title}>👋 {userName} 
                    {userAmount && <p>You have {userAmount} euros</p>}
                    </p>
                        <CartList/>
                    <p className={classes.ctn_reduc}>A reduc code 🎉 ?</p>
                    <p className={classes.ctn_total}>Total Amount: {totalAmount} Euros</p>
                    <div className={classes.button}>
                        <Button fn={paymentHandler} text='Proceed to payment'/>
                        <Button fn={()=>navigate('/')} text='Back'/>
                        <Button fn={disconnect} text='Disconnect'/>
                    </div>
                </div>
        </div>
    )
}
export default CartPage