import type { Metadata } from "next";
import ProdutoClient from "../ProdutoClient";

export const metadata: Metadata = {
  title: "Xtreme Slim | Fik Mais Fina",
  description: "O Xtreme Slim é um forte inibidor de apetite...",
  openGraph: {
    title: "Xtreme Slim | Fik Mais Fina",
    description: "O Xtreme Slim é um forte inibidor de apetite...",
    images: [{ url: "/produtos/produto-1.jpeg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/produtos/produto-1.jpeg"],
  },
};

export default function Page() {
  return <ProdutoClient slug="produto-1" />;
}