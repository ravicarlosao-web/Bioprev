import Header from "@/components/layout/Header";
import { ChevronRight, Plus, CheckCircle2, Target, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function AllServices() {
  const sectors = [
    { name: "Processamento de alimentos", icon: "https://www.rentokil.com/assets/images/icons/sector-food-processing.png" },
    { name: "Varejo de alimentos", icon: "https://www.rentokil.com/assets/images/icons/sector-food-retail.png" },
    { name: "Logística e armazenamento", icon: "https://www.rentokil.com/assets/images/icons/sector-logistics.png" },
    { name: "Gestão de instalações", icon: "https://www.rentokil.com/assets/images/icons/sector-facilities.png" },
    { name: "Hotéis", icon: "https://www.rentokil.com/assets/images/icons/sector-hotels.png" },
  ];

  const ipmSteps = [
    "Concepção e construção",
    "Práticas de controle de pragas e formação",
    "Monitoramento e manutenção de pragas",
    "Resposta a surtos de pragas",
    "Avaliação do programa de controle de pragas"
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section - Image 1 */}
        <section className="relative h-[500px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1581578731522-745505146317?auto=format&fit=crop&q=80&w=2000" 
              alt="Técnico trabalhando" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          
          <div className="container mx-auto px-4 z-10">
            <div className="max-w-4xl">
              <nav className="flex items-center space-x-2 text-white/90 text-sm mb-8 font-medium">
                <a href="/" className="hover:underline">Início</a>
                <ChevronRight className="w-4 h-4" />
                <span>Serviços</span>
              </nav>
              
              <h1 className="text-white text-5xl md:text-6xl font-medium mb-8 leading-tight">
                Serviços globais de controle de pragas<br />e soluções
              </h1>
              
              <p className="text-white text-xl md:text-[22px] max-w-3xl mb-12 leading-relaxed font-light">
                Como líder global em soluções de higiene e controle de pragas, a Rentokil leva serviços especializados, fiáveis e profissionais a clientes comerciais em todo o mundo.
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
            <div className="w-12 h-8 bg-[#e31837] flex items-center justify-center clip-path-v">
              <ChevronRight className="w-6 h-6 text-white rotate-90" />
            </div>
          </div>
        </section>

        {/* Intro Text - Image 2 */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <p className="text-[#333333] text-lg mb-8 leading-relaxed font-medium">
              A Rentokil protege pessoas, residências e empresas dos perigos da falta de higiene e de doenças transmitidas por pragas há 100 anos.
            </p>
            <p className="text-[#666666] text-base mb-16 leading-relaxed">
              Acreditamos que a inovação é um fator-chave para o sucesso. O nosso <span className="text-[#007cc3] cursor-pointer hover:underline">centro global de pesquisa e desenvolvimento</span> fornece aos nossos colegas da linha de frente as ferramentas e soluções de que necessitam para prestar <span className="text-[#007cc3] cursor-pointer hover:underline">serviços diferenciados de controle de pragas</span>. A Rentokil está comprometida com a <span className="text-[#007cc3] cursor-pointer hover:underline">sustentabilidade</span> e em explorar o uso de soluções mais ecológicas e não tóxicas, ao mesmo tempo em que continua a oferecer aos nossos clientes os altos níveis de proteção contra pragas de que os seus negócios necessitam.
            </p>
            
            <h2 className="text-3xl md:text-[40px] font-medium text-[#333333] mb-8 leading-tight">
              Serviços de desinfecção e controle de pragas comerciais
            </h2>
            <p className="text-[#666666] text-base leading-relaxed">
              O controle de pragas da Rentokil dedica-se a manter os seus funcionários, clientes e reputação da marca protegidos com <span className="text-[#007cc3] cursor-pointer hover:underline">serviços de controle de pragas</span> líderes de mercado, adaptados ao seu negócio e que apoiam totalmente a conformidade regulamentar. Com a higiene permanecendo como prioridade após a pandemia de COVID-19, os nossos <span className="text-[#007cc3] cursor-pointer hover:underline">serviços de desinfecção</span> podem ajudar a salvaguardar o seu negócio para o futuro.
            </p>
          </div>
        </section>

        {/* Service Cards - Image 3 */}
        <section className="grid grid-cols-1 md:grid-cols-2">
          {/* Card 1 */}
          <div className="relative h-[600px] group overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000" 
              alt="Controle de pragas" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md px-4">
              <div className="bg-white border-t-4 border-[#e31837] shadow-xl p-10">
                <h3 className="text-2xl md:text-[28px] font-medium text-[#333333] mb-6">Serviços de controle de pragas</h3>
                <p className="text-[#666666] leading-relaxed mb-8">
                  A Rentokil é líder global no controle de pragas comerciais. Oferecemos uma gama de tratamentos direcionados e inovadores e soluções de impermeabilização para garantir que o seu negócio fique livre de pragas.
                </p>
                <button className="text-[#007cc3] font-medium border border-[#007cc3] px-6 py-2 hover:bg-[#007cc3] hover:text-white transition-all">
                  Saiba mais
                </button>
              </div>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="relative h-[600px] group overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000" 
              alt="Controle de pragas digital" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md px-4">
              <div className="bg-white border-t-4 border-[#e31837] shadow-xl p-10">
                <h3 className="text-2xl md:text-[28px] font-medium text-[#333333] mb-6">Controle de pragas digital</h3>
                <p className="text-[#666666] leading-relaxed mb-8">
                  Uma série de soluções de gestão de pragas conectadas e aprimoradas digitalmente fornecem aos clientes comerciais dados, insights e relatórios incomparáveis para prevenir e gerenciar pragas proativamente.
                </p>
                <button className="text-[#007cc3] font-medium border border-[#007cc3] px-6 py-2 hover:bg-[#007cc3] hover:text-white transition-all">
                  Saiba mais
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Sectors - Image 4 */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-6xl text-center">
            <h2 className="text-3xl md:text-[36px] font-medium text-[#333333] mb-8 leading-tight">
              Experiência no setor e especialização
            </h2>
            <p className="text-[#666666] max-w-4xl mx-auto mb-16 leading-relaxed">
              A Rentokil oferece programas de Gestão Integrada de Pragas (IPM) adaptados às necessidades individuais de cada cliente, apoiando totalmente os requisitos regulamentares e de auditoria. A nossa história de 100 anos dá-nos o conhecimento e a experiência para identificar e prever ameaças de <span className="text-[#007cc3] cursor-pointer hover:underline">pragas</span> e <span className="text-[#007cc3] cursor-pointer hover:underline">higiene</span> ao seu negócio.
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

        {/* IPM - Image 5 */}
        <section className="py-24 bg-[#f2f5f7]">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-[36px] font-medium text-[#333333] mb-8 leading-tight">
              Gestão Integrada de Pragas (IPM)
            </h2>
            <p className="text-[#666666] mb-12 leading-relaxed">
              A Rentokil emprega uma abordagem em cinco estágios para o controle de pragas comerciais, focando em medidas preventivas estratégicas em vez de um programa reativo tático.
            </p>
            
            <div className="space-y-2">
              {ipmSteps.map((step, idx) => (
                <Accordion type="single" collapsible key={idx} className="w-full">
                  <AccordionItem value={`item-${idx}`} className="border-none">
                    <AccordionTrigger className="bg-[#d0dae1] px-8 py-5 hover:bg-[#c4cfd7] transition-colors hover:no-underline rounded-none group">
                      <span className="text-[18px] font-medium text-[#333333] text-left">{step}</span>
                      <Plus className="w-6 h-6 text-[#333333] shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-45" />
                    </AccordionTrigger>
                    <AccordionContent className="bg-white px-8 py-6 text-left text-[#666666] leading-relaxed border-x border-b border-[#d0dae1]">
                      Informações detalhadas sobre {step} seriam apresentadas aqui, explicando as metodologias e os benefícios específicos desta fase no processo de IPM.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </div>
          </div>
        </section>

        {/* How it works - Image 6 & 7 */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-4xl text-center mb-20">
            <h2 className="text-3xl md:text-[36px] font-medium text-[#333333] mb-8 leading-tight">
              Como funciona a Rentokil?
            </h2>
            <div className="space-y-8 text-[#333333] text-[17px] leading-relaxed text-left">
              <p>
                Na Rentokil, os nossos especialistas em controle de pragas dedicam-se a identificar as soluções mais seguras e eficazes para eliminar pragas de sua casa e do seu negócio. Compreendendo que cada situação é única, enfatizamos a necessidade de uma inspeção minuciosa antes de cada tratamento. Esta abordagem permite-nos adaptar os nossos métodos especificamente às suas necessidades, garantindo a remoção de pragas mais eficiente e eficaz.
              </p>
              <p>
                Escolha a Rentokil para ter uma experiência sem preocupações, com soluções ecológicas e um compromisso com os mais altos padrões de serviço e segurança.
              </p>
            </div>
          </div>

          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="bg-white border-t-4 border-[#e31837] shadow-lg p-10 flex flex-col h-full">
                <div className="mb-8 flex justify-center">
                  <Search className="w-12 h-12 text-[#333333]" strokeWidth={1} />
                </div>
                <h3 className="text-[22px] font-medium text-[#333333] mb-6 text-center">1. Avaliação do risco de pragas</h3>
                <p className="text-[#666666] text-sm mb-8 text-center leading-relaxed">
                  Pesquisa e consulta de pragas sem complicações
                </p>
                <div className="space-y-2 mt-auto">
                  {["Inspeção programada de pragas na hora mais conveniente para si", "Revisão do risco de pragas no local e consultoria", "Orçamento sem compromisso e recomendações"].map((item, i) => (
                    <div key={i} className="bg-[#f2f5f7] p-4 text-[13px] text-[#333333] leading-tight">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white border-t-4 border-[#e31837] shadow-lg p-10 flex flex-col h-full">
                <div className="mb-8 flex justify-center">
                  <Target className="w-12 h-12 text-[#333333]" strokeWidth={1} />
                </div>
                <h3 className="text-[22px] font-medium text-[#333333] mb-6 text-center">2. Tratamento de pragas</h3>
                <p className="text-[#666666] text-sm mb-8 text-center leading-relaxed">
                  Programa de tratamento abrangente adaptado às suas necessidades
                </p>
                <div className="space-y-2 mt-auto">
                  {["Especialistas locais certificados", "Abordagem ecologicamente sensível", "Conhecimento sobre legislação específica do setor garante a conformidade nas auditorias"].map((item, i) => (
                    <div key={i} className="bg-[#f2f5f7] p-4 text-[13px] text-[#333333] leading-tight">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white border-t-4 border-[#e31837] shadow-lg p-10 flex flex-col h-full">
                <div className="mb-8 flex justify-center">
                  <CheckCircle2 className="w-12 h-12 text-[#333333]" strokeWidth={1} />
                </div>
                <h3 className="text-[22px] font-medium text-[#333333] mb-6 text-center">3. Proteção e acompanhamento</h3>
                <p className="text-[#666666] text-sm mb-8 text-center leading-relaxed">
                  Garantindo um ambiente limpo e seguro pós-tratamento
                </p>
                <div className="space-y-2 mt-auto">
                  {["Soluções de Gestão Integrada de Pragas (IPM)", "Recomendações detalhadas pós-serviço", "Aconselhamento e cuidados preventivos"].map((item, i) => (
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
            <h2 className="text-white text-3xl font-medium mb-8">Marque sua avaliação de risco de pragas hoje</h2>
            <Button 
              className="bg-white text-[#007cc3] hover:bg-white/90 px-12 py-6 text-lg font-bold rounded-none"
              data-testid="button-cta-book"
            >
              Contacte-nos
            </Button>
          </div>
        </section>
      </main>

      {/* Reusing Footer Style */}
      <footer className="bg-white border-t-8 border-[#e31837] pt-16 pb-8">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="space-y-3">
              <a href="#" className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium">Locais</a>
              <a href="#" className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium">Pesquisa</a>
              <a href="#" className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium">Contato</a>
              <a href="#" className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium">Entrar</a>
            </div>
            <div className="space-y-3">
              <a href="#" className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium">Início</a>
              <a href="/services" className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium">Serviços</a>
              <a href="#" className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium">Contas globais</a>
              <a href="#" className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium">Setores empresariais</a>
              <a href="#" className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium">Sobre</a>
              <a href="#" className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium">Blog</a>
            </div>
            <div className="space-y-3">
              <a href="#" className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium">Carreiras</a>
              <a href="#" className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium">Informação da empresa</a>
              <a href="#" className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium">Declaração legal</a>
              <a href="#" className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium">Política de privacidade</a>
              <a href="#" className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium">Política de cookies</a>
              <a href="#" className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium">Código de conduta do fornecedor</a>
            </div>
            <div className="flex flex-col items-start md:items-end space-y-6">
              <span className="text-[#e31837] text-4xl font-bold tracking-tight">Rentokil</span>
              <div className="text-xs text-[#666666] text-left md:text-right leading-relaxed max-w-[280px]">
                © {new Date().getFullYear()} Rentokil Initial plc e sujeito às condições na <a href="#" className="text-[#007cc3] hover:underline">declaração legal</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
