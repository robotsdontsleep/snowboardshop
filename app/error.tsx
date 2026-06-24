"use client";

interface ErrorPageProps {
  reset: () => void;
}

export default function ErrorPage({ reset }: ErrorPageProps) {
  return (
    <div className="p-6 text-center text-textColor">
      <h2 className="text-3xl font-black mb-4">Etwas ist schiefgelaufen</h2>
      <button
        onClick={reset}
        className="px-4 py-2 rounded-2xl border border-textColor/15 font-semibold hover:bg-textColor/5 transition-all"
      >
        Neu starten
      </button>
    </div>
  );
}
