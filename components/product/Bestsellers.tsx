import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";
import Link from "next/link";
import ProductCard from "@/components/product/ProductCard";
import { products } from "@/src/lib/mockData";

export default function Bestsellers() {
  const bestsellers = products.slice(0, 3);

  return (
    <Section className="max-w-6xl">
      <div className="mb-12 flex items-end justify-between">
        <div>
          <Badge>Meistgefahren</Badge>
          <h2 className="text-title font-black leading-none">Die Bestseller</h2>
        </div>

        <Link
          href="/products"
          className="rounded-2xl border border-textColor/15 px-4 py-2 text-paragraph font-semibold text-textColor transition-colors hover:bg-textColor/5 shrink-0"
        >
          Alle Boards →
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {bestsellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Section>
  );
}
