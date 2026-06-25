import Card from "../../ui/Card";
import Section from "../../ui/Section";
import { PRODUCT_CATEGORIES } from "@/src/constants/productConstants";

export default function CategorySection() {
  return (
    <Section className="flex gap-6 max-w-6xl">
      {PRODUCT_CATEGORIES.map((category) => (
        <Card className="h-full w-full" key={category.slug}>
          <h3 className="text-cardTitle font-bold text-textColor mb-1">
            {category.title}
          </h3>
          <p className="text-note text-textColor/60">{category.desc}</p>
        </Card>
      ))}
    </Section>
  );
}
