import classes from './cartList.module.scss'
import { useSelector } from 'react-redux';
import { deleteTicketRow,deleteProductRow } from '../../store/actions/cart.action';

import { useDispatch } from 'react-redux';

const CartList =(props)=> {
  const dispatch = useDispatch()
  const concertCartTickets = useSelector(state=>state.cart.tickets)
  const productCart = useSelector(state=>state.cart.products)

  const deleteConcertRow = (e) => {
    const idConcert = e.target.closest("tr").dataset.key;
    // const qty = e.target.closest("tr").dataset.key;
    const payLoad = {
      concertId : idConcert,
      // quantity : qty
    }
    dispatch(deleteTicketRow(payLoad))
    // ici update du state
  }
  const deleteProduct = (e) => {
    const idProduct = e.target.closest("tr").dataset.key;
    // const qty = e.target.closest("#qty")
    const payLoad = {
      productId : idProduct,
      // quantity : qty
    }
    dispatch(deleteProductRow(payLoad))
    // ici update du state
  }

  return(
    <>
    <table className={classes.table} >
      <thead>
        <tr>
          <th className={classes}>Concert</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Amount</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {concertCartTickets.map(concert=>
        <tr key={concert.concert.ticketId} data-key={concert.concert.ticketId} >
          <td>{concert.concert.venue} ({concert.concert.date})</td>
          <td>${concert.concert.price}</td>
          <td>
            {concert.concert.ticketQuantity}
          </td>
          <td>${concert.concert.price*concert.concert.ticketQuantity}</td>
          <td><button onClick={deleteConcertRow}>❌</button></td>
        </tr>)}
      </tbody>
    </table>
    {/* // Table 2 */}
    <table className={classes.table} >
      <thead>
        <tr>
          <th className={classes}>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Amount</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {productCart.map(product=>
        <tr key={product.product.productId} data-key={product.product.productId}>
          <td>{product.product.name}</td>
          <td>${product.product.price}</td>
          <td id="qty">
            {product.product.productQuantity}
          </td>
          <td>${product.product.price*product.product.productQuantity}</td>
          <td><button onClick={deleteProduct}>❌</button></td>
        </tr>)}
      </tbody>
    </table>
    </>
  )
}




export default CartList