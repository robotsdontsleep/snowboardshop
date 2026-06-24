"use client";

import Button from "../ui/Button";
import { products } from "@/src/lib/mockData";
import ProductCard from "./ProductCard";
import { useCart } from "@/components/sections/Cart/CartProvider";

export default function ProductList() {
  const { addProduct } = useCart();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {products.map((product) => (
        <ProductCard product={product} key={product.id}>
          <Button
            title="In den Warenkorb"
            onClick={() => addProduct(product)}
            variant="card"
          />
        </ProductCard>
      ))}
    </div>
  );
}
