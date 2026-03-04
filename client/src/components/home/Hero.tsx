import { ChevronDown } from "lucide-react";
import heroBg from "../../assets/images/hero-bg.jpg";

export default function Hero() {
  return (
    <section className="relative w-full">
      {/* Background Image */}
      <div className="relative h-[450px] w-full bg-gray-900 overflow-hidden">
        <img 
          src={heroBg}
          alt="Especialista em controle de pragas" 
          className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
        />
        
        {/* Content */}
        <div className="relative h-full container mx-auto px-4 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 max-w-3xl leading-tight drop-shadow-md" data-testid="text-hero-title">
            Os especialistas globais em controle de pragas
          </h1>
          
          <button 
            className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-gray-900 transition-all duration-300 font-medium px-8 py-3 text-[15px]"
            data-testid="button-contact-specialist"
          >
            Contate o seu especialista local da Rentokil
          </button>
        </div>
      </div>

      {/* Decorative arrow pointing down */}
      <div className="absolute -bottom-[20px] left-1/2 transform -translate-x-1/2 flex justify-center w-[120px] z-10">
        <div className="w-0 h-0 border-l-[60px] border-r-[60px] border-t-[30px] border-l-transparent border-r-transparent border-t-[#222222]"></div>
        <ChevronDown className="absolute top-[5px] text-white w-6 h-6" />
      </div>
      
      {/* Intro Text Bar */}
      <div className="w-full bg-white py-16 mt-4">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <p className="text-[#444444] text-[17px] leading-relaxed" data-testid="text-hero-intro">
            A Rentokil é a maior empresa de controle de pragas do mundo, oferecendo a mais ampla e avançada gama de soluções e serviços de controle de pragas do setor.
          </p>
        </div>
      </div>
    </section>
  );
}
