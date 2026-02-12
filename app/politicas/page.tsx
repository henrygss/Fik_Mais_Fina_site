import Link from "next/link";

export default function PoliticasPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="text-3xl font-bold text-gray-900">Políticas</h1>
      <p className="mt-3 text-gray-600">
        Transparência e segurança para você comprar com confiança.
      </p>

      <div className="mt-10 space-y-6">
        {/* Entrega */}
        <section className="rounded-xl border border-gray-200 bg-white px-6 py-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">Entrega</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-700">
            <li>
              O prazo de entrega pode variar conforme a sua região e a modalidade de envio.
            </li>
            <li>
              As informações de envio e prazo são confirmadas no atendimento via WhatsApp antes
              da finalização do pedido.
            </li>
            <li>
              Em caso de atraso por parte da transportadora/correios, ajudamos no acompanhamento.
            </li>
          </ul>
        </section>

        {/* Pagamento */}
        <section className="rounded-xl border border-gray-200 bg-white px-6 py-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">Pagamento</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-700">
            <li>As formas de pagamento disponíveis são informadas no atendimento via WhatsApp.</li>
            <li>Somente após a confirmação do pagamento o pedido é separado para envio.</li>
          </ul>
        </section>

        {/* Troca e devolução */}
        <section className="rounded-xl border border-gray-200 bg-white px-6 py-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">Troca e devolução</h2>
          <p className="mt-4 text-gray-700">
            Trabalhamos com produtos lacrados. Caso haja qualquer problema, você pode falar com
            a gente no WhatsApp e vamos orientar o melhor caminho.
          </p>

          <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-700">
            <li>
              Se o produto chegar com avaria, embalagem violada ou item incorreto, pedimos que
              envie fotos/vídeos no momento do recebimento para análise.
            </li>
            <li>
              Trocas/devoluções podem depender das condições do produto (lacrado, sem uso e com
              embalagem original).
            </li>
            <li>
              Em casos aplicáveis, seguimos as regras do Código de Defesa do Consumidor.
            </li>
          </ul>
        </section>

        {/* Uso responsável */}
        <section className="rounded-xl border border-gray-200 bg-white px-6 py-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">Uso responsável</h2>

          <p className="mt-4 text-gray-700">
            Este site não substitui orientação médica ou profissional.
          </p>

          <p className="mt-3 text-gray-700">
            Cada produto possui composição, modo de uso e contraindicações próprias,
            que devem ser respeitadas conforme informações do rótulo e da página do produto.
          </p>

          <p className="mt-3 text-gray-700">
            Antes de utilizar qualquer produto, leia atentamente as instruções e orientações específicas.
          </p>

          <p className="mt-3 text-gray-700">
            Em caso de condições de saúde pré-existentes, uso contínuo de medicamentos,
            gravidez, lactação ou qualquer dúvida, recomenda-se buscar orientação profissional
            antes do uso.
          </p>

          <p className="mt-3 text-gray-700">
            Os resultados podem variar de pessoa para pessoa.
          </p>
        </section>


        {/* Privacidade */}
        <section className="rounded-xl border border-gray-200 bg-white px-6 py-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">Privacidade</h2>
          <p className="mt-4 text-gray-700">
            Respeitamos sua privacidade. Não vendemos dados e usamos as informações apenas para
            atendimento, suporte e processamento do pedido.
          </p>

          <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-700">
            <li>
              Informações como nome, telefone e endereço são usadas somente para atendimento e envio.
            </li>
            <li>
              Conversas e dados compartilhados no WhatsApp são tratados com confidencialidade.
            </li>
          </ul>
        </section>

        {/* Contato */}
        <section className="rounded-xl border border-gray-200 bg-white px-6 py-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">Contato</h2>
          <p className="mt-4 text-gray-700">
            Em caso de dúvidas, fale com a gente pelo WhatsApp.
          </p>

          <div className="mt-4">
            <Link
              href="/produtos"
              className="text-sm font-semibold text-gray-700 hover:text-gray-900"
            >
              ← Voltar para produtos
            </Link>
          </div>
        </section>

        {/* Rodapé de aviso */}
        <section className="rounded-xl border border-gray-200 bg-white px-6 py-4 text-sm text-gray-600 shadow-sm">
          Aviso: As informações do site têm caráter informativo. Resultados podem variar e o uso
          deve respeitar as orientações do fabricante e/ou de um profissional.
        </section>
      </div>
    </main>
  );
}
