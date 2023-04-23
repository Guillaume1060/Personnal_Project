
import axios from 'axios';
import Modal from '../../../composants/modal/Modal'
import useAxios from '../../../hooks/use-axios.js'
import { useNavigate } from 'react-router-dom';
import { resetCart } from '../../../store/actions/cart.action';
import { displayUser } from '../../../store/actions/user.action';
import { useDispatch } from 'react-redux';

const UserBoard = (props) => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const { data, loading, error,postData,resetData } = useAxios('http://localhost:5000/auth/orders');
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
        <p>Your past orders:</p>
            <p>PRODUCT</p>
                {productOrders.map(item=>  
                    <>
                        <p>{item.quantity} x {item.products.name} </p>
                        <p>Amount: {item.amount}</p>
                    </>
                )}
            <p>CONCERT</p>
            {concertsOrders.map(item=>  
                <>
                    <p>test{item.quantity} x {item.concerts.venue} </p>
                    <p>Amount: {item.amount}</p>
                </>
            )}
            <p onClick={disconnectHandler}>DISCONNECT</p>
    </Modal>
    )
}

export default UserBoard