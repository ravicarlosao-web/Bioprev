import { ChevronDown } from "lucide-react";
import heroBg from "../../assets/images/hero-bg.jpg";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image - No filter, full opacity as requested */}
      <div className="relative h-[500px] w-full bg-gray-900">
        <img 
          src={heroBg}
          alt="Especialista em controle de pragas" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Content */}
        <div className="relative h-full container mx-auto px-4 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-12 max-w-4xl leading-tight" data-testid="text-hero-title">
            The global experts in pest control
          </h1>
          
          <div className="flex justify-center w-full">
            <button 
              className="border border-white text-white bg-transparent hover:bg-white/10 transition-all duration-300 font-normal px-10 py-4 text-[18px] min-w-[300px]"
              data-testid="button-contact-specialist"
            >
              Contact your local Rentokil specialist
            </button>
          </div>
        </div>

        {/* V-Shape Cutout and Arrow */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
          <svg 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none" 
            className="relative block w-full h-[60px]"
            fill="#ffffff"
          >
            <path d="M0,0 L600,120 L1200,0 L1200,120 L0,120 Z"></path>
          </svg>
          
          {/* Arrow Icon positioned on the V-cut */}
          <div className="absolute bottom-[45px] left-1/2 transform -translate-x-1/2 z-30">
            <ChevronDown className="text-white w-10 h-10 stroke-[1.5px]" />
          </div>
        </div>
      </div>
      
      {/* Intro Text Bar */}
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <p className="text-[#444444] text-[18px] leading-relaxed" data-testid="text-hero-intro">
            A Rentokil é a maior empresa de controle de pragas do mundo, oferecendo a mais ampla e avançada gama de soluções e serviços de controle de pragas do setor.
          </p>
        </div>
      </div>
    </section>
  );
}
