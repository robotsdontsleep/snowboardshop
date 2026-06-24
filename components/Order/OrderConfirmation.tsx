import Link from "next/link";
import { formatPrice, mockOrder } from "@/src/lib/mockData";

interface OrderConfirmationProps {
  totalCents: number;
}

export default function OrderConfirmation({
  totalCents,
}: OrderConfirmationProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 py-16 w-full max-w-md mx-auto text-textColor select-none animate-fadeIn">
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-successIconBg border border-brandColor/20 mb-8">
        <svg
          className="w-6 h-6 text-brandColor"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>

      <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-4 leading-tight">
        Danke für deine
        <br />
        Bestellung!
      </h1>

      <p className="text-sm text-textColor/60 max-w-xs mb-8 leading-relaxed">
        Wir wachsen die Beläge und schicken dein Board auf die Reise.
      </p>

      <div className="bg-successPanel border border-textColor/5 px-5 py-3 rounded-xl text-xs font-medium mb-8 tracking-wide">
        <span className="text-textColor/40">Bestellnummer </span>
        <span className="text-brandColor font-bold">NK-{mockOrder.id}</span>
      </div>

      <div className="bg-successPanel border border-textColor/5 px-5 py-3 rounded-xl text-xs font-medium mb-8 tracking-wide">
        <span className="text-textColor/40">Gesamt </span>
        <span className="text-brandColor font-bold">
          {formatPrice(totalCents || mockOrder.total_cents)}
        </span>
      </div>

      <Link
        href="/products"
        className="inline-flex items-center justify-center bg-brandColor hover:bg-brandColor/90 text-appBg font-bold text-sm px-8 py-3.5 rounded-xl transition-all w-full sm:w-auto min-w-[180px] shadow-lg shadow-brandColor/5"
      >
        Weiter shoppen
      </Link>
    </div>
  );
}
