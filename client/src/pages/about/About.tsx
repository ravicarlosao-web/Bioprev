import { ChevronRight, Plus } from "lucide-react";
import Header from "@/components/layout/Header";
import { Link } from "wouter";
import Footer from "@/components/layout/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SEOHead, { breadcrumbSchema } from "@/components/SEOHead";

export default function About() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <SEOHead
        title="Sobre a Bioprev"
        description="Conheça a Bioprev Angola — líder em controle de pragas, desinfestação e higiene. Mais de uma década de experiência protegendo residências e empresas em Angola."
        canonical="/about"
        keywords="sobre Bioprev Angola, empresa controle pragas Angola, história Bioprev, quem somos Bioprev"
        structuredData={breadcrumbSchema([
          { name: "Início", url: "/" },
          { name: "Sobre", url: "/about" },
        ])}
      />
      <Header />
      
      <main className="flex-grow">
        <section className="relative h-[300px] sm:h-[380px] md:h-[460px] lg:h-[500px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=75&w=1280" 
              alt="Quem somos - BIOPREV" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 z-10">
            <div className="max-w-3xl">
              <nav className="flex flex-wrap items-center gap-1 text-white/90 text-xs sm:text-sm mb-4 sm:mb-6 md:mb-8 font-medium" data-testid="breadcrumb-about">
                <Link href="/" className="hover:underline">Início</Link>
                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Sobre</span>
                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Quem somos</span>
              </nav>
              
              <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-3 sm:mb-5 md:mb-6 leading-tight" data-testid="heading-about">
                Quem somos
              </h1>
              
              <p className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mb-5 sm:mb-8 md:mb-10 leading-relaxed font-light">
                Conheça a BIOPREV — empresa de direito angolano com mais de nove anos de experiência, sedes em Luanda, Benguela e Huambo, e um compromisso inabalável com a excelência.
              </p>

              <Link href="/contact"
                className="inline-block border-2 border-white text-white hover:bg-white hover:text-[#333333] px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 text-sm sm:text-base md:text-lg font-medium transition-all duration-300"
                data-testid="link-contact-hero"
              >
                Entre em contato
              </Link>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center">
            <p className="text-[#333333] text-base sm:text-lg mb-5 sm:mb-8 leading-relaxed font-medium">
              A BIOPREV é uma empresa de prestação de serviços nas áreas de Limpeza Empresarial, Jardinagem, Recolha de Lixo (urbano) e Desinfestação Geral. Empresa de direito Angolano, existente há mais de nove anos no mercado, com sedes localizadas em Luanda, Benguela e Huambo.
            </p>
            <p className="text-[#666666] text-sm sm:text-base mb-10 sm:mb-16 leading-relaxed">
              Contando com equipamentos de última geração e profissionais capacitados, podemos atender a sua demanda de forma personalizada com rapidez e eficiência. Oferecemos soluções práticas e eficazes, com qualidade e confiabilidade que somente a nossa marca possui. Utilizamos equipamentos e métodos mais modernos, com garantia de um serviço profissional, eficiente e uma equipa técnica hábil e dedicada, usando produtos seguros, certificados e sem prejuízo para a saúde do homem e para o meio ambiente.
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-[36px] font-medium text-[#333333] mb-5 sm:mb-8 leading-tight">
              A nossa especialização
            </h2>
            <p className="text-[#666666] text-sm sm:text-base leading-relaxed">
              Disponibilizamos especialização em controle de pragas, manutenção de áreas verdes, limpeza empresarial e industrial, recolha de resíduos orgânicos em condomínios, residências e estabelecimentos comerciais, e uma gama de serviços de apoio. Tornando-se parte ativa da estratégia e sucesso de cada empresa que servimos, oferecemos alta qualidade ao menor custo possível.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative h-[350px] sm:h-[420px] md:h-[500px] lg:h-[600px] group overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=75&w=1280"
              alt="Equipa BIOPREV"
                loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6">
              <div className="bg-white border-t-4 border-[#f2c92f] shadow-xl p-5 sm:p-7 md:p-8 lg:p-10 w-full max-w-sm sm:max-w-md">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[28px] font-medium text-[#333333] mb-3 sm:mb-5">Profissionais dedicados</h3>
                <p className="text-[#666666] text-sm sm:text-base leading-relaxed mb-5 sm:mb-8">
                  Cada membro da nossa equipa desempenha um papel essencial, utilizando as melhores práticas e tecnologias para garantir soluções eficazes e personalizadas. Contamos com colaboradores altamente capacitados em todas as áreas que atuamos.
                </p>
                <Link href="/contact"
                  className="inline-block text-[#007cc3] font-medium border border-[#007cc3] px-4 sm:px-6 py-2 text-sm sm:text-base hover:bg-[#007cc3] hover:text-white transition-all"
                >
                  Saiba mais
                </Link>
              </div>
            </div>
          </div>
          <div className="relative h-[350px] sm:h-[420px] md:h-[500px] lg:h-[600px] group overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=75&w=1280"
                loading="lazy"
              alt="Tecnologia e inovação"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6">
              <div className="bg-white border-t-4 border-[#f2c92f] shadow-xl p-5 sm:p-7 md:p-8 lg:p-10 w-full max-w-sm sm:max-w-md">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[28px] font-medium text-[#333333] mb-3 sm:mb-5">Cobertura nacional</h3>
                <p className="text-[#666666] text-sm sm:text-base leading-relaxed mb-5 sm:mb-8">
                  Com sedes operacionais em Luanda, Benguela e Huambo, a BIOPREV garante uma cobertura que abrange as principais regiões de Angola, levando serviços de excelência a empresas e condomínios em todo o país.
                </p>
                <Link href="/contact"
                  className="inline-block text-[#007cc3] font-medium border border-[#007cc3] px-4 sm:px-6 py-2 text-sm sm:text-base hover:bg-[#007cc3] hover:text-white transition-all"
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
                Missão, Visão & Valores
              </h2>
              <p className="text-[#666666] text-sm sm:text-base max-w-4xl mx-auto leading-relaxed">
                Os pilares que sustentam a nossa identidade e orientam cada decisão que tomamos enquanto empresa líder no mercado angolano.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              <div className="bg-white border-t-4 border-[#f2c92f] shadow-sm p-5 sm:p-6 md:p-8 flex flex-col" data-testid="card-missao">
                <h3 className="text-base sm:text-lg md:text-xl font-medium text-[#333333] mb-3 sm:mb-4">Missão</h3>
                <p className="text-[#666666] leading-relaxed text-sm sm:text-[15px] mb-4">
                  A nossa missão acima de tudo é superar as expectativas de cada cliente e parceiro. Buscamos a excelência na operação de serviços inovadores e de altíssima qualidade, com foco total no resultado do serviço prestado.
                </p>
                <p className="text-[#666666] leading-relaxed text-sm sm:text-[15px] flex-grow">
                  Tornando-se parte ativa da estratégia e sucesso de cada empresa que servimos, oferecemos alta qualidade ao menor custo possível, assegurando valor real para os nossos clientes.
                </p>
              </div>

              <div className="bg-white border-t-4 border-[#f2c92f] shadow-sm p-5 sm:p-6 md:p-8 flex flex-col" data-testid="card-visao">
                <h3 className="text-base sm:text-lg md:text-xl font-medium text-[#333333] mb-3 sm:mb-4">Visão</h3>
                <p className="text-[#666666] leading-relaxed text-sm sm:text-[15px] mb-4">
                  A nossa visão é, através da constante inovação das nossas práticas e processos, tornarmo-nos uma empresa de referência no sector, no mercado angolano, sendo reconhecida pela excelência na prestação de serviços aos nossos clientes.
                </p>
                <p className="text-[#666666] leading-relaxed text-sm sm:text-[15px] flex-grow">
                  Aspiramos a expandir a nossa presença em todo o território nacional, levando soluções de qualidade a cada província de Angola.
                </p>
              </div>

              <div className="bg-white border-t-4 border-[#f2c92f] shadow-sm p-5 sm:p-6 md:p-8 flex flex-col sm:col-span-2 md:col-span-1" data-testid="card-valores">
                <h3 className="text-base sm:text-lg md:text-xl font-medium text-[#333333] mb-3 sm:mb-4">Valores</h3>
                <p className="text-[#666666] leading-relaxed text-sm sm:text-[15px] mb-4">
                  Os valores e princípios que nos regem são o que mais nos distingue. Preocupamo-nos profundamente com a forma como fazemos e conduzimos o nosso negócio, considerando o respeito e a ética como essenciais.
                </p>
                <p className="text-[#666666] leading-relaxed text-sm sm:text-[15px] flex-grow">
                  Profissionalismo e responsabilidade estão presentes em todos os momentos de relacionamento com cada cliente e colaborador, garantindo relações baseadas na confiança e transparência.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-18 md:py-24 bg-[#f2f5f7]">
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center">
            <h2 className="text-2xl sm:text-3xl md:text-[36px] font-medium text-[#333333] mb-5 sm:mb-8 leading-tight">
              Porquê escolher a BIOPREV?
            </h2>
            <p className="text-[#666666] text-sm sm:text-base mb-8 sm:mb-12 leading-relaxed">
              É com a intenção de servir a população e instituições no controlo de pragas e prestação de serviços que a BIOPREV utiliza equipamentos e métodos mais modernos, com garantia de um serviço profissional e eficiente.
            </p>

            <div className="space-y-2">
              {[
                { title: "Equipamentos de última geração", content: "Investimos continuamente em tecnologia avançada para garantir resultados superiores e duradouros. Os nossos equipamentos permitem atender a sua demanda de forma personalizada com rapidez e eficiência, oferecendo soluções práticas e eficazes com qualidade e confiabilidade." },
                { title: "Equipa técnica hábil e dedicada", content: "Contamos com profissionais altamente capacitados, com formação contínua em todas as áreas de atuação. Cada membro da equipa é treinado para oferecer o melhor serviço, utilizando as melhores práticas e tecnologias do mercado." },
                { title: "Produtos seguros e certificados", content: "Utilizamos apenas produtos certificados e sem prejuízo para a saúde do homem e para o meio ambiente. Todos os nossos procedimentos seguem normas de segurança rigorosas, assegurando a proteção dos colaboradores, clientes e do ecossistema." },
                { title: "Cobertura nacional com sedes operacionais", content: "Com sedes em Luanda, Benguela e Huambo, cobrimos as principais regiões de Angola com rapidez e eficácia. A nossa frota própria e equipas locais garantem resposta rápida em todo o território." },
                { title: "Alta qualidade ao menor custo possível", content: "Tornando-se parte ativa da estratégia e sucesso de cada empresa que servimos, oferecemos alta qualidade ao menor custo possível. A nossa missão é superar as expectativas de cada cliente e parceiro, com foco total no resultado do serviço prestado." },
              ].map((step, idx) => (
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
              Descubra os nossos serviços
            </h2>
            <div className="space-y-5 sm:space-y-8 text-[#333333] text-[15px] sm:text-[17px] leading-relaxed text-left">
              <p>
                Na BIOPREV, oferecemos uma ampla gama de serviços projetados para atender às necessidades de empresas, condomínios, residências e estabelecimentos comerciais com excelência e personalização. Desde a desinfestação geral até à jardinagem, cada serviço é executado com o máximo rigor profissional.
              </p>
              <p>
                Oferecemos soluções especializadas em controlo de pragas — incluindo fumigação, pulverização, desratização e desbaratização — manutenção de áreas verdes, limpeza empresarial e industrial, varredura urbana, recolha de resíduos e fornecimento de água potável. Tudo com equipamentos de última geração e uma equipa técnica qualificada.
              </p>
            </div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
              {[
                { title: "Desinfestação Geral", subtitle: "Fumigação, pulverização, desratização, desbaratização e tratamentos com gel.", items: ["Fumigação por via seca", "Pulverização de superfícies", "Desratização profissional", "Desbaratização com gel e spray"], link: "/services/disinfestation" },
                { title: "Limpeza Profissional", subtitle: "Limpeza industrial, doméstica, urbana e de tanques de combustível.", items: ["Limpeza industrial e hospitalar", "Limpeza doméstica", "Varredura urbana em vias públicas", "Limpeza de tanques de combustível"], link: "/services/cleaning" },
                { title: "Recolha de Resíduos", subtitle: "Recolha urbana, doméstica, pós-construção, hospitalar e industrial.", items: ["Resíduos urbanos e domésticos", "Resíduos pós-construção", "Resíduos hospitalares", "Resíduos industriais"], link: "/services/waste" },
              ].map((card, idx) => (
                <div key={idx} className={`bg-white border-t-4 border-[#f2c92f] shadow-lg p-6 sm:p-8 md:p-10 flex flex-col h-full ${idx === 2 ? 'sm:col-span-2 md:col-span-1' : ''}`}>
                  <h3 className="text-lg sm:text-xl md:text-[22px] font-medium text-[#333333] mb-4 sm:mb-6 text-center">{card.title}</h3>
                  <p className="text-[#666666] text-xs sm:text-sm mb-5 sm:mb-8 text-center leading-relaxed">
                    {card.subtitle}
                  </p>
                  <div className="space-y-2 mt-auto">
                    {card.items.map((item, i) => (
                      <div key={i} className="bg-[#f2f5f7] p-3 sm:p-4 text-[12px] sm:text-[13px] text-[#333333] leading-tight">
                        {item}
                      </div>
                    ))}
                  </div>
                  <Link href={card.link}
                    className="inline-block text-[#007cc3] font-medium border border-[#007cc3] px-4 sm:px-6 py-2 text-sm sm:text-base hover:bg-[#007cc3] hover:text-white transition-all mt-5 sm:mt-8 text-center"
                  >
                    Ver serviço
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#007cc3] py-10 sm:py-14 md:py-16 text-center">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-medium mb-5 sm:mb-8">Pronto para trabalhar com a BIOPREV?</h2>
            <Link href="/contact"
              className="inline-block bg-white text-[#007cc3] hover:bg-white/90 px-8 sm:px-10 md:px-12 py-2.5 sm:py-3 text-sm sm:text-base md:text-lg font-bold transition-colors"
              data-testid="link-contact-cta"
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
