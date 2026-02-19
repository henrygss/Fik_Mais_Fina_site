import Image from "next/image";
import Link from "next/link";
import { products } from "../data/products";

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-14">
      {/* HERO */}
      <section className="rounded-2xl border bg-white p-10 shadow-sm">
        <h1 className="text-4xl font-extrabold text-green-700">Fik Mais Fina</h1>

        <p className="mt-3 text-gray-700">
          Produtos selecionados para apoiar seu bem-estar e equilíbrio, respeitando o seu ritmo.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/produtos"
            className="rounded-lg bg-green-600 px-5 py-3 font-semibold text-white hover:bg-green-700 transition"
          >
            Ver catálogo completo
          </Link>

          <Link
            href="/sobre"
            className="rounded-lg border px-5 py-3 font-semibold text-gray-900 hover:bg-gray-50 transition"
          >
            Saiba mais
          </Link>
        </div>
      </section>


      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            {/* FOTO */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative h-80 w-80 overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="/fundadora.jpeg"
                  alt="Fundadora da Fik Mais Fina"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* TEXTO */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Quem está por trás da Fik Mais Fina
              </h2>

              <p className="mt-6 text-gray-700 leading-relaxed">
                Olá, sou a <strong>Laisa</strong>, responsável pelo atendimento
                e curadoria dos produtos da Fik Mais Fina.
              </p>

              <p className="mt-4 text-gray-700 leading-relaxed">
                Meu objetivo é oferecer produtos naturais de qualidade, com
                atendimento próximo e personalizado via WhatsApp, ajudando cada
                cliente a encontrar a melhor opção para o seu bem-estar.
              </p>

              <p className="mt-4 text-gray-700 leading-relaxed">
                Aqui você fala diretamente comigo, com transparência,
                atenção e compromisso.
              </p>

              <div className="mt-6">
                <a
                  href="https://wa.me/553584261566"
                  target="_blank"
                  className="inline-block rounded-xl bg-green-600 px-6 py-3 text-white font-semibold shadow hover:bg-green-700 transition"
                >
                  Falar comigo no WhatsApp
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* PRODUTOS (3 CARDS) */}
      <section className="mt-12">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Produtos</h2>
            <p className="mt-1 text-gray-600">Clique em um produto para ver detalhes e comprar pelo WhatsApp.</p>
          </div>

          <Link href="/produtos" className="text-sm font-semibold text-green-700 hover:underline">
            Ver todos
          </Link>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 3).map((p) => (
            <div key={p.slug} className="rounded-xl border bg-white p-5 shadow-sm">
              <Link href={`/produtos/${p.slug}`} className="block">
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

        <div className="mt-10 rounded-xl bg-gray-50 p-6 text-sm text-gray-600">
          <p className="font-semibold text-gray-800">Aviso importante</p>
          <p className="mt-1">
            Este site não substitui orientação profissional. Resultados podem variar.
          </p>
        </div>
      </section>
    </main>
  );
}
