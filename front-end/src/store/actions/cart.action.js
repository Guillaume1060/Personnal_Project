import { createAction } from "@reduxjs/toolkit";

export const displayCart = createAction("cart/display");
export const resetCart = createAction("cart/reset");
export const addTicket = createAction("cart/addTicket", (concert) => {
  return {
    payload: {
      concert,
    },
  };
});
export const deleteTicketRow = createAction(
  "cart/deleteTicketRow",
  (concert) => {
    return {
      payload: {
        concert,
      },
    };
  }
);
export const addProduct = createAction("cart/addProduct", (product) => {
  return {
    payload: {
      product,
    },
  };
});
export const deleteProductRow = createAction(
  "cart/deleteProductRow",
  (product) => {
    return {
      payload: {
        product,
      },
    };
  }
);
