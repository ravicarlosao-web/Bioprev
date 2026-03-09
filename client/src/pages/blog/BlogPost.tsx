import { Link, useParams } from "wouter";
import { ChevronRight, Globe, ShieldCheck, Bug } from "lucide-react";
import blogFruitFlies from "@/assets/images/blog-fruit-flies.jpg";
import Header from "@/components/layout/Header";

export default function BlogPost() {
  const { id } = useParams();

  // We use standard content for mockup purposes, adapting it slightly based on the ID if needed
  const title = id === 'seguranca-e-conformidade-alimentar' 
    ? "Como prevenir e eliminar moscas-da-fruta em restaurantes"
    : "Melhores Práticas de Controle de Pragas para o Seu Setor";
    
  const breadcrumbCategory = id === 'seguranca-e-conformidade-alimentar' 
    ? "Segurança alimentar"
    : "Indústria";

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative h-[400px] w-full bg-[#001d3d] overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-60"
            style={{ backgroundImage: `url(${blogFruitFlies})` }}
          />
          
          {/* Content */}
          <div className="relative z-10 h-full container mx-auto px-4 flex flex-col">
            {/* Breadcrumb */}
            <div className="py-4 flex items-center text-sm text-white font-bold mb-auto">
              <Link href="/" className="hover:underline flex items-center">
                Início
              </Link>
              <ChevronRight className="w-4 h-4 mx-1" />
              <Link href="/blog" className="hover:underline">
                Blog
              </Link>
              <ChevronRight className="w-4 h-4 mx-1" />
              <span className="hover:underline cursor-pointer">{breadcrumbCategory}</span>
              <ChevronRight className="w-4 h-4 mx-1" />
              <span className="text-gray-300 font-normal truncate max-w-xs">{title}</span>
            </div>

            {/* Title */}
            <div className="mb-16 max-w-4xl">
              <h1 className="text-5xl font-extrabold text-white leading-tight tracking-tight shadow-sm drop-shadow-md">
                {title}
              </h1>
            </div>
          </div>
          
          {/* Decorative Curve Bottom */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
            <svg className="relative block w-full h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" className="fill-white"></path>
            </svg>
            {/* Arrow pointing down */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-[#e31818]">
              <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 2L20 16L38 2" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">
            {/* Article Content */}
            <div className="lg:w-2/3">
              <div className="prose prose-lg max-w-none text-[#333333]">
                <p className="text-lg leading-relaxed mb-6 font-medium text-gray-700">
                  A mosca-da-fruta é uma praga aparentemente inofensiva que pode se multiplicar rapidamente e se tornar um problema significativo em um restaurante se as medidas adequadas não forem implementadas. Para proprietários e gerentes de restaurantes, o controle de moscas-da-fruta é um aspecto crítico da manutenção de um ambiente limpo, higiênico e acolhedor.
                </p>
                
                <p className="text-lg leading-relaxed mb-10 text-gray-700">
                  Este blog descreverá estratégias práticas e eficazes para eliminar infestações de moscas-da-fruta existentes e implementar medidas preventivas que impedem que a pequena praga se estabeleça em um restaurante.
                </p>

                <h2 className="text-3xl font-bold text-[#001d3d] mb-6 tracking-tight">
                  Estratégia abrangente: manejo integrado de pragas (MIP)
                </h2>
                
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  O Manejo Integrado de Pragas (MIP) é uma abordagem sustentável e científica para gerenciar pragas. Em vez de simplesmente aplicar pesticidas de forma reativa, o MIP foca na prevenção a longo prazo de pragas e seus danos através de uma combinação de técnicas como controle biológico, manipulação de habitat, modificação de práticas culturais e uso de variedades resistentes.
                </p>

                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Num ambiente de restaurante, o MIP é crucial porque a presença de alimentos limita severamente as opções químicas de controle de pragas devido aos regulamentos de segurança e riscos de contaminação. Portanto, estratégias não químicas devem ser a primeira linha de defesa.
                </p>

                <h3 className="text-2xl font-bold text-[#001d3d] mb-4 mt-8 tracking-tight">
                  1. Inspeção e Identificação
                </h3>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  O primeiro passo no MIP é sempre entender com o que você está lidando. As moscas-da-fruta são frequentemente confundidas com moscas de drenagem ou mosquitos de fungos, e os tratamentos variam significativamente entre eles. As moscas-da-fruta são pequenas (cerca de 3 mm), tipicamente com olhos vermelhos brilhantes e coloração marrom. Elas são atraídas por frutas e vegetais maduros, podres ou em decomposição, bem como por líquidos fermentados como cerveja, vinho, licor e vinagre.
                </p>

                <h3 className="text-2xl font-bold text-[#001d3d] mb-4 mt-8 tracking-tight">
                  2. Saneamento rigoroso
                </h3>
                <ul className="list-disc pl-6 mb-8 text-lg text-gray-700 space-y-2">
                  <li>Limpe os drenos de forma consistente. O material orgânico em decomposição nas linhas de drenagem é um terreno de reprodução privilegiado.</li>
                  <li>Esvazie o lixo regularmente e limpe as lixeiras. Resíduos derramados e forros vazando criam microambientes perfeitos para reprodução.</li>
                  <li>Limpe derramamentos imediatamente, especialmente de xaropes e bebidas alcoólicas, focando debaixo de bancadas, eletrodomésticos e equipamentos.</li>
                  <li>Rode o estoque e descarte produtos muito maduros. Inspecione entregas frescas antes de trazê-las.</li>
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              {/* Promo Card */}
              <div className="bg-gray-50 border-t-4 border-[#e31818] p-8 shadow-sm text-center">
                <h3 className="text-2xl font-bold text-[#333333] mb-4 leading-tight">
                  Controle de pragas para o setor de hospitalidade
                </h3>
                <p className="text-gray-600 mb-8">
                  Mantendo hotéis e restaurantes seguros contra infestações dispendiosas de pragas
                </p>
                
                <div className="flex justify-center items-center gap-6 mb-8">
                  <Globe className="w-10 h-10 text-[#001d3d]" strokeWidth={1.5} />
                  <Bug className="w-10 h-10 text-[#001d3d]" strokeWidth={1.5} />
                  <ShieldCheck className="w-10 h-10 text-[#001d3d]" strokeWidth={1.5} />
                </div>
                
                <button className="w-full bg-[#0077c0] hover:bg-[#005fa3] text-white font-bold py-3 px-6 transition-colors shadow-sm">
                  Descubra mais
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Professional Footer */}
      <footer className="bg-white border-t-8 border-[#e31837] pt-16 pb-8 mt-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="space-y-3">
              <a href="#" className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium">Locais</a>
              <a href="#" className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium">Pesquisar</a>
              <a href="#" className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium">Contato</a>
            </div>
            <div className="space-y-3">
              <Link href="/"><span className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium cursor-pointer">Início</span></Link>
              <Link href="/services"><span className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium cursor-pointer">Serviços</span></Link>
              <a href="#" className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium">Contas nacionais</a>
              <a href="#" className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium">Setores de negócios</a>
              <a href="#" className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium">Sobre</a>
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