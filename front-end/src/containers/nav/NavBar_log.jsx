import classes from './nav.module.scss'
import { HashLink } from 'react-router-hash-link';

const NavBarLogin = (props) => {
    const loginHandler = () => {
        console.log('open page login ou signup');
    };

    return (
        <div className={classes.nav_box}>
            <div className={classes.nav_box__list}>
                <HashLink smooth to={'/#about'} className={classes.nav_box__list__title}>ABOUT</HashLink>
                <HashLink smooth to={'/#video'} className={classes.nav_box__list__title}>VIDEOS</HashLink>
                <HashLink smooth to={'/#concert'} className={classes.nav_box__list__title}>CONCERTS</HashLink>
                <HashLink smooth to={'/#store'} className={classes.nav_box__list__title}>STORE</HashLink>
                <HashLink smooth to={'/#footer'} className={classes.nav_box__list__title}>SUSCRIBE</HashLink>
            </div >
            <div class={classes.cart_nav__icon_box}>
                <svg class={classes.cart_nav__icon}
                    xmlns="http://www.w3.org/2000/svg"
                    width="80"
                    height="80"
                    viewBox="0 0 20 20"
                    fill="#E0E0D5"
                    onClick={loginHandler}
                    >
                    {/* <path d="M16 32c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zM16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13-13-5.82-13-13 5.82-13 13-13zM25 8c0.55 0 1 0.45 1 1v3c0 1.1-0.9 2-2 2h-4c-1.1 0-2-0.9-2-2h-4c0 1.1-0.9 2-2 2h-4c-1.1 0-2-0.9-2-2v-3c0-0.55 0.45-1 1-1h6c0.55 0 1 0.45 1 1v1h4v-1c0-0.55 0.45-1 1-1h6zM16 24c2.913 0 5.462-1.557 6.861-3.884l1.715 1.029c-1.749 2.908-4.935 4.855-8.576 4.855-1.514 0-2.95-0.337-4.236-0.94l1.036-1.727c0.98 0.429 2.061 0.668 3.199 0.668z"></path> */}
                    <path d="M4.906 11.541l3.551 3.553 6.518-6.518-3.553-3.551-6.516 6.516zm14.198-4.877l-1.511-1.512a2.024 2.024 0 01-2.747-2.746L13.335.894a1.017 1.017 0 00-1.432 0L.893 11.904a1.017 1.017 0 000 1.432l1.512 1.51a2.024 2.024 0 012.747 2.748l1.512 1.51a1.015 1.015 0 001.432 0L19.104 8.096a1.015 1.015 0 000-1.432zM8.457 16.719l-5.176-5.178L11.423 3.4l5.176 5.176-8.142 8.143z"></path>
                </svg>
            </div>
            {/* {cartOn && <span className={classes.nav_box__cart}>🎸</span>
} */}
            {/* <i className={classes.nav_box__icon}>logo</i> */}
        </div>
    )
}



export default NavBarLogin