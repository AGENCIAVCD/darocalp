"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

type GalleryImage = {
  src: string;
  alt: string;
};

type PlateCarouselProps = {
  images: GalleryImage[];
};

export function PlateCarousel({ images }: PlateCarouselProps) {
  const [start, setStart] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
        return;
      }

      if (window.innerWidth < 1280) {
        setVisibleCount(2);
        return;
      }

      setVisibleCount(3);
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);

    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const maxStart = Math.max(0, images.length - visibleCount);
  const safeStart = Math.min(start, maxStart);
  const visibleImages = images.slice(safeStart, safeStart + visibleCount);

  const goPrev = () => setStart((current) => Math.max(0, current - 1));
  const goNext = () => setStart((current) => Math.min(maxStart, current + 1));

  return (
    <div className="glass-card overflow-hidden p-4 sm:p-5">
      <div className="mb-5 flex items-center justify-between">
        <div className="text-sm uppercase tracking-[0.2em] text-secondary">
          {safeStart + 1}-{Math.min(safeStart + visibleCount, images.length)} de{" "}
          {images.length}
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={goPrev}
            disabled={safeStart === 0}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-foreground transition hover:bg-[#f8f1e8] disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Ver pratos anteriores"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={goNext}
            disabled={safeStart >= maxStart}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-foreground transition hover:bg-[#f8f1e8] disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Ver próximos pratos"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="grid gap-5 xl:grid-cols-3 md:grid-cols-2">
        {visibleImages.map((image) => (
          <article
            key={image.src}
            className="overflow-hidden rounded-[1.8rem] border border-border bg-white/80"
          >
            <button
              type="button"
              onClick={() =>
                setExpanded((current) => (current === image.src ? null : image.src))
              }
              className="block w-full text-left"
              aria-expanded={expanded === image.src}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition duration-700 hover:scale-[1.03]"
                />
              </div>
            </button>
            {expanded === image.src ? (
              <div className="border-t border-border bg-white px-4 py-4">
                <a
                  href="https://api.whatsapp.com/message/44AOXKCNVNHGL1?autoload=1&app_absent=0"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-strong"
                >
                  <span className="text-white">Faça sua reserva</span>
                </a>
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </div>
  );
}
