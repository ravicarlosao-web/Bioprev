import { MapPinned, Radar, Headset } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Expertise() {
  const headerReveal = useScrollReveal(0.2);
  const cardsReveal = useScrollReveal(0.15);
  const buttonReveal = useScrollReveal(0.3);

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
          <Radar className="w-12 h-12 text-[#f2c92f] stroke-[1.5px]" />
        </div>
      ),
    },
    {
      title: "Uma equipe, um contacto",
      description: "A nossa Equipa de Gestão de Contas Nacionais fornece serviços personalizados e um ponto de contacto único dedicado, garantindo uma experiência de gestão de pragas consistente e sem esforço em toda a sua propriedade.",
      icon: (
        <div className="w-24 h-24 rounded-full bg-[#f0f7fc] border-2 border-[#cce4f2] shadow-sm flex items-center justify-center transition-transform hover:scale-110 duration-300">
          <Headset className="w-12 h-12 text-[#007cc3] stroke-[1.5px]" />
        </div>
      ),
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div
        ref={headerReveal.ref}
        className={`container mx-auto px-4 max-w-6xl text-center mb-10 sm:mb-16 sr-hidden ${headerReveal.isVisible ? 'sr-visible' : ''}`}
      >
        <h2 className="text-2xl sm:text-3xl md:text-[32px] font-medium text-[#333333] mb-6 sm:mb-8 leading-tight">
          Capacitando empresas com experiência nacional em controle de pragas
        </h2>
        <p className="text-[#333333] max-w-4xl mx-auto leading-relaxed text-[16px]">
          Na Bioprev, trazemos excelência no controlo de pragas, protegendo empresas em todo o país com a nossa experiência incomparável e soluções inovadoras. Veja por que você prosperará em parceria com a nossa <span className="text-[#007cc3] font-bold cursor-pointer hover:underline">Equipa de Gestão de Contas Nacionais.</span>
        </p>
      </div>

      <div className="container mx-auto px-4 max-w-7xl">
        <div ref={cardsReveal.ref} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-16">
          {cards.map((card, index) => (
            <div 
              key={index}
              className={`bg-[#f9fafb] border-t-4 border-[#d41a1a] p-6 sm:p-8 md:p-10 flex flex-col items-center text-center shadow-sm hover-lift sr-hidden stagger-${index + 1} ${cardsReveal.isVisible ? 'sr-visible' : ''}`}
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

        <div
          ref={buttonReveal.ref}
          className={`flex justify-center sr-hidden ${buttonReveal.isVisible ? 'sr-visible' : ''}`}
        >
          <button 
            className="bg-[#007cc3] text-white font-bold py-3 sm:py-4 px-6 sm:px-10 text-base sm:text-lg md:text-xl hover:bg-[#005a8f] transition-all duration-300 hover:shadow-lg"
            data-testid="button-contact-us"
          >
            Pronto para simplificar a gestão de pragas? Contacte-nos hoje.
          </button>
        </div>
      </div>
    </section>
  );
}
