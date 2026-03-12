import { ChevronRight, Target, ShieldCheck, Leaf } from "lucide-react";
import Header from "@/components/layout/Header";
import { Link } from "wouter";
import Footer from "@/components/layout/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Header />
      
      {/* Spacer to push content below the fixed header */}
      <div className="pt-[140px] md:pt-[111.5px]"></div>
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[500px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/src/assets/images/about-hero.jpg" 
              alt="Quem somos - BIOPREV" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#001d3d]/70" />
          </div>
          
          <div className="container mx-auto px-4 z-10">
            <div className="max-w-4xl">
              <nav className="flex items-center space-x-2 text-white/90 text-sm mb-8 font-medium">
                <Link href="/" className="hover:underline">Início</Link>
                <ChevronRight className="w-4 h-4" />
                <span>Sobre</span>
                <ChevronRight className="w-4 h-4" />
                <span>Quem somos</span>
              </nav>
              
              <h1 className="text-white text-5xl md:text-6xl font-medium mb-8 leading-tight">
                Quem somos
              </h1>
              
              <p className="text-white text-xl md:text-[22px] max-w-3xl leading-relaxed font-light">
                Conheça a BIOPREV, a nossa visão, a nossa equipa e o nosso compromisso em moldar um futuro sustentável através de soluções de excelência.
              </p>
            </div>
          </div>
        </section>

        {/* Moldando o nosso futuro */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="md:w-1/2">
                <div className="w-16 h-1 bg-[#f2c92f] mb-8"></div>
                <h2 className="text-3xl md:text-[40px] font-medium text-[#333333] mb-8 leading-tight">
                  Moldando o nosso futuro
                </h2>
                <div className="prose prose-lg max-w-none text-[#666666]">
                  <p className="mb-6">
                    Na BIOPREV, estamos constantemente a inovar e a evoluir para moldar um futuro mais sustentável e eficiente. Nosso compromisso vai além de prestar serviços de qualidade; buscamos impactar positivamente as comunidades onde atuamos e contribuir para a preservação do meio ambiente.
                  </p>
                  <p>
                    Com uma visão moderna e estratégias focadas no progresso, investimos em tecnologia de ponta, capacitação contínua da nossa equipa e métodos que combinam eficiência com sustentabilidade. Acreditamos que moldar o futuro significa oferecer soluções que não apenas atendam às necessidades atuais, mas que também criem bases sólidas para um amanhã melhor.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="relative p-8 bg-gray-50 border-l-4 border-[#007cc3]">
                  <Leaf className="w-12 h-12 text-[#007cc3] mb-6" />
                  <h3 className="text-2xl font-bold text-[#333333] mb-4">Compromisso com o amanhã</h3>
                  <p className="text-[#666666]">
                    Nossa missão é proteger pessoas, ambientes e empresas, adotando práticas sustentáveis que garantam o equilíbrio perfeito entre eficiência no serviço e respeito pela natureza.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Descubra os nossos serviços */}
        <section className="py-20 bg-[#f8f9fa]">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-[40px] font-medium text-[#333333] mb-6 leading-tight">
                Descubra os nossos serviços
              </h2>
              <p className="text-[#666666] text-lg max-w-4xl mx-auto leading-relaxed">
                Na BIOPREV, oferecemos uma ampla gama de serviços projetados para atender às necessidades de empresas, condomínios, residências e estabelecimentos comerciais com excelência e personalização.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1000" alt="Nossos Serviços" className="w-full shadow-lg rounded-sm" />
              </div>
              <div className="order-1 md:order-2">
                <p className="text-[#666666] text-lg leading-relaxed mb-8">
                  Oferecemos soluções especializadas em controlo de pragas, manutenção de áreas verdes, limpeza empresarial e industrial, além da recolha de resíduos orgânicos em condomínios, residências e estabelecimentos comerciais. 
                </p>
                <div className="flex items-start gap-4 mb-6">
                  <div className="mt-1 bg-[#007cc3] p-2 rounded-full">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#333333] mb-2">Equipamento de última geração</h4>
                    <p className="text-[#666666]">Utilizamos a tecnologia mais avançada para garantir resultados superiores.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-[#f2c92f] p-2 rounded-full">
                    <ShieldCheck className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#333333] mb-2">Atendimento personalizado</h4>
                    <p className="text-[#666666]">Soluções rápidas, eficientes e desenhadas especificamente para o seu espaço.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Profissionais dedicados */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-[40px] font-medium text-[#333333] mb-8 leading-tight">
                  Profissionais dedicados que impulsionam nosso sucesso
                </h2>
                <div className="prose prose-lg max-w-none text-[#666666]">
                  <p className="mb-6">
                    Na BIOPREV, acreditamos que o sucesso da nossa empresa está diretamente ligado à dedicação e ao profissionalismo da nossa equipa. Contamos com colaboradores altamente capacitados, treinados para oferecer serviços de excelência em todas as áreas que atuamos, desde limpeza empresarial e jardinagem até recolha de resíduos e controlo de pragas.
                  </p>
                  <p>
                    Cada membro da nossa equipa desempenha um papel essencial, utilizando as melhores práticas e tecnologias para garantir soluções eficazes e personalizadas. Essa dedicação reflete o nosso compromisso em atender às necessidades dos clientes com qualidade, eficiência e atenção aos detalhes, tornando-nos uma referência no mercado angolano.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600" alt="Profissional BIOPREV 1" className="w-full h-64 object-cover rounded-sm" />
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600" alt="Profissional BIOPREV 2" className="w-full h-64 object-cover rounded-sm mt-8" />
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
