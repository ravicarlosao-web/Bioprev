import Header from "@/components/layout/Header";
import { ChevronRight, Plus, CheckCircle2, Target, Search, Factory, Building2, Warehouse, Hotel, ShoppingCart, Pill, Briefcase, Utensils } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "wouter";
import Footer from "@/components/layout/Footer";
import SEOHead, { breadcrumbSchema } from "@/components/SEOHead";

export default function AllSectors() {
  const sectors = [
    { name: "Processamento alimentar", icon: Factory, href: "/sectors/food-processing", desc: "Garantimos que as instalações de processamento de alimentos cumpram os mais altos padrões de higiene e segurança alimentar, protegendo contra contaminação e pragas." },
    { name: "Gestão de instalações", icon: Building2, href: "/sectors/facilities", desc: "Oferecemos soluções integradas de controle de pragas para edifícios comerciais, escritórios e complexos empresariais, mantendo ambientes de trabalho seguros." },
    { name: "Logística e armazenamento", icon: Warehouse, href: "/sectors/logistics", desc: "Protegemos armazéns e centros de distribuição contra pragas que podem danificar mercadorias armazenadas e comprometer a cadeia de abastecimento." },
    { name: "Hotelaria", icon: Hotel, href: "/sectors/hospitality", desc: "Ajudamos hotéis e resorts a manter os mais altos padrões de higiene, protegendo a reputação e garantindo o conforto dos hóspedes." },
    { name: "Retalho alimentar", icon: ShoppingCart, href: "/sectors/food-retail", desc: "Supermercados e lojas de alimentos confiam na Bioprev para manter os seus espaços livres de pragas e em conformidade com as normas sanitárias." },
    { name: "Farmacêutica", icon: Pill, href: "/sectors/pharmaceutical", desc: "Laboratórios e instalações farmacêuticas requerem ambientes ultra-limpos. As nossas soluções garantem a conformidade com os rigorosos padrões da indústria." },
    { name: "Escritórios", icon: Briefcase, href: "/sectors/offices", desc: "Mantemos ambientes de escritório confortáveis e livres de pragas, contribuindo para a produtividade e bem-estar dos colaboradores." },
    { name: "Restauração", icon: Utensils, href: "/sectors/restaurants", desc: "Restaurantes e serviços de catering dependem da Bioprev para garantir a segurança alimentar e cumprir todas as regulamentações de higiene." },
  ];

  const approachSteps = [
    { title: "Análise e diagnóstico do setor", content: "Realizamos uma análise completa dos riscos específicos do seu setor, avaliando as regulamentações aplicáveis, os tipos de pragas mais comuns e os pontos críticos de controle nas suas instalações." },
    { title: "Plano de ação personalizado", content: "Com base no diagnóstico, desenvolvemos um programa de controle de pragas totalmente adaptado ao seu setor, incluindo métodos aprovados, frequência de intervenções e protocolos de emergência." },
    { title: "Implementação de soluções específicas", content: "Os nossos técnicos com formação setorial implementam as soluções definidas, utilizando equipamentos e produtos adequados às exigências da sua indústria." },
    { title: "Monitorização contínua e relatórios", content: "Mantemos sistemas de monitorização permanente e fornecemos relatórios detalhados que suportam as suas auditorias e demonstram conformidade regulamentar." },
    { title: "Revisão e otimização do programa", content: "Periodicamente, revisamos a eficácia do programa e adaptamo-lo a novas regulamentações, mudanças operacionais ou riscos emergentes no seu setor." }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <SEOHead
        title="Setores"
        description="Soluções de controle de pragas para todos os setores em Angola: indústria alimentar, hotelaria, logística, farmacêutica, escritórios, restauração e gestão de instalações."
        canonical="/sectors"
        keywords="setores controle pragas Angola, pragas indústria alimentar, pragas hotelaria, pragas farmacêutica, pragas restauração, Bioprev setores"
        structuredData={breadcrumbSchema([
          { name: "Início", url: "/" },
          { name: "Setores", url: "/sectors" },
        ])}
      />
      <Header />
      
      <main className="flex-grow">
        <section className="relative h-[300px] sm:h-[380px] md:h-[460px] lg:h-[500px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
              alt="Setores empresariais" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 z-10">
            <div className="max-w-3xl">
              <nav className="flex items-center flex-wrap gap-1 text-white/90 text-xs sm:text-sm mb-4 sm:mb-6 md:mb-8 font-medium">
                <Link href="/" className="hover:underline">Início</Link>
                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Setores empresariais</span>
              </nav>
              
              <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-3 sm:mb-5 md:mb-6 leading-tight">
                Soluções de controle de pragas<br className="hidden sm:block" /> por setor empresarial
              </h1>
              
              <p className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mb-5 sm:mb-8 md:mb-10 leading-relaxed font-light">
                Cada setor tem desafios únicos. A Bioprev oferece programas de controle de pragas adaptados às necessidades específicas da sua indústria.
              </p>
              
              <Link href="/contact"
                className="inline-block border-2 border-white text-white hover:bg-white hover:text-[#333333] px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 text-sm sm:text-base md:text-lg font-medium transition-all duration-300"
                data-testid="button-sectors-contact"
              >
                Entre em contato
              </Link>
            </div>
          </div>
          
        </section>

        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center">
            <p className="text-[#333333] text-base sm:text-lg mb-5 sm:mb-8 leading-relaxed font-medium">
              A Bioprev compreende que cada setor empresarial enfrenta desafios únicos no que diz respeito ao controle de pragas e higiene. Por isso, desenvolvemos soluções especializadas para cada indústria.
            </p>
            <p className="text-[#666666] text-sm sm:text-base mb-10 sm:mb-16 leading-relaxed">
              Com décadas de experiência a servir os mais variados setores em Angola, a nossa equipa possui conhecimento profundo das regulamentações específicas de cada indústria, dos riscos de pragas mais comuns e das melhores práticas para manter os seus espaços seguros e em conformidade.
            </p>
            
            <h2 className="text-2xl sm:text-3xl md:text-[36px] font-medium text-[#333333] mb-5 sm:mb-8 leading-tight">
              Experiência adaptada ao seu setor
            </h2>
            <p className="text-[#666666] text-sm sm:text-base leading-relaxed">
              Independentemente do seu setor de atividade, a Bioprev dispõe de especialistas dedicados que compreendem as exigências regulamentares, os riscos específicos e as melhores soluções para proteger o seu negócio.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative h-[350px] sm:h-[420px] md:h-[500px] lg:h-[600px] group overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1000" 
              alt="Indústria alimentar" 
                loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6">
              <div className="bg-white border-t-4 border-[#f2c92f] shadow-xl p-5 sm:p-7 md:p-8 lg:p-10 w-full max-w-sm sm:max-w-md">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[28px] font-medium text-[#333333] mb-3 sm:mb-5">Indústria alimentar e hospitalidade</h3>
                <p className="text-[#666666] text-sm sm:text-base leading-relaxed mb-5 sm:mb-8">
                  Protegemos negócios do setor alimentar com soluções que garantem a segurança dos alimentos e a conformidade com as normas sanitárias.
                </p>
                <Link href="/sectors/food-processing"
                  className="inline-block text-[#007cc3] font-medium border border-[#007cc3] px-4 sm:px-6 py-2 text-sm sm:text-base hover:bg-[#007cc3] hover:text-white transition-all"
                  data-testid="button-sector-food"
                >
                  Saiba mais
                </Link>
              </div>
            </div>
          </div>
          
          <div className="relative h-[350px] sm:h-[420px] md:h-[500px] lg:h-[600px] group overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000" 
                loading="lazy"
              alt="Setores comerciais e industriais" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6">
              <div className="bg-white border-t-4 border-[#f2c92f] shadow-xl p-5 sm:p-7 md:p-8 lg:p-10 w-full max-w-sm sm:max-w-md">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[28px] font-medium text-[#333333] mb-3 sm:mb-5">Setores comerciais e industriais</h3>
                <p className="text-[#666666] text-sm sm:text-base leading-relaxed mb-5 sm:mb-8">
                  Desde escritórios a armazéns, oferecemos programas de controle de pragas que se adaptam à escala das suas operações.
                </p>
                <Link href="/sectors/facilities"
                  className="inline-block text-[#007cc3] font-medium border border-[#007cc3] px-4 sm:px-6 py-2 text-sm sm:text-base hover:bg-[#007cc3] hover:text-white transition-all"
                  data-testid="button-sector-commercial"
                >
                  Saiba mais
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-18 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl text-center">
            <h2 className="text-2xl sm:text-3xl md:text-[36px] font-medium text-[#333333] mb-5 sm:mb-8 leading-tight">
              Todos os setores que servimos
            </h2>
            <p className="text-[#666666] text-sm sm:text-base max-w-4xl mx-auto mb-10 sm:mb-16 leading-relaxed">
              A Bioprev tem experiência comprovada em múltiplos setores, oferecendo soluções personalizadas que respondem aos desafios específicos de cada indústria.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
              {sectors.map((sector, idx) => (
                <Link key={idx} href={sector.href}>
                  <div className="bg-white border border-gray-100 p-4 sm:p-6 flex flex-col items-center justify-center hover:shadow-md transition-shadow cursor-pointer group h-full min-h-[100px] sm:min-h-[120px]" data-testid={`sector-card-${idx}`}>
                    <div className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-2 sm:mb-4 flex items-center justify-center">
                      <sector.icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#333333] group-hover:text-[#007cc3] transition-colors" strokeWidth={1} />
                    </div>
                    <span className="text-[11px] sm:text-[13px] font-bold text-[#007cc3] text-center leading-tight">{sector.name}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-18 md:py-24 bg-[#f8f9fa]">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <div className="text-center mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-[36px] font-medium text-[#333333] mb-5 sm:mb-8 leading-tight">
                Soluções detalhadas por setor
              </h2>
              <p className="text-[#666666] text-sm sm:text-base max-w-4xl mx-auto leading-relaxed">
                Conheça em detalhe como a Bioprev responde às necessidades específicas de cada setor com programas personalizados.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {sectors.map((sector, idx) => (
                <Link key={idx} href={sector.href}>
                  <div className="bg-white border-t-4 border-[#f2c92f] shadow-sm p-5 sm:p-6 md:p-8 flex flex-col h-full hover:shadow-md transition-shadow cursor-pointer" data-testid={`sector-detail-${idx}`}>
                    <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                      <sector.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#007cc3] shrink-0" strokeWidth={1.5} />
                      <h3 className="text-base sm:text-lg md:text-xl font-medium text-[#333333]">{sector.name}</h3>
                    </div>
                    <p className="text-[#666666] leading-relaxed text-sm sm:text-[15px] flex-grow">{sector.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-18 md:py-24 bg-[#f2f5f7]">
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center">
            <h2 className="text-2xl sm:text-3xl md:text-[36px] font-medium text-[#333333] mb-5 sm:mb-8 leading-tight">
              A nossa abordagem por setor
            </h2>
            <p className="text-[#666666] text-sm sm:text-base mb-8 sm:mb-12 leading-relaxed">
              A Bioprev segue uma metodologia estruturada para desenvolver programas de controle de pragas adaptados a cada setor, garantindo resultados consistentes e conformidade total.
            </p>
            
            <div className="space-y-2">
              {approachSteps.map((step, idx) => (
                <Accordion type="single" collapsible key={idx} className="w-full">
                  <AccordionItem value={`item-${idx}`} className="border-none">
                    <AccordionTrigger className="bg-[#d0dae1] px-4 sm:px-6 md:px-8 py-4 sm:py-5 hover:bg-[#c4cfd7] transition-colors hover:no-underline rounded-none group">
                      <span className="text-[15px] sm:text-[17px] md:text-[18px] font-medium text-[#333333] text-left">{step.title}</span>
                      <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-[#333333] shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-45" />
                    </AccordionTrigger>
                    <AccordionContent className="bg-white px-4 sm:px-6 md:px-8 py-4 sm:py-6 text-left text-[#666666] text-sm sm:text-base leading-relaxed border-x border-b border-[#d0dae1]">
                      {step.content}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-18 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center mb-10 sm:mb-16 md:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-[36px] font-medium text-[#333333] mb-5 sm:mb-8 leading-tight">
              Porquê escolher a Bioprev para o seu setor?
            </h2>
            <div className="space-y-5 sm:space-y-8 text-[#333333] text-[15px] sm:text-[17px] leading-relaxed text-left">
              <p>
                Na Bioprev, compreendemos que cada setor tem regulamentações, riscos e exigências próprias. Os nossos especialistas possuem formação específica para cada indústria, garantindo que as soluções implementadas não só eliminam pragas, mas também cumprem todos os requisitos regulamentares.
              </p>
              <p>
                Trabalhamos como parceiros estratégicos dos nossos clientes, oferecendo relatórios detalhados, suporte para auditorias e programas preventivos que minimizam o risco de interrupções nas suas operações.
              </p>
            </div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
              <div className="bg-white border-t-4 border-[#f2c92f] shadow-lg p-6 sm:p-8 md:p-10 flex flex-col h-full">
                <div className="mb-5 sm:mb-8 flex justify-center">
                  <Search className="w-10 h-10 sm:w-12 sm:h-12 text-[#333333]" strokeWidth={1} />
                </div>
                <h3 className="text-lg sm:text-xl md:text-[22px] font-medium text-[#333333] mb-4 sm:mb-6 text-center">1. Diagnóstico setorial</h3>
                <p className="text-[#666666] text-xs sm:text-sm mb-5 sm:mb-8 text-center leading-relaxed">
                  Avaliação especializada para o seu setor
                </p>
                <div className="space-y-2 mt-auto">
                  {["Análise de riscos específicos da sua indústria", "Revisão de conformidade regulamentar", "Identificação de pontos críticos de controle"].map((item, i) => (
                    <div key={i} className="bg-[#f2f5f7] p-3 sm:p-4 text-[12px] sm:text-[13px] text-[#333333] leading-tight">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white border-t-4 border-[#f2c92f] shadow-lg p-6 sm:p-8 md:p-10 flex flex-col h-full">
                <div className="mb-5 sm:mb-8 flex justify-center">
                  <Target className="w-10 h-10 sm:w-12 sm:h-12 text-[#333333]" strokeWidth={1} />
                </div>
                <h3 className="text-lg sm:text-xl md:text-[22px] font-medium text-[#333333] mb-4 sm:mb-6 text-center">2. Programa personalizado</h3>
                <p className="text-[#666666] text-xs sm:text-sm mb-5 sm:mb-8 text-center leading-relaxed">
                  Soluções desenhadas para a sua indústria
                </p>
                <div className="space-y-2 mt-auto">
                  {["Técnicos com formação setorial específica", "Métodos aprovados para a sua indústria", "Calendário adaptado às suas operações"].map((item, i) => (
                    <div key={i} className="bg-[#f2f5f7] p-3 sm:p-4 text-[12px] sm:text-[13px] text-[#333333] leading-tight">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white border-t-4 border-[#f2c92f] shadow-lg p-6 sm:p-8 md:p-10 flex flex-col h-full sm:col-span-2 md:col-span-1">
                <div className="mb-5 sm:mb-8 flex justify-center">
                  <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 text-[#333333]" strokeWidth={1} />
                </div>
                <h3 className="text-lg sm:text-xl md:text-[22px] font-medium text-[#333333] mb-4 sm:mb-6 text-center">3. Suporte contínuo</h3>
                <p className="text-[#666666] text-xs sm:text-sm mb-5 sm:mb-8 text-center leading-relaxed">
                  Acompanhamento e conformidade permanentes
                </p>
                <div className="space-y-2 mt-auto">
                  {["Relatórios detalhados para auditorias", "Suporte técnico dedicado ao seu setor", "Revisão periódica e otimização do programa"].map((item, i) => (
                    <div key={i} className="bg-[#f2f5f7] p-3 sm:p-4 text-[12px] sm:text-[13px] text-[#333333] leading-tight">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#007cc3] py-10 sm:py-14 md:py-16 text-center">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-medium mb-5 sm:mb-8">Descubra a solução ideal para o seu setor</h2>
            <Link href="/contact"
              className="inline-block bg-white text-[#007cc3] hover:bg-white/90 px-8 sm:px-10 md:px-12 py-2.5 sm:py-3 text-sm sm:text-base md:text-lg font-bold transition-colors"
              data-testid="button-sectors-cta"
            >
              Contacte-nos
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
