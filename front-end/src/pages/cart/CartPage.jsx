import { Link } from "react-router-dom";
import NavBar from "../../containers/nav/NavBar";

const CartPage = () => {

    return (
        <>
            <NavBar/>
            <h1>Cart</h1>
            <p>Ici résumé du cart</p>
            <p>states du caddies</p>
            <p>VALIDATION vers login si pas logger OU route du paiement etc...</p>
            <Link to="/login">
            <button>VALIDATION</button>
            </Link>

            <p>code reduc?</p>
            <p>upate button</p>

            <p></p>
        </>
    )
}

export default CartPage