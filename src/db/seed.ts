import { db } from "./index";
import { products, orders, order_items } from "./schema";
import { mockProducts, mockOrder, mockOrderItems } from "../lib/mockData";

async function seed() {
  await db.insert(products).values(mockProducts);

  await db.insert(orders).values({
    id: mockOrder.id,
    total_cents: mockOrder.total_cents,
    status: mockOrder.status,
    created_at: mockOrder.created_at,
  });

  await db.insert(order_items).values(
    mockOrderItems.map((item) => ({
      order_id: item.order_id,
      product_id: item.product_id,
      name:
        mockProducts.find((product) => product.id === item.product_id)?.name ??
        "",
      quantity: item.quantity,
      unit_price_cents: item.unit_price_cents,
    })),
  );
}

seed()
  .then(() => console.log("Seed process completed successfully!"))
  .catch((err) => {
    console.error("Seeding failed:", err);
    process.exit(1);
  });
