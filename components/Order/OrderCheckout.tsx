"use client";

import Link from "next/link";
import { useState } from "react";
import OrderConfirmation from "@/components/Order/OrderConfirmation";
import OrderForm from "@/components/Order/OrderForm";
import OrderSummary from "@/components/Order/OrderSummary";
import { useCart } from "@/src/store/hooks";

export default function OrderCheckout() {
  const { clearCart, items } = useCart();
  const [confirmedTotalCents, setConfirmedTotalCents] = useState<number | null>(
    null,
  );

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const totalCents = items.reduce(
      (total, item) => total + item.price_cents * item.quantity,
      0,
    );

    const response = await fetch("/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        totalCents,
        status: "confirmed",
        createdAt: new Date().toISOString(),
        shippingAddress: {
          fullName: String(formData.get("fullName") ?? ""),
          street: String(formData.get("street") ?? ""),
          city: String(formData.get("city") ?? ""),
          postalCode: String(formData.get("postalCode") ?? ""),
          country: String(formData.get("country") ?? ""),
        },
        items: items.map((item) => ({
          productId: item.id,
          name: item.name,
          quantity: item.quantity,
          unitPriceCents: item.price_cents,
        })),
      }),
    });

    if (!response.ok) {
      return;
    }

    const order = (await response.json()) as { status: "confirmed" | "rejected" };

    if (order.status === "confirmed") {
      clearCart();
      setConfirmedTotalCents(totalCents);
    }
  };

  if (confirmedTotalCents !== null) {
    return <OrderConfirmation totalCents={confirmedTotalCents} />;
  }

  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-8 py-8 text-textColor">
      <Link href="/cart" className="text-xs text-textColor/70 hover:text-textColor">
        Zurück zum Warenkorb
      </Link>
      <h2 className="text-3xl font-black mb-6 mt-4">Kasse</h2>

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_20rem] gap-6 items-start">
        <OrderForm onSubmit={handleSubmit} />
        <OrderSummary order={items} />
      </div>
    </div>
  );
}
