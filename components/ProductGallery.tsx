"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type Props = {
  images: string[];
  alt: string;
};

export function ProductGallery({ images, alt }: Props) {
  const safeImages = useMemo(() => images.filter(Boolean), [images]);
  const [active, setActive] = useState(0);

  const current = safeImages[active] ?? safeImages[0];

  return (
    <div className="w-full">
      {/* Foto principal */}
      <div className="relative w-full overflow-hidden rounded-2xl bg-gray-100 aspect-[1/1] lg:aspect-[5/4] lg:min-h-[520px]">
        <Image
          src={current}
          alt={alt}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>

      {/* Miniaturas */}
      {safeImages.length > 1 ? (
        <div className="mt-4 flex gap-3">
          {safeImages.slice(0, 3).map((src, idx) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(idx)}
              className={`relative h-16 w-16 overflow-hidden rounded-xl border bg-gray-100 transition
                ${idx === active ? "ring-2 ring-green-600" : "hover:ring-2 hover:ring-gray-300"}`}
              aria-label={`Ver foto ${idx + 1}`}
            >
              <Image src={src} alt={alt} fill className="object-cover" sizes="64px" />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
