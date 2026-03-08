import { ChevronDown } from "lucide-react";
import heroBg from "../../assets/images/hero-bg.jpg";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image - Clean, no filters */}
      <div className="relative h-[400px] w-full bg-gray-900">
        <img 
          src={heroBg}
          alt="Especialista em controle de pragas" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Content */}
        <div className="relative h-full container mx-auto px-4 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-5xl font-normal text-white mb-8 max-w-4xl leading-tight" data-testid="text-hero-title">
            Os especialistas globais em controle de pragas
          </h1>
          
          <div className="flex justify-center w-full">
            <button 
              className="border border-white text-white bg-transparent hover:bg-white/10 transition-all duration-300 font-normal px-6 py-2.5 text-[16px] min-w-[200px]"
              data-testid="button-contact-specialist"
            >
              Contate o seu especialista local da Bioprev
            </button>
          </div>
        </div>

        {/* V-Shape Cutout and Arrow - Adjusted to show text below more easily */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
          <svg 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none" 
            className="relative block w-full h-[40px]"
            fill="#ffffff"
          >
            <path d="M0,0 L600,120 L1200,0 L1200,120 L0,120 Z"></path>
          </svg>
          
          {/* Arrow Icon - Fixed to match the design in the photo */}
          <div className="absolute bottom-[25px] left-1/2 transform -translate-x-1/2 z-30">
            <ChevronDown className="text-white w-12 h-12 stroke-[1px]" />
          </div>
        </div>
      </div>
      
      {/* Intro Text Bar - Closer to the image to be seen immediately */}
      <div className="w-full bg-white py-12">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <p className="text-[#333333] text-[18px] leading-relaxed font-normal" data-testid="text-hero-intro">
            A Bioprev é a maior empresa de controle de pragas do mundo, oferecendo a mais ampla e avançada gama de soluções e serviços de controle de pragas da indústria.
          </p>
        </div>
      </div>
    </section>
  );
}
