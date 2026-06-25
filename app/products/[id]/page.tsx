import { notFound } from "next/navigation";
import ProductDetails from "@/components/product/ProductDetails";
import { db } from "@src/db/index";
import { products } from "@src/db/schema";
import { eq } from "drizzle-orm";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const productId = Number(id);

  if (!Number.isInteger(productId)) {
    notFound();
  }

  const product = db
    .select()
    .from(products)
    .where(eq(products.id, productId))
    .get();

  if (!product) {
    notFound();
  }

  return <ProductDetails product={product} />;
}
