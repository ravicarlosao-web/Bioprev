import Header from "@/components/layout/Header";
import { ChevronRight, Plus, CheckCircle2, Target, Search, ShieldCheck, Zap, Shield, Info, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Waste() {
  const sectors = [
    { name: "Medical", icon: "https://www.rentokil.com/assets/images/icons/sector-facilities.png" },
    { name: "Industrial", icon: "https://www.rentokil.com/assets/images/icons/sector-food-processing.png" },
    { name: "Commercial", icon: "https://www.rentokil.com/assets/images/icons/sector-facilities.png" },
    { name: "Food Waste", icon: "https://www.rentokil.com/assets/images/icons/sector-food-retail.png" },
  ];

  const stages = [
    "Identificação do resíduo",
    "Acondicionamento seguro",
    "Transporte licenciado",
    "Tratamento/Reciclagem",
    "Certificação de destino final"
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <section className="relative h-[500px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=2000" 
              alt="Recolha de Resíduos" 
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
                <span>Recolha de Resíduos</span>
              </nav>
              <h1 className="text-white text-5xl md:text-6xl font-medium mb-8 leading-tight">
                Gestão e Recolha de<br />Resíduos
              </h1>
              <p className="text-white text-xl md:text-[22px] max-w-3xl mb-12 leading-relaxed font-light">
                Gestão profissional e sustentável de resíduos comerciais e industriais, cumprindo todas as normas ambientais.
              </p>
              <Button variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#333333] px-10 py-6 text-lg font-medium transition-all duration-300 rounded-none">
                Saber mais
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <p className="text-[#333333] text-lg mb-8 leading-relaxed font-medium">Sustentabilidade e conformidade legal.</p>
            <p className="text-[#666666] text-base mb-16 leading-relaxed">Nossa <span className="text-[#007cc3] cursor-pointer hover:underline">recolha de resíduos</span> foca na minimização do impacto ambiental e na correta gestão de cada fluxo de desperdício.</p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative h-[600px] group overflow-hidden">
            <img src="https://images.unsplash.com/photo-1618477461839-210199432687?auto=format&fit=crop&q=80&w=1000" alt="Resíduos Industriais" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md px-4">
              <div className="bg-white border-t-4 border-[#e31837] shadow-xl p-10">
                <h3 className="text-2xl md:text-[28px] font-medium text-[#333333] mb-6">Resíduos Perigosos</h3>
                <p className="text-[#666666] leading-relaxed mb-8">Manuseamento seguro e transporte certificado de resíduos especiais.</p>
                <button className="text-[#007cc3] font-medium border border-[#007cc3] px-6 py-2 hover:bg-[#007cc3] hover:text-white transition-all">Saber mais</button>
              </div>
            </div>
          </div>
          <div className="relative h-[600px] group overflow-hidden">
            <img src="https://images.unsplash.com/photo-1591193686104-fddba4d0e4d8?auto=format&fit=crop&q=80&w=1000" alt="Reciclagem" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md px-4">
              <div className="bg-white border-t-4 border-[#e31837] shadow-xl p-10">
                <h3 className="text-2xl md:text-[28px] font-medium text-[#333333] mb-6">Reciclagem Comercial</h3>
                <p className="text-[#666666] leading-relaxed mb-8">Maximizamos o reaproveitamento de materiais para o seu negócio.</p>
                <button className="text-[#007cc3] font-medium border border-[#007cc3] px-6 py-2 hover:bg-[#007cc3] hover:text-white transition-all">Saber mais</button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-[#f2f5f7]">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-[36px] font-medium text-[#333333] mb-8 leading-tight">Ciclo de Gestão</h2>
            <div className="space-y-2">
              {stages.map((step, idx) => (
                <Accordion type="single" collapsible key={idx} className="w-full">
                  <AccordionItem value={`item-${idx}`} className="border-none">
                    <AccordionTrigger className="bg-[#d0dae1] px-8 py-5 hover:bg-[#c4cfd7] transition-colors hover:no-underline rounded-none group flex justify-between">
                      <span className="text-[18px] font-medium text-[#333333] text-left">{step}</span>
                      <div className="flex items-center space-x-6">
                        <Plus className="w-6 h-6 text-[#333333] shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-45" />
                        <ChevronRight className="w-5 h-5 text-gray-500 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-90" />
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="bg-white px-8 py-6 text-left text-[#666666] border-x border-b border-[#d0dae1]">
                      Foco total em segurança e meio ambiente em {step}.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#007cc3] py-16 text-center text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-medium mb-8">Soluções verdes para o seu negócio</h2>
            <Button className="bg-white text-[#007cc3] hover:bg-white/90 px-12 py-6 text-lg font-bold rounded-none">Pedir Cotação</Button>
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
