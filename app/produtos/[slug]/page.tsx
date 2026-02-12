import type { Metadata } from "next";
import ProdutoClient from "./ProdutoClient";
import { products } from "../../../data/products";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "http://localhost:3000";

type Props = {
  params: Promise<{ slug: string }>;
};

import type { Metadata } from "next";

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const { slug } = params;

  const title = `${slug} | Fik Mais Fina`;
  const description = "Veja detalhes do produto e compre via WhatsApp.";
  const image = `/produtos/${slug}.jpeg`;

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
