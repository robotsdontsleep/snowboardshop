import Link from "next/link";

export default function ProductNotFound() {
  return (
    <div className="p-6 text-center text-textColor">
      <h2 className="text-3xl font-black mb-4">Snowboard nicht gefunden</h2>
      <Link href="/products" className="text-brandColor font-bold">
        Zurück zum Shop
      </Link>
    </div>
  );
}
