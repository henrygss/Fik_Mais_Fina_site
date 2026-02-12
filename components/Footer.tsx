export function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-5xl px-6 py-8 text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Fik Mais Fina. Todos os direitos reservados.</p>
        <p className="mt-2">
          Aviso: Este site não substitui orientação profissional. Resultados podem variar.
        </p>
      </div>
    </footer>
  );
}
