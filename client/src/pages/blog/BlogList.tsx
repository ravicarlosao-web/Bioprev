import { Link } from "wouter";
import { ArrowRight, ChevronRight, Home } from "lucide-react";
import blogNews from "@/assets/images/blog-news.jpg";
import blogFoodSafety from "@/assets/images/blog-food-safety.jpg";
import blogIndustry from "@/assets/images/blog-industry.jpg";
import blogInnovation from "@/assets/images/blog-innovation.jpg";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead, { breadcrumbSchema } from "@/components/SEOHead";

export default function BlogList() {
  const blogPosts = [
    {
      id: "noticias-e-lideranca",
      title: "Notícias e liderança inovadora",
      description: "Obtenha as atualizações mais recentes da Bioprev — incluindo notícias da empresa, prêmios, entrevistas com especialistas e as nossas contribuições para elevar os padrões de controle de pragas em Angola.",
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
      <SEOHead
        title="Blog"
        description="Blog Bioprev Angola — artigos, notícias e dicas sobre controle de pragas, segurança alimentar, higiene e boas práticas para empresas e residências em Angola."
        canonical="/blog"
        keywords="blog controle pragas Angola, artigos desinfestação, dicas pragas, segurança alimentar Angola, notícias Bioprev"
        type="blog"
        structuredData={breadcrumbSchema([
          { name: "Início", url: "/" },
          { name: "Blog", url: "/blog" },
        ])}
      />
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#f2c92f] text-center mb-8 sm:mb-12 tracking-tight">
            Blog
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {blogPosts.map((post) => (
              <Link key={post.id} href={post.link}>
                <div className="group relative overflow-hidden rounded-sm cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300 h-[300px] sm:h-[340px] md:h-[380px] border-t-4 border-[#f2c92f] bg-gray-900">
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

      <Footer />
    </div>
  );
}