"use client";

import { useState } from "react";
import ProductList from "@/components/product/ProductList";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import CATEGORIES from "@/components/sections/Category/categories";

export default function Shop() {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <div className="flex flex-col justify-center w-full max-w-7xl mx-auto px-4 md:px-8 py-12">
      <div className="mb-12 flex flex-col items-start">
        <Badge>All boards & Modelle</Badge>
        <h1 className="text-5xl md:text-[5rem] font-black leading-none my-6">
          Der Shop
        </h1>

        <div className="flex gap-2 overflow-x-auto scrollbar-none w-full pb-2">
          <Button
            title="All"
            variant={activeFilter === "All" ? "primary" : "secondary"}
            className="px-4 py-1.5 text-sm rounded-full shrink-0"
            onClick={() => setActiveFilter("All")}
          />

          {CATEGORIES.map((cat) => (
            <Button
              key={cat.title}
              title={cat.title}
              variant={activeFilter === cat.title ? "primary" : "secondary"}
              className="px-4 py-1.5 text-sm rounded-full shrink-0"
              onClick={() => setActiveFilter(cat.title)}
            />
          ))}
        </div>
      </div>

      <ProductList />
    </div>
  );
}
