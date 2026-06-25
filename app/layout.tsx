import "./globals.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import CartStoreProvider from "@/src/store/StoreProvide";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="bg-appBg text-textColor antialiased">
        <CartStoreProvider>
          <Header />
          <main className="text-paragraph flex flex-col gap-12">{children}</main>
          <Footer />
        </CartStoreProvider>
      </body>
    </html>
  );
}
