import axios from 'axios';
import Modal from '../../../composants/modal/Modal'
import useAxios from '../../../hooks/use-axios.js'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetCart } from '../../../store/actions/cart.action.js'


const Payment = (props) => {
const dispatch = useDispatch()
const [validated,setValidated] = useState(false)
const totalToPay = props.totalAmount
const productCart = props.productCart
const ticketCart = props.ticketCart
const { data, loading, error } = useAxios('http://localhost:5000/auth/balance');
const balanceUser = data.data;

// TODO Gestion quand out of stock ()
useEffect(() => {
    setValidated(true);
    if (balanceUser >= totalToPay){
        if (productCart.length > 0) {
            productCart.map(item=>{
            axios.post('http://localhost:5000/products-orders',
            {
                quantity:parseInt(item.product.productQuantity),
                products:item.product.productId
            },{ withCredentials: true })
            .then(res=>console.log('order Product validated'))
            .catch(err=>console.log(err))
            })
        }
        if (ticketCart.length > 0) {
            ticketCart.map(item=>{
                axios.post('http://localhost:5000/concert-orders',
                {
                    quantity:parseInt(item.concert.ticketQuantity),
                    concerts:item.concert.concertId
                },{ withCredentials: true })
                .then(res=>console.log('order Ticket validated'))
                .catch(err=>console.log(err))
            })
        }
        //TODO problème identification sur la méthod patch ?!?
        // axios.patch(`http://localhost:5000/auth/balance/${totalToPay}`,{ withCredentials: true })
        // .then(res=>console.log('User Account updated'))
        // .catch(err=>console.log(err))
    }
    }, [balanceUser, totalToPay,productCart,ticketCart]);
    // TODO remise à 0 du cart
// useEffect(()=>{
//     console.log('resetCart');
//     dispatch(resetCart())
// },[validated])
if (loading) return <div>Loading...</div>;
if (error) return <div>Error: {error.message}</div>;



const paymentOK = <h3>Congratulations, ORDER validated!</h3>

const paymentNOK = 
<div>
    <h3>Sorry, not enough money in you account 😒</h3>
    <p>You have {balanceUser} EUR in your account</p>
    <p>Your order amount is {totalToPay} EUR.</p>
    <p>Update your cart or sell products and/or concert tickets</p>
</div>


return (
    <Modal onCart={props.onCart}>
      {validated && paymentOK} 
      {!validated && paymentNOK} 
    </Modal>
    )
}

export default Payment