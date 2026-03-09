import { ChevronRight, Clock, Award, Users } from "lucide-react";
import Header from "@/components/layout/Header";
import { Link } from "wouter";

export default function History() {
  const timeline = [
    { year: "2010", title: "Fundação", desc: "A BIOPREV foi estabelecida com a missão de elevar os padrões de controle de pragas em Angola." },
    { year: "2014", title: "Expansão de Serviços", desc: "Início das operações de limpeza industrial e empresarial." },
    { year: "2018", title: "Tecnologia e Inovação", desc: "Introdução de novos equipamentos e metodologias modernas e mais sustentáveis." },
    { year: "2023", title: "Liderança Nacional", desc: "Consolidação como uma das principais referências no mercado nacional." }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Header />
      
      <div className="pt-[140px] md:pt-[111.5px]"></div>
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[500px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/src/assets/images/history-hero.jpg" 
              alt="Nossa História - BIOPREV" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#001d3d]/80" />
          </div>
          
          <div className="container mx-auto px-4 z-10">
            <div className="max-w-4xl">
              <nav className="flex items-center space-x-2 text-white/90 text-sm mb-8 font-medium">
                <Link href="/" className="hover:underline">Início</Link>
                <ChevronRight className="w-4 h-4" />
                <span>Sobre</span>
                <ChevronRight className="w-4 h-4" />
                <span>Nossa história</span>
              </nav>
              
              <h1 className="text-white text-5xl md:text-6xl font-medium mb-8 leading-tight">
                Nossa história
              </h1>
              
              <p className="text-white text-xl md:text-[22px] max-w-3xl leading-relaxed font-light">
                Uma jornada de compromisso, excelência e evolução contínua para proteger a saúde e o bem-estar em Angola.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl text-center mb-16">
            <h2 className="text-3xl md:text-[40px] font-medium text-[#333333] mb-8 leading-tight">
              Construindo um legado de proteção
            </h2>
            <p className="text-[#666666] text-lg leading-relaxed">
              Ao longo dos anos, a BIOPREV tem sido sinónimo de fiabilidade e qualidade. Crescemos através do nosso compromisso inabalável com a excelência técnica, o atendimento ao cliente e a responsabilidade ambiental, sempre focados em adaptar os nossos serviços aos desafios e necessidades específicos do mercado nacional.
            </p>
          </div>

          <div className="container mx-auto px-4 max-w-5xl">
            {/* Timeline */}
            <div className="relative border-l-4 border-[#007cc3] ml-4 md:ml-1/2 py-8 space-y-12">
              {timeline.map((item, idx) => (
                <div key={idx} className="relative pl-8 md:pl-0">
                  {/* Timeline Dot */}
                  <div className="absolute left-[-14px] md:left-1/2 md:-ml-[10px] top-1 w-6 h-6 rounded-full bg-[#e31837] border-4 border-white shadow"></div>
                  
                  <div className={`md:w-[45%] ${idx % 2 === 0 ? 'md:ml-auto md:pl-12' : 'md:mr-auto md:pr-12 md:text-right'}`}>
                    <span className="text-[#007cc3] font-extrabold text-2xl mb-2 block">{item.year}</span>
                    <h3 className="text-2xl font-bold text-[#333333] mb-3">{item.title}</h3>
                    <p className="text-[#666666] text-lg leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pillars */}
        <section className="py-20 bg-[#f8f9fa] border-t border-gray-200">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center p-8 bg-white shadow-sm hover:shadow-md transition-shadow">
                <Award className="w-16 h-16 text-[#e31837] mx-auto mb-6" strokeWidth={1} />
                <h3 className="text-xl font-bold text-[#333333] mb-4">Excelência Comprovada</h3>
                <p className="text-[#666666]">Anos de experiência garantindo as melhores soluções para cada cliente.</p>
              </div>
              <div className="text-center p-8 bg-white shadow-sm hover:shadow-md transition-shadow">
                <Users className="w-16 h-16 text-[#007cc3] mx-auto mb-6" strokeWidth={1} />
                <h3 className="text-xl font-bold text-[#333333] mb-4">Foco no Cliente</h3>
                <p className="text-[#666666]">Relações duradouras construídas com base na confiança e no resultado.</p>
              </div>
              <div className="text-center p-8 bg-white shadow-sm hover:shadow-md transition-shadow">
                <Clock className="w-16 h-16 text-[#001d3d] mx-auto mb-6" strokeWidth={1} />
                <h3 className="text-xl font-bold text-[#333333] mb-4">Evolução Contínua</h3>
                <p className="text-[#666666]">Sempre um passo à frente com as mais recentes inovações do setor.</p>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-white border-t-8 border-[#e31837] pt-16 pb-8">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="space-y-3">
              <a href="#" className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium">Locais</a>
              <a href="#" className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium">Pesquisar</a>
              <a href="/contact" className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium">Contato</a>
            </div>
            <div className="space-y-3">
              <Link href="/"><span className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium cursor-pointer">Início</span></Link>
              <Link href="/services"><span className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium cursor-pointer">Serviços</span></Link>
              <a href="#" className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium">Contas nacionais</a>
              <a href="#" className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium">Setores empresariais</a>
              <Link href="/about"><span className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium cursor-pointer">Sobre</span></Link>
              <Link href="/blog"><span className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium cursor-pointer">Blog</span></Link>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold text-[#333333] mb-4">Perguntas Frequentes</h3>
              <a href="#" className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium">Privacidade e Termos</a>
              <a href="#" className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium">Termos e Condições do Site</a>
              <a href="#" className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium">Preferências de Cookies</a>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#666666] text-xs">© 2024 Bioprev. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
