"use client";

type Props = {
  phone?: string;     // ex: "5511999999999"
  message: string;
  label?: string;     // texto do botão
  className?: string; // para estilizar
};

export function WhatsAppButton({
  phone = "55SEUNUMEROAQUI",
  message,
  label = "Comprar pelo WhatsApp",
  className = "",
}: Props) {
  const text = encodeURIComponent(message);
  const url = `https://wa.me/${phone}?text=${text}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={
        "inline-flex items-center justify-center rounded-lg bg-green-600 px-5 py-3 text-sm font-semibold text-white hover:bg-green-700 transition " +
        className
      }
    >
      {label}
    </a>
  );
}
