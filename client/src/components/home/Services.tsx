import services1Img from "../../assets/images/services-1.jpg";
import services2Img from "../../assets/images/services-2.png";

export default function Services() {
  return (
    <section className="w-full bg-[#f2f2f2] pb-16">
      <div className="grid grid-cols-1 md:grid-cols-2">
        
        {/* Service 1 */}
        <div className="relative group overflow-hidden h-[450px]">
          <img 
            src={services1Img}
            alt="Serviços de controle de pragas" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
          
          {/* Card Overlap */}
          <div className="absolute bottom-0 left-0 right-0 md:right-auto md:w-[80%] bg-white border-t-4 border-primary p-8 md:p-10 z-10 m-4 md:m-0 md:ml-8 lg:ml-16 transform translate-y-4 md:-translate-y-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4" data-testid="text-service-title-1">Serviços de controle de pragas</h3>
            <p className="text-gray-600 mb-8 text-[15px] leading-relaxed" data-testid="text-service-desc-1">
              A Rentokil apoia mais de meio milhão de clientes em mais de 90 países e tem a confiança como parceira de controle de pragas de escolha para pequenas empresas e multinacionais.
            </p>
            <button 
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300 font-medium px-6 py-2.5 text-[15px]"
              data-testid="button-service-1"
            >
              Descubra mais
            </button>
          </div>
        </div>

        {/* Service 2 */}
        <div className="relative group overflow-hidden h-[450px]">
          <img 
            src={services2Img}
            alt="Controle de pragas digital" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
          
          {/* Card Overlap */}
          <div className="absolute bottom-0 left-0 right-0 md:right-auto md:w-[80%] bg-white border-t-4 border-primary p-8 md:p-10 z-10 m-4 md:m-0 md:ml-8 lg:ml-16 transform translate-y-4 md:-translate-y-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4" data-testid="text-service-title-2">Controle de pragas digital</h3>
            <p className="text-gray-600 mb-8 text-[15px] leading-relaxed" data-testid="text-service-desc-2">
              Uma gama de soluções de gerenciamento de pragas conectadas e digitalmente aprimoradas oferece aos clientes comerciais dados incomparáveis, insights e relatórios para prevenir e gerenciar pragas de forma proativa.
            </p>
            <button 
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300 font-medium px-6 py-2.5 text-[15px]"
              data-testid="button-service-2"
            >
              Descubra mais
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
