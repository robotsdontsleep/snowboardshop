export interface Product {
  id: number;
  name: string;
  brand: string;
  length_cm: number;
  price_cents: number;
}

export interface OrderItem {
  id: number;
  order_id: number;
  product_id: number;
  quantity: number;
  unit_price_cents: number;
}

export interface Order {
  id: number;
  total_cents: number;
  status: "confirmed";
  created_at: string;
  items: OrderItem[];
}

export type CartItem = Product & {
  quantity: number;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Custom X",
    brand: "Burton",
    length_cm: 156,
    price_cents: 69900,
  },
  {
    id: 2,
    name: "Team Pro",
    brand: "Nitro",
    length_cm: 159,
    price_cents: 57900,
  },
  {
    id: 3,
    name: "Mountain Twin",
    brand: "Jones",
    length_cm: 157,
    price_cents: 62900,
  },
  {
    id: 4,
    name: "T.Rice Pro",
    brand: "Lib Tech",
    length_cm: 161,
    price_cents: 64900,
  },
  {
    id: 5,
    name: "Deep Thinker",
    brand: "Burton",
    length_cm: 160,
    price_cents: 59900,
  },
  {
    id: 6,
    name: "Squash",
    brand: "Nitro",
    length_cm: 163,
    price_cents: 54900,
  },
  {
    id: 7,
    name: "Flagship",
    brand: "Jones",
    length_cm: 162,
    price_cents: 72900,
  },
  {
    id: 8,
    name: "Skate Banana",
    brand: "Lib Tech",
    length_cm: 156,
    price_cents: 52900,
  },
  {
    id: 9,
    name: "Free Thinker",
    brand: "Burton",
    length_cm: 157,
    price_cents: 58900,
  },
];

const mockOrderItems: OrderItem[] = [
  {
    id: 1,
    order_id: 482913,
    product_id: products[0].id,
    quantity: 1,
    unit_price_cents: products[0].price_cents,
  },
  {
    id: 2,
    order_id: 482913,
    product_id: products[2].id,
    quantity: 1,
    unit_price_cents: products[2].price_cents,
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
  items: mockOrderItems,
};

export function formatPrice(priceCents: number): string {
  return `${(priceCents / 100).toFixed(2)} €`;
}
