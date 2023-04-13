import { createReducer } from "@reduxjs/toolkit";
import { addTicket, displayCart, addProduct } from "../actions/cart.action";

// Initial state for "cart"
const initialState = {
  isShow: false,
  tickets: [],
  products: [],
  itemCount: 0,
  //   error: null,
};
// Reducer pour "nationalize"
const cartReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(displayCart, (state, action) => {
      if (state.isShow === true) {
        state.isShow = false;
      } else {
        state.isShow = true;
      }
    })
    .addCase(addTicket, (state, action) => {
      const concertTickets = action.payload;
      state.itemCount += parseInt(concertTickets.concert.ticketQuantity);
      state.tickets.push(concertTickets);
    })
    .addCase(addProduct, (state, action) => {
      const productsOrders = action.payload;
      state.itemCount += parseInt(productsOrders.product.productQuantity);
      state.products.push(productsOrders);
    });
});

export default cartReducer;
