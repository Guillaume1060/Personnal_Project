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
      // TODO update après l'ajout en DB
      const concertOrder = action.payload;
      const index = state.tickets.findIndex(
        (ticket) => ticket.concert.ticketId === concertOrder.concert.ticketId
      );
      if (index >= 0) {
        state.tickets[index].ticket.ticketQuantity =
          parseInt(state.tickets[index].ticket.ticketQuantity) +
          parseInt(concertOrder.ticket.ticketQuantity);
      } else {
        state.tickets.push(concertOrder);
      }
      state.itemCount += parseInt(concertOrder.concert.ticketQuantity);
    })
    .addCase(addProduct, (state, action) => {
      const productOrder = action.payload;
      const index = state.products.findIndex(
        (product) =>
          product.product.productId === productOrder.product.productId
      );
      if (index >= 0) {
        state.products[index].product.productQuantity =
          parseInt(state.products[index].product.productQuantity) +
          parseInt(productOrder.product.productQuantity);
      } else {
        state.products.push(productOrder);
      }
      state.itemCount += parseInt(productOrder.product.productQuantity);
    });
});

export default cartReducer;
