import { useDispatch, useSelector } from 'react-redux';
import classes from './nav.module.scss'
import { displayCart } from '../../store/actions/cart.action';

const NavBar = (props) => {
    const itemCartQty = useSelector(state=>state.cart.itemCount)
    const dispatch = useDispatch()
    const openCartHandler = () => {
        dispatch(displayCart())
    };

    return (
        <div className={classes.nav_box}>
            <div className={classes.nav_box__list}>
                <a href="#about" className={classes.nav_box__list__title}>ABOUT</a>
                <a href="#video" className={classes.nav_box__list__title}>VIDEOS</a>
                <a href="#concert" className={classes.nav_box__list__title}>CONCERTS</a>
                <a href="#store" className={classes.nav_box__list__title}>STORE</a>
                <a href="#footer" className={classes.nav_box__list__title}>SUSCRIBE</a>
            </div >
            <div class={classes.cart_nav__icon_box}>
                <svg class={classes.cart_nav__icon}
                    xmlns="http://www.w3.org/2000/svg"
                    width="80"
                    height="80"
                    viewBox="0 0 20 20"
                    fill="#E0E0D5"
                    onClick={openCartHandler}
                    >
                    <path d="M4.906 11.541l3.551 3.553 6.518-6.518-3.553-3.551-6.516 6.516zm14.198-4.877l-1.511-1.512a2.024 2.024 0 01-2.747-2.746L13.335.894a1.017 1.017 0 00-1.432 0L.893 11.904a1.017 1.017 0 000 1.432l1.512 1.51a2.024 2.024 0 012.747 2.748l1.512 1.51a1.015 1.015 0 001.432 0L19.104 8.096a1.015 1.015 0 000-1.432zM8.457 16.719l-5.176-5.178L11.423 3.4l5.176 5.176-8.142 8.143z"></path>
                </svg>
                <span class={classes.cart_nav__notification}>{itemCartQty}</span>
            </div>
            {/* {cartOn && <span className={classes.nav_box__cart}>🎸</span>
} */}
            {/* <i className={classes.nav_box__icon}>logo</i> */}
        </div>
    )
}



export default NavBar