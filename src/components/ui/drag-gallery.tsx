"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type DragGalleryProps = {
  children: React.ReactNode[];
  className?: string;
  slideClassName?: string;
  showDots?: boolean;
  showArrows?: boolean;
  invert?: boolean;
};

export function DragGallery({
  children,
  className,
  slideClassName,
  showDots = true,
  showArrows = true,
  invert = false,
}: DragGalleryProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: true,
    containScroll: "trimSnaps",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  const onInit = useCallback(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    // Sync initial state from the embla instance, then subscribe to its own change events.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    onInit();
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("reInit", onInit);
  }, [emblaApi, onSelect, onInit]);

  return (
    <div className={cn("relative", className)}>
      <div className="overflow-hidden no-scrollbar" ref={emblaRef}>
        <div className="flex gap-5 sm:gap-6">
          {children.map((child, i) => (
            <div
              key={i}
              className={cn("min-w-0 shrink-0", slideClassName)}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {showArrows && (
        <div className="mt-6 flex items-center justify-center gap-3 sm:justify-end sm:mt-8">
          <button
            type="button"
            aria-label="Anterior"
            onClick={() => emblaApi?.scrollPrev()}
            disabled={!canScrollPrev}
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-full shadow-soft transition disabled:opacity-30",
              invert
                ? "border border-white/30 bg-white/10 text-white backdrop-blur-sm hover:border-white/60"
                : "border border-brand-purple-100 bg-white text-ink hover:border-brand-purple-300"
            )}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Próximo"
            onClick={() => emblaApi?.scrollNext()}
            disabled={!canScrollNext}
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-full shadow-soft transition disabled:opacity-30",
              invert
                ? "border border-white/30 bg-white/10 text-white backdrop-blur-sm hover:border-white/60"
                : "border border-brand-purple-100 bg-white text-ink hover:border-brand-purple-300"
            )}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}

      {showDots && scrollSnaps.length > 1 && (
        <div className="mt-5 flex items-center justify-center gap-2">
          {scrollSnaps.map((_, i) => (
            <button
              key={i}
              aria-label={`Ir para item ${i + 1}`}
              onClick={() => emblaApi?.scrollTo(i)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                i === selectedIndex
                  ? invert
                    ? "w-6 bg-white"
                    : "w-6 bg-brand-purple-500"
                  : invert
                    ? "w-2 bg-white/30"
                    : "w-2 bg-brand-purple-100"
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
