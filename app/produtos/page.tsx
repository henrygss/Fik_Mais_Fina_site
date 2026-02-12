import Image from "next/image";
import Link from "next/link";
import { products } from "../../data/products";

export default function ProdutosPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="text-3xl font-bold">Produtos</h1>
      <p className="mt-2 text-gray-600">
        Clique em um produto para ver detalhes e finalizar pelo WhatsApp.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <div key={p.slug} className="rounded-xl border bg-white p-5 shadow-sm">
            {/* Miniatura clicável */}
            <Link href={`/produtos/${p.slug}`}>
              <div className="relative h-40 w-full overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover transition-transform duration-200 hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              <h3 className="mt-4 text-lg font-semibold text-gray-900">{p.name}</h3>
              <p className="mt-1 text-sm text-gray-600">{p.shortDescription}</p>
            </Link>

            <div className="mt-4 flex items-center justify-between">
              <span className="font-semibold text-gray-900">{p.price}</span>

              {/* Botão leva para a página do produto */}
              <Link
                href={`/produtos/${p.slug}`}
                className="rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-700 transition"
              >
                Comprar
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

