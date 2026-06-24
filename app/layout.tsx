import "./globals.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import { CartProvider } from "@/components/sections/Cart/CartProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="bg-appBg text-textColor antialiased">
        <CartProvider>
          <Header />
          <main className="text-paragraph flex flex-col gap-12">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
