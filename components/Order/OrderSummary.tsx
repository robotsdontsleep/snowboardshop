import Card from "@/components/ui/Card";
import InfoRow from "@/components/ui/InfoRow";
import Link from "next/link";
import { CartItem, formatPrice } from "@/src/lib/mockData";

interface OrderSummaryProps {
  order: CartItem[];
}

export default function OrderSummary({ order }: OrderSummaryProps) {
  const totalCents = order.reduce(
    (sum, item) => sum + item.price_cents * item.quantity,
    0,
  );

  return (
    <Card className="h-fit w-80">
      <div className="flex flex-col gap-3 h-fit">
        <h2 className="text-cardTitle font-black leading-none">
          Deine Bestellung
        </h2>

        <div className="border-b border-textColor/10 pb-4 text-note font-medium flex flex-col gap-2">
          {order.map((o) => (
            <InfoRow
              key={o.id}
              name={`${o.quantity} • ${o.name}`}
              value={formatPrice(o.price_cents * o.quantity)}
            />
          ))}
        </div>

        <div className="border-b border-textColor/10 pb-4 text-paragraph font-medium flex flex-col gap-2">
          <InfoRow name="Zwischensumme" value={formatPrice(totalCents)} />
          <InfoRow name="Versand" value="Kostenlos" />
        </div>

        <div className="flex justify-between items-center font-bold">
          <span>Gesamt</span>
          <span className="text-brandColor text-cardTitle">
            {formatPrice(totalCents)}
          </span>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 mt-2">
          <Link
            href="/products"
            className="text-xs text-textColor/70 hover:text-textColor transition-colors"
          >
            Weiter einkaufen
          </Link>
        </div>
      </div>
    </Card>
  );
}
