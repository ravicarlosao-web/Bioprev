import Header from "@/components/layout/Header";
import { ChevronRight, Plus, CheckCircle2, Target, Search, ShieldCheck, Zap, Shield, Info, Bug } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Pests() {
  const sectors = [
    { name: "Food processing", icon: "https://www.rentokil.com/assets/images/icons/sector-food-processing.png" },
    { name: "Food retail", icon: "https://www.rentokil.com/assets/images/icons/sector-food-retail.png" },
    { name: "Logistics & warehousing", icon: "https://www.rentokil.com/assets/images/icons/sector-logistics.png" },
    { name: "Facilities management", icon: "https://www.rentokil.com/assets/images/icons/sector-facilities.png" },
    { name: "Hotels", icon: "https://www.rentokil.com/assets/images/icons/sector-hotels.png" },
  ];

  const stages = [
    "Identificação da espécie",
    "Avaliação do nível de infestação",
    "Tratamento térmico ou químico",
    "Monitorização pós-serviço",
    "Prevenção e aconselhamento"
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <section className="relative h-[500px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=2000" 
              alt="Gorgulhos e traças" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="container mx-auto px-4 z-10">
            <div className="max-w-4xl">
              <nav className="flex items-center space-x-2 text-white/90 text-sm mb-8 font-medium">
                <a href="/" className="hover:underline">Home</a>
                <ChevronRight className="w-4 h-4" />
                <a href="/services" className="hover:underline">Serviços</a>
                <ChevronRight className="w-4 h-4" />
                <span>Gorgulhos e traças</span>
              </nav>
              <h1 className="text-white text-5xl md:text-6xl font-medium mb-8 leading-tight">
                Controlo de Gorgulhos<br />e Traças
              </h1>
              <p className="text-white text-xl md:text-[22px] max-w-3xl mb-12 leading-relaxed font-light">
                Soluções especializadas para proteger os seus stocks e produtos armazenados contra infestações de gorgulhos e traças.
              </p>
              <Button variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#333333] px-10 py-6 text-lg font-medium transition-all duration-300 rounded-none">
                Saber mais
              </Button>
            </div>
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-4">
            <div className="w-12 h-8 bg-[#e31837] flex items-center justify-center clip-path-v">
              <ChevronRight className="w-6 h-6 text-white rotate-90" />
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <p className="text-[#333333] text-lg mb-8 leading-relaxed font-medium">
              Proteção especializada para produtos armazenados e têxteis.
            </p>
            <p className="text-[#666666] text-base mb-16 leading-relaxed">
              Infestações de <span className="text-[#007cc3] cursor-pointer hover:underline">gorgulhos</span> e <span className="text-[#007cc3] cursor-pointer hover:underline">traças</span> podem causar danos irreparáveis a stocks alimentares e têxteis. A nossa abordagem utiliza tecnologias de monitorização por feromonas e tratamentos térmicos inovadores.
            </p>
            <h2 className="text-3xl md:text-[40px] font-medium text-[#333333] mb-8 leading-tight">Serviços para Produtos Armazenados</h2>
            <p className="text-[#666666] text-base leading-relaxed">Garantimos a integridade dos seus produtos com inspeções detalhadas e métodos de controlo que respeitam as normas de segurança alimentar.</p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative h-[600px] group overflow-hidden">
            <img src="https://images.unsplash.com/photo-1590611380053-9a367201c10d?auto=format&fit=crop&q=80&w=1000" alt="Traças Têxteis" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md px-4">
              <div className="bg-white border-t-4 border-[#e31837] shadow-xl p-10">
                <h3 className="text-2xl md:text-[28px] font-medium text-[#333333] mb-6">Controlo de Traças</h3>
                <p className="text-[#666666] leading-relaxed mb-8">Tratamentos especializados para museus, arquivos e lojas têxteis.</p>
                <button className="text-[#007cc3] font-medium border border-[#007cc3] px-6 py-2 hover:bg-[#007cc3] hover:text-white transition-all">Saber mais</button>
              </div>
            </div>
          </div>
          <div className="relative h-[600px] group overflow-hidden">
            <img src="https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&q=80&w=1000" alt="Gorgulhos" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md px-4">
              <div className="bg-white border-t-4 border-[#e31837] shadow-xl p-10">
                <h3 className="text-2xl md:text-[28px] font-medium text-[#333333] mb-6">Controlo de Gorgulhos</h3>
                <p className="text-[#666666] leading-relaxed mb-8">Soluções para silos, armazéns e indústria alimentar.</p>
                <button className="text-[#007cc3] font-medium border border-[#007cc3] px-6 py-2 hover:bg-[#007cc3] hover:text-white transition-all">Saber mais</button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-6xl text-center">
            <h2 className="text-3xl md:text-[36px] font-medium text-[#333333] mb-8 leading-tight">Experiência em Diversos Setores</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {sectors.map((sector, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-6 flex flex-col items-center justify-center hover:shadow-md transition-shadow cursor-pointer group">
                  <div className="w-16 h-16 mb-4 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all">
                    <img src={sector.icon} alt={sector.name} className="max-w-full max-h-full" />
                  </div>
                  <span className="text-[13px] font-bold text-[#007cc3] text-center leading-tight">{sector.name}</span>
                </div>
              ))}
              <div className="bg-[#1a2b3c] p-6 flex flex-col items-center justify-center cursor-pointer group">
                <Plus className="w-10 h-10 text-white mb-4 transition-transform group-hover:scale-110" strokeWidth={1} />
                <span className="text-[13px] font-bold text-white text-center">Ver tudo</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-[#f2f5f7]">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-[36px] font-medium text-[#333333] mb-8 leading-tight">Nosso Processo</h2>
            <div className="space-y-2">
              {stages.map((step, idx) => (
                <Accordion type="single" collapsible key={idx} className="w-full">
                  <AccordionItem value={`item-${idx}`} className="border-none">
                    <AccordionTrigger className="bg-[#d0dae1] px-8 py-5 hover:bg-[#c4cfd7] transition-colors hover:no-underline rounded-none group">
                      <span className="text-[18px] font-medium text-[#333333] text-left">{step}</span>
                      <Plus className="w-6 h-6 text-[#333333] shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-45" />
                    </AccordionTrigger>
                    <AccordionContent className="bg-white px-8 py-6 text-left text-[#666666] border-x border-b border-[#d0dae1]">
                      Descrição detalhada do processo de {step}.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#007cc3] py-16 text-center text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-medium mb-8">Proteja os seus produtos hoje mesmo</h2>
            <Button className="bg-white text-[#007cc3] hover:bg-white/90 px-12 py-6 text-lg font-bold rounded-none">Contactar Especialista</Button>
          </div>
        </section>
      </main>
      <footer className="bg-white border-t-8 border-[#e31837] py-16 text-center">
        <span className="text-[#e31837] text-4xl font-bold">Rentokil</span>
        <p className="text-gray-500 mt-4">© {new Date().getFullYear()} Rentokil Initial plc.</p>
      </footer>
    </div>
  );
}
