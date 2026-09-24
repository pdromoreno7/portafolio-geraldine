'use client';

import { useCallback, useEffect, useState } from 'react';
import Image, { type StaticImageData } from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

export default function ProjectGallery({ title, images }: { title: string; images: readonly StaticImageData[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: images.length > 1, duration: 28 });
  const [selected, setSelected] = useState(0);
  const multiple = images.length > 1;

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative overflow-hidden rounded-[1.25rem] bg-mint">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((image, imageIndex) => (
            <div key={image.src} className="relative min-w-0 flex-[0_0_100%]">
              <div className="relative aspect-[4/5] max-h-[72vh] w-full">
                <Image
                  src={image}
                  alt={`${title}, pieza ${imageIndex + 1} de ${images.length}`}
                  fill
                  quality={90}
                  className="object-contain"
                  sizes="(min-width: 768px) 40vw, 100vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {multiple && (
        <>
          <button
            type="button"
            aria-label="Imagen anterior"
            onClick={() => emblaApi?.scrollPrev()}
            className="absolute left-3 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-[var(--line)] bg-paper text-ink shadow-plate transition-transform hover:scale-105 sm:left-4"
          >
            <HiChevronLeft className="text-xl" />
          </button>
          <button
            type="button"
            aria-label="Imagen siguiente"
            onClick={() => emblaApi?.scrollNext()}
            className="absolute right-3 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-[var(--line)] bg-paper text-ink shadow-plate transition-transform hover:scale-105 sm:right-4"
          >
            <HiChevronRight className="text-xl" />
          </button>
          <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 rounded-full bg-[rgba(20,20,20,0.82)] px-3 py-2">
            {images.map((image, imageIndex) => (
              <button
                key={image.src}
                type="button"
                aria-label={`Imagen ${imageIndex + 1} de ${images.length}`}
                aria-current={imageIndex === selected ? 'true' : undefined}
                onClick={() => emblaApi?.scrollTo(imageIndex)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  imageIndex === selected ? 'w-6 bg-white' : 'w-2.5 bg-white/70'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
