"use client";

import Link from "next/link";
import Logo from "./Logo";
import { useCart } from "@/src/store/hooks";

export default function Header() {
  const { itemsCount } = useCart();

  return (
    <div className="w-full border-b border-sectionBg/50 sticky top-0 z-50 bg-appBg/80 backdrop-blur-md mb-15">
      <div className="max-w-7xl mx-auto px-4 sm:px-12 h-16 flex items-center justify-between">
        <Link href="/" className="shrink-0">
          <Logo />
        </Link>

        <div className="flex items-center gap-4 sm:gap-8">
          <div className="hidden sm:flex gap-6 text-paragraph text-textColor/70 font-medium">
            <Link href="/" className="hover:text-textColor transition-colors">
              Start
            </Link>
          </div>

          <Link
            href="/cart"
            className="inline-flex items-center gap-2 bg-transparent text-textColor font-semibold rounded-2xl border border-textColor/15 hover:bg-textColor/5 text-paragraph shrink-0 px-4 py-2 transition-colors"
          >
            Warenkorb
            <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-brandColor px-1.5 text-[10px] font-black leading-none text-appBg">
              {itemsCount}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
