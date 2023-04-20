import { createReducer } from "@reduxjs/toolkit";
import { displayPayment } from "../actions/payment.action";

// Initial state for "cart"
const initialState = {
  isShow: false,
};
// Reducer pour "nationalize"
const paymentReducer = createReducer(initialState, (builder) => {
  builder.addCase(displayPayment, (state, action) => {
    if (state.isShow === true) {
      state.isShow = false;
    } else {
      state.isShow = true;
    }
  });
});

export default paymentReducer;
