import Image from "next/image";
import Link from "next/link";
import heroBoardImg from "./hero-board.png";
import Badge from "@/components/ui/Badge";
import Section from "@/components/ui/Section";

export default function Hero() {
  return (
    <Section className="flex flex-col md:flex-row items-center gap-12 max-w-6xl">
      <div className="flex flex-col max-w-xl text-center md:text-left items-center md:items-start">
        <Badge>Winter 25/26 Kollektion</Badge>
        <h1 className="text-[5rem] font-black leading-none mb-6 flex flex-col">
          <span>FAHR</span>
          <span>DEINE</span>
          <span className="text-brandColor">LINIE.</span>
        </h1>
        <p className="text-textColor/50 text-paragraph max-w-md mb-8 leading-relaxed">
          Handgefertigte Snowboards aus den Alpen. Gebaut für alle, die den Berg
          nicht befahren, sondern lesen.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link
            href="/products"
            className="px-6 py-3 rounded-full bg-brandColor text-appBg font-bold text-paragraph transition-transform hover:scale-105 text-center"
          >
            Boards entdecken
          </Link>
          <Link
            href="#bestseller"
            className="px-6 py-3 rounded-full border border-textColor/15 text-textColor font-medium text-paragraph transition-colors hover:bg-textColor/5 text-center"
          >
            Bestseller ansehen
          </Link>
        </div>
      </div>
      <div className="relative w-full md:w-1/2 h-72 sm:h-96 md:h-[40vh] flex justify-center md:justify-end">
        <div className="absolute inset-0 m-auto w-full h-full bg-brandColor/5 blur-3xl rounded-full pointer-events-none" />
        <div className="relative w-full h-full max-w-xs overflow-hidden rounded-2xl">
          <Image
            src={heroBoardImg}
            alt="Nordkante Premium Snowboard"
            fill
            priority
            className="object-contain"
            sizes="(max-width: 768px) 250px, 400px"
          />
        </div>
      </div>
    </Section>
  );
}
