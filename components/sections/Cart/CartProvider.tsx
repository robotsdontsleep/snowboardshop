"use client";

import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { CartItem, Product, products } from "@/src/lib/mockData";

interface CartContextValue {
  cart: CartItem[];
  totalItems: number;
  totalCents: number;
  addProduct: (product: Product) => void;
  updateQuantity: (id: number, quantity: number) => void;
  removeItem: (id: number) => void;
}

const initialCart: CartItem[] = [
  { ...products[0], quantity: 1 },
  { ...products[1], quantity: 1 },
];

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>(initialCart);

  const totalItems = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity, 0),
    [cart],
  );

  const totalCents = useMemo(
    () =>
      cart.reduce(
        (sum, item) => sum + item.price_cents * item.quantity,
        0,
      ),
    [cart],
  );

  const addProduct = (product: Product) => {
    setCart((currentCart) => {
      const productInCart = currentCart.some(
        (item) => item.id === product.id,
      );

      if (!productInCart) {
        return [...currentCart, { ...product, quantity: 1 }];
      }

      return currentCart.map((item) => {
        if (item.id !== product.id) {
          return item;
        }

        return { ...item, quantity: item.quantity + 1 };
      });
    });
  };

  const updateQuantity = (id: number, quantity: number) => {
    const nextQuantity = Math.max(1, quantity);

    setCart((currentCart) =>
      currentCart.map((item) => {
        if (item.id !== id) {
          return item;
        }

        return { ...item, quantity: nextQuantity };
      }),
    );
  };

  const removeItem = (id: number) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== id),
    );
  };

  const value: CartContextValue = {
    cart,
    totalItems,
    totalCents,
    addProduct,
    updateQuantity,
    removeItem,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}
