export interface Category {
  title: "Allmountain" | "Freeride" | "Freestyle" | "Powder";
  desc: string;
}

const CATEGORIES: Category[] = [
  {
    title: "Allmountain",
    desc: "Vielseitig auf jedem Hang",
  },
  {
    title: "Freeride",
    desc: "Für das Gelände",
  },
  {
    title: "Freestyle",
    desc: "Park & Tricks",
  },
  {
    title: "Powder",
    desc: "Tiefschnee-Spezialisten",
  },
] as const;

export default CATEGORIES;
