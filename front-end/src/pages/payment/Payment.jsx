import axios from 'axios';
import Modal from '../../composants/modal/Modal'
import useAxios from '../../hooks/use-axios.js'
import { useState, useEffect } from 'react';


const Payment = (props) => {
const [validated,setValidated] = useState(false)
const totalToPay = props.totalAmount
const { data, loading, error } = useAxios('http://localhost:5000/auth/balance');
const balanceUser = data.data;
useEffect(() => {
    if (balanceUser >= totalToPay){
        setValidated(true)
        // TODO cette requete ne fonctionne pas
        axios.patch((`http://localhost:5000/auth/balance/${totalToPay}`))
    };
}, [balanceUser, totalToPay]);
if (loading) return <div>Loading...</div>;
if (error) return <div>Error: {error.message}</div>;


return (
    <Modal onCart={props.onCart} >
      {validated && <h3>Congratulations, ORDER validated!</h3>} 
      <p>to pay:{totalToPay}</p>
      <p>you have:{balanceUser}</p>

        </Modal>
    )
}

export default Payment