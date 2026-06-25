export interface Product {
  id: number;
  name: string;
  brand: string;
  length_cm: number;
  price_cents: number;
  stock: number;
  image_url?: string | null;
}

export interface OrderItem {
  id: number;
  order_id: number;
  product_id: number;
  name?: string;
  quantity: number;
  unit_price_cents: number;
}

export type OrderStatus =
  | "pending"
  | "confirmed"
  | "rejected"
  | "paid"
  | "shipped"
  | "cancelled";

export interface ShippingAddress {
  fullName: string;
  street: string;
  city: string;
  postalCode: string;
  country: string;
}

export interface Order {
  id: number;
  total_cents: number;
  status: OrderStatus;
  shipping_address?: ShippingAddress | null;
  created_at: string;
}

export interface CartItem extends Product {
  quantity: number;
}
