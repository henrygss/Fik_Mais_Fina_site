import type { Metadata } from "next";
import ProdutoClient from "./ProdutoClient";
import { products } from "../../../data/products";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "http://localhost:3000";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params; // ✅ unwrap do params Promise
  const slugFromUrl = decodeURIComponent(slug).trim();

  const product = products.find((p) => p.slug.trim() === slugFromUrl);

  if (!product) {
    return {
      title: "Produto não encontrado | Fik Mais Fina",
      description: `Não encontramos o produto: ${slugFromUrl}`,
      metadataBase: new URL(siteUrl),
    };
  }

  const title = `${product.name} | Fik Mais Fina`;
  const description =
    product.shortDescription ?? "Bem-estar e equilíbrio no seu ritmo.";

  const imagePath = product.image || "/logo.jpeg";
  const ogImage = imagePath.startsWith("http")
    ? imagePath
    : `${siteUrl}${imagePath}`;

  return {
    title,
    description,
    metadataBase: new URL(siteUrl),
    openGraph: {
      title,
      description,
      url: `${siteUrl}/produtos/${product.slug}`,
      siteName: "Fik Mais Fina",
      images: [{ url: ogImage, width: 1200, height: 630, alt: product.name }],
      locale: "pt_BR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Page() {
  return <ProdutoClient />;
}
