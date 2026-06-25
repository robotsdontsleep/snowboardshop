import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "./index";

const selectCartState = (state: RootState) => state.cart;

export const selectCartItems = createSelector(
  [selectCartState],
  (cart) => cart.items,
);

export const selectCartCount = createSelector([selectCartItems], (items) =>
  items.reduce((total, item) => total + item.quantity, 0),
);

export const selectCartSummary = createSelector([selectCartItems], (items) =>
  items.reduce((total, item) => total + item.price_cents * item.quantity, 0),
);
