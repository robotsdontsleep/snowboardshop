import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import InfoRow from "@/components/ui/InfoRow";
import Link from "next/link";
import { formatPrice } from "@/src/lib/mockData";

interface CartSummaryProps {
  totalCents: number;
  onOrder: () => void;
}

export default function CartSummary({ totalCents, onOrder }: CartSummaryProps) {
  const formattedTotal = formatPrice(totalCents);

  return (
    <Card className="h-fit w-full lg:w-80">
      <div className="flex flex-col gap-3 h-fit">
        <h2 className="text-cardTitle font-black leading-none">
          Zusammenfassung
        </h2>
        <div className="border-b border-textColor/10  pb-4 text-paragraph font-medium flex flex-col gap-2">
          <InfoRow name="Zwischensumme" value={formattedTotal} />
          <InfoRow name="Versand" value="Kostenlos" />
        </div>

        <div className="flex justify-between items-center font-bold">
          <span>Gesamt</span>
          <span className="text-brandColor text-cardTitle">
            {formattedTotal}
          </span>
        </div>

        <div className="flex flex-col items-center justify-center gap-4">
          <Button
            title="Bestellen"
            onClick={onOrder}
            className="px-6 py-3 w-full rounded-xl text-paragraph"
          />
          <Link href="/products" className="text-xs text-textColor/70">
            Weiter einkaufen
          </Link>
        </div>
      </div>
    </Card>
  );
}
