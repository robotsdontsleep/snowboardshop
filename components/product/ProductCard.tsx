import Image from "next/image";
import Link from "next/link";
import Card from "../ui/Card";
import boardImage from "@/components/sections/Hero/hero-board.png";
import { formatPrice } from "@/src/lib/formatPrice";
import { Product } from "@/src/types";


interface ProductCardProps {
  product: Product;
  children?: React.ReactNode;
}

export default function ProductCard({ product, children }: ProductCardProps) {
  return (
    <div className="group block h-full flex-1">
      <Card className="flex flex-col justify-between gap-4 h-full">
        <Link href={`/products/${product.id}`} className="block">
          <div className="relative h-48 sm:h-52 md:h-60 w-full shrink-0">
            <Image
              src={boardImage}
              alt={product.name}
              fill
              className="object-contain"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
            />
          </div>
        </Link>

        <Link href={`/products/${product.id}`} className="block">
          <div className="flex justify-between items-baseline gap-2">
            <div className="min-w-0">
              <h3 className="text-cardTitle font-bold text-textColor truncate">
                {product.name}
              </h3>
              <p className="text-note text-textColor/40 mt-1 truncate">
                {product.brand} · {product.length_cm} cm
              </p>
            </div>
            <span className="text-cardTitle font-bold text-brandColor shrink-0">
              {formatPrice(product.price_cents)}
            </span>
          </div>
        </Link>

        {children}
      </Card>
    </div>
  );
}
