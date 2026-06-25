import { sql } from "drizzle-orm";
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const products = sqliteTable("products", {
  id: integer("id").primaryKey(), // no { autoIncrement: true } because mock product is already with id
  name: text("name").notNull(),
  brand: text("brand").notNull(),
  length_cm: integer("length_cm").notNull(), 
  price_cents: integer("price_cents").notNull(), 
  stock: integer("stock").notNull().default(0),
  image_url: text("image_url"), 
});

export const orders = sqliteTable("orders", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  total_cents: integer("total_cents").notNull(),
  status: text("status", {
    enum: ["pending", "confirmed", "rejected", "paid", "shipped", "cancelled"],
  })
    .notNull()
    .default("pending"),
  shipping_address: text("shipping_address", { mode: "json" }).$type<{
    fullName: string;
    street: string;
    city: string;
    postalCode: string;
    country: string;
  }>(),
  created_at: text("created_at").default(sql`CURRENT_TIMESTAMP`).notNull(), 
});

export const order_items = sqliteTable("order_items", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  order_id: integer("order_id").references(() => orders.id).notNull(),
  product_id: integer("product_id").references(() => products.id).notNull(),
  name: text("product_name").notNull(),
  quantity: integer("quantity").notNull(),
  unit_price_cents: integer("unit_price_cents").notNull(),
});
