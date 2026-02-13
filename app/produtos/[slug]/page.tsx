import type { Metadata } from "next";
import ProdutoClient from "./ProdutoClient";
import { products } from "../../../data/products";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;

  const product = products.find((p) => p.slug === slug);

  // Fallback se não achar produto (evita crash)
  if (!product) {
    const title = "Produto | Fik Mais Fina";
    const description = "Produtos naturais para apoiar seu bem-estar.";
    const image = "/og-default.jpg"; // coloque um fallback em /public

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        type: "website",
        images: [{ url: image, width: 1200, height: 630 }],
      },
      twitter: {
        card: "summary_large_image",
        images: [image],
      },
    };
  }

  const title = `${product.name} | Fik Mais Fina`;
  const description =
    product.shortDescription ?? "Bem-estar e equilíbrio no seu ritmo.";

  // IMPORTANTE: usar caminho relativo (/public/...)
  // Ex: product.image = "/produtos/produto-1.jpeg"
  const image = product.image || `/produtos/${slug}.jpeg`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      locale: "pt_BR",
      siteName: "Fik Mais Fina",
      images: [{ url: image, width: 1200, height: 630, alt: product.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default function Page() {
  return <ProdutoClient />;
}