import { Factory, Building2, Truck, Hotel, ShoppingCart, Plus } from "lucide-react";

export default function Sectors() {
  const sectors = [
    { name: "Processamento de alimentos", icon: <Factory className="w-16 h-16 text-[#333333] stroke-[1px]" /> },
    { name: "Gestão de instalações", icon: <Building2 className="w-16 h-16 text-[#333333] stroke-[1px]" /> },
    { name: "Logística e armazenamento", icon: <Truck className="w-16 h-16 text-[#333333] stroke-[1px]" /> },
    { name: "Hotéis", icon: <Hotel className="w-16 h-16 text-[#333333] stroke-[1px]" /> },
    { name: "Varejo de alimentos", icon: <ShoppingCart className="w-16 h-16 text-[#333333] stroke-[1px]" /> },
  ];

  return (
    <section className="py-20 bg-[#f2f4f6]">
      <div className="container mx-auto px-4 max-w-6xl text-center mb-16">
        <h2 className="text-3xl md:text-[32px] font-medium text-[#333333] mb-8 leading-tight">
          Líderes nacionais em serviços personalizados de controle de pragas
        </h2>
        <p className="text-[#333333] max-w-4xl mx-auto leading-relaxed text-[16px]">
          A Bioprev é líder nacional em <span className="text-[#007cc3] cursor-pointer hover:underline">controle de pragas</span> e <span className="text-[#007cc3] cursor-pointer hover:underline">serviços especializados de desinfecção</span>, atendendo a diversos setores, como <span className="text-[#007cc3] font-bold cursor-pointer hover:underline">Processamento de Alimentos</span>, <span className="text-[#007cc3] font-bold cursor-pointer hover:underline">Logística</span>, <span className="text-[#007cc3] font-bold cursor-pointer hover:underline">Gestão de Instalações</span> e <span className="text-[#007cc3] font-bold cursor-pointer hover:underline">muito mais</span> em todo o país — seja nosso parceiro para experiência nacional em controle de pragas adaptada à sua indústria.
        </p>
      </div>

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {sectors.map((sector, index) => (
            <div 
              key={index} 
              className="bg-white p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow cursor-pointer group h-full"
              data-testid={`card-sector-${index}`}
            >
              <div className="mb-6 group-hover:scale-105 transition-transform">
                {sector.icon}
              </div>
              <p className="text-[#007cc3] font-bold text-[14px] leading-tight mt-auto">
                {sector.name}
              </p>
            </div>
          ))}
          
          <div 
            className="bg-[#1a2b3b] p-8 flex flex-col items-center justify-center text-center shadow-sm hover:bg-[#243a4e] transition-colors cursor-pointer text-white h-full"
            data-testid="card-sector-all"
          >
            <Plus className="w-12 h-12 mb-4 stroke-[3px]" />
            <p className="font-bold text-[14px] uppercase tracking-wider">
              Ver todos os setores
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
