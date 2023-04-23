import { createReducer } from "@reduxjs/toolkit";
import { displayUser } from "../actions/user.action";

// Initial state for "cart"
const initialState = {
  isShow: false,
};
// Reducer pour "nationalize"
const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(displayUser, (state, action) => {
    if (state.isShow === true) {
      state.isShow = false;
    } else {
      state.isShow = true;
    }
  });
});

export default userReducer;
