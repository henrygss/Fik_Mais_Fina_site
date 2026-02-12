export default function SobrePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="text-3xl font-bold text-gray-900">Sobre a Fik Mais Fina</h1>
      <p className="mt-3 text-gray-600">
        Bem-estar, equilíbrio e confiança no seu ritmo.
      </p>

      {/* Quem somos */}
      <section className="mt-10 rounded-xl border border-gray-200 bg-white px-6 py-6 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900">Quem somos</h2>
        <p className="mt-4 text-gray-700">
          A <strong>Fik Mais Fina</strong> nasceu com o propósito de oferecer produtos
          de bem-estar e autocuidado, sempre prezando pela transparência,
          responsabilidade e atendimento humanizado.
        </p>
      </section>

      {/* Nossa história */}
      <section className="mt-6 rounded-xl border border-gray-200 bg-white px-6 py-6 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900">Nossa história</h2>

        <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-1 text-sm font-semibold text-green-700">
          🕒 Mais de 5 anos de experiência
        </div>


        <p className="mt-4 text-gray-700">
          A Fik Mais Fina surgiu de uma experiência real.
        </p>

        <p className="mt-3 text-gray-700">
          Quando ainda buscava melhorar sua própria saúde e bem-estar, nossa fundadora
          conheceu os produtos por indicação de uma amiga. Após perceber resultados
          positivos em si mesma, passou a compartilhar a experiência com pessoas próximas.
        </p>

        <p className="mt-3 text-gray-700">
          Com o tempo, amigas começaram a pedir ajuda para adquirir os mesmos produtos.
          Cada nova pessoa que obtinha resultados indicava para alguém de confiança,
          criando uma rede construída com base na experiência real, confiança e
          recomendação direta.
        </p>

        <p className="mt-3 text-gray-700">
          Hoje, após <strong>mais de 5 anos de atuação</strong>, a Fik Mais Fina mantém
          o compromisso com atendimento humanizado, responsabilidade e transparência,
          indicando apenas produtos que realmente conhece e confia.
        </p>
      </section>


      {/* Missão */}
      <section className="mt-6 rounded-xl border border-gray-200 bg-white px-6 py-6 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900">Nossa missão</h2>
        <p className="mt-4 text-gray-700">
          Ajudar pessoas a se sentirem melhor consigo mesmas, respeitando
          os limites do corpo e incentivando hábitos saudáveis, sem promessas
          irreais ou milagrosas.
        </p>
      </section>

      {/* Por que confiar */}
      <section className="mt-6 rounded-xl border border-gray-200 bg-white px-6 py-6 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900">
          Por que confiar na Fik Mais Fina?
        </h2>

        <ul className="mt-4 space-y-2 text-gray-700">
          <li>✔ Produtos lacrados e selecionados</li>
          <li>✔ Atendimento direto e rápido via WhatsApp</li>
          <li>✔ Transparência nas informações</li>
          <li>✔ Compra segura</li>
        </ul>
      </section>

      {/* Atendimento */}
      <section className="mt-6 rounded-xl border border-gray-200 bg-white px-6 py-6 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900">Atendimento</h2>
        <p className="mt-4 text-gray-700">
          Nosso atendimento é feito exclusivamente via WhatsApp, garantindo
          agilidade, clareza e suporte antes e depois da compra.
        </p>
      </section>

      {/* Aviso */}
      <section className="mt-6 rounded-xl border border-gray-200 bg-white px-6 py-4 text-sm text-gray-600">
        Aviso: Os produtos comercializados não substituem orientação médica
        ou profissional. Resultados podem variar de pessoa para pessoa.
      </section>
    </main>
  );
}
