import Header from "@/components/layout/Header";
import { ChevronRight, Plus, CheckCircle2, Target, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "wouter";
import Footer from "@/components/layout/Footer";
import type { LucideIcon } from "lucide-react";

export interface SectorServiceCard {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface SectorDetailItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface SectorStep {
  title: string;
  content: string;
}

export interface SectorProcessCard {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  items: string[];
}

export interface SectorPageData {
  heroImage: string;
  heroImageAlt: string;
  breadcrumbLabel: string;
  heroTitle: string;
  heroSubtitle: string;
  introTitle: string;
  introText: string;
  introSubtext: string;
  sectionTitle: string;
  sectionText: string;
  serviceCards: [SectorServiceCard, SectorServiceCard];
  details: SectorDetailItem[];
  detailsTitle: string;
  detailsSubtitle: string;
  approachTitle: string;
  approachText: string;
  approachSteps: SectorStep[];
  whyTitle: string;
  whyText1: string;
  whyText2: string;
  processCards: [SectorProcessCard, SectorProcessCard, SectorProcessCard];
  ctaTitle: string;
}

export default function SectorPageTemplate({ data }: { data: SectorPageData }) {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Header />
      
      <main className="flex-grow">
        <section className="relative h-[350px] sm:h-[420px] md:h-[500px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src={data.heroImage}
              alt={data.heroImageAlt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          
          <div className="container mx-auto px-4 z-10">
            <div className="max-w-4xl">
              <nav className="flex items-center space-x-2 text-white/90 text-sm mb-8 font-medium">
                <Link href="/" className="hover:underline">Início</Link>
                <ChevronRight className="w-4 h-4" />
                <Link href="/sectors" className="hover:underline">Setores</Link>
                <ChevronRight className="w-4 h-4" />
                <span>{data.breadcrumbLabel}</span>
              </nav>
              
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-6 sm:mb-8 leading-tight">
                {data.heroTitle}
              </h1>
              
              <p className="text-white text-base sm:text-lg md:text-xl lg:text-[22px] max-w-3xl mb-8 sm:mb-12 leading-relaxed font-light">
                {data.heroSubtitle}
              </p>
              
              <Link href="/contact">
                <Button 
                  variant="outline" 
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#333333] px-10 py-6 text-lg font-medium transition-all duration-300 rounded-none"
                >
                  Entre em contato
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-4">
            <div className="w-12 h-8 bg-[#f2c92f] flex items-center justify-center clip-path-v">
              <ChevronRight className="w-6 h-6 text-white rotate-90" />
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <p className="text-[#333333] text-lg mb-8 leading-relaxed font-medium">
              {data.introText}
            </p>
            <p className="text-[#666666] text-base mb-16 leading-relaxed">
              {data.introSubtext}
            </p>
            
            <h2 className="text-3xl md:text-[40px] font-medium text-[#333333] mb-8 leading-tight">
              {data.sectionTitle}
            </h2>
            <p className="text-[#666666] text-base leading-relaxed">
              {data.sectionText}
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2">
          {data.serviceCards.map((card, idx) => (
            <div key={idx} className="relative h-[400px] sm:h-[500px] md:h-[600px] group overflow-hidden">
              <img 
                src={card.image}
                alt={card.imageAlt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute inset-0 flex items-center justify-center px-4">
                <div className="bg-white border-t-4 border-[#f2c92f] shadow-xl p-6 sm:p-8 md:p-10 w-full max-w-md">
                  <h3 className="text-xl sm:text-2xl md:text-[28px] font-medium text-[#333333] mb-4 sm:mb-6">{card.title}</h3>
                  <p className="text-[#666666] leading-relaxed mb-8">
                    {card.description}
                  </p>
                  <Link href="/contact">
                    <button className="text-[#007cc3] font-medium border border-[#007cc3] px-6 py-2 hover:bg-[#007cc3] hover:text-white transition-all">
                      Saiba mais
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </section>

        {data.details.length > 0 && (
          <section className="py-24 bg-[#f8f9fa]">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-[36px] font-medium text-[#333333] mb-8 leading-tight">
                  {data.detailsTitle}
                </h2>
                <p className="text-[#666666] max-w-4xl mx-auto leading-relaxed">
                  {data.detailsSubtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {data.details.map((detail, idx) => (
                  <div key={idx} className="bg-white border-t-4 border-[#f2c92f] shadow-sm p-8 flex flex-col">
                    <div className="flex items-center gap-4 mb-4">
                      <detail.icon className="w-8 h-8 text-[#007cc3] shrink-0" strokeWidth={1.5} />
                      <h3 className="text-xl font-medium text-[#333333]">{detail.title}</h3>
                    </div>
                    <p className="text-[#666666] leading-relaxed text-[15px] flex-grow">{detail.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="py-24 bg-[#f2f5f7]">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-[36px] font-medium text-[#333333] mb-8 leading-tight">
              {data.approachTitle}
            </h2>
            <p className="text-[#666666] mb-12 leading-relaxed">
              {data.approachText}
            </p>
            
            <div className="space-y-2">
              {data.approachSteps.map((step, idx) => (
                <Accordion type="single" collapsible key={idx} className="w-full">
                  <AccordionItem value={`item-${idx}`} className="border-none">
                    <AccordionTrigger className="bg-[#d0dae1] px-8 py-5 hover:bg-[#c4cfd7] transition-colors hover:no-underline rounded-none group">
                      <span className="text-[18px] font-medium text-[#333333] text-left">{step.title}</span>
                      <Plus className="w-6 h-6 text-[#333333] shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-45" />
                    </AccordionTrigger>
                    <AccordionContent className="bg-white px-8 py-6 text-left text-[#666666] leading-relaxed border-x border-b border-[#d0dae1]">
                      {step.content}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-4xl text-center mb-20">
            <h2 className="text-3xl md:text-[36px] font-medium text-[#333333] mb-8 leading-tight">
              {data.whyTitle}
            </h2>
            <div className="space-y-8 text-[#333333] text-[17px] leading-relaxed text-left">
              <p>{data.whyText1}</p>
              <p>{data.whyText2}</p>
            </div>
          </div>

          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {data.processCards.map((card, idx) => (
                <div key={idx} className="bg-white border-t-4 border-[#f2c92f] shadow-lg p-10 flex flex-col h-full">
                  <div className="mb-8 flex justify-center">
                    <card.icon className="w-12 h-12 text-[#333333]" strokeWidth={1} />
                  </div>
                  <h3 className="text-[22px] font-medium text-[#333333] mb-6 text-center">{card.title}</h3>
                  <p className="text-[#666666] text-sm mb-8 text-center leading-relaxed">
                    {card.subtitle}
                  </p>
                  <div className="space-y-2 mt-auto">
                    {card.items.map((item, i) => (
                      <div key={i} className="bg-[#f2f5f7] p-4 text-[13px] text-[#333333] leading-tight">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#007cc3] py-16 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-white text-3xl font-medium mb-8">{data.ctaTitle}</h2>
            <Link href="/contact">
              <Button 
                className="bg-white text-[#007cc3] hover:bg-white/90 px-12 py-6 text-lg font-bold rounded-none"
              >
                Contacte-nos
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
