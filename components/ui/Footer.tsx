import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/5 mt-4">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <Logo />
          <span className="text-sm text-textColor/40 hidden md:inline">
            © 2026 Nordkante Manufaktur · Demo-Shop · Tirol, AT
          </span>
        </div>

        <div className="hidden sm:flex gap-6 text-paragraph text-textColor/70 font-medium">
          <Link
            href="/shipping"
            className="hover:text-textColor transition-colors"
          >
            Versand
          </Link>
          <Link
            href="/warranty"
            className="hover:text-textColor transition-colors"
          >
            Garantie
          </Link>
          <Link
            href="/contact"
            className="hover:text-textColor transition-colors"
          >
            Kontakt
          </Link>
        </div>
      </div>
    </footer>
  );
}
