"use client";

import Image from "next/image";
import Card from "../../ui/Card";
import board from "../../sections/Hero/hero-board.png";
import { CartItem as CartItemType } from "@/src/types";
import { formatPrice } from "@/src/lib/formatPrice";

interface CartItemProps {
  item: CartItemType;
  decrementQuantity: () => void;
  incrementQuantity: () => void;
  onRemove: () => void;
}

export default function CartItem({
  item,
  decrementQuantity,
  incrementQuantity,
  onRemove,
}: CartItemProps) {
  return (
    <Card className="w-full min-h-24 p-4 sm:p-5 bg-sectionBg rounded-2xl border border-textColor/10">
      <div className="flex w-full items-center justify-between gap-6">
        <div className="flex min-w-0 items-center gap-4">
          <div className="relative h-20 w-12 shrink-0">
            <Image
              src={board}
              alt="Snowboard"
              fill
              className="object-contain"
              sizes="48px"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-bold">{item.name}</h3>
            <p className="text-xs text-textColor/70 truncate">
              Snowboard · {formatPrice(item.price_cents)}
            </p>
            <button
              onClick={onRemove}
              className="w-fit text-xs text-textColor/70 underline hover:text-textColor"
            >
              Entfernen
            </button>
          </div>
        </div>

        <div className="flex shrink-0 items-center justify-center gap-6 sm:gap-10">
          <QuantityCounter
            quantity={item.quantity}
            decrementQuantity={decrementQuantity}
            incrementQuantity={incrementQuantity}
          />
          <span className="min-w-20 text-right font-bold">
            {formatPrice(item.price_cents * item.quantity)}
          </span>
        </div>
      </div>
    </Card>
  );
}

interface QuantityCounterProps {
  quantity: number;
  decrementQuantity: () => void;
  incrementQuantity: () => void;
}

function QuantityCounter({
  quantity,
  decrementQuantity,
  incrementQuantity,
}: QuantityCounterProps) {
  return (
    <div className="inline-flex items-center bg-controlBg border border-controlBg rounded-xl h-10 text-textColor select-none">
      <button
        onClick={decrementQuantity}
        className="w-9 h-full text-textColor/60 hover:text-textColor text-lg font-medium"
      >
        -
      </button>
      <span className="w-10 h-full flex justify-center items-center text-center bg-appBg font-bold text-sm">
        {quantity}
      </span>
      <button
        onClick={incrementQuantity}
        className="w-9 h-full text-textColor/60 hover:text-textColor text-lg font-medium"
      >
        +
      </button>
    </div>
  );
}
