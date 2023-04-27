import classes from './notFound.module.css'
import image from '../../assets/img/cry.gif'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';


const NotFound = () => {
    const navigate = useNavigate();
    return (
    <>
        <section className={classes.section} >
            <p className={classes.error}>.. ERROR 404 ..</p>
            <img className={classes.img} src={image} alt="cry_lady"/>
                <Link to="/">
                <button className={classes.button}>Back Home</button>
                </Link>
        </section>  
        <footer className={classes.footer} >
            <progress value="85" max="100"></progress>Work in progress
        </footer>
    </>

    )
}


export default NotFound