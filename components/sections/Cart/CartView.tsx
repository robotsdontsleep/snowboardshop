"use client";

import { useRouter } from "next/navigation";
import CartItem from "@/components/sections/Cart/CartItem";
import CartSummary from "@/components/sections/Cart/CartSummary";
import { useCart } from "@/src/store/hooks";

export default function CartView() {
  const router = useRouter();
  const {
    items,
    itemsCount,
    totalCents,
    incrementItem,
    decrementItem,
    removeItem,
  } = useCart();

  if (itemsCount === 0) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-3xl font-black mb-4 text-textColor">Warenkorb</h2>
        <p className="text-textColor/60 text-sm">Keine Waren im Warenkorb</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-8 py-8 text-textColor">
      <h2 className="text-3xl font-black mb-6">Warenkorb</h2>

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_20rem] gap-6 items-start">
        <div className="flex min-w-0 flex-col gap-4">
          {items.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              decrementQuantity={() => decrementItem(item.id)}
              incrementQuantity={() => incrementItem(item)}
              onRemove={() => removeItem(item.id)}
            />
          ))}
        </div>
        <CartSummary
          totalCents={totalCents}
          onOrder={() => router.push("/order")}
        />
      </div>
    </div>
  );
}
