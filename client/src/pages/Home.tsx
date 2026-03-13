import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Reviews from "@/components/home/Reviews";
import Expertise from "@/components/home/Expertise";
import Sectors from "@/components/home/Sectors";
import Partnerships from "@/components/home/Partnerships";
import Footer from "@/components/layout/Footer";
import SEOHead, { organizationSchema, websiteSchema, localBusinessSchema } from "@/components/SEOHead";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <SEOHead
        title="Início"
        description="Bioprev Angola — empresa líder em controle de pragas, desinfestação, fumigação, limpeza profissional, recolha de resíduos, tratamento de água e jardinagem. Presente em Luanda, Benguela e Huambo."
        canonical="/"
        keywords="controle de pragas Angola, desinfestação Luanda, fumigação Angola, limpeza profissional Angola, Bioprev Angola, recolha resíduos Angola, tratamento água Angola, jardinagem Angola"
        structuredData={[organizationSchema, websiteSchema, localBusinessSchema]}
      />
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Reviews />
        <Expertise />
        <Sectors />
        <Partnerships />
      </main>
      
      <Footer />
    </div>
  );
}
