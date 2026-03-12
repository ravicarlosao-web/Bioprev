import Header from "@/components/layout/Header";
import { ChevronRight, Plus, CheckCircle2, Target, Search, ShieldCheck, Zap, Shield, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Footer from "@/components/layout/Footer";

export default function Disinfestation() {
  const sectors = [
    { name: "Processamento de alimentos", icon: "https://www.bioprev.com/assets/images/icons/sector-food-processing.png" },
    { name: "Varejo de alimentos", icon: "https://www.bioprev.com/assets/images/icons/sector-food-retail.png" },
    { name: "Logística e armazenamento", icon: "https://www.bioprev.com/assets/images/icons/sector-logistics.png" },
    { name: "Gestão de instalações", icon: "https://www.bioprev.com/assets/images/icons/sector-facilities.png" },
    { name: "Hotéis", icon: "https://www.bioprev.com/assets/images/icons/sector-hotels.png" },
  ];

  const disinfectionStages = [
    "Pesquisa e avaliação de risco",
    "Preparação e protocolos de segurança",
    "Implementação do tratamento de desinfecção",
    "Verificação pós-tratamento",
    "Certificação e relatórios"
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[350px] sm:h-[420px] md:h-[500px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&q=80&w=2000" 
              alt="Serviço de desinfecção" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          
          <div className="container mx-auto px-4 z-10">
            <div className="max-w-4xl">
              <nav className="flex items-center space-x-2 text-white/90 text-sm mb-8 font-medium">
                <a href="/" className="hover:underline">Início</a>
                <ChevronRight className="w-4 h-4" />
                <a href="/services" className="hover:underline">Serviços</a>
                <ChevronRight className="w-4 h-4" />
                <span>Desinfecção</span>
              </nav>
              
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-6 sm:mb-8 leading-tight">
                Serviços e soluções de<br className="hidden sm:block" />desinfecção profissional
              </h1>
              
              <p className="text-white text-base sm:text-lg md:text-xl lg:text-[22px] max-w-3xl mb-8 sm:mb-12 leading-relaxed font-light">
                Como líder nacional em soluções de higiene, a Bioprev oferece serviços de desinfecção especializados, fiáveis e profissionais a clientes comerciais em todo o país.
              </p>
              
              <Button 
                variant="outline" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#333333] px-10 py-6 text-lg font-medium transition-all duration-300 rounded-none"
                data-testid="button-get-in-touch"
              >
                Entre em contato
              </Button>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-4">
            <div className="w-12 h-8 bg-[#f2c92f] flex items-center justify-center clip-path-v">
              <ChevronRight className="w-6 h-6 text-white rotate-90" />
            </div>
          </div>
        </section>

        {/* Intro Text */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <p className="text-[#333333] text-lg mb-8 leading-relaxed font-medium">
              A Bioprev protege pessoas, residências e empresas dos perigos da falta de higiene e de doenças infecciosas há 100 anos.
            </p>
            <p className="text-[#666666] text-base mb-16 leading-relaxed">
              Acreditamos que a inovação é um fator-chave para o sucesso. O nosso <span className="text-[#007cc3] cursor-pointer hover:underline">centro nacional de pesquisa e desenvolvimento</span> fornece aos nossos colegas da linha de frente as ferramentas e soluções de que necessitam para fornecer <span className="text-[#007cc3] cursor-pointer hover:underline">serviços de desinfecção diferenciados</span>. A Bioprev está comprometida com a <span className="text-[#007cc3] cursor-pointer hover:underline">sustentabilidade</span> e em explorar o uso de soluções mais ecológicas e não tóxicas, ao mesmo tempo em que continua a oferecer aos nossos clientes os altos níveis de proteção que as suas empresas necessitam.
            </p>
            
            <h2 className="text-3xl md:text-[40px] font-medium text-[#333333] mb-8 leading-tight">
              Serviços especializados de desinfecção comercial
            </h2>
            <p className="text-[#666666] text-base leading-relaxed">
              A Bioprev dedica-se a manter os seus funcionários, clientes e a reputação da marca protegidos com <span className="text-[#007cc3] cursor-pointer hover:underline">serviços de desinfecção</span> líderes de mercado, adaptados ao seu negócio e que apoiam totalmente a conformidade regulamentar. Com a higiene como prioridade, as nossas equipas de especialistas podem ajudar a salvaguardar o seu negócio para o futuro.
            </p>
          </div>
        </section>

        {/* Service Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative h-[400px] sm:h-[500px] md:h-[600px] group overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000" 
              alt="Desinfecção Especializada" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 flex items-center justify-center px-4">
              <div className="bg-white border-t-4 border-[#f2c92f] shadow-xl p-6 sm:p-8 md:p-10 w-full max-w-md">
                <h3 className="text-xl sm:text-2xl md:text-[28px] font-medium text-[#333333] mb-4 sm:mb-6">Desinfecção especializada</h3>
                <p className="text-[#666666] leading-relaxed mb-8">
                  Os nossos serviços de desinfecção especializada fornecem uma resposta rápida para ajudá-lo a manter um alto nível de higiene nas suas instalações, reduzindo o risco de infecção.
                </p>
                <button className="text-[#007cc3] font-medium border border-[#007cc3] px-6 py-2 hover:bg-[#007cc3] hover:text-white transition-all">
                  Saiba mais
                </button>
              </div>
            </div>
          </div>
          
          <div className="relative h-[400px] sm:h-[500px] md:h-[600px] group overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000" 
              alt="Desinfecção Preventiva" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 flex items-center justify-center px-4">
              <div className="bg-white border-t-4 border-[#f2c92f] shadow-xl p-6 sm:p-8 md:p-10 w-full max-w-md">
                <h3 className="text-xl sm:text-2xl md:text-[28px] font-medium text-[#333333] mb-4 sm:mb-6">Desinfecção preventiva</h3>
                <p className="text-[#666666] leading-relaxed mb-8">
                  Uma série de soluções de desinfecção preventiva concebidas para ajudar as empresas a manter um ambiente seguro e proporcionar paz de espírito aos funcionários e visitantes.
                </p>
                <button className="text-[#007cc3] font-medium border border-[#007cc3] px-6 py-2 hover:bg-[#007cc3] hover:text-white transition-all">
                  Saiba mais
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Sectors */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-6xl text-center">
            <h2 className="text-3xl md:text-[36px] font-medium text-[#333333] mb-8 leading-tight">
              Experiência na indústria e especialização no setor
            </h2>
            <p className="text-[#666666] max-w-4xl mx-auto mb-16 leading-relaxed">
              A Bioprev oferece programas integrados de higiene e desinfecção adaptados às necessidades individuais dos clientes, apoiando totalmente os requisitos regulamentares. A nossa história de 100 anos dá-nos o conhecimento para identificar e antecipar ameaças à <span className="text-[#007cc3] cursor-pointer hover:underline">higiene</span> do seu negócio.
            </p>
            
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
                <span className="text-[13px] font-bold text-white text-center">Ver todos os setores</span>
              </div>
            </div>
          </div>
        </section>

        {/* Disinfection Stages */}
        <section className="py-24 bg-[#f2f5f7]">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-[36px] font-medium text-[#333333] mb-8 leading-tight">
              Nosso processo de desinfecção
            </h2>
            <p className="text-[#666666] mb-12 leading-relaxed">
              A Bioprev segue uma abordagem rigorosa para a desinfecção profissional, garantindo que todas as etapas sejam tratadas com os mais altos padrões de segurança e qualidade.
            </p>
            
            <div className="space-y-2">
              {disinfectionStages.map((step, idx) => (
                <Accordion type="single" collapsible key={idx} className="w-full">
                  <AccordionItem value={`item-${idx}`} className="border-none">
                    <AccordionTrigger className="bg-[#d0dae1] px-8 py-5 hover:bg-[#c4cfd7] transition-colors hover:no-underline rounded-none group flex justify-between items-center [&[data-state=open]>svg]:rotate-45">
                      <span className="text-[18px] font-medium text-[#333333] text-left">{step}</span>
                      <Plus className="w-6 h-6 text-[#333333] shrink-0 transition-transform duration-200" />
                    </AccordionTrigger>
                    <AccordionContent className="bg-white px-8 py-6 text-left text-[#666666] leading-relaxed border-x border-b border-[#d0dae1]">
                      Informações detalhadas sobre {step} iriam aqui, explicando os protocolos específicos e as medidas de segurança tomadas durante esta fase do serviço de desinfecção.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-4xl text-center mb-20">
            <h2 className="text-3xl md:text-[36px] font-medium text-[#333333] mb-8 leading-tight">
              Como funciona a Bioprev?
            </h2>
            <div className="space-y-8 text-[#333333] text-[17px] leading-relaxed text-left">
              <p>
                Na Bioprev, os nossos especialistas em desinfecção dedicam-se a identificar as soluções mais seguras e eficazes para proteger a sua casa e negócio. Entendendo que cada situação é única, enfatizamos a necessidade de uma inspeção minuciosa antes de cada tratamento. Essa abordagem permite-nos adaptar os nossos métodos especificamente às suas necessidades, garantindo a higienização mais eficiente e eficaz.
              </p>
              <p>
                Escolha a Bioprev para uma experiência sem complicações, soluções ecológicas e um compromisso com os mais altos padrões de serviço e segurança.
              </p>
            </div>
          </div>

          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="bg-white border-t-4 border-[#f2c92f] shadow-lg p-10 flex flex-col h-full">
                <div className="mb-8 flex justify-center">
                  <Search className="w-12 h-12 text-[#333333]" strokeWidth={1} />
                </div>
                <h3 className="text-[22px] font-medium text-[#333333] mb-6 text-center">1. Avaliação de risco de higiene</h3>
                <p className="text-[#666666] text-sm mb-8 text-center leading-relaxed">
                  Pesquisa e consulta sem complicações
                </p>
                <div className="space-y-2 mt-auto">
                  {["Inspeção programada no horário de sua conveniência", "Revisão e consultoria de risco de higiene no local", "Orçamento sem compromisso e recomendações"].map((item, i) => (
                    <div key={i} className="bg-[#f2f5f7] p-4 text-[13px] text-[#333333] leading-tight">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white border-t-4 border-[#f2c92f] shadow-lg p-10 flex flex-col h-full">
                <div className="mb-8 flex justify-center">
                  <Target className="w-12 h-12 text-[#333333]" strokeWidth={1} />
                </div>
                <h3 className="text-[22px] font-medium text-[#333333] mb-6 text-center">2. Tratamento de desinfecção</h3>
                <p className="text-[#666666] text-sm mb-8 text-center leading-relaxed">
                  Programa de tratamento abrangente adaptado às suas necessidades
                </p>
                <div className="space-y-2 mt-auto">
                  {["Especialistas locais certificados em desinfecção", "Tratamentos avançados de nebulização ULV e de superfícies", "Padrões de segurança específicos do setor garantem a conformidade"].map((item, i) => (
                    <div key={i} className="bg-[#f2f5f7] p-4 text-[13px] text-[#333333] leading-tight">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white border-t-4 border-[#f2c92f] shadow-lg p-10 flex flex-col h-full">
                <div className="mb-8 flex justify-center">
                  <CheckCircle2 className="w-12 h-12 text-[#333333]" strokeWidth={1} />
                </div>
                <h3 className="text-[22px] font-medium text-[#333333] mb-6 text-center">3. Verificação de segurança</h3>
                <p className="text-[#666666] text-sm mb-8 text-center leading-relaxed">
                  Garantindo um ambiente limpo e seguro pós-tratamento
                </p>
                <div className="space-y-2 mt-auto">
                  {["Certificado de higiene pós-serviço", "Relatórios e recomendações de serviço detalhados", "Aconselhamento especializado na manutenção de ambientes seguros"].map((item, i) => (
                    <div key={i} className="bg-[#f2f5f7] p-4 text-[13px] text-[#333333] leading-tight">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#007cc3] py-16 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-white text-3xl font-medium mb-8">Agende a sua avaliação de risco de higiene hoje</h2>
            <Button 
              className="bg-white text-[#007cc3] hover:bg-white/90 px-12 py-6 text-lg font-bold rounded-none"
              data-testid="button-cta-book"
            >
              Contacte-nos
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
