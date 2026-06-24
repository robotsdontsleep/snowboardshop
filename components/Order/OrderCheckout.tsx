"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import OrderForm from "@/components/Order/OrderForm";
import OrderSummary from "@/components/Order/OrderSummary";
import { useCart } from "@/components/sections/Cart/CartProvider";

export default function OrderCheckout() {
  const router = useRouter();
  const { cart } = useCart();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push("/cart?status=success");
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-8 py-8 text-textColor">
      <Link href="/cart" className="text-xs text-textColor/70 hover:text-textColor">
        Zurück zum Warenkorb
      </Link>
      <h2 className="text-3xl font-black mb-6 mt-4">Kasse</h2>

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_20rem] gap-6 items-start">
        <OrderForm onSubmit={handleSubmit} />
        <OrderSummary order={cart} />
      </div>
    </div>
  );
}
