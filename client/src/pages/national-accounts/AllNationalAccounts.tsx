import Header from "@/components/layout/Header";
import { ChevronRight, Plus, CheckCircle2, Target, Search, Globe, Crosshair, Users, Building2, Handshake, BarChart3 } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "wouter";
import Footer from "@/components/layout/Footer";
import SEOHead, { breadcrumbSchema } from "@/components/SEOHead";

export default function AllNationalAccounts() {
  const steps = [
    { title: "Análise das suas necessidades", content: "Realizamos uma auditoria completa das suas instalações em todas as localizações para compreender os desafios específicos de cada unidade, identificar riscos comuns e definir um programa unificado de gestão de pragas." },
    { title: "Plano de gestão centralizado", content: "Desenvolvemos um plano de gestão de pragas centralizado que garante consistência de serviço em todas as suas localizações, com protocolos padronizados, cronogramas coordenados e relatórios consolidados." },
    { title: "Implementação com equipas locais", content: "As nossas equipas locais em Luanda, Benguela e Huambo implementam o programa nas suas instalações, garantindo tempos de resposta rápidos e conhecimento das condições específicas de cada região." },
    { title: "Monitorização e relatórios unificados", content: "Fornecemos relatórios consolidados de todas as suas localizações, permitindo uma visão completa do estado de controle de pragas em toda a organização, com indicadores de desempenho e tendências." },
    { title: "Revisão e otimização contínua", content: "Realizamos revisões periódicas do programa para garantir que os resultados são consistentes, identificar oportunidades de melhoria e adaptar as estratégias às necessidades em evolução do seu negócio." }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <SEOHead
        title="Contas Nacionais"
        description="Programa de Contas Nacionais Bioprev — gestão centralizada de controle de pragas para empresas com múltiplas localizações em Angola. Um contrato, cobertura total."
        canonical="/national-accounts"
        keywords="contas nacionais controle pragas Angola, gestão centralizada pragas, programa multi-localização, Bioprev contas nacionais"
        structuredData={breadcrumbSchema([
          { name: "Início", url: "/" },
          { name: "Contas Nacionais", url: "/national-accounts" },
        ])}
      />
      <Header />

      <main className="flex-grow">
        <section className="relative h-[300px] sm:h-[380px] md:h-[460px] lg:h-[500px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=75&w=1280"
              alt="Contas nacionais Bioprev"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 z-10">
            <div className="max-w-3xl">
              <nav className="flex items-center flex-wrap gap-1 text-white/90 text-xs sm:text-sm mb-4 sm:mb-6 md:mb-8 font-medium">
                <Link href="/" className="hover:underline">Início</Link>
                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Contas nacionais</span>
              </nav>

              <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-3 sm:mb-5 md:mb-6 leading-tight" data-testid="text-national-accounts-title">
                Contas nacionais de controle{"\n"}de pragas
              </h1>

              <p className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mb-5 sm:mb-8 md:mb-10 leading-relaxed font-light" data-testid="text-national-accounts-subtitle">
                Soluções de gestão de pragas centralizadas para empresas com múltiplas localizações em Angola. Um único ponto de contacto, serviço consistente e relatórios unificados.
              </p>

              <Link href="/contact"
                className="inline-block border-2 border-white text-white hover:bg-white hover:text-[#333333] px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 text-sm sm:text-base md:text-lg font-medium transition-all duration-300"
                data-testid="button-national-contact"
              >
                Entre em contacto
              </Link>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center">
            <p className="text-[#333333] text-base sm:text-lg mb-5 sm:mb-8 leading-relaxed font-medium" data-testid="text-national-intro">
              Gerir o controle de pragas em múltiplas localizações pode ser complexo e demorado. A Bioprev simplifica este processo com o programa de Contas Nacionais, oferecendo um serviço centralizado e consistente em todo o território angolano.
            </p>
            <p className="text-[#666666] text-sm sm:text-base mb-10 sm:mb-16 leading-relaxed">
              Com filiais em Luanda, Benguela e Huambo, garantimos cobertura em todas as principais regiões de Angola. O nosso programa de Contas Nacionais disponibiliza um gestor de conta dedicado que coordena todos os serviços, assegurando que cada uma das suas instalações recebe o mesmo nível de excelência e proteção.
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-[36px] font-medium text-[#333333] mb-5 sm:mb-8 leading-tight">
              Gestão centralizada de pragas para o seu negócio
            </h2>
            <p className="text-[#666666] text-sm sm:text-base leading-relaxed">
              Quer tenha escritórios em Luanda e armazéns em Benguela, ou fábricas no Huambo, a Bioprev coordena o controle de pragas em todas as suas unidades com um único contrato, um único ponto de contacto e relatórios consolidados.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative h-[350px] sm:h-[420px] md:h-[500px] lg:h-[600px] group overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=75&w=800"
              alt="Visão geral das contas nacionais"
                loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6">
              <div className="bg-white border-t-4 border-[#f2c92f] shadow-xl p-5 sm:p-7 md:p-8 lg:p-10 w-full max-w-sm sm:max-w-md">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[28px] font-medium text-[#333333] mb-3 sm:mb-5" data-testid="text-card-overview">Visão geral</h3>
                <p className="text-[#666666] text-sm sm:text-base leading-relaxed mb-5 sm:mb-8">
                  Conheça como o programa de Contas Nacionais da Bioprev funciona e como pode beneficiar a sua organização com gestão centralizada e eficiente.
                </p>
                <Link href="/national-accounts/overview"
                  className="inline-block text-[#007cc3] font-medium border border-[#007cc3] px-4 sm:px-6 py-2 text-sm sm:text-base hover:bg-[#007cc3] hover:text-white transition-all"
                  data-testid="link-overview"
                >
                  Saiba mais
                </Link>
              </div>
            </div>
          </div>

          <div className="relative h-[350px] sm:h-[420px] md:h-[500px] lg:h-[600px] group overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=75&w=800"
                loading="lazy"
              alt="Soluções nacionais"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6">
              <div className="bg-white border-t-4 border-[#f2c92f] shadow-xl p-5 sm:p-7 md:p-8 lg:p-10 w-full max-w-sm sm:max-w-md">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[28px] font-medium text-[#333333] mb-3 sm:mb-5" data-testid="text-card-solutions">Soluções nacionais</h3>
                <p className="text-[#666666] text-sm sm:text-base leading-relaxed mb-5 sm:mb-8">
                  Descubra as soluções específicas que a Bioprev disponibiliza para empresas com presença em múltiplas regiões de Angola.
                </p>
                <Link href="/national-accounts/solutions"
                  className="inline-block text-[#007cc3] font-medium border border-[#007cc3] px-4 sm:px-6 py-2 text-sm sm:text-base hover:bg-[#007cc3] hover:text-white transition-all"
                  data-testid="link-solutions"
                >
                  Saiba mais
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-18 md:py-24 bg-[#f8f9fa]">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <div className="text-center mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-[36px] font-medium text-[#333333] mb-5 sm:mb-8 leading-tight">
                Vantagens das Contas Nacionais
              </h2>
              <p className="text-[#666666] text-sm sm:text-base max-w-4xl mx-auto leading-relaxed">
                Um programa desenhado para simplificar a gestão de pragas da sua organização, reduzir custos e garantir conformidade em todas as localizações.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {[
                { icon: Users, title: "Gestor de conta dedicado", description: "Um único ponto de contacto que conhece todas as suas instalações, coordena todos os serviços e garante que as suas necessidades são atendidas de forma consistente." },
                { icon: Building2, title: "Cobertura em todo o país", description: "Com filiais em Luanda, Benguela e Huambo, garantimos serviço rápido e eficaz em todas as suas localizações, com equipas locais que conhecem as condições da região." },
                { icon: BarChart3, title: "Relatórios consolidados", description: "Receba relatórios unificados de todas as suas localizações num único dashboard, com indicadores de desempenho, tendências e recomendações para toda a organização." },
                { icon: Handshake, title: "Contrato único e simplificado", description: "Um único contrato que cobre todas as suas instalações, simplificando a gestão administrativa e permitindo melhores condições comerciais pelo volume consolidado." },
                { icon: Crosshair, title: "Padrões consistentes", description: "Protocolos padronizados que garantem o mesmo nível de qualidade e proteção em cada uma das suas unidades, independentemente da localização." },
                { icon: Globe, title: "Resposta coordenada", description: "Em caso de emergência, a nossa rede de filiais permite uma resposta rápida e coordenada, mobilizando recursos de toda a organização para resolver o problema." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white border-t-4 border-[#f2c92f] shadow-sm p-5 sm:p-6 md:p-8 flex flex-col" data-testid={`card-advantage-${idx}`}>
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <item.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#007cc3] shrink-0" strokeWidth={1.5} />
                    <h3 className="text-base sm:text-lg md:text-xl font-medium text-[#333333]">{item.title}</h3>
                  </div>
                  <p className="text-[#666666] leading-relaxed text-sm sm:text-[15px] flex-grow">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-18 md:py-24 bg-[#f2f5f7]">
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center">
            <h2 className="text-2xl sm:text-3xl md:text-[36px] font-medium text-[#333333] mb-5 sm:mb-8 leading-tight">
              Como funciona o programa
            </h2>
            <p className="text-[#666666] text-sm sm:text-base mb-8 sm:mb-12 leading-relaxed">
              O nosso programa de Contas Nacionais segue uma abordagem estruturada para garantir que todas as suas instalações estão protegidas de forma consistente e eficiente.
            </p>

            <div className="space-y-2">
              {steps.map((step, idx) => (
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
              Porquê escolher as Contas Nacionais da Bioprev?
            </h2>
            <div className="space-y-5 sm:space-y-8 text-[#333333] text-[15px] sm:text-[17px] leading-relaxed text-left">
              <p>
                Gerir o controle de pragas em múltiplas localizações sem um programa centralizado significa lidar com múltiplos fornecedores, contratos diferentes, níveis de serviço inconsistentes e falta de visibilidade sobre o estado geral da organização. O programa de Contas Nacionais da Bioprev elimina todas estas complicações.
              </p>
              <p>
                Com um gestor de conta dedicado, relatórios consolidados e equipas locais em Luanda, Benguela e Huambo, garantimos que cada instalação recebe proteção de primeiro nível enquanto simplificamos a sua gestão e reduzimos os custos operacionais.
              </p>
            </div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
              <div className="bg-white border-t-4 border-[#f2c92f] shadow-lg p-6 sm:p-8 md:p-10 flex flex-col h-full">
                <div className="mb-5 sm:mb-8 flex justify-center">
                  <Search className="w-10 h-10 sm:w-12 sm:h-12 text-[#333333]" strokeWidth={1} />
                </div>
                <h3 className="text-lg sm:text-xl md:text-[22px] font-medium text-[#333333] mb-4 sm:mb-6 text-center">1. Auditoria nacional</h3>
                <p className="text-[#666666] text-xs sm:text-sm mb-5 sm:mb-8 text-center leading-relaxed">Avaliação completa de todas as suas localizações</p>
                <div className="space-y-2 mt-auto">
                  {["Inspeção de todas as instalações em Angola", "Identificação de riscos comuns e específicos", "Plano de gestão unificado e personalizado"].map((item, i) => (
                    <div key={i} className="bg-[#f2f5f7] p-3 sm:p-4 text-[12px] sm:text-[13px] text-[#333333] leading-tight">{item}</div>
                  ))}
                </div>
              </div>

              <div className="bg-white border-t-4 border-[#f2c92f] shadow-lg p-6 sm:p-8 md:p-10 flex flex-col h-full">
                <div className="mb-5 sm:mb-8 flex justify-center">
                  <Target className="w-10 h-10 sm:w-12 sm:h-12 text-[#333333]" strokeWidth={1} />
                </div>
                <h3 className="text-lg sm:text-xl md:text-[22px] font-medium text-[#333333] mb-4 sm:mb-6 text-center">2. Implementação coordenada</h3>
                <p className="text-[#666666] text-xs sm:text-sm mb-5 sm:mb-8 text-center leading-relaxed">Serviço consistente em todas as unidades</p>
                <div className="space-y-2 mt-auto">
                  {["Equipas locais em Luanda, Benguela e Huambo", "Protocolos padronizados de qualidade", "Gestor de conta dedicado como ponto de contacto"].map((item, i) => (
                    <div key={i} className="bg-[#f2f5f7] p-3 sm:p-4 text-[12px] sm:text-[13px] text-[#333333] leading-tight">{item}</div>
                  ))}
                </div>
              </div>

              <div className="bg-white border-t-4 border-[#f2c92f] shadow-lg p-6 sm:p-8 md:p-10 flex flex-col h-full sm:col-span-2 md:col-span-1">
                <div className="mb-5 sm:mb-8 flex justify-center">
                  <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 text-[#333333]" strokeWidth={1} />
                </div>
                <h3 className="text-lg sm:text-xl md:text-[22px] font-medium text-[#333333] mb-4 sm:mb-6 text-center">3. Relatórios e otimização</h3>
                <p className="text-[#666666] text-xs sm:text-sm mb-5 sm:mb-8 text-center leading-relaxed">Visibilidade total e melhoria contínua</p>
                <div className="space-y-2 mt-auto">
                  {["Relatórios consolidados de todas as localizações", "Indicadores de desempenho e tendências", "Revisões periódicas e otimização do programa"].map((item, i) => (
                    <div key={i} className="bg-[#f2f5f7] p-3 sm:p-4 text-[12px] sm:text-[13px] text-[#333333] leading-tight">{item}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#007cc3] py-10 sm:py-14 md:py-16 text-center">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-medium mb-5 sm:mb-8" data-testid="text-cta-national">Simplifique a gestão de pragas da sua organização</h2>
            <Link href="/contact"
              className="inline-block bg-white text-[#007cc3] hover:bg-white/90 px-8 sm:px-10 md:px-12 py-2.5 sm:py-3 text-sm sm:text-base md:text-lg font-bold transition-colors"
              data-testid="button-cta-national"
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
