import { ChevronRight, Briefcase, GraduationCap, HeartHandshake } from "lucide-react";
import Header from "@/components/layout/Header";
import { Link } from "wouter";
import Footer from "@/components/layout/Footer";

export default function Careers() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Header />
      
      <div className="pt-[140px] md:pt-[111.5px]"></div>
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[500px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/src/assets/images/careers-hero.jpg" 
              alt="Carreiras - BIOPREV" 
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
                <span>Carreiras</span>
              </nav>
              
              <h1 className="text-white text-5xl md:text-6xl font-medium mb-8 leading-tight">
                Carreiras na BIOPREV
              </h1>
              
              <p className="text-white text-xl md:text-[22px] max-w-3xl leading-relaxed font-light">
                Junte-se a uma equipa dedicada a fazer a diferença. Estamos sempre em busca de talentos que compartilhem a nossa paixão por excelência e inovação.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-[40px] font-medium text-[#333333] mb-8 leading-tight">
                  Construa o seu futuro connosco
                </h2>
                <div className="prose prose-lg max-w-none text-[#666666]">
                  <p className="mb-6">
                    Acreditamos que os nossos colaboradores são o nosso maior ativo. Ao se juntar à BIOPREV, você fará parte de uma empresa que valoriza o desenvolvimento profissional, o respeito mútuo e a contribuição de cada indivíduo para o nosso sucesso coletivo.
                  </p>
                  <p>
                    Oferecemos um ambiente de trabalho dinâmico, oportunidades de capacitação contínua e a chance de trabalhar com as melhores tecnologias do mercado. Se você é proativo, dedicado e busca um lugar onde possa crescer, a BIOPREV é o lugar certo.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="grid grid-cols-1 gap-6">
                  <div className="flex items-start gap-4 p-6 bg-[#f8f9fa] border-l-4 border-[#f2c92f] shadow-sm">
                    <GraduationCap className="w-8 h-8 text-[#f2c92f] shrink-0" />
                    <div>
                      <h4 className="text-lg font-bold text-[#333333] mb-2">Treinamento e Capacitação</h4>
                      <p className="text-[#666666] text-sm">Investimos constantemente no desenvolvimento das habilidades técnicas e comportamentais da nossa equipa.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-6 bg-[#f8f9fa] border-l-4 border-[#007cc3] shadow-sm">
                    <Briefcase className="w-8 h-8 text-[#007cc3] shrink-0" />
                    <div>
                      <h4 className="text-lg font-bold text-[#333333] mb-2">Oportunidades de Crescimento</h4>
                      <p className="text-[#666666] text-sm">Estruturamos planos de carreira claros para quem deseja evoluir profissionalmente dentro da empresa.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-6 bg-[#f8f9fa] border-l-4 border-[#001d3d] shadow-sm">
                    <HeartHandshake className="w-8 h-8 text-[#001d3d] shrink-0" />
                    <div>
                      <h4 className="text-lg font-bold text-[#333333] mb-2">Ambiente Inclusivo</h4>
                      <p className="text-[#666666] text-sm">Promovemos uma cultura de colaboração, respeito e diversidade no local de trabalho.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vagas Section */}
        <section className="py-20 bg-[#f2f4f6]">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-[40px] font-medium text-[#333333] mb-6 leading-tight">
              Oportunidades Abertas
            </h2>
            <p className="text-[#666666] text-lg mb-12">
              Confira as nossas vagas atuais e envie o seu currículo.
            </p>

            <div className="bg-white p-12 shadow-sm border-t-4 border-[#007cc3]">
              <h3 className="text-2xl font-bold text-[#333333] mb-4">Candidatura Espontânea</h3>
              <p className="text-[#666666] mb-8">
                Não encontrou uma vaga para o seu perfil? Envie-nos o seu currículo para futuras oportunidades. Analisamos todas as candidaturas que recebemos.
              </p>
              <button className="bg-[#007cc3] hover:bg-[#005fa3] text-white font-bold py-3 px-8 transition-colors">
                Enviar Currículo
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
