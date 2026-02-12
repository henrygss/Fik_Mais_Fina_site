import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/logo.jpeg"
            alt="Fik Mais Fina"
            width={64}
            height={64}
            className="object-contain"
            priority
          />

          <div className="leading-tight">
            <div className="text-lg font-bold text-gray-900">Fik Mais Fina</div>
            <div className="text-sm text-gray-500">Atendimento via WhatsApp</div>
          </div>
        </Link>

        <nav className="flex flex-wrap gap-4 sm:justify-end">
          <Link className="text-gray-700 hover:text-gray-900" href="/produtos">
            Produtos
          </Link>
          <Link className="text-gray-700 hover:text-gray-900" href="/sobre">
            Sobre
          </Link>
          <Link className="text-gray-700 hover:text-gray-900" href="/politicas">
            Políticas
          </Link>
        </nav>
      </div>
    </header>
  );
}
