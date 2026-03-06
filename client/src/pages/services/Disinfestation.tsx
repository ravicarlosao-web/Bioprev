import Header from "@/components/layout/Header";
import { ChevronRight, ShieldCheck, Target, CheckCircle2, Search, Zap, Shield, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Disinfestation() {
  const specializedServices = [
    { title: "Desinfestação Preventiva", description: "Protocolos rigorosos para evitar a entrada de agentes patogénicos.", icon: Shield },
    { title: "Tratamentos Curativos", description: "Eliminação imediata de infestações existentes com tecnologia de ponta.", icon: Zap },
    { title: "Monitorização Contínua", description: "Sistemas inteligentes de alerta para deteção precoce de riscos.", icon: Target },
    { title: "Auditorias de Segurança", description: "Relatórios detalhados para conformidade com normas internacionais.", icon: Info },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[450px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&q=80&w=2000" 
              alt="Disinfestation service" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          
          <div className="container mx-auto px-4 z-10">
            <div className="max-w-4xl">
              <nav className="flex items-center space-x-2 text-white/90 text-sm mb-6 font-medium">
                <a href="/" className="hover:underline">Home</a>
                <ChevronRight className="w-4 h-4" />
                <a href="/services" className="hover:underline">Serviços</a>
                <ChevronRight className="w-4 h-4" />
                <span>Desinfestação</span>
              </nav>
              
              <h1 className="text-white text-5xl md:text-6xl font-medium mb-6 leading-tight">
                Serviços de Desinfestação<br />Profissional
              </h1>
              
              <p className="text-white text-xl max-w-2xl mb-10 leading-relaxed font-light">
                Proteja a sua empresa e colaboradores com os nossos protocolos avançados de desinfestação, garantindo ambientes seguros e livres de riscos biológicos.
              </p>
              
              <Button 
                className="bg-[#e31837] hover:bg-[#c4152e] text-white px-10 py-6 text-lg font-bold rounded-none transition-all"
                data-testid="button-request-quote"
              >
                Solicitar Orçamento
              </Button>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-[36px] font-medium text-[#333333] mb-6">Porque escolher a nossa desinfestação?</h2>
              <p className="text-[#666666] text-lg leading-relaxed">
                Utilizamos as tecnologias mais recentes e produtos certificados para garantir uma eliminação eficaz de bactérias, vírus e outros agentes nocivos. O nosso compromisso é com a segurança total do seu espaço.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {specializedServices.map((service, idx) => (
                <div key={idx} className="flex p-8 border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300">
                  <div className="mr-6">
                    <service.icon className="w-12 h-12 text-[#e31837]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#333333] mb-3">{service.title}</h3>
                    <p className="text-[#666666] leading-relaxed">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Card */}
        <section className="py-16 bg-[#f2f5f7]">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white border-t-4 border-[#e31837] shadow-2xl p-12 text-center">
              <ShieldCheck className="w-16 h-16 text-[#e31837] mx-auto mb-6" />
              <h2 className="text-3xl font-medium text-[#333333] mb-6">Certificação de Ambiente Seguro</h2>
              <p className="text-[#666666] mb-8 text-lg">
                Após cada intervenção, emitimos um certificado de desinfestação detalhado, validando que o seu espaço cumpre todos os requisitos de segurança e higiene.
              </p>
              <Button 
                variant="outline" 
                className="border-2 border-[#007cc3] text-[#007cc3] hover:bg-[#007cc3] hover:text-white px-8 py-4 text-lg font-bold rounded-none"
              >
                Saber Mais sobre Certificações
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t-8 border-[#e31837] pt-16 pb-8">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <span className="text-[#e31837] text-4xl font-bold tracking-tight">Rentokil</span>
          <p className="text-sm text-gray-500 mt-4">© {new Date().getFullYear()} Rentokil Initial plc. Líder global em higiene e desinfestação.</p>
        </div>
      </footer>
    </div>
  );
}
