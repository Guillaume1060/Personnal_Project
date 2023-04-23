import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cart.reducer";
import paymentReducer from "./reducers/payment.reducer";
import userReducer from "./reducers/user.reducer";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    payment: paymentReducer,
    user: userReducer,
  },
  // devTools: process.env.NODE_ENV !== "production",
  // middleware : (getDefaultMiddleware) => [...getDefaultMiddleware(), reduxLogger]
});

export default store;
