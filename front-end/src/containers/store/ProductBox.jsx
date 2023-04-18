import { useCallback, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../store/actions/cart.action';
import classes from "./productBox.module.scss"
import image from '../../assets/img/vynil_Shop.jpg.png'
import Input from "../../composants/input/Input";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';


const ProductBox = (props) => {
    const productQuantityRef = useRef()
    const dispatch = useDispatch()

    const submitHandler = useCallback((e) => {
        e.preventDefault();
        console.log(productQuantityRef.current.value);
        const productQuantity = productQuantityRef.current.value;
        const payLoad = {
            productId : props.id,
            name : props.name,
            price : props.price,
            productQuantity
        }
        dispatch(addProduct(payLoad))
    })


    return (
        <div className={classes.product}>
            <img src={image} alt="vynil" className={classes.product_img}/>
            <p className={classes.product_name}>{props.name}</p>
            <p className={classes.product_description}>{props.description}</p>
            <p className={classes.product_price}>{props.price} €</p>
            <form onSubmit={submitHandler} className={classes.form}>
                <Input ref={productQuantityRef} label='QUANTITY' input={{
                    id: 'amount_'+props.id,
                    type: 'number',
                    defaultValue: '1',
                    min: '1',
                    max:'10',
                    step:'1'
                }}/>
                <Button type="submit" variant="contained" endIcon={<SendIcon/>}>ORDER</Button>
            </form>
        </div>
        
    )
}

export default ProductBox