import type { Metadata } from "next";
import "./globals.css";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://fik-mais-fina-site.vercel.app"),

  title: "Fik Mais Fina | Produtos naturais para emagrecimento",
  description:
    "Produtos selecionados para apoiar seu bem-estar e equilíbrio. Atendimento rápido e seguro via WhatsApp.",

  openGraph: {
    title: "Fik Mais Fina",
    description:
      "Produtos naturais para apoiar seu bem-estar e equilíbrio.",
    siteName: "Fik Mais Fina",
    locale: "pt_BR",
    type: "website",
  },
};  

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-gray-50 text-gray-900 antialiased overflow-x-hidden">
        <Header />

        <div className="bg-gradient-to-b from-white via-gray-50 to-gray-50">
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}