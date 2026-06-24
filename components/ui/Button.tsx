"use client";

import { twMerge } from "tailwind-merge";

interface ButtonProps {
  title: string;
  variant?: "primary" | "secondary" | "card";
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

type ButtonVariant = "primary" | "secondary" | "card";

const baseStyles =
  "inline-flex items-center justify-center px-4 py-2 transition-all active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-brandColor text-appBg font-bold rounded-2xl hover:opacity-90",
  secondary:
    "bg-transparent text-textColor font-semibold rounded-2xl border border-textColor/15 hover:bg-textColor/5",
  card: "bg-controlBg text-textColor font-semibold rounded-xl hover:bg-controlHover",
};

export default function Button({
  title,
  variant = "primary",
  className = "",
  disabled = false,
  type = "button",
  onClick,
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={twMerge(baseStyles, variants[variant], className)}
    >
      {title}
    </button>
  );
}
