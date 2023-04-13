import { createReducer } from "@reduxjs/toolkit";
import { addTicket, displayCart } from "../actions/cart.action";

// Initial state for "cart"
const initialState = {
  isShow: false,
  tickets: [],
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
      // state.isShow = true;
    })
    .addCase(addTicket, (state, action) => {
      const concertTickets = action.payload;
      state.itemCount += parseInt(concertTickets.concert.ticketQuantity);
      state.tickets.push(concertTickets);
    });
  // .addCase(fetchResult.fulfilled, (state, action) => {
  //   const data = { ...action.payload };
  //   data.name = data.name.toUpperCase();

  //   state.isShow = false;
  //   state.result = data;
  // })
  // .addCase(fetchResult.rejected, (state, action) => {
  //   state.isShow = false;
  //   state.error = action.error;
  // })
  // .addCase(saveResult, (state, action) => {
  //   // Test de garde pour ne pas ajouter 2 fois le meme nom
  //   if (
  //     !state.result ||
  //     state.savedResults.find((res) => res.name === state.result.name)
  //   ) {
  //     return;
  //   }

  //   state.savedResults.push(state.result);
  // })
  // .addCase(removeResult, (state, action) => {
  //   state.savedResults = state.savedResults.filter(
  //     (res) => res.name !== action.payload
  //   );
  // });
});

export default cartReducer;
