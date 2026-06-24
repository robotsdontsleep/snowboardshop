import Section from "@/components/ui/Section";

interface Stat {
  value: string;
  label: string;
}

const HERO_STATS: Stat[] = [
  { value: "14", label: "Jahre Manufaktur" },
  { value: "100%", label: "Made in den Alpen" },
  { value: "5 J.", label: "Garantie" },
  { value: "0g", label: "CO₂ pro Versand" },
];

export default function StatsSection() {
  return (
    <Section className="flex items-center justify-center gap-30 border-y border-sectionBg/60">
      {HERO_STATS.map((stat) => (
        <StatItem key={stat.label} {...stat} />
      ))}
    </Section>
  );
}

const StatItem = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col gap-2 p-2 rounded-2xl min-w-0">
    <span className="text-title font-black text-brandColor leading-none truncate">
      {value}
    </span>
    <span className="text-note font-medium tracking-widest text-textColor/60 wrap-break-word leading-tight">
      {label}
    </span>
  </div>
);
