import { Link } from "wouter";
import { ArrowRight, ChevronRight, Home } from "lucide-react";
import blogNews from "@/assets/images/blog-news.jpg";
import blogFoodSafety from "@/assets/images/blog-food-safety.jpg";
import blogIndustry from "@/assets/images/blog-industry.jpg";
import blogInnovation from "@/assets/images/blog-innovation.jpg";
import Header from "@/components/layout/Header";

export default function BlogList() {
  const blogPosts = [
    {
      id: "noticias-e-lideranca",
      title: "Notícias e liderança inovadora",
      description: "Obtenha as atualizações mais recentes da Bioprev — incluindo notícias da empresa, prêmios, entrevistas com especialistas e nossas contribuições para moldar o futuro do controle de pragas em todo o mundo.",
      image: blogNews,
      link: "/blog/noticias-e-lideranca"
    },
    {
      id: "seguranca-e-conformidade-alimentar",
      title: "Segurança e conformidade alimentar",
      description: "Mantenha-se atualizado com as mais recentes regulamentações de segurança alimentar, padrões de higiene e dicas de conformidade para empresas de processamento de alimentos, varejo e hospitalidade. Conselhos práticos e percepções do setor para ajudar a manter suas operações prontas para auditorias e livres de pragas.",
      image: blogFoodSafety,
      link: "/blog/seguranca-e-conformidade-alimentar"
    },
    {
      id: "percepcoes-da-industria",
      title: "Percepções da indústria por setor",
      description: "De hotéis a hospitais, de supermercados a farmácias - obtenha informações sobre controle de pragas adaptadas para o seu setor. Aprenda sobre os riscos, tendências e soluções específicas relevantes para o seu setor, diretamente dos especialistas em controle de pragas.",
      image: blogIndustry,
      link: "/blog/percepcoes-da-industria"
    },
    {
      id: "controle-inteligente-inovacao",
      title: "Controle de pragas inteligente e inovação",
      description: "Descubra como tecnologias de ponta, como IoT, IA e monitoramento remoto estão transformando o controle de pragas. Explore a ciência por trás de nossas soluções e as inovações que moldam o futuro do gerenciamento de pragas.",
      image: blogInnovation,
      link: "/blog/controle-inteligente-inovacao"
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Header />
      
      <main className="flex-grow">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-4 flex items-center text-sm text-[#0077c0] font-bold">
          <Link href="/" className="hover:underline flex items-center">
            Início
          </Link>
          <ChevronRight className="w-4 h-4 mx-1 text-gray-500" />
          <span className="text-gray-600 font-normal">Blog</span>
        </div>

        {/* Main Title */}
        <div className="container mx-auto px-4 py-8 mb-4">
          <h1 className="text-5xl font-extrabold text-[#e31818] text-center mb-12 tracking-tight">
            Blog
          </h1>

          {/* Grid of Blog Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {blogPosts.map((post) => (
              <Link key={post.id} href={post.link}>
                <div className="group relative overflow-hidden rounded-sm cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300 h-[380px] border-t-4 border-[#e31818] bg-gray-900">
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-50 mix-blend-overlay"
                    style={{ backgroundImage: `url(${post.image})` }}
                  />
                  
                  {/* Content */}
                  <div className="relative h-full p-8 flex flex-col justify-end z-10">
                    <h2 className="text-3xl font-bold text-white mb-4 leading-tight">
                      {post.title}
                    </h2>
                    <p className="text-white text-base leading-relaxed mb-6 line-clamp-3">
                      {post.description}
                    </p>
                    <div>
                      <span className="inline-flex items-center px-6 py-2.5 border border-white text-white font-bold text-sm hover:bg-white hover:text-gray-900 transition-colors">
                        Ler mais
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
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