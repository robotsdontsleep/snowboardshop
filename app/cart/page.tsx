import { Suspense } from "react";
import CartView from "@/components/sections/Cart/CartView";

export default function Cart() {
  return (
    <Suspense fallback={<p className="p-6 text-textColor">Laden...</p>}>
      <CartView />
    </Suspense>
  );
}
