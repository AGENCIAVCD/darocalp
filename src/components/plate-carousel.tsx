"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

type GalleryImage = {
  src: string;
  alt: string;
  title?: string;
};

type PlateCarouselProps = {
  images: GalleryImage[];
};

export function PlateCarousel({ images }: PlateCarouselProps) {
  const [start, setStart] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [expanded, setExpanded] = useState<string | null>(images[0]?.src ?? null);

  useEffect(() => {
    const getVisibleCount = (width: number) => {
      if (width < 768) {
        return 1;
      }

      if (width < 1280) {
        return 2;
      }

      return 3;
    };

    const updateVisibleCount = () => {
      setVisibleCount(getVisibleCount(window.innerWidth));
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);

    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const maxStart = Math.max(0, images.length - visibleCount);
  const safeStart = Math.min(start, maxStart);

  const visibleImages = useMemo(
    () => images.slice(safeStart, safeStart + visibleCount),
    [images, safeStart, visibleCount],
  );

  const goPrev = () => setStart((current) => Math.max(0, current - 1));
  const goNext = () => setStart((current) => Math.min(maxStart, current + 1));

  return (
    <div className="grid gap-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-secondary">
            Galeria da casa
          </p>
          <p className="mt-2 text-sm leading-7 text-muted">
            Toque em uma foto para destacar o prato e seguir para a reserva.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-sm uppercase tracking-[0.18em] text-muted">
            {safeStart + 1}-{Math.min(safeStart + visibleCount, images.length)} de{" "}
            {images.length}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={goPrev}
              disabled={safeStart === 0}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white/80 text-foreground transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Ver pratos anteriores"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={goNext}
              disabled={safeStart >= maxStart}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white/80 text-foreground transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Ver próximos pratos"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {visibleImages.map((image, index) => {
          const isExpanded = expanded === image.src;

          return (
            <article
              key={image.src}
              className="overflow-hidden rounded-[1.8rem] border border-border bg-white/72 shadow-[0_16px_40px_rgba(64,38,17,0.07)]"
            >
              <button
                type="button"
                onClick={() =>
                  setExpanded((current) => (current === image.src ? null : image.src))
                }
                className="group block w-full text-left"
                aria-expanded={isExpanded}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                    sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                  />

                  <div className="absolute inset-x-0 top-0 flex items-center justify-between px-4 pt-4">
                    <span className="rounded-full border border-white/20 bg-black/24 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                      Prato {safeStart + index + 1}
                    </span>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/18 to-transparent px-4 pb-4 pt-14">
                    <p className="font-serif text-[1.35rem] leading-tight text-white">
                      {image.title ?? `Destaque ${safeStart + index + 1}`}
                    </p>
                  </div>
                </div>
              </button>

              <div className="border-t border-border bg-white/92 px-5 py-5">
                <p className="text-sm leading-7 text-muted">{image.alt}</p>
                {isExpanded ? (
                  <a
                    href="https://api.whatsapp.com/message/44AOXKCNVNHGL1?autoload=1&app_absent=0"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-strong"
                  >
                    <span className="text-white">Faça sua reserva</span>
                  </a>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
