import { useState, useEffect, useCallback, useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const reviews = [
  {
    id: 1,
    author: "João Baptista",
    initial: "J",
    color: "bg-[#0077c0]",
    stars: 5,
    text: "A Bioprev fez um trabalho excelente na minha residência em Talatona. Profissionais competentes e pontuais, recomendo a todos.",
    type: "individual",
  },
  {
    id: 2,
    author: "Ana Luísa Domingos",
    initial: "A",
    color: "bg-[#e91e63]",
    stars: 5,
    text: "Contratei a Bioprev para resolver um problema de térmitas na minha casa. Resultado impecável, ambiente limpo e seguro para a família.",
    type: "individual",
  },
  {
    id: 3,
    author: "Hotel Trópico — Luanda",
    initial: "H",
    color: "bg-[#5d4037]",
    stars: 5,
    text: "A Bioprev é o nosso parceiro de confiança há 3 anos. Serviço de desinfestação regular, sempre com relatórios detalhados e equipa profissional.",
    type: "empresa",
  },
  {
    id: 4,
    author: "Carlos Manuel Pedro",
    initial: "C",
    color: "bg-[#ff9800]",
    stars: 5,
    text: "Serviço cinco estrelas da Bioprev! Resolveram o problema de baratas no meu apartamento em apenas uma visita. Muito satisfeito.",
    type: "individual",
  },
  {
    id: 5,
    author: "Restaurante Sabores — Viana",
    initial: "R",
    color: "bg-[#4caf50]",
    stars: 5,
    text: "A Bioprev garantiu que o nosso restaurante passasse na inspecção sanitária sem problemas. Serviço de higienização de alto nível.",
    type: "empresa",
  },
  {
    id: 6,
    author: "Maria Teresa Fernandes",
    initial: "M",
    color: "bg-[#9c27b0]",
    stars: 5,
    text: "Excelente atendimento da equipa Bioprev. Vieram à minha casa no Kilamba, fizeram tudo rápido e com muito cuidado. Recomendo!",
    type: "individual",
  },
  {
    id: 7,
    author: "Supermercado Kero — Benfica",
    initial: "S",
    color: "bg-[#00796b]",
    stars: 5,
    text: "A Bioprev presta serviços de controlo de pragas na nossa unidade. Equipa sempre disponível e resultados consistentes ao longo dos meses.",
    type: "empresa",
  },
  {
    id: 8,
    author: "Francisco Gaspar Neto",
    initial: "F",
    color: "bg-[#1565c0]",
    stars: 4,
    text: "Boa experiência com a Bioprev no serviço de jardinagem e desinfestação. Preço justo e trabalho bem feito na minha vivenda.",
    type: "individual",
  },
  {
    id: 9,
    author: "Clínica Sagrada Esperança",
    initial: "C",
    color: "bg-[#c62828]",
    stars: 5,
    text: "A Bioprev é essencial para manter os nossos padrões de higiene hospitalar. Profissionalismo e rigor em cada visita. Parceiro de excelência.",
    type: "empresa",
  },
];

function useItemsPerView() {
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return itemsPerView;
}

export default function Reviews() {
  const headerReveal = useScrollReveal(0.2);
  const carouselReveal = useScrollReveal(0.1);
  const itemsPerView = useItemsPerView();
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const maxIndex = reviews.length - itemsPerView;

  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  const resetTimer = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 10000);
  }, [maxIndex]);

  useEffect(() => {
    resetTimer();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [resetTimer]);

  const goTo = useCallback(
    (index: number) => {
      setCurrentIndex(Math.max(0, Math.min(index, maxIndex)));
      resetTimer();
    },
    [maxIndex, resetTimer]
  );

  const goNext = useCallback(() => {
    goTo(currentIndex >= maxIndex ? 0 : currentIndex + 1);
  }, [currentIndex, maxIndex, goTo]);

  const goPrev = useCallback(() => {
    goTo(currentIndex <= 0 ? maxIndex : currentIndex - 1);
  }, [currentIndex, maxIndex, goTo]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goNext();
      else goPrev();
    }
  };

  const gap = 24;
  const cardWidthPercent = 100 / itemsPerView;
  const totalDots = maxIndex + 1;

  return (
    <section className="w-full bg-[#f2f4f6] py-16">
      <div className="container mx-auto px-4">
        <div
          ref={headerReveal.ref}
          className={`text-center mb-10 sr-hidden ${headerReveal.isVisible ? 'sr-visible' : ''}`}
        >
          <h2 className="text-[22px] font-bold text-[#333333]">
            Avaliação de <span className="text-[#f2c92f]">4.9</span>{" "}
            <span className="font-normal text-gray-500">
              de 29 767 avaliações
            </span>
          </h2>
        </div>

        <div ref={carouselReveal.ref} className={`relative max-w-6xl mx-auto sr-scale ${carouselReveal.isVisible ? 'sr-visible' : ''}`}>
          <div
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex"
              style={{
                gap: `${gap}px`,
                transform: `translateX(calc(-${currentIndex} * (${cardWidthPercent}% + ${gap - (gap * itemsPerView - gap) / reviews.length}px)))`,
                transition: "transform 0.7s cubic-bezier(0.25, 0.1, 0.25, 1)",
              }}
            >
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col shrink-0"
                  style={{
                    width: `calc(${cardWidthPercent}% - ${gap * (itemsPerView - 1) / itemsPerView}px)`,
                  }}
                  data-testid={`review-card-${review.id}`}
                >
                  <div className="flex items-center mb-4">
                    <div
                      className={`w-10 h-10 ${review.color} rounded-full flex items-center justify-center text-white font-bold mr-3 text-[14px] shrink-0`}
                    >
                      {review.initial}
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-bold text-[14px] text-[#333333] leading-tight truncate">
                        {review.author}
                      </h4>
                      <span className="text-[11px] text-gray-400 uppercase tracking-wide">
                        {review.type === "empresa"
                          ? "Cliente Empresarial"
                          : "Cliente Individual"}
                      </span>
                    </div>
                  </div>

                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.stars
                            ? "text-[#ffb400] fill-[#ffb400]"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  <p className="text-[13px] text-[#555555] leading-relaxed flex-grow">
                    {review.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={goPrev}
            className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg border border-gray-100 hidden md:flex items-center justify-center z-10 hover:bg-gray-50 transition-colors"
            data-testid="review-prev"
          >
            <ChevronLeft className="w-5 h-5 text-gray-500" />
          </button>
          <button
            onClick={goNext}
            className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg border border-gray-100 hidden md:flex items-center justify-center z-10 hover:bg-gray-50 transition-colors"
            data-testid="review-next"
          >
            <ChevronRight className="w-5 h-5 text-gray-500" />
          </button>

          <div className="flex justify-center mt-8 gap-2">
            {[...Array(totalDots)].map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  i === currentIndex
                    ? "w-6 bg-[#f2c92f]"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                data-testid={`review-dot-${i}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
