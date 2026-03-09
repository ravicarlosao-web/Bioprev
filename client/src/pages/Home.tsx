import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Reviews from "@/components/home/Reviews";
import Expertise from "@/components/home/Expertise";
import Sectors from "@/components/home/Sectors";
import Partnerships from "@/components/home/Partnerships";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
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
