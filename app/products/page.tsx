import ProductList from "@/components/product/ProductList";
import Badge from "@/components/ui/Badge";
import Filter from "@/components/ui/Filter";
import { db } from "@src/db/index";
import { products as productsTable } from "@src/db/schema";

export default async function Shop() {
  const products = db.select().from(productsTable).all();

  if (products.length === 0) {
    return (
      <p className="text-3xl font-black mb-4">
        Aktuell sind keine Snowboards auf Lager.
      </p>
    );
  }

  return (
    <div className="flex flex-col justify-center w-full max-w-7xl mx-auto px-4 md:px-8 py-12">
      <div className="mb-12 flex flex-col items-start">
        <Badge>All boards & Modelle</Badge>
        <h1 className="text-5xl md:text-[5rem] font-black leading-none my-6">
          Der Shop
        </h1>
        <Filter />
      </div>

      <ProductList products={products} />
    </div>
  );
}
