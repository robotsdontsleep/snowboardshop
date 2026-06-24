import { NextResponse } from "next/server";
import { products } from "@/src/lib/mockData";

interface ProductRouteContext {
  params: Promise<{
    id: string;
  }>;
}

export async function GET(_request: Request, context: ProductRouteContext) {
  const { id } = await context.params;
  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return NextResponse.json({ message: "Produkt nicht gefunden" }, { status: 404 });
  }

  return NextResponse.json(product);
}
