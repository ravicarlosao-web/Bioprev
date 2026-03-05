import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Reviews from "@/components/home/Reviews";
import Expertise from "@/components/home/Expertise";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Reviews />
        <Expertise />
      </main>
      
      {/* Simple Footer just to complete the page structure */}
      <footer className="bg-[#222222] text-white py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <span className="font-bold text-2xl tracking-tight" data-testid="text-footer-logo">Rentokil</span>
            </div>
            <div className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Rentokil Initial plc. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
