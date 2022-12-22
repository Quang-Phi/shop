import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    subTotal: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      //mutation (edit mang/obj truc tiep k can clone)
      const product = action.payload.product;
      const quantity = action.payload.quantity;

      const itemIndex = state.cart.findIndex(
        (element) => element.id === product.id
      );

      if (itemIndex !== -1) {
        state.subTotal += Math.round(product.productPrice) * quantity;
        state.cart[itemIndex].quantity += quantity;

        return;
      }

      const newCartItem = {
        ...product,
        quantity: quantity,
      };
      state.subTotal += Math.round(product.productPrice) * quantity;
      state.cart.push(newCartItem);
    },
    removeFromCart: (state, action) => {
      //mutation (edit mang/obj truc tiep k can clone)
      const product = action.payload;
      const itemIndex = state.cart.findIndex(
        (element) => element.id === product.id
      );

      if (itemIndex >= 0) {
        if (product.quantity > 1) {
          state.cart[itemIndex].quantity -= 1;
          state.subTotal -= Math.round(state.cart[itemIndex].productPrice);

          return;
        }
        if (window.confirm("Remove this item?")) {
          state.subTotal -= Math.round(state.cart[itemIndex].productPrice);
          state.cart.splice(itemIndex, 1);
        }
        return;
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
