import { Order, OrderItem, Product } from "../types";

export const mockProducts: Product[] = [
  {
    id: 1,
    name: "Custom X",
    brand: "Burton",
    length_cm: 156,
    price_cents: 69900,
    stock: 10,
  },
  {
    id: 2,
    name: "Team Pro",
    brand: "Nitro",
    length_cm: 159,
    price_cents: 57900,
    stock: 8,
  },
  {
    id: 3,
    name: "Mountain Twin",
    brand: "Jones",
    length_cm: 157,
    price_cents: 62900,
    stock: 12,
  },
  {
    id: 4,
    name: "T.Rice Pro",
    brand: "Lib Tech",
    length_cm: 161,
    price_cents: 64900,
    stock: 5,
  },
  {
    id: 5,
    name: "Deep Thinker",
    brand: "Burton",
    length_cm: 160,
    price_cents: 59900,
    stock: 7,
  },
  {
    id: 6,
    name: "Squash",
    brand: "Nitro",
    length_cm: 163,
    price_cents: 54900,
    stock: 9,
  },
  {
    id: 7,
    name: "Flagship",
    brand: "Jones",
    length_cm: 162,
    price_cents: 72900,
    stock: 4,
  },
  {
    id: 8,
    name: "Skate Banana",
    brand: "Lib Tech",
    length_cm: 156,
    price_cents: 52900,
    stock: 15,
  },
  {
    id: 9,
    name: "Free Thinker",
    brand: "Burton",
    length_cm: 157,
    price_cents: 58900,
    stock: 6,
  },
];

export const mockOrderItems: OrderItem[] = [
  {
    id: 1,
    order_id: 482913,
    product_id: mockProducts[0].id,
    quantity: 1,
    unit_price_cents: mockProducts[0].price_cents,
  },
  {
    id: 2,
    order_id: 482913,
    product_id: mockProducts[2].id,
    quantity: 1,
    unit_price_cents: mockProducts[2].price_cents,
  },
];

export const mockOrder: Order = {
  id: 482913,
  total_cents: mockOrderItems.reduce(
    (sum, item) => sum + item.unit_price_cents * item.quantity,
    0,
  ),
  status: "confirmed",
  created_at: "2026-06-25T12:00:00.000Z",
};
