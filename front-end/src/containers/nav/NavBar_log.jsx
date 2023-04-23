import { useState } from 'react';
import { useDispatch } from 'react-redux';
import classes from './nav.module.scss'
import { displayUser } from '../../store/actions/user.action';
import { HashLink } from 'react-router-hash-link';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const NavBarLogin = (props) => {
    // GESTION DU MODAL
    const dispatch = useDispatch()
    //
    const navigate = useNavigate();
    const [logged, setLogged] = useState("#015502")
    const userName = props.userName
    useEffect(()=>{
        if (userName) setLogged("#010002")
    },[])

    const loginHandler = () => {
        if (!userName) navigate('/login')
        dispatch(displayUser())

    };

    return (
        <div className={classes.nav_box}>
            <div className={classes.nav_box__list}>
                <HashLink smooth to={'/'} className={classes.nav_box__list__title}>HOME</HashLink>
                <HashLink smooth to={'/#about'} className={classes.nav_box__list__title}>ABOUT</HashLink>
                <HashLink smooth to={'/#video'} className={classes.nav_box__list__title}>VIDEOS</HashLink>
                <HashLink smooth to={'/#footer'} className={classes.nav_box__list__title}>SUSCRIBE</HashLink>
            </div >
            <div class={classes.cart_nav__icon_box}>
                <svg class={classes.user_nav__icon}
                    xmlns="http://www.w3.org/2000/svg"
                    width="80"
                    height="80"
                    version="1.1"
                    viewBox="0 0 60.671 60.671"
                    onClick={loginHandler}
                    xmlSpace="preserve">
                        <g fill={logged}>
                            <ellipse cx="30.336" cy="12.097" rx="11.997" ry="12.097"></ellipse>
                            <path d="M35.64 30.079H25.031c-7.021 0-12.714 5.739-12.714 12.821v17.771h36.037V42.9c0-7.082-5.693-12.821-12.714-12.821z"></path>
                        </g>
                </svg>
            </div>
            {/* {cartOn && <span className={classes.nav_box__cart}>🎸</span>
} */}
            {/* <i className={classes.nav_box__icon}>logo</i> */}
        </div>
    )
}



export default NavBarLogin