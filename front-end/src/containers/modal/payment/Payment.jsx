import Modal from '../../../composants/modal/Modal'
import classes from './payment.module.scss'
import { useState,  } from 'react';



const Payment = (props) => {
const [validated,setValidated] = useState(true)

// TODO Gestion quand out of stock ()
// Validadtion or not du caddy
    // if (paymentValidated){
    //     setValidated(true);
    // }
const paymentOK = 
<div className={classes.modal} >
<h3>Congratulations🎉, ORDER validated!</h3>
<h3>YOUR ACCOUNT HAS BEEN UPDATED</h3>
</div>
const paymentNOK = 
<div>
    <h3>Sorry, not enough money in you account 😒</h3>
</div>
return (
    <Modal onCart={props.onCart}>
      {validated && paymentOK} 
      {!validated && paymentNOK} 
    </Modal>
    )
}
export default Payment