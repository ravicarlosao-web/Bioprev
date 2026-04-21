import { Link } from "wouter";
import { ArrowRight, ChevronRight, Home, Mail, CheckCircle2, Loader2 } from "lucide-react";
import blogNews from "@/assets/images/blog-news.jpg";
import blogFoodSafety from "@/assets/images/blog-food-safety.jpg";
import blogIndustry from "@/assets/images/blog-industry.jpg";
import blogInnovation from "@/assets/images/blog-innovation.jpg";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead, { breadcrumbSchema } from "@/components/SEOHead";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

type BlogPageVariant = "all" | "news" | "tips";

const blogPosts = [
  {
    id: "noticias-e-lideranca",
    title: "Notícias e liderança inovadora",
    description: "Obtenha as atualizações mais recentes da Bioprev — incluindo notícias da empresa, prêmios, entrevistas com especialistas e as nossas contribuições para elevar os padrões de controle de pragas em Angola.",
    image: blogNews,
    link: "/blog/noticias-e-lideranca",
    category: "news"
  },
  {
    id: "seguranca-e-conformidade-alimentar",
    title: "Segurança e conformidade alimentar",
    description: "Mantenha-se atualizado com as mais recentes regulamentações de segurança alimentar, padrões de higiene e dicas de conformidade para empresas de processamento de alimentos, varejo e hospitalidade. Conselhos práticos e percepções do setor para ajudar a manter suas operações prontas para auditorias e livres de pragas.",
    image: blogFoodSafety,
    link: "/blog/seguranca-e-conformidade-alimentar",
    category: "tips"
  },
  {
    id: "percepcoes-da-industria",
    title: "Percepções da indústria por setor",
    description: "De hotéis a hospitais, de supermercados a farmácias - obtenha informações sobre controle de pragas adaptadas para o seu setor. Aprenda sobre os riscos, tendências e soluções específicas relevantes para o seu setor, diretamente dos especialistas em controle de pragas.",
    image: blogIndustry,
    link: "/blog/percepcoes-da-industria",
    category: "tips"
  },
  {
    id: "controle-inteligente-inovacao",
    title: "Controle de pragas inteligente e inovação",
    description: "Descubra como tecnologias de ponta, como IoT, IA e monitoramento remoto estão transformando o controle de pragas. Explore a ciência por trás de nossas soluções e as inovações que moldam o futuro do gerenciamento de pragas.",
    image: blogInnovation,
    link: "/blog/controle-inteligente-inovacao",
    category: "news"
  }
];

function BlogListPage({ variant = "all" }: { variant?: BlogPageVariant }) {
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const newsletterMutation = useMutation({
    mutationFn: async (emailValue: string) => {
      const res = await apiRequest("POST", "/api/newsletter", { email: emailValue });
      return res.json();
    },
    onSuccess: (data) => {
      setSuccessMessage(data.message);
      setEmail("");
    },
  });

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSuccessMessage("");
    newsletterMutation.mutate(email.trim());
  };

  const pageTitle = variant === "news" ? "Últimas notícias" : variant === "tips" ? "Dicas de prevenção" : "Blog";
  const pageDescription = variant === "news"
    ? "Últimas notícias da Bioprev Angola — novidades, inovação e atualizações sobre controle de pragas, higiene e serviços profissionais."
    : variant === "tips"
      ? "Dicas de prevenção da Bioprev Angola — orientações práticas para evitar pragas, proteger espaços e manter ambientes seguros."
      : "Blog Bioprev Angola — artigos, notícias e dicas sobre controle de pragas, segurança alimentar, higiene e boas práticas para empresas e residências em Angola.";
  const canonical = variant === "news" ? "/blog/ultimas-noticias" : variant === "tips" ? "/blog/dicas-prevencao" : "/blog";
  const visiblePosts = variant === "all" ? blogPosts : blogPosts.filter((post) => post.category === variant);

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <SEOHead
        title={pageTitle}
        description={pageDescription}
        canonical={canonical}
        keywords="blog controle pragas Angola, artigos desinfestação, dicas pragas, segurança alimentar Angola, notícias Bioprev"
        type="blog"
        structuredData={breadcrumbSchema([
          { name: "Início", url: "/" },
          { name: "Blog", url: "/blog" },
          ...(variant === "all" ? [] : [{ name: pageTitle, url: canonical }]),
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
          {variant !== "all" && (
            <>
              <ChevronRight className="w-4 h-4 mx-1 text-gray-500" />
              <span className="text-gray-600 font-normal">{pageTitle}</span>
            </>
          )}
        </div>

        {/* Main Title */}
        <div className="container mx-auto px-4 py-8 mb-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#f2c92f] text-center mb-8 sm:mb-12 tracking-tight">
            {pageTitle}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {visiblePosts.map((post) => (
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

        <section className="py-14 sm:py-18 md:py-24 bg-[#001d3d]">
          <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center">
            <div className="flex justify-center mb-6">
              <div className="w-14 h-14 rounded-full bg-[#f2c92f]/20 flex items-center justify-center">
                <Mail className="w-7 h-7 text-[#f2c92f]" />
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-[36px] font-medium text-white mb-4 leading-tight">
              Subscreva a nossa newsletter
            </h2>
            <p className="text-white/70 text-sm sm:text-base mb-8 sm:mb-10 leading-relaxed max-w-xl mx-auto">
              Receba os nossos artigos, dicas e novidades sobre controle de pragas, higiene e segurança alimentar diretamente no seu email.
            </p>

            {successMessage ? (
              <div className="flex items-center justify-center gap-3 bg-green-500/20 border border-green-500/30 rounded-sm px-6 py-4 max-w-md mx-auto" data-testid="text-newsletter-success">
                <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
                <p className="text-green-300 text-sm sm:text-base">{successMessage}</p>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Insira o seu email"
                  required
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm sm:text-base focus:outline-none focus:border-[#f2c92f] transition-colors"
                  data-testid="input-newsletter-email"
                />
                <button
                  type="submit"
                  disabled={newsletterMutation.isPending}
                  className="px-6 sm:px-8 py-3 bg-[#f2c92f] text-[#001d3d] font-bold text-sm sm:text-base hover:bg-[#f2c92f]/90 transition-colors disabled:opacity-60 flex items-center justify-center gap-2 shrink-0"
                  data-testid="button-newsletter-submit"
                >
                  {newsletterMutation.isPending ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      A subscrever...
                    </>
                  ) : (
                    "Subscrever"
                  )}
                </button>
              </form>
            )}

            {newsletterMutation.isError && (
              <p className="text-red-400 text-sm mt-4" data-testid="text-newsletter-error">
                {(newsletterMutation.error as any)?.message || "Erro ao processar. Tente novamente."}
              </p>
            )}

            <p className="text-white/40 text-xs mt-6">
              Ao subscrever, concorda em receber comunicações da Bioprev. Pode cancelar a qualquer momento.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default function BlogList() {
  return <BlogListPage />;
}

export function BlogLatestNews() {
  return <BlogListPage variant="news" />;
}

export function BlogPreventionTips() {
  return <BlogListPage variant="tips" />;
}