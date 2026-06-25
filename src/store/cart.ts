import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CartItem, Product } from "../types";

export interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    incrementItem: (state, action: PayloadAction<Product>) => {
      const product = action.payload;
      const item = state.items.find((i) => i.id === product.id);

      if (item) {
        item.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
    },

    decrementItem: (state, action: PayloadAction<number>) => {
      const index = state.items.findIndex((i) => i.id === action.payload);

      if (index !== -1) {
        const item = state.items[index];

        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.items.splice(index, 1);
        }
      }
    },

    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { clearCart, decrementItem, incrementItem, removeItem } =
  cartSlice.actions;
export default cartSlice.reducer;
