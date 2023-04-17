import { useSelector } from 'react-redux';
import classes from './cartPage.module.scss'
import NavBar from "../../containers/nav/NavBar";
import useAxios from '../../hooks/use-axios';
// import axios from 'axios';
// import { useEffect, useState } from "react";


const CartPage = () => {
    const concertCartTickets = useSelector(state=>state.cart.tickets)
    const productCart = useSelector(state=>state.cart.products)
    const { user, loading, error, postuser } = useAxios('http://localhost:5000/auth/whoami');
    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    }
    return (
        <div className={classes.ctn}>
            <NavBar/>
                <div className={classes.recap}>
                    <h2>Hi {user.data.name} </h2>
                </div>


                {/* <div>
                    
                </div>
            <h2>Hi {data.data.name}</h2>
            <p>Ici résumé du cart</p>
            <p>states du caddies</p>
            <p>VALIDATION vers login si pas logger OU route du paiement etc...</p>
            <Link to="/login">
            <button>VALIDATION</button>
            </Link>
            <Link to="/signin">
            <button>se connecter</button>
            </Link>
            
            <p>code reduc?</p>
            <p>upate button</p> */}
            {/* {concertCartItems}
            {productCartItems} */}
        </div>
    )
}

export default CartPage