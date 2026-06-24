import { NextResponse } from "next/server";
import { products } from "@/src/lib/mockData";

export function GET() {
  return NextResponse.json(products);
}
