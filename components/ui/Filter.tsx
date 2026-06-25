"use client";

import { useState } from "react";
import { PRODUCT_CATEGORIES } from "@/src/constants/productConstants";
import Button from "./Button";

export default function Filter() {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <div className="flex gap-2 w-full pb-2">
      <Button
        title="All"
        variant={activeFilter === "All" ? "primary" : "secondary"}
        className="px-4 py-1.5 text-sm rounded-full shrink-0"
        onClick={() => setActiveFilter("All")}
      />

      {PRODUCT_CATEGORIES.map((category) => (
        <Button
          key={category.slug}
          title={category.title}
          variant={activeFilter === category.title ? "primary" : "secondary"}
          className="px-4 py-1.5 text-sm rounded-full shrink-0"
          onClick={() => setActiveFilter(category.title)}
        />
      ))}
    </div>
  );
}
