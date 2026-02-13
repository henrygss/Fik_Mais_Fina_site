"use client";


import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { products } from "../../data/products";
import { WhatsAppButton } from "../../components/WhatsAppButton";
import { ProductGallery } from "../../components/ProductGallery";
import { useEffect, useState } from "react";


export default function ProdutoClient() {
  const params = useParams();
  const slugParam = (params as any)?.slug;
  const slug = Array.isArray(slugParam) ? slugParam[0] : slugParam;

  console.log("SLUG DA URL:", slug);
  console.log("SLUGS DISPONÍVEIS:", products.map((p) => p.slug));


  if (!slug) {
    return (
      <main className="mx-auto max-w-6xl px-6 py-12">
        <h1 className="text-xl font-bold">Slug não chegou ❌</h1>
        <Link href="/produtos" className="text-sm text-gray-600 hover:text-gray-900">
          ← Voltar
        </Link>
      </main>
    );
  }

  const product = products.find((p) => p.slug === String(slug).trim());


  if (!product) {
    return (
      <main className="mx-auto max-w-6xl px-6 py-12">
        <h1 className="text-xl font-bold">Produto não encontrado ❌</h1>
        <p className="mt-2 text-gray-600">Slug: {slug}</p>
        <p className="mt-2 text-gray-600">
          Slugs disponíveis: {products.map((p) => p.slug).join(", ")}
        </p>
        <Link href="/produtos" className="mt-6 inline-block text-sm text-gray-600 hover:text-gray-900">
          ← Voltar
        </Link>
      </main>
    );
  }

  const sellerPhone = "553584261566"; // número da sua mãe

  const [productUrl, setProductUrl] = useState("");

  useEffect(() => {
    setProductUrl(window.location.href);
  }, []);

  const waMessage = [
    "Olá!",
    "",
    "Tenho interesse neste produto:",
    `Produto: ${product.name}`,
    `Preço: ${product.price}`,
    productUrl ? `Link: ${productUrl}` : "",
    "",
    "Pode me informar prazo de entrega e formas de pagamento?"
  ]
    .filter(Boolean)
    .join("\n");




  const longDescription = product.longDescription ?? product.shortDescription;
  const composition = product.composition ?? [];
  const howToUse = product.howToUse ?? [];
  const inTheBox = product.inTheBox ?? [];
  const faq = product.faq ?? [];
  const reviews = product.reviews ?? [];

  return (
    <>
      <main className="mx-auto max-w-6xl px-6 py-12 pb-24 sm:pb-12">
        <Link href="/produtos" className="text-sm text-gray-600 hover:text-gray-900">
          ← Voltar para produtos
        </Link>

        {/* Topo: imagem maior + info */}
        <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:items-start">
          {/* IMAGEM MAIOR */}
          <ProductGallery
                        images={product.images?.length ? product.images : [product.image]}
                        alt={product.name}
          />

          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
              {product.name}
            </h1>

            <p className="mt-3 text-gray-700">{product.shortDescription}</p>

            <div className="mt-6 text-3xl font-bold text-gray-900">{product.price}</div>

            {/* Botão no topo (desktop) */}
            <p className="mb-2 text-sm font-medium text-green-700">
              🟢 Atendimento imediato via WhatsApp
            </p>

            <div className="mt-8 hidden sm:block">
              <WhatsAppButton phone={sellerPhone} message={waMessage} />
            </div>

            <p className="mt-4 text-xs text-gray-500">
              Aviso: resultados podem variar. Este site não substitui orientação profissional.
            </p>

            <div className="mt-6 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <h3 className="mb-3 text-sm font-semibold text-gray-900">
                Por que comprar aqui?
              </h3>

              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-green-600">✔</span> Produto lacrado
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600">✔</span> Envio rápido
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600">✔</span> Atendimento via WhatsApp
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600">✔</span> Compra segura
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Seções */}
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {/* Descrição longa */}
          <section className="lg:col-span-3 rounded-xl border border-gray-200 bg-white px-6 py-3 shadow-sm
">
            <h2 className="text-lg font-semibold text-gray-900">Descrição</h2>
            <p className="mt-4 whitespace-pre-line text-gray-700">{longDescription}</p>
          </section>

          {/* Composição */}
          {composition.length ? (
            <section className="lg:col-span-3 rounded-xl border border-gray-200 bg-white px-6 py-3 shadow-sm
">
              <h2 className="text-lg font-semibold text-gray-900">Composição</h2>

              <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-700">
                {composition.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <p className="mt-4 text-xs text-gray-500">
                * Valores por porção conforme orientação do fabricante.
              </p>
            </section>
          ) : null}


          {/* O que vem na embalagem – barra */}
         <section className="lg:col-span-3 rounded-xl border border-gray-200 bg-white px-6 py-3 shadow-sm
">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <span className="font-semibold text-gray-900 whitespace-nowrap">
                O que vem na embalagem:
              </span>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-700">
                {inTheBox.map((item) => (
                  <span key={item} className="inline-flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-gray-400" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </section>


          <section className="lg:col-span-3 w-full rounded-xl border border-gray-200 bg-white px-6 py-3 shadow-sm">

            <div className="flex flex-wrap items-center text-sm text-gray-700">
              <span className="font-semibold text-gray-900 mr-2 whitespace-nowrap">
                Como usar:
              </span>

              <span>1 cápsula ao dia</span>
              <span className="mx-2 text-gray-400">•</span>

              <span>Preferencialmente pela manhã</span>
              <span className="mx-2 text-gray-400">•</span>

              <span>Ingerir com água</span>
            </div>
          </section>


         {/* Avisos e contraindicações */}
         <section className="lg:col-span-3 w-full rounded-xl border border-gray-200 bg-white px-6 py-6 shadow-sm">
           <h2 className="text-lg font-semibold text-gray-900">
             Avisos e contraindicações
             <span className="ml-2 text-sm font-normal text-gray-500">
               (leia antes de usar)
             </span>
           </h2>

           <div className="mt-4 space-y-2 text-base text-gray-700">
             {product.warnings?.map((warning, index) => (
               <p key={index}>• {warning}</p>
             ))}
           </div>

         </section>

        </div>

        {/* FAQ */}
        {faq.length ? (
          <section className="mt-12">
            <h2 className="text-xl font-semibold text-gray-900">Dúvidas frequentes</h2>
            <div className="mt-4 space-y-3">
              {faq.map((item) => (
                <details key={item.q} className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow">
                  <summary className="cursor-pointer font-semibold text-gray-900">
                    {item.q}
                  </summary>
                  <p className="mt-2 text-gray-700">{item.a}</p>
                </details>
              ))}
            </div>
          </section>
        ) : null}

        {/* Avaliações com prints e antes/depois */}
        {reviews.length ? (
          <section className="mt-12">
            <h2 className="text-xl font-semibold text-gray-900">Avaliações</h2>
            <p className="mt-2 text-sm text-gray-600">
              Prints e fotos enviados por clientes. Resultados variam.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {reviews.map((r, idx) => (
                <div key={idx} className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-base font-semibold text-gray-900">
                        {r.name ?? "Depoimento"}
                      </h3>

                      <div className="mt-1 flex items-center gap-2">
                        <span className="text-xs font-medium text-gray-500">
                          Avaliação:
                        </span>

                        <div className="flex items-center gap-1 text-yellow-500 leading-none">
                          {Array.from({ length: r.stars }).map((_, i) => (
                            <span key={i}>★</span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <span className="shrink-0 rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
                      Avaliação
                    </span>
                  </div>


                  {r.text ? <p className="mt-2 text-sm text-gray-700">{r.text}</p> : null}

                  <div className="mt-4 relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-100">
                    <Image
                      src={r.image}
                      alt={`Avaliação de ${r.name ?? "Cliente"}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>

                </div>
              ))}
            </div>
          </section>
        ) : null}

        {/* Botão repetido no final (desktop) */}
        <div className="mt-12 hidden sm:block">
          <WhatsAppButton phone={sellerPhone} message={waMessage} />
        </div>
      </main>

      {/* Botão fixo no mobile */}
      <div className="fixed bottom-0 left-0 right-0 border-t bg-white/95 p-3 backdrop-blur sm:hidden">
        <WhatsAppButton phone={sellerPhone} message={waMessage} />
      </div>
    </>
  );
}
