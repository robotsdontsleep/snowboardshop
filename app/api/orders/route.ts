import { NextResponse } from "next/server";
import { eq, inArray, sql } from "drizzle-orm";
import { db } from "@src/db/index";
import { order_items, orders, products } from "@src/db/schema";
import type { OrderStatus, ShippingAddress } from "@/src/types";

type OrderPayload = {
  totalCents: number;
  status: OrderStatus;
  createdAt: string;
  shippingAddress: ShippingAddress;
  items: Array<{
    productId: number;
    name: string;
    quantity: number;
    unitPriceCents: number;
  }>;
};

// export async function GET() {
//   return NextResponse.json(db.select().from(orders).all(), { status: 200 });
// }

export async function POST(request: Request) {
  const order = (await request.json()) as OrderPayload;
  const dbProducts = db
    .select()
    .from(products)
    .where(
      inArray(
        products.id,
        order.items.map((item) => item.productId),
      ),
    )
    .all();

  const status: OrderStatus = order.items.every((item) => {
    const product = dbProducts.find((p) => p.id === item.productId);

    return product && product.stock >= item.quantity;
  })
    ? "confirmed"
    : "rejected";

  db.transaction((tx) => {
    const row = tx
      .insert(orders)
      .values({
        total_cents: order.totalCents,
        status,
        shipping_address: order.shippingAddress,
        created_at: order.createdAt,
      })
      .returning({ id: orders.id, status: orders.status })
      .get();

    tx.insert(order_items)
      .values(
        order.items.map((item) => ({
          order_id: row.id,
          product_id: item.productId,
          name: item.name,
          quantity: item.quantity,
          unit_price_cents: item.unitPriceCents,
        })),
      )
      .run();

    if (status === "confirmed") {
      for (const item of order.items) {
        tx.update(products)
          .set({ stock: sql`${products.stock} - ${item.quantity}` })
          .where(eq(products.id, item.productId))
          .run();
      }
    }

    return row;
  });

  return NextResponse.json({ status }, { status: 201 });
}
