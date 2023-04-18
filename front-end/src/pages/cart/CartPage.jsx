import { useSelector } from 'react-redux';
import classes from './cartPage.module.scss'
import useAxios from '../../hooks/use-axios';
import NavBarLogin from '../../containers/nav/NavBar_log';
import CartList from './CartList';
import Button from '../../composants/button/Button';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const CartPage = () => {
    const navigate = useNavigate();
    const concertCartTickets = useSelector(state=>state.cart.tickets)
    const productCart = useSelector(state=>state.cart.products)
    const totalAmount = concertCartTickets.reduce((acc,cur) => acc + (cur.concert.price*cur.concert.ticketQuantity),0) 
    + productCart.reduce((acc,cur) => acc + (cur.product.price*cur.product.productQuantity),0)
    const { data, loading, error, postdata } = useAxios('http://localhost:5000/auth/whoami');
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    const checkoutHandler = () => {
        if (data.data.id) navigate('/payment')
        navigate('/signin')
        // TODO ajout un state pour jouer avec l'affichage de la page
        // deux choix : signIn ou Login
    }
    return (

        <div className={classes.page}>
            <NavBarLogin/>
                <div className={classes.ctn}>
                    <p className={classes.ctn_title}>👋 {data.data.name}</p>
                        <CartList/>
                    <p >A reduc code 🎉 ?
                    {/* <input className={classes.input} type="text" id="input-text" placeholder="code here..."/> */}
                    </p>
                    <p className={classes.ctn_total}>Total Amount: {totalAmount} Euros</p>
                    <Button fn={checkoutHandler} text='checkout'/>
                </div>
        </div>
    )
}

export default CartPage