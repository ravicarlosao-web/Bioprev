import { Link } from "wouter";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/SEOHead";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <SEOHead
        title="Página Não Encontrada"
        description="A página que procura não foi encontrada. Volte à página inicial da Bioprev Angola."
        noindex={true}
      />
      <Header />
      <main className="flex-grow flex items-center justify-center bg-[#f8f9fa]">
        <div className="text-center px-4 py-16">
          <h1 className="text-6xl font-bold text-[#001d3d] mb-4" data-testid="text-404">404</h1>
          <p className="text-xl text-gray-600 mb-8" data-testid="text-not-found">A página que procura não foi encontrada.</p>
          <Link
            href="/"
            className="inline-block bg-[#007cc3] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#005f99] transition-colors"
            data-testid="link-home-404"
          >
            Voltar ao início
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
