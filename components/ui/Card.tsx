import { twMerge } from "tailwind-merge";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={twMerge(
        "bg-sectionBg p-4 sm:p-5 rounded-2xl border border-transparent",
        className,
      )}
    >
      {children}
    </div>
  );
}
