import type { Metadata } from "next";
import "./globals.css";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://fik-mais-fina-site.vercel.app"),
  title: "Fik Mais Fina | Produtos naturais para emagrecimento",
  description:
    "Produtos selecionados para apoiar seu bem-estar e equilíbrio. Atendimento rápido e seguro via WhatsApp.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="light">
      <body className="bg-white text-gray-900">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
