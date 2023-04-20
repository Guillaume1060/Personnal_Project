import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cart.reducer";
import paymentReducer from "./reducers/payment.reducer";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    payment: paymentReducer,
  },
  // devTools: process.env.NODE_ENV !== "production",
  // middleware : (getDefaultMiddleware) => [...getDefaultMiddleware(), reduxLogger]
});

export default store;
