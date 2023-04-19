import { useCallback, useRef } from 'react';
import Input from '../../composants/input/Input';
import classes from './concertItemForm.module.scss'
import { useDispatch } from 'react-redux';
import { addTicket } from '../../store/actions/cart.action';


const ConcertItemForm = (props) => {
    const ticketQuantityRef = useRef()
    const dispatch = useDispatch()
    const submitHandler = useCallback((e) => {
        e.preventDefault();
        const ticketQuantity = ticketQuantityRef.current.value;
        const payLoad = {
            concertId : props.id,
            venue : props.venue,
            city : props.city,
            date : props.date,
            price : props.price,
            ticketQuantity
        }
        dispatch(addTicket(payLoad))
    })
    return (
        <form onSubmit={submitHandler} className={classes.form} >
            <Input ref={ticketQuantityRef} label='Tickets' input={{
                id: 'amount_'+props.id,
                type: 'number',
                defaultValue: '1',
                min: '1',
                max:'10',
                step:'1'
            }} />
            <button>+ Add</button>
            {/* {!amountIsValid && <p>Please enter a valid amount (1-10)</p>} */}
        </form>
    )
}

export default ConcertItemForm