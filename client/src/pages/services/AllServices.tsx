import Header from "@/components/layout/Header";
import { ChevronRight, Plus, CheckCircle2, Target, Search, Factory, ShoppingCart, Warehouse, Building2, Hotel } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "wouter";
import Footer from "@/components/layout/Footer";

export default function AllServices() {
  const sectors = [
    { name: "Processamento alimentar", icon: Factory, href: "/sectors/food-processing" },
    { name: "Retalho alimentar", icon: ShoppingCart, href: "/sectors/food-retail" },
    { name: "Logística e armazenamento", icon: Warehouse, href: "/sectors/logistics" },
    { name: "Gestão de instalações", icon: Building2, href: "/sectors/facilities" },
    { name: "Hotelaria", icon: Hotel, href: "/sectors/hospitality" },
  ];

  const ipmSteps = [
    { title: "Concepção e construção", content: "Na fase de concepção e construção, a Bioprev avalia o design das instalações para identificar vulnerabilidades a pragas e implementar medidas preventivas estruturais desde o início, como vedação de pontos de entrada e escolha de materiais resistentes." },
    { title: "Práticas de controle de pragas e formação", content: "Formamos as suas equipas sobre as melhores práticas de prevenção de pragas, incluindo higiene operacional, armazenamento correto de alimentos e materiais, e identificação precoce de sinais de infestação." },
    { title: "Monitoramento e manutenção de pragas", content: "Implementamos sistemas de monitorização contínua com estações de isca, armadilhas e sensores que permitem detetar a atividade de pragas antes que se tornem um problema visível." },
    { title: "Resposta a surtos de pragas", content: "Quando é detetada atividade significativa de pragas, a nossa equipa de resposta rápida intervém com tratamentos direcionados e eficazes, minimizando o impacto nas suas operações." },
    { title: "Avaliação do programa de controle de pragas", content: "Realizamos revisões periódicas do programa de IPM para avaliar a sua eficácia, identificar áreas de melhoria e adaptar as estratégias às mudanças nas condições e nos riscos." }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Header />
      
      <main className="flex-grow">
        <section className="relative h-[350px] sm:h-[420px] md:h-[500px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2000" 
              alt="Técnico de controle de pragas" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          
          <div className="container mx-auto px-4 z-10">
            <div className="max-w-4xl">
              <nav className="flex items-center space-x-2 text-white/90 text-sm mb-8 font-medium">
                <Link href="/" className="hover:underline">Início</Link>
                <ChevronRight className="w-4 h-4" />
                <span>Serviços</span>
              </nav>
              
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-6 sm:mb-8 leading-tight">
                Serviços nacionais de controle de pragas<br className="hidden sm:block" />e soluções
              </h1>
              
              <p className="text-white text-base sm:text-lg md:text-xl lg:text-[22px] max-w-3xl mb-8 sm:mb-12 leading-relaxed font-light">
                Como líder nacional em soluções de higiene e controle de pragas, a Bioprev leva serviços especializados, fiáveis e profissionais a clientes comerciais em todo o país.
              </p>
              
              <Link href="/contact">
                <Button 
                  variant="outline" 
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#333333] px-10 py-6 text-lg font-medium transition-all duration-300 rounded-none"
                  data-testid="button-get-in-touch"
                >
                  Entre em contato
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-4">
            <div className="w-12 h-8 bg-[#f2c92f] flex items-center justify-center clip-path-v">
              <ChevronRight className="w-6 h-6 text-white rotate-90" />
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <p className="text-[#333333] text-lg mb-8 leading-relaxed font-medium">
              A Bioprev protege pessoas, residências e empresas dos perigos da falta de higiene e de doenças transmitidas por pragas com décadas de experiência no mercado angolano.
            </p>
            <p className="text-[#666666] text-base mb-16 leading-relaxed">
              Acreditamos que a inovação é um fator-chave para o sucesso. O nosso centro de pesquisa e desenvolvimento fornece aos nossos técnicos as ferramentas e soluções de que necessitam para prestar serviços diferenciados de controle de pragas. A Bioprev está comprometida com a sustentabilidade e em explorar o uso de soluções mais ecológicas e não tóxicas, ao mesmo tempo em que continua a oferecer aos nossos clientes os altos níveis de proteção contra pragas de que os seus negócios necessitam.
            </p>
            
            <h2 className="text-3xl md:text-[40px] font-medium text-[#333333] mb-8 leading-tight">
              Serviços de desinfecção e controle de pragas comerciais
            </h2>
            <p className="text-[#666666] text-base leading-relaxed">
              O controle de pragas da Bioprev dedica-se a manter os seus funcionários, clientes e reputação da marca protegidos com serviços de controle de pragas líderes de mercado, adaptados ao seu negócio e que apoiam totalmente a conformidade regulamentar. Com a higiene como prioridade, os nossos serviços de desinfecção podem ajudar a salvaguardar o seu negócio para o futuro.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative h-[400px] sm:h-[500px] md:h-[600px] group overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000" 
              alt="Controle de pragas" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 flex items-center justify-center px-4">
              <div className="bg-white border-t-4 border-[#f2c92f] shadow-xl p-6 sm:p-8 md:p-10 w-full max-w-md">
                <h3 className="text-xl sm:text-2xl md:text-[28px] font-medium text-[#333333] mb-4 sm:mb-6">Serviços de controle de pragas</h3>
                <p className="text-[#666666] leading-relaxed mb-8">
                  A Bioprev é líder nacional no controle de pragas comerciais. Oferecemos uma gama de tratamentos direcionados e inovadores e soluções de impermeabilização para garantir que o seu negócio fique livre de pragas.
                </p>
                <Link href="/services/disinfestation">
                  <button className="text-[#007cc3] font-medium border border-[#007cc3] px-6 py-2 hover:bg-[#007cc3] hover:text-white transition-all">
                    Saiba mais
                  </button>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="relative h-[400px] sm:h-[500px] md:h-[600px] group overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000" 
              alt="Controle de pragas digital" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 flex items-center justify-center px-4">
              <div className="bg-white border-t-4 border-[#f2c92f] shadow-xl p-6 sm:p-8 md:p-10 w-full max-w-md">
                <h3 className="text-xl sm:text-2xl md:text-[28px] font-medium text-[#333333] mb-4 sm:mb-6">Controle de pragas digital</h3>
                <p className="text-[#666666] leading-relaxed mb-8">
                  Uma série de soluções de gestão de pragas conectadas e aprimoradas digitalmente fornecem aos clientes comerciais dados, insights e relatórios incomparáveis para prevenir e gerenciar pragas proativamente.
                </p>
                <Link href="/contact">
                  <button className="text-[#007cc3] font-medium border border-[#007cc3] px-6 py-2 hover:bg-[#007cc3] hover:text-white transition-all">
                    Saiba mais
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-6xl text-center">
            <h2 className="text-3xl md:text-[36px] font-medium text-[#333333] mb-8 leading-tight">
              Experiência no setor e especialização
            </h2>
            <p className="text-[#666666] max-w-4xl mx-auto mb-16 leading-relaxed">
              A Bioprev oferece programas de Gestão Integrada de Pragas (IPM) adaptados às necessidades individuais de cada cliente, apoiando totalmente os requisitos regulamentares e de auditoria. A nossa experiência dá-nos o conhecimento para identificar e prever ameaças de pragas e higiene ao seu negócio.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {sectors.map((sector, idx) => (
                <Link key={idx} href={sector.href}>
                  <div className="bg-white border border-gray-100 p-6 flex flex-col items-center justify-center hover:shadow-md transition-shadow cursor-pointer group h-full">
                    <div className="w-16 h-16 mb-4 flex items-center justify-center">
                      <sector.icon className="w-12 h-12 text-[#333333] group-hover:text-[#007cc3] transition-colors" strokeWidth={1} />
                    </div>
                    <span className="text-[13px] font-bold text-[#007cc3] text-center leading-tight">{sector.name}</span>
                  </div>
                </Link>
              ))}
              <Link href="/sectors">
                <div className="bg-[#1a2b3c] p-6 flex flex-col items-center justify-center cursor-pointer group h-full">
                  <Plus className="w-10 h-10 text-white mb-4 transition-transform group-hover:scale-110" strokeWidth={1} />
                  <span className="text-[13px] font-bold text-white text-center">Ver todos os setores</span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-24 bg-[#f2f5f7]">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-[36px] font-medium text-[#333333] mb-8 leading-tight">
              Gestão Integrada de Pragas (IPM)
            </h2>
            <p className="text-[#666666] mb-12 leading-relaxed">
              A Bioprev emprega uma abordagem em cinco estágios para o controle de pragas comerciais, focando em medidas preventivas estratégicas em vez de um programa reativo tático.
            </p>
            
            <div className="space-y-2">
              {ipmSteps.map((step, idx) => (
                <Accordion type="single" collapsible key={idx} className="w-full">
                  <AccordionItem value={`item-${idx}`} className="border-none">
                    <AccordionTrigger className="bg-[#d0dae1] px-8 py-5 hover:bg-[#c4cfd7] transition-colors hover:no-underline rounded-none group">
                      <span className="text-[18px] font-medium text-[#333333] text-left">{step.title}</span>
                      <Plus className="w-6 h-6 text-[#333333] shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-45" />
                    </AccordionTrigger>
                    <AccordionContent className="bg-white px-8 py-6 text-left text-[#666666] leading-relaxed border-x border-b border-[#d0dae1]">
                      {step.content}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-4xl text-center mb-20">
            <h2 className="text-3xl md:text-[36px] font-medium text-[#333333] mb-8 leading-tight">
              Como funciona a Bioprev?
            </h2>
            <div className="space-y-8 text-[#333333] text-[17px] leading-relaxed text-left">
              <p>
                Na Bioprev, os nossos especialistas em controle de pragas dedicam-se a identificar as soluções mais seguras e eficazes para eliminar pragas de sua casa e do seu negócio. Compreendendo que cada situação é única, enfatizamos a necessidade de uma inspeção minuciosa antes de cada tratamento. Esta abordagem permite-nos adaptar os nossos métodos especificamente às suas necessidades, garantindo a remoção de pragas mais eficiente e eficaz.
              </p>
              <p>
                Escolha a Bioprev para ter uma experiência sem preocupações, com soluções ecológicas e um compromisso com os mais altos padrões de serviço e segurança.
              </p>
            </div>
          </div>

          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white border-t-4 border-[#f2c92f] shadow-lg p-10 flex flex-col h-full">
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

              <div className="bg-white border-t-4 border-[#f2c92f] shadow-lg p-10 flex flex-col h-full">
                <div className="mb-8 flex justify-center">
                  <Target className="w-12 h-12 text-[#333333]" strokeWidth={1} />
                </div>
                <h3 className="text-[22px] font-medium text-[#333333] mb-6 text-center">2. Tratamento de pragas</h3>
                <p className="text-[#666666] text-sm mb-8 text-center leading-relaxed">
                  Programa de tratamento abrangente adaptado às suas necessidades
                </p>
                <div className="space-y-2 mt-auto">
                  {["Especialistas locais certificados", "Abordagem ecologicamente sensível", "Conhecimento sobre legislação específica do setor garante a conformidade"].map((item, i) => (
                    <div key={i} className="bg-[#f2f5f7] p-4 text-[13px] text-[#333333] leading-tight">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white border-t-4 border-[#f2c92f] shadow-lg p-10 flex flex-col h-full">
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

        <section className="bg-[#007cc3] py-16 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-white text-3xl font-medium mb-8">Marque sua avaliação de risco de pragas hoje</h2>
            <Link href="/contact">
              <Button 
                className="bg-white text-[#007cc3] hover:bg-white/90 px-12 py-6 text-lg font-bold rounded-none"
                data-testid="button-cta-book"
              >
                Contacte-nos
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
