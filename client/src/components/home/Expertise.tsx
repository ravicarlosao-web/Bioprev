import { MapPinned, Radar, Headset } from "lucide-react";
import { useEffect, useState, useRef } from "react";

export default function Expertise() {
  const [visibleCards, setVisibleCards] = useState([false, false, false]);
  const [visibleButton, setVisibleButton] = useState(false);
  const cardRefs = [useRef(null), useRef(null), useRef(null)];
  const buttonRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const cardIndex = cardRefs.findIndex(ref => ref.current === entry.target);
        if (cardIndex !== -1) {
          setVisibleCards(prev => {
            const newState = [...prev];
            newState[cardIndex] = entry.isIntersecting;
            return newState;
          });
        }
        
        if (buttonRef.current === entry.target) {
          setVisibleButton(entry.isIntersecting);
        }
      });
    }, {
      threshold: 0.3,
      rootMargin: "0px 0px -100px 0px"
    });

    cardRefs.forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });
    
    if (buttonRef.current) observer.observe(buttonRef.current);

    return () => {
      cardRefs.forEach(ref => {
        if (ref.current) observer.unobserve(ref.current);
      });
      if (buttonRef.current) observer.unobserve(buttonRef.current);
    };
  }, []);

  const cards = [
    {
      title: "Nacional mas local",
      description: "Estamos em todos os lugares, atendendo a mais locais do que qualquer outro provedor de controle de pragas, combinando nossa experiência com equipes locais em todo o país.",
      icon: (
        <div className="w-24 h-24 rounded-full bg-[#f0f7fc] border-2 border-[#cce4f2] shadow-sm flex items-center justify-center transition-transform hover:scale-110 duration-300">
          <MapPinned className="w-12 h-12 text-[#007cc3] stroke-[1.5px]" />
        </div>
      ),
    },
    {
      title: "Liderando a era do controle digital de pragas",
      description: "A nossa pioneira linha PestConnect oferece proteção constante. Com a inovação no nosso DNA, antecipamos, resolvemos e relatamos os riscos de pragas de forma contínua.",
      icon: (
        <div className="w-24 h-24 rounded-full bg-[#fde8e8] border-2 border-[#f5c2c2] shadow-sm flex items-center justify-center transition-transform hover:scale-110 duration-300">
          <Radar className="w-12 h-12 text-[#e31837] stroke-[1.5px]" />
        </div>
      ),
    },
    {
      title: "Uma equipe, um contato",
      description: "A nossa Equipa de Gestão de Contas Nacionais fornece serviços personalizados e um ponto de contacto único dedicado, garantindo uma experiência de gestão de pragas consistente e sem esforço em toda a sua propriedade.",
      icon: (
        <div className="w-24 h-24 rounded-full bg-[#f0f7fc] border-2 border-[#cce4f2] shadow-sm flex items-center justify-center transition-transform hover:scale-110 duration-300">
          <Headset className="w-12 h-12 text-[#007cc3] stroke-[1.5px]" />
        </div>
      ),
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl text-center mb-16">
        <h2 className="text-3xl md:text-[32px] font-medium text-[#333333] mb-8 leading-tight">
          Capacitando empresas com experiência nacional em controle de pragas
        </h2>
        <p className="text-[#333333] max-w-4xl mx-auto leading-relaxed text-[16px]">
          Na Bioprev, trazemos excelência no controlo de pragas, protegendo empresas em todo o país com a nossa experiência incomparável e soluções inovadoras. Veja por que você prosperará em parceria com a nossa <span className="text-[#007cc3] font-bold cursor-pointer hover:underline">Equipa de Gestão de Contas Nacionais.</span>
        </p>
      </div>

      <style>{`
        .expertise-card {
          opacity: 0;
          transform: translateY(60px);
          transition: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .expertise-card.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .expertise-card:nth-child(1).visible {
          transition-delay: 0ms;
        }
        
        .expertise-card:nth-child(2).visible {
          transition-delay: 150ms;
        }
        
        .expertise-card:nth-child(3).visible {
          transition-delay: 300ms;
        }
        
        .expertise-button {
          opacity: 0;
          transform: translateY(60px);
          transition: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .expertise-button.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {cards.map((card, index) => (
            <div 
              key={index}
              ref={cardRefs[index]}
              className={`expertise-card bg-[#f9fafb] border-t-4 border-[#d41a1a] p-10 flex flex-col items-center text-center shadow-sm ${visibleCards[index] ? 'visible' : ''}`}
              data-testid={`card-expertise-${index}`}
            >
              <div className="mb-8">
                {card.icon}
              </div>
              <h3 className="text-2xl font-medium text-[#333333] mb-6 leading-tight min-h-[64px] flex items-center">
                {card.title}
              </h3>
              <p className="text-[#333333] leading-relaxed text-[15px]">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button 
            ref={buttonRef}
            className={`expertise-button bg-[#007cc3] text-white font-bold py-4 px-10 text-xl hover:bg-[#005a8f] transition-colors ${visibleButton ? 'visible' : ''}`}
            data-testid="button-contact-us"
          >
            Pronto para simplificar a gestão de pragas? Contacte-nos hoje.
          </button>
        </div>
      </div>
    </section>
  );
}
