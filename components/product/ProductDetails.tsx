"use client";

import Image from "next/image";
import { useState } from "react";
import Button from "@/components/ui/Button";
import boardImage from "@/components/sections/Hero/hero-board.png";
import { formatPrice } from "@/src/lib/formatPrice";
import type { Product } from "@/src/types";
import { useCart } from "@/src/store/hooks";
import { SNOWBOARD_LENGTHS_CM } from "@/src/constants/productConstants";

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const { incrementItem } = useCart();
  const [selectedLength, setSelectedLength] = useState(product.length_cm);
  const price = formatPrice(product.price_cents);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
        <ProductImage productName={product.name} />

        <div className="flex flex-col w-full max-w-xl text-textColor">
          <ProductIntro product={product} price={price} />
          <LengthSelector
            selectedLength={selectedLength}
            onSelectLength={setSelectedLength}
          />
          <AddToCartButton
            price={price}
            stock={product.stock}
            onAddToCart={() =>
              incrementItem({ ...product, length_cm: selectedLength })
            }
          />
          <ProductDescription />
        </div>
      </div>
    </div>
  );
}

function ProductImage({ productName }: { productName: string }) {
  return (
    <div className="relative w-full aspect-square bg-sectionBg rounded-3xl flex items-center justify-center p-12">
      <div className="relative w-full h-full">
        <Image
          src={boardImage}
          alt={`${productName} Snowboard`}
          fill
          priority
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  );
}

function ProductIntro({ product, price }: { product: Product; price: string }) {
  return (
    <>
      <span className="text-xs font-bold tracking-widest text-brandColor uppercase mb-2">
        {product.brand}
      </span>
      <h1 className="text-5xl md:text-6xl font-black mb-4">
        {product.name}
      </h1>
      <p className="text-lg text-textColor/80 mb-6">
        Der Alleskönner für jeden Hang.
      </p>
      <span className="text-3xl font-bold mb-8">{price}</span>
    </>
  );
}

interface LengthSelectorProps {
  selectedLength: number;
  onSelectLength: (length: number) => void;
}

function LengthSelector({
  selectedLength,
  onSelectLength,
}: LengthSelectorProps) {
  return (
    <div className="mb-8">
      <span className="block text-xs font-semibold text-textColor/40 mb-3">
        Länge wählen
      </span>
      <div className="grid grid-cols-4 gap-2">
        {SNOWBOARD_LENGTHS_CM.map((length) => {
          const isActive = selectedLength === length;

          return (
            <Button
              title={`${length} cm`}
              key={length}
              onClick={() => onSelectLength(length)}
              variant="secondary"
              className={
                isActive ? "border-brandColor text-textColor" : "border-textColor/15"
              }
            />
          );
        })}
      </div>
    </div>
  );
}

function AddToCartButton({
  price,
  stock,
  onAddToCart,
}: {
  price: string;
  stock: number;
  onAddToCart: () => void;
}) {
  return (
    <>
      <Button
        title={stock > 0 ? `In den Warenkorb · ${price}` : "Ausverkauft"}
        variant="primary"
        className="w-full py-4 text-sm font-bold rounded-xl shadow-lg shadow-brandColor/10"
        disabled={stock <= 0}
        onClick={onAddToCart}
      />
      <span className="block text-center text-[10px] text-textColor/30 mt-3">
        Kostenloser Versand · 14 Tage Rückgaberecht
      </span>
    </>
  );
}

function ProductDescription() {
  return (
    <p className="text-sm leading-relaxed text-textColor/60 my-8 border-t border-textColor/10 pt-8">
      Vom morgendlichen Hardpack bis zum Nachmittags-Powder: Das Board verzeiht
      Fehler und belohnt Präzision. Ein laufruhiges, vielseitiges Modell für
      lange Tage im Schnee.
    </p>
  );
}
