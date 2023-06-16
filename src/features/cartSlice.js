import { createSlice } from "@reduxjs/toolkit";
import data from "../Data";

const initialState = {
  Cart: [],
  items: data,
  totalQuantity: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let find = state.Cart.findIndex((item) => item.id === action.payload.id);
      if (find >= 0) {
        state.Cart[find].No += 1;
      } else {
        state.Cart.push(action.payload);
      }
    },

    getCartTotal: (state) => {
      let { totalQuantity, totalPrice } = state.Cart.reduce(
        (cartTotal, cartItem) => {
          console.log("carttotal", cartTotal);
          console.log("cartitem", cartItem);
          const { price, quantity } = cartItem;
          console.log(price, quantity);
          const itemTotal = price * quantity;
          cartTotal.totalPrice += itemTotal;
          cartTotal.totalQuantity += quantity;
          return cartTotal;
        },
        {
          totalPrice: 0,
          totalQuantity: 0,
        }
      );
      state.totalPrice = parseInt(totalPrice.toFixed(2));
      state.totalQuantity = totalQuantity;
    },
    removeItem: (state, action) => {
      state.Cart = state.Cart.filter((item) => item.id !== action.payload);
    },
  },
});
export const { addToCart, getCartTotal, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
