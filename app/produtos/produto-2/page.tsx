import type { Metadata } from "next";
import ProdutoClient from "../ProdutoClient";

export const metadata: Metadata = {
  title: "MultiSlim Black | Fik Mais Fina",
  description: "O MultiSlim Black é um composto ultra concentrado de ervas...",
  openGraph: {
    title: "MultiSlim Black | Fik Mais Fina",
    description: "O MultiSlim Black é um composto ultra concentrado de ervas...",
    images: [{ url: "/produtos/produto-2.jpeg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/produtos/produto-2.jpeg"],
  },
};

export default function Page() {
  return <ProdutoClient slug="produto-2" />;
}