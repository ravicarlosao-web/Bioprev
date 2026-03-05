import { Factory, Building2, Truck, Hotel, ShoppingCart, Plus } from "lucide-react";

export default function Sectors() {
  const sectors = [
    { name: "Food processing", icon: <Factory className="w-16 h-16 text-[#333333] stroke-[1px]" /> },
    { name: "Facilities management", icon: <Building2 className="w-16 h-16 text-[#333333] stroke-[1px]" /> },
    { name: "Logistics & warehousing", icon: <Truck className="w-16 h-16 text-[#333333] stroke-[1px]" /> },
    { name: "Hotels", icon: <Hotel className="w-16 h-16 text-[#333333] stroke-[1px]" /> },
    { name: "Food retail", icon: <ShoppingCart className="w-16 h-16 text-[#333333] stroke-[1px]" /> },
  ];

  return (
    <section className="py-20 bg-[#f2f4f6]">
      <div className="container mx-auto px-4 max-w-6xl text-center mb-16">
        <h2 className="text-3xl md:text-[32px] font-medium text-[#333333] mb-8 leading-tight">
          Global leaders in tailored pest control services
        </h2>
        <p className="text-[#333333] max-w-4xl mx-auto leading-relaxed text-[16px]">
          Rentokil is the global leader in <span className="text-[#007cc3] cursor-pointer hover:underline">pest control</span> and <span className="text-[#007cc3] cursor-pointer hover:underline">specialist disinfection services</span>, serving diverse sectors such as <span className="text-[#007cc3] font-bold cursor-pointer hover:underline">Food Processing</span>, <span className="text-[#007cc3] font-bold cursor-pointer hover:underline">Logistics</span>, <span className="text-[#007cc3] font-bold cursor-pointer hover:underline">Facilities Management</span> and <span className="text-[#007cc3] font-bold cursor-pointer hover:underline">more</span> worldwide—partner with us for global pest control expertise tailored to your industry.
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
              Show all sectors
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
