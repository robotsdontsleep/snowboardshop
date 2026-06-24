import Card from "../../ui/Card";
import Section from "../../ui/Section";

import CATEGORIES from "./categories";

export default function CategorySection() {
  return (
    <Section className="flex gap-6 max-w-6xl">
      {CATEGORIES.map((cat) => (
        <Card className="h-full w-full" key={cat.title}>
          <h3 className="text-cardTitle font-bold text-textColor mb-1">
            {cat.title}
          </h3>
          <p className="text-note text-textColor/60">{cat.desc}</p>
        </Card>
      ))}
    </Section>
  );
}
