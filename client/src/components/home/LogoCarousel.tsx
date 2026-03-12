import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

interface LogoCarouselProps {
  logos: Array<{
    name: string;
    src: string;
  }>;
}

export default function LogoCarousel({ logos }: LogoCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    containScroll: "trimSnaps",
    loop: true,
    slidesToScroll: 1
  });
  
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="relative w-full mb-24" data-testid="carousel-logos">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-8">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex-[0_0_calc(50%-1rem)] sm:flex-[0_0_calc(33.33%-1.2rem)] md:flex-[0_0_calc(25%-1.5rem)] lg:flex-[0_0_calc(20%-1.6rem)] h-28 sm:h-32 md:h-40 flex items-center justify-center bg-white shadow-sm border border-gray-50 hover:shadow-md transition-all duration-300 group"
              data-testid={`carousel-slide-${index}`}
            >
              <div className="w-full h-full flex items-center justify-center p-6">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-h-32 max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  data-testid={`logo-image-${index}`}
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.style.display = "none";
                    const parent = img.parentElement;
                    if (parent) {
                      parent.innerHTML = '<span class="text-gray-400 text-sm font-medium">Image not available</span>';
                    }
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        className="absolute -left-2 sm:-left-4 md:left-0 top-1/2 transform -translate-y-1/2 md:-translate-x-16 lg:-translate-x-20 z-10 p-1.5 sm:p-2 rounded-full bg-[#333333] text-white hover:bg-[#f2c92f] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        data-testid="button-carousel-prev"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2} />
      </button>

      <button
        onClick={scrollNext}
        disabled={!canScrollNext}
        className="absolute -right-2 sm:-right-4 md:right-0 top-1/2 transform -translate-y-1/2 md:translate-x-16 lg:translate-x-20 z-10 p-1.5 sm:p-2 rounded-full bg-[#333333] text-white hover:bg-[#f2c92f] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        data-testid="button-carousel-next"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2} />
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-6" data-testid="carousel-dots">
        {logos.map((_, index) => (
          <button
            key={index}
            className="w-2 h-2 rounded-full bg-gray-300 hover:bg-[#333333] transition-colors"
            data-testid={`carousel-dot-${index}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
