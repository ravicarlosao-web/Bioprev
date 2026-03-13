import services1Img from "../../assets/images/services-1.jpg";
import services2Img from "../../assets/images/services-2.jpg";

export default function Services() {
  return (
    <section id="services-section" className="w-full bg-[#f2f2f2] pb-16">
      <div className="grid grid-cols-1 md:grid-cols-2">
        
        <div className="relative group overflow-hidden h-[400px] sm:h-[450px] md:h-[500px]">
          <img 
            src={services1Img}
            alt="Serviços de controle de pragas" 
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 flex items-center justify-center md:justify-start md:pl-[15%]">
            <div className="bg-white border-t-4 border-[#f2c92f] p-6 sm:p-8 md:p-10 z-10 w-[88%] sm:w-[85%] md:w-[380px] shadow-xl">
              <h3 className="text-[20px] sm:text-[24px] font-normal text-[#333333] mb-4 sm:mb-6" data-testid="text-service-title-1">Serviços de controle de pragas</h3>
              <p className="text-[#333333] mb-6 sm:mb-8 text-[13px] sm:text-[14px] leading-relaxed" data-testid="text-service-desc-1">
                A Bioprev é reconhecida como a parceira preferida de controle de pragas em Angola, apoiando empresas, condomínios e instituições em Luanda, Benguela e Huambo com soluções profissionais e eficazes.
              </p>
              <button 
                className="border border-[#0077c0] text-[#0077c0] hover:bg-[#0077c0] hover:text-white transition-colors duration-300 font-normal px-5 sm:px-6 py-2 text-[13px] sm:text-[14px]"
                data-testid="button-service-1"
              >
                Saiba mais
              </button>
            </div>
          </div>
        </div>

        <div className="relative group overflow-hidden h-[400px] sm:h-[450px] md:h-[500px]">
          <img 
            src={services2Img}
            alt="Controle de pragas digital" 
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 flex items-center justify-center md:justify-start md:pl-[15%]">
            <div className="bg-white border-t-4 border-[#f2c92f] p-6 sm:p-8 md:p-10 z-10 w-[88%] sm:w-[85%] md:w-[380px] shadow-xl">
              <h3 className="text-[20px] sm:text-[24px] font-normal text-[#333333] mb-4 sm:mb-6" data-testid="text-service-title-2">Controle de pragas digital</h3>
              <p className="text-[#333333] mb-6 sm:mb-8 text-[13px] sm:text-[14px] leading-relaxed" data-testid="text-service-desc-2">
                Uma gama de soluções de gestão de pragas conectadas e digitalmente aprimoradas fornece aos clientes comerciais dados, percepções e relatórios incomparáveis para prevenir e gerenciar pragas de forma proativa.
              </p>
              <button 
                className="border border-[#0077c0] text-[#0077c0] hover:bg-[#0077c0] hover:text-white transition-colors duration-300 font-normal px-5 sm:px-6 py-2 text-[13px] sm:text-[14px]"
                data-testid="button-service-2"
              >
                Saiba mais
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
