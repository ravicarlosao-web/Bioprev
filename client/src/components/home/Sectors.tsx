import { Factory, Building2, Truck, Hotel, ShoppingCart, Plus } from "lucide-react";
import { Link } from "wouter";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Sectors() {
  const headerReveal = useScrollReveal(0.2);
  const gridReveal = useScrollReveal(0.1);

  const sectors = [
    { name: "Processamento de alimentos", icon: <Factory className="w-16 h-16 text-[#333333] stroke-[1px]" /> },
    { name: "Gestão de instalações", icon: <Building2 className="w-16 h-16 text-[#333333] stroke-[1px]" /> },
    { name: "Logística e armazenamento", icon: <Truck className="w-16 h-16 text-[#333333] stroke-[1px]" /> },
    { name: "Hotéis", icon: <Hotel className="w-16 h-16 text-[#333333] stroke-[1px]" /> },
    { name: "Varejo de alimentos", icon: <ShoppingCart className="w-16 h-16 text-[#333333] stroke-[1px]" /> },
  ];

  return (
    <section className="py-20 bg-[#f2f4f6]">
      <div
        ref={headerReveal.ref}
        className={`container mx-auto px-4 max-w-6xl text-center mb-16 sr-hidden ${headerReveal.isVisible ? 'sr-visible' : ''}`}
      >
        <h2 className="text-3xl md:text-[32px] font-medium text-[#333333] mb-8 leading-tight">
          Líderes nacionais em serviços personalizados de controle de pragas
        </h2>
        <p className="text-[#333333] max-w-4xl mx-auto leading-relaxed text-[16px]">
          A Bioprev é líder nacional em <span className="text-[#007cc3] cursor-pointer hover:underline">controle de pragas</span> e <span className="text-[#007cc3] cursor-pointer hover:underline">serviços especializados de desinfecção</span>, atendendo a diversos setores, como <span className="text-[#007cc3] font-bold cursor-pointer hover:underline">Processamento de Alimentos</span>, <span className="text-[#007cc3] font-bold cursor-pointer hover:underline">Logística</span>, <span className="text-[#007cc3] font-bold cursor-pointer hover:underline">Gestão de Instalações</span> e <span className="text-[#007cc3] font-bold cursor-pointer hover:underline">muito mais</span> em todo o país — seja nosso parceiro para experiência nacional em controle de pragas adaptada à sua indústria.
        </p>
      </div>

      <div className="container mx-auto px-4 max-w-7xl">
        <div ref={gridReveal.ref} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4">
          {sectors.map((sector, index) => (
            <div 
              key={index} 
              className={`bg-white p-4 sm:p-6 md:p-8 flex flex-col items-center text-center shadow-sm hover-lift cursor-pointer group h-full sr-hidden stagger-${index + 1} ${gridReveal.isVisible ? 'sr-visible' : ''}`}
              data-testid={`card-sector-${index}`}
            >
              <div className="mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 [&>svg]:w-10 [&>svg]:h-10 sm:[&>svg]:w-12 sm:[&>svg]:h-12 md:[&>svg]:w-16 md:[&>svg]:h-16">
                {sector.icon}
              </div>
              <p className="text-[#007cc3] font-bold text-[12px] sm:text-[13px] md:text-[14px] leading-tight mt-auto">
                {sector.name}
              </p>
            </div>
          ))}
          
          <Link href="/sectors">
            <div 
              className={`bg-[#1a2b3b] p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center text-center shadow-sm hover:bg-[#243a4e] transition-all duration-300 cursor-pointer text-white h-full hover:shadow-lg sr-hidden stagger-6 ${gridReveal.isVisible ? 'sr-visible' : ''}`}
              data-testid="card-sector-all"
            >
              <Plus className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-3 sm:mb-4 stroke-[3px]" />
              <p className="font-bold text-[12px] sm:text-[13px] md:text-[14px] uppercase tracking-wider">
                Ver todos os setores
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
