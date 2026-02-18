import type { Metadata } from "next";
import ProdutoClient from "../ProdutoClient";

export const metadata: Metadata = {
  title: "Diet + Stronger | Fik Mais Fina",
  description: "O DIET+ Stronger é um suplemento alimentar indicado...",
  openGraph: {
    title: "Diet + Stronger | Fik Mais Fina",
    description: "O DIET+ Stronger é um suplemento alimentar indicado...",
    images: [{ url: "/produtos/produto-3.jpeg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/produtos/produto-3.jpeg"],
  },
};

export default function Page() {
  return <ProdutoClient slug="produto-3" />;
}