import Link from "next/link";

export default function NotFound() {
  return (
    <div className="p-6 text-center text-textColor">
      <h2 className="text-3xl font-black mb-4">Nicht gefunden</h2>
      <Link href="/" className="text-brandColor font-bold">
        Zur Startseite
      </Link>
    </div>
  );
}
