import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "./context/languageContext";
import { CartProvider } from "./context/cartContext";
import Loader from "./components/Loader";

export const metadata: Metadata = {
  title: "Crepino Coffee Shop | La Station du Bonheur",
  description: "Dégustez nos crêpes artisanales, gaufres belges et café premium au cœur de PLAYCE Yaoundé.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <Loader />
        <LanguageProvider>
          <CartProvider>
            {children}
          </CartProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
