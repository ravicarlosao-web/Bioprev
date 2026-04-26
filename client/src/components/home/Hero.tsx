import { useEffect, useState } from "react";
import heroBg from "@/assets/images/gardening-hero-new.jpg";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative h-[280px] sm:h-[340px] md:h-[400px] w-full bg-gray-900">
        <img 
          src={heroBg}
          alt="Especialista em controle de pragas" 
          className={`absolute inset-0 w-full h-full object-cover object-[62%_22%] sm:object-[60%_26%] md:object-[55%_30%] transition-transform duration-[1.5s] ease-out ${loaded ? 'scale-100' : 'scale-105'}`}
        />
        <div className="absolute inset-0 bg-[#001d3d]/60" />
        
        <div className="relative z-10 h-full container mx-auto px-4 flex flex-col items-center justify-center text-center">
          <h1
            className={`text-2xl sm:text-3xl md:text-5xl font-normal text-white mb-6 md:mb-8 max-w-4xl leading-tight px-2 transition-all duration-1000 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            data-testid="text-hero-title"
          >
            Os especialistas nacionais em controle de pragas
          </h1>
          
          <div className={`flex justify-center w-full transition-all duration-1000 ease-out delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <button 
              className="border border-white text-white bg-transparent hover:bg-white/10 transition-all duration-300 font-normal px-4 sm:px-6 py-2 sm:py-2.5 text-[13px] sm:text-[16px] min-w-0 sm:min-w-[200px]"
              data-testid="button-contact-specialist"
            >
              Contate o seu especialista local da Bioprev
            </button>
          </div>
        </div>
      </div>
      
      <div className="w-full bg-white py-12">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <p className={`text-[#333333] text-[18px] leading-relaxed font-normal transition-all duration-1000 delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} data-testid="text-hero-intro">
            A Bioprev é a empresa angolana de referência em controle de pragas, oferecendo a mais ampla e avançada gama de soluções e serviços de higiene e desinfestação do mercado nacional.
          </p>
        </div>
      </div>
    </section>
  );
}
