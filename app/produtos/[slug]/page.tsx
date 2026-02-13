import type { Metadata } from "next";
import ProdutoClient from "./ProdutoClient";
import { products } from "../../../data/products";

type Props = { params: { slug: string } };

const norm = (v: unknown) => String(v ?? "").trim().toLowerCase();

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params?.slug; // aqui a gente garante que existe

  const product = products.find((p) => norm(p.slug) === norm(slug));

  // Fallback (mostra o slug que chegou)
  if (!product) {
    const title = `Produto (${slug ?? "SEM-SLUG"}) | Fik Mais Fina`;
    const description = "Produtos naturais para apoiar seu bem-estar.";
    const image = `/produtos/${slug ?? "produto-1"}.jpeg`; // tenta pelo slug
    return {
      title,
      description,
      openGraph: {
        title,
        description,
        type: "website",
        images: [{ url: image, width: 1200, height: 630 }],
      },
      twitter: { card: "summary_large_image", images: [image] },
    };
  }

  const title = `${product.name} | Fik Mais Fina`;
  const description =
    product.shortDescription ?? "Bem-estar e equilíbrio no seu ritmo.";

  const image = product.image?.startsWith("/")
    ? product.image
    : `/produtos/${product.slug}.jpeg`;

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