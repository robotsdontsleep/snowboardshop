import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./index";

import {
  clearCart as clearCartAction,
  decrementItem as decrementItemAction,
  incrementItem as incrementItemAction,
  removeItem as removeItemAction,
} from "./cart";
import type { Product } from "../types";
import {
  selectCartCount,
  selectCartItems,
  selectCartSummary,
} from "./cartSelectors";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector = <T>(selector: (state: RootState) => T) =>
  useSelector<RootState, T>(selector);

export const useCart = () => {
  const dispatch = useAppDispatch();

  return {
    items: useAppSelector(selectCartItems),
    itemsCount: useAppSelector(selectCartCount),
    totalCents: useAppSelector(selectCartSummary),
    incrementItem: (product: Product) =>
      dispatch(incrementItemAction(product)),
    decrementItem: (productId: number) =>
      dispatch(decrementItemAction(productId)),
    removeItem: (productId: number) => dispatch(removeItemAction(productId)),
    clearCart: () => dispatch(clearCartAction()),
  };
};
