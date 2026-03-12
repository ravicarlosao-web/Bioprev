import { ChevronRight, Target, ShieldCheck, Leaf, Eye, Heart, Award, Users, Handshake, TrendingUp, CheckCircle2 } from "lucide-react";
import Header from "@/components/layout/Header";
import { Link } from "wouter";
import Footer from "@/components/layout/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Header />
      
      <main className="flex-grow">
        <section className="relative h-[300px] sm:h-[380px] md:h-[460px] lg:h-[500px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
              alt="Quem somos - BIOPREV" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 z-10">
            <div className="max-w-4xl">
              <nav className="flex flex-wrap items-center gap-1 sm:gap-2 text-white/90 text-xs sm:text-sm mb-4 sm:mb-6 md:mb-8 font-medium" data-testid="breadcrumb-about">
                <Link href="/" className="hover:underline">Início</Link>
                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Sobre</span>
                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Quem somos</span>
              </nav>
              
              <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-4 sm:mb-6 leading-tight" data-testid="heading-about">
                Quem somos
              </h1>
              
              <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl leading-relaxed font-light">
                Conheça a BIOPREV — empresa de direito angolano com mais de nove anos de experiência, sedes em Luanda, Benguela e Huambo, e um compromisso inabalável com a excelência na prestação de serviços.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
              <div className="md:w-1/2">
                <div className="w-16 h-1 bg-[#f2c92f] mb-6 sm:mb-8"></div>
                <h2 className="text-2xl sm:text-3xl md:text-[40px] font-medium text-[#333333] mb-6 sm:mb-8 leading-tight">
                  A BIOPREV
                </h2>
                <div className="prose prose-lg max-w-none text-[#666666]">
                  <p className="mb-5 sm:mb-6 text-sm sm:text-base md:text-lg leading-relaxed">
                    A BIOPREV é uma empresa de prestação de serviços nas áreas de Limpeza Empresarial, Jardinagem, Recolha de Lixo (urbano) e Desinfestação Geral. Empresa de direito Angolano, existente há mais de nove anos no mercado, com sedes localizadas em Luanda, Benguela e Huambo, e com objectivos modernos de aplicação profissional e máxima qualidade.
                  </p>
                  <p className="mb-5 sm:mb-6 text-sm sm:text-base md:text-lg leading-relaxed">
                    Disponibilizamos especialização em controle de pragas, manutenção de áreas verdes, limpeza empresarial e industrial, recolha de resíduos orgânicos em condomínios, residências e estabelecimentos comerciais, e uma gama de serviços de apoio.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                    Contando com equipamentos de última geração e profissionais capacitados, podemos atender a sua demanda de forma personalizada com rapidez e eficiência. Oferecemos soluções práticas e eficazes, com qualidade e confiabilidade que somente a nossa marca possui.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800" 
                    alt="Equipa BIOPREV" 
                    className="w-full h-[300px] sm:h-[380px] object-cover rounded-sm shadow-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#001d3d]/80 to-transparent p-6">
                    <p className="text-white text-sm sm:text-base font-medium leading-relaxed">
                      Utilizamos equipamentos e métodos mais modernos, com garantia de um serviço profissional, eficiente e uma equipa técnica hábil e dedicada, usando produtos seguros, certificados e sem prejuízo para a saúde do homem e para o meio ambiente.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-20 bg-[#001d3d]">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <div className="text-center mb-10 sm:mb-14 md:mb-16">
              <div className="w-16 h-1 bg-[#f2c92f] mx-auto mb-6"></div>
              <h2 className="text-2xl sm:text-3xl md:text-[40px] font-medium text-white mb-4 sm:mb-6 leading-tight">
                Missão, Visão & Valores
              </h2>
              <p className="text-white/70 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
                Os pilares que sustentam a nossa identidade e orientam cada decisão que tomamos enquanto empresa líder no mercado angolano.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-white rounded-sm p-6 sm:p-8 relative overflow-hidden group hover:shadow-xl transition-shadow duration-300" data-testid="card-missao">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-[#f2c92f]"></div>
                <div className="bg-[#f2c92f]/10 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-5 sm:mb-6">
                  <Target className="w-7 h-7 sm:w-8 sm:h-8 text-[#f2c92f]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#333333] mb-4">Missão</h3>
                <p className="text-[#666666] text-sm sm:text-base leading-relaxed mb-4">
                  A nossa missão acima de tudo é superar as expectativas de cada cliente e parceiro. Buscamos a excelência na operação de serviços inovadores e de altíssima qualidade, com foco total no resultado do serviço prestado.
                </p>
                <p className="text-[#666666] text-sm sm:text-base leading-relaxed">
                  Tornando-se parte ativa da estratégia e sucesso de cada empresa que servimos, oferecemos alta qualidade ao menor custo possível, assegurando que cada solução entregue gere valor real e mensurável para os nossos clientes.
                </p>
              </div>

              <div className="bg-white rounded-sm p-6 sm:p-8 relative overflow-hidden group hover:shadow-xl transition-shadow duration-300" data-testid="card-visao">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-[#007cc3]"></div>
                <div className="bg-[#007cc3]/10 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-5 sm:mb-6">
                  <Eye className="w-7 h-7 sm:w-8 sm:h-8 text-[#007cc3]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#333333] mb-4">Visão</h3>
                <p className="text-[#666666] text-sm sm:text-base leading-relaxed mb-4">
                  A nossa visão é, através da constante inovação das nossas práticas e processos, tornarmo-nos uma empresa de referência no sector, no mercado angolano, sendo reconhecida pela excelência na prestação de serviços aos nossos clientes.
                </p>
                <p className="text-[#666666] text-sm sm:text-base leading-relaxed">
                  Aspiramos a expandir a nossa presença em todo o território nacional, levando soluções de qualidade internacional a cada província de Angola, consolidando a nossa posição como líderes indiscutíveis no sector de prestação de serviços.
                </p>
              </div>

              <div className="bg-white rounded-sm p-6 sm:p-8 relative overflow-hidden group hover:shadow-xl transition-shadow duration-300" data-testid="card-valores">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-[#28a745]"></div>
                <div className="bg-[#28a745]/10 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-5 sm:mb-6">
                  <Heart className="w-7 h-7 sm:w-8 sm:h-8 text-[#28a745]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#333333] mb-4">Valores</h3>
                <p className="text-[#666666] text-sm sm:text-base leading-relaxed mb-4">
                  Os valores e princípios que nos regem são o que mais nos distingue. Preocupamo-nos profundamente com a forma como fazemos e conduzimos o nosso negócio, considerando o respeito e a ética como essenciais em tudo o que fazemos.
                </p>
                <p className="text-[#666666] text-sm sm:text-base leading-relaxed">
                  Profissionalismo e responsabilidade estão presentes em todos os momentos de relacionamento com cada cliente e colaborador, garantindo relações duradouras baseadas na confiança e na transparência.
                </p>
              </div>
            </div>

            <div className="mt-10 sm:mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              <div className="text-center p-4 sm:p-6">
                <Award className="w-8 h-8 sm:w-10 sm:h-10 text-[#f2c92f] mx-auto mb-3" />
                <h4 className="text-white font-bold text-sm sm:text-base mb-1">Excelência</h4>
                <p className="text-white/60 text-xs sm:text-sm">Qualidade superior em cada serviço</p>
              </div>
              <div className="text-center p-4 sm:p-6">
                <Handshake className="w-8 h-8 sm:w-10 sm:h-10 text-[#f2c92f] mx-auto mb-3" />
                <h4 className="text-white font-bold text-sm sm:text-base mb-1">Ética</h4>
                <p className="text-white/60 text-xs sm:text-sm">Integridade em cada relação</p>
              </div>
              <div className="text-center p-4 sm:p-6">
                <Users className="w-8 h-8 sm:w-10 sm:h-10 text-[#f2c92f] mx-auto mb-3" />
                <h4 className="text-white font-bold text-sm sm:text-base mb-1">Profissionalismo</h4>
                <p className="text-white/60 text-xs sm:text-sm">Equipa técnica qualificada</p>
              </div>
              <div className="text-center p-4 sm:p-6">
                <Leaf className="w-8 h-8 sm:w-10 sm:h-10 text-[#f2c92f] mx-auto mb-3" />
                <h4 className="text-white font-bold text-sm sm:text-base mb-1">Sustentabilidade</h4>
                <p className="text-white/60 text-xs sm:text-sm">Respeito pelo meio ambiente</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-20 bg-[#f8f9fa]">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <div className="text-center mb-10 sm:mb-14 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-[40px] font-medium text-[#333333] mb-4 sm:mb-6 leading-tight">
                Porquê escolher a BIOPREV?
              </h2>
              <p className="text-[#666666] text-sm sm:text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
                É com a intenção de servir a população e instituições que a BIOPREV utiliza equipamentos e métodos mais modernos, com garantia de um serviço profissional e eficiente.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="flex items-start gap-4" data-testid="reason-equipment">
                <div className="mt-1 bg-[#007cc3] p-2.5 rounded-full flex-shrink-0">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-[#333333] mb-2">Equipamentos de Última Geração</h4>
                  <p className="text-[#666666] text-sm sm:text-base leading-relaxed">Investimos continuamente em tecnologia avançada para garantir resultados superiores e duradouros em todos os serviços.</p>
                </div>
              </div>
              <div className="flex items-start gap-4" data-testid="reason-team">
                <div className="mt-1 bg-[#f2c92f] p-2.5 rounded-full flex-shrink-0">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-[#333333] mb-2">Profissionais Capacitados</h4>
                  <p className="text-[#666666] text-sm sm:text-base leading-relaxed">Equipa técnica hábil e dedicada, com formação contínua para oferecer o melhor serviço em cada intervenção.</p>
                </div>
              </div>
              <div className="flex items-start gap-4" data-testid="reason-products">
                <div className="mt-1 bg-[#28a745] p-2.5 rounded-full flex-shrink-0">
                  <ShieldCheck className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-[#333333] mb-2">Produtos Seguros e Certificados</h4>
                  <p className="text-[#666666] text-sm sm:text-base leading-relaxed">Utilizamos apenas produtos certificados, sem prejuízo para a saúde humana nem para o meio ambiente.</p>
                </div>
              </div>
              <div className="flex items-start gap-4" data-testid="reason-personalized">
                <div className="mt-1 bg-[#007cc3] p-2.5 rounded-full flex-shrink-0">
                  <Handshake className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-[#333333] mb-2">Atendimento Personalizado</h4>
                  <p className="text-[#666666] text-sm sm:text-base leading-relaxed">Soluções rápidas e eficientes, desenhadas especificamente para as necessidades de cada cliente e espaço.</p>
                </div>
              </div>
              <div className="flex items-start gap-4" data-testid="reason-coverage">
                <div className="mt-1 bg-[#f2c92f] p-2.5 rounded-full flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-[#333333] mb-2">Cobertura Nacional</h4>
                  <p className="text-[#666666] text-sm sm:text-base leading-relaxed">Com sedes em Luanda, Benguela e Huambo, cobrimos as principais regiões de Angola com rapidez e eficácia.</p>
                </div>
              </div>
              <div className="flex items-start gap-4" data-testid="reason-cost">
                <div className="mt-1 bg-[#28a745] p-2.5 rounded-full flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-[#333333] mb-2">Qualidade ao Melhor Custo</h4>
                  <p className="text-[#666666] text-sm sm:text-base leading-relaxed">Oferecemos alta qualidade ao menor custo possível, tornando-nos parceiros estratégicos no sucesso do seu negócio.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
              <div className="md:w-1/2">
                <h2 className="text-2xl sm:text-3xl md:text-[40px] font-medium text-[#333333] mb-6 sm:mb-8 leading-tight">
                  Profissionais dedicados que impulsionam o nosso sucesso
                </h2>
                <div className="prose prose-lg max-w-none text-[#666666]">
                  <p className="mb-5 sm:mb-6 text-sm sm:text-base md:text-lg leading-relaxed">
                    Na BIOPREV, acreditamos que o sucesso da nossa empresa está diretamente ligado à dedicação e ao profissionalismo da nossa equipa. Contamos com colaboradores altamente capacitados, treinados para oferecer serviços de excelência em todas as áreas que atuamos, desde limpeza empresarial e jardinagem até recolha de resíduos e controlo de pragas.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                    Cada membro da nossa equipa desempenha um papel essencial, utilizando as melhores práticas e tecnologias para garantir soluções eficazes e personalizadas. Essa dedicação reflete o nosso compromisso em atender às necessidades dos clientes com qualidade, eficiência e atenção aos detalhes, tornando-nos uma referência no mercado angolano.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 grid grid-cols-2 gap-3 sm:gap-4">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600" alt="Profissional BIOPREV" className="w-full h-48 sm:h-64 object-cover rounded-sm" />
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600" alt="Equipa BIOPREV" className="w-full h-48 sm:h-64 object-cover rounded-sm mt-6 sm:mt-8" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-20 bg-[#f8f9fa]">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <div className="text-center mb-10 sm:mb-14 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-[40px] font-medium text-[#333333] mb-4 sm:mb-6 leading-tight">
                Descubra os nossos serviços
              </h2>
              <p className="text-[#666666] text-sm sm:text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
                Na BIOPREV, oferecemos uma ampla gama de serviços projetados para atender às necessidades de empresas, condomínios, residências e estabelecimentos comerciais com excelência e personalização.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                { title: "Desinfestação Geral", desc: "Fumigação, pulverização, desratização, desbaratização e tratamentos com gel para eliminar pragas com segurança.", link: "/services/disinfestation", icon: ShieldCheck },
                { title: "Gorgulhos e Traças", desc: "Proteção especializada de stocks e produtos armazenados contra insetos que causam danos e contaminação.", link: "/services/pests", icon: Target },
                { title: "Limpeza Profissional", desc: "Limpeza industrial, doméstica, urbana e de tanques de combustível com equipamentos de última geração.", link: "/services/cleaning", icon: Award },
                { title: "Recolha de Resíduos", desc: "Recolha urbana, doméstica, pós-construção, hospitalar e industrial com técnicas atualizadas.", link: "/services/waste", icon: TrendingUp },
                { title: "Água Potável", desc: "Abastecimento de água potável certificada para empresas, lojas, residências e eventos.", link: "/services/water", icon: CheckCircle2 },
                { title: "Jardinagem", desc: "Tratamento de terras, plantações, desenvolvimento e estética de jardins com equipa especializada.", link: "/services/gardening", icon: Leaf },
              ].map((service) => (
                <Link 
                  key={service.title} 
                  href={service.link}
                  className="bg-white p-5 sm:p-6 rounded-sm shadow-sm hover:shadow-md transition-shadow border-l-4 border-[#f2c92f] group"
                  data-testid={`link-service-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <service.icon className="w-7 h-7 text-[#007cc3] mb-3 group-hover:text-[#f2c92f] transition-colors" />
                  <h4 className="text-base sm:text-lg font-bold text-[#333333] mb-2 group-hover:text-[#007cc3] transition-colors">{service.title}</h4>
                  <p className="text-[#666666] text-xs sm:text-sm leading-relaxed">{service.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-20 bg-[#001d3d]">
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-white mb-4 sm:mb-6 leading-tight">
              Pronto para trabalhar com a BIOPREV?
            </h2>
            <p className="text-white/80 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
              Entre em contacto connosco e descubra como podemos ajudar a sua empresa com soluções profissionais, eficientes e ao melhor custo do mercado.
            </p>
            <Link 
              href="/contact" 
              className="inline-block border-2 border-white text-white px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold hover:bg-white hover:text-[#001d3d] transition-colors duration-300"
              data-testid="link-contact-cta"
            >
              Entre em Contato
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
