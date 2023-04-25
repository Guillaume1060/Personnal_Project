
import axios from 'axios';
import Modal from '../../../composants/modal/Modal'
import useAxios from '../../../hooks/use-axios.js'
import { useNavigate } from 'react-router-dom';
import { resetCart } from '../../../store/actions/cart.action';
import { displayUser } from '../../../store/actions/user.action';
import { useDispatch } from 'react-redux';
import classes from './userBoard.module.scss'
import Button from '../../../composants/button/Button';

const UserBoard = (props) => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const { data, loading, error,postData,resetData } = useAxios('http://localhost:5000/auth/orders',true);
    if (loading) return <div>Loading...</div>;
    if (error) return <div></div>;
    const productOrders = data.data.productsOrders
    const concertsOrders = data.data.concertsOrders
    const disconnectHandler = async () => {
    await axios.post('http://localhost:5000/auth/signout',{ withCredentials: true })
    .then(res=>console.log('Disconnected'))
    .catch(err=>console.log(err))
    resetData()
    dispatch(resetCart())
    dispatch(displayUser())
    navigate('/')
}


return (
    <Modal onCart={props.onCart}>
        <p className={classes.title} >Your past orders</p>
            <p className={classes.title_subTitle}>PRODUCT</p>
                {productOrders.map(item=>  
                    <>
                        <p className={classes.title_subTitle_1}>{item.quantity} x {item.products.name}(Amount: {item.amount} Euros)</p>
                    </>
                )}
            <p className={classes.title_subTitle}>CONCERT</p>
            {concertsOrders.map(item=>  
                <>
                    <p className={classes.title_subTitle_1}>{item.quantity} x {item.concerts.venue}(Amount: {item.amount} Euros) </p>
                </>
            )}
            <button className={classes.btn} onClick={disconnectHandler}>DISCONNECT</button>
    </Modal>
    )
}

export default UserBoard