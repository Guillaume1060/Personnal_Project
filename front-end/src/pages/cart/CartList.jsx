import classes from './cartList.module.scss'
import { useSelector } from 'react-redux';

const CartList =(props)=> {
  const concertCartTickets = useSelector(state=>state.cart.tickets)
  const productCart = useSelector(state=>state.cart.products)

  const handleChange = () => {
    // ici upadate du state
  }
  const deleteRow = () => {
    // ici upadate du state
  }

  // function deleteRow(btn) {
  //   var row = btn.parentNode.parentNode;
  //   row.parentNode.removeChild(row);
  // }
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
        <tr>
          <td>{concert.concert.venue} ({concert.concert.date})</td>
          <td>${concert.concert.price}</td>
          <td>
          {/* <input
            type="number"
            id="number-input"
            name="number"
            value={concert.concert.ticketQuantity}
            onChange={handleChange}
            /> */}
            {concert.concert.ticketQuantity}
          </td>
          <td>${concert.concert.price*concert.concert.ticketQuantity}</td>
          <td><button onclick={deleteRow}>❌</button></td>
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
        <tr>
          <td>{product.product.name} ({product.product.type})</td>
          <td>${product.product.price}</td>
          <td>
          {/* <input
            type="number"
            id="number-input"
            name="number"
            value={product.product.productQuantity}
            onChange={handleChange}
          /> */}
            {product.product.productQuantity}
          </td>
          <td>${product.product.price*product.product.productQuantity}</td>
          <td><button onclick={deleteRow}>❌</button></td>
        </tr>)}
      </tbody>
    </table>
    </>
  )
}




export default CartList