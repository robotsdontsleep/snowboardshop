import { notFound } from "next/navigation";
import ProductDetails from "@/components/product/ProductDetails";
import { products } from "@/src/lib/mockData";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const productId = Number(id);
  const product = products.find((item) => item.id === productId);

  if (!product) {
    notFound();
  }

  return <ProductDetails product={product} />;
}
