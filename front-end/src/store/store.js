import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cart.reducer";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  // middleware : (getDefaultMiddleware) => [...getDefaultMiddleware(), reduxLogger]
});

export default store;
