import { createAction } from "@reduxjs/toolkit";

export const displayCart = createAction("cart/display");
export const addTicket = createAction("cart/addTicket", (concert) => {
  return {
    payload: {
      concert,
    },
  };
});
