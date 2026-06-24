"use client";

import { useRouter, useSearchParams } from "next/navigation";
import OrderConfirmation from "@/components/Order/OrderConfirmation";
import CartItem from "@/components/sections/Cart/CartItem";
import CartSummary from "@/components/sections/Cart/CartSummary";
import { useCart } from "@/components/sections/Cart/CartProvider";

export default function CartView() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { cart, removeItem, totalCents, updateQuantity } = useCart();
  const isConfirmed = searchParams.get("status") === "success";

  if (isConfirmed) {
    return <OrderConfirmation totalCents={totalCents} />;
  }

  if (cart.length === 0) {
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
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onMinus={() =>
                updateQuantity(item.id, item.quantity - 1)
              }
              onPlus={() =>
                updateQuantity(item.id, item.quantity + 1)
              }
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
