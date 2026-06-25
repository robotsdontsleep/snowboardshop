"use client";

import { Product } from "@/src/types";
import Button from "../ui/Button";
import ProductCard from "./ProductCard";
import { useCart } from "@/src/store/hooks";

interface ProductListProps {
  products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
  const { incrementItem } = useCart();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {products.map((product) => (
        <ProductCard product={product} key={product.id}>
          <Button
            title={product.stock > 0 ? "In den Warenkorb" : "Ausverkauft"}
            onClick={() => incrementItem(product)}
            disabled={product.stock <= 0}
            variant="card"
          />
        </ProductCard>
      ))}
    </div>
  );
}
