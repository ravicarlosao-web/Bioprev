import Header from "@/components/layout/Header";
import { ChevronRight, Plus } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "wouter";
import Footer from "@/components/layout/Footer";
import type { LucideIcon } from "lucide-react";

export interface ServiceCard {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface ServiceDetailItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ServiceStep {
  title: string;
  content: string;
}

export interface ServiceProcessCard {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  items: string[];
}

export interface ServicePageData {
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
  serviceCards: [ServiceCard, ServiceCard];
  details: ServiceDetailItem[];
  detailsTitle: string;
  detailsSubtitle: string;
  approachTitle: string;
  approachText: string;
  approachSteps: ServiceStep[];
  whyTitle: string;
  whyText1: string;
  whyText2: string;
  processCards: [ServiceProcessCard, ServiceProcessCard, ServiceProcessCard];
  ctaTitle: string;
}

export default function ServicePageTemplate({ data }: { data: ServicePageData }) {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Header />

      <main className="flex-grow">
        <section className="relative h-[300px] sm:h-[380px] md:h-[460px] lg:h-[500px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={data.heroImage}
              alt={data.heroImageAlt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 z-10">
            <div className="max-w-3xl">
              <nav className="flex items-center flex-wrap gap-1 text-white/90 text-xs sm:text-sm mb-4 sm:mb-6 md:mb-8 font-medium">
                <Link href="/" className="hover:underline">Início</Link>
                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                <Link href="/services" className="hover:underline">Serviços</Link>
                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>{data.breadcrumbLabel}</span>
              </nav>

              <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-3 sm:mb-5 md:mb-6 leading-tight">
                {data.heroTitle}
              </h1>

              <p className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mb-5 sm:mb-8 md:mb-10 leading-relaxed font-light">
                {data.heroSubtitle}
              </p>

              <Link href="/contact"
                className="inline-block border-2 border-white text-white hover:bg-white hover:text-[#333333] px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 text-sm sm:text-base md:text-lg font-medium transition-all duration-300"
              >
                Entre em contato
              </Link>
            </div>
          </div>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-3 sm:mb-4">
            <div className="w-10 h-7 sm:w-12 sm:h-8 bg-[#f2c92f] flex items-center justify-center clip-path-v">
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white rotate-90" />
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center">
            <p className="text-[#333333] text-base sm:text-lg mb-5 sm:mb-8 leading-relaxed font-medium">
              {data.introText}
            </p>
            <p className="text-[#666666] text-sm sm:text-base mb-10 sm:mb-16 leading-relaxed">
              {data.introSubtext}
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-[36px] font-medium text-[#333333] mb-5 sm:mb-8 leading-tight">
              {data.sectionTitle}
            </h2>
            <p className="text-[#666666] text-sm sm:text-base leading-relaxed">
              {data.sectionText}
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2">
          {data.serviceCards.map((card, idx) => (
            <div key={idx} className="relative h-[350px] sm:h-[420px] md:h-[500px] lg:h-[600px] group overflow-hidden">
              <img
                src={card.image}
                alt={card.imageAlt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className={`absolute inset-0 ${idx === 0 ? 'bg-black/20' : 'bg-black/30'}`} />
              <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6">
                <div className="bg-white border-t-4 border-[#f2c92f] shadow-xl p-5 sm:p-7 md:p-8 lg:p-10 w-full max-w-sm sm:max-w-md">
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[28px] font-medium text-[#333333] mb-3 sm:mb-5">{card.title}</h3>
                  <p className="text-[#666666] text-sm sm:text-base leading-relaxed mb-5 sm:mb-8">
                    {card.description}
                  </p>
                  <Link href="/contact"
                    className="inline-block text-[#007cc3] font-medium border border-[#007cc3] px-4 sm:px-6 py-2 text-sm sm:text-base hover:bg-[#007cc3] hover:text-white transition-all"
                  >
                    Saiba mais
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </section>

        {data.details.length > 0 && (
          <section className="py-14 sm:py-18 md:py-24 bg-[#f8f9fa]">
            <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
              <div className="text-center mb-10 sm:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-[36px] font-medium text-[#333333] mb-5 sm:mb-8 leading-tight">
                  {data.detailsTitle}
                </h2>
                <p className="text-[#666666] text-sm sm:text-base max-w-4xl mx-auto leading-relaxed">
                  {data.detailsSubtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                {data.details.map((detail, idx) => (
                  <div key={idx} className="bg-white border-t-4 border-[#f2c92f] shadow-sm p-5 sm:p-6 md:p-8 flex flex-col">
                    <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                      <detail.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#007cc3] shrink-0" strokeWidth={1.5} />
                      <h3 className="text-base sm:text-lg md:text-xl font-medium text-[#333333]">{detail.title}</h3>
                    </div>
                    <p className="text-[#666666] leading-relaxed text-sm sm:text-[15px] flex-grow">{detail.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="py-14 sm:py-18 md:py-24 bg-[#f2f5f7]">
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center">
            <h2 className="text-2xl sm:text-3xl md:text-[36px] font-medium text-[#333333] mb-5 sm:mb-8 leading-tight">
              {data.approachTitle}
            </h2>
            <p className="text-[#666666] text-sm sm:text-base mb-8 sm:mb-12 leading-relaxed">
              {data.approachText}
            </p>

            <div className="space-y-2">
              {data.approachSteps.map((step, idx) => (
                <Accordion type="single" collapsible key={idx} className="w-full">
                  <AccordionItem value={`item-${idx}`} className="border-none">
                    <AccordionTrigger className="bg-[#d0dae1] px-4 sm:px-6 md:px-8 py-4 sm:py-5 hover:bg-[#c4cfd7] transition-colors hover:no-underline rounded-none group">
                      <span className="text-[15px] sm:text-[17px] md:text-[18px] font-medium text-[#333333] text-left">{step.title}</span>
                      <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-[#333333] shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-45" />
                    </AccordionTrigger>
                    <AccordionContent className="bg-white px-4 sm:px-6 md:px-8 py-4 sm:py-6 text-left text-[#666666] text-sm sm:text-base leading-relaxed border-x border-b border-[#d0dae1]">
                      {step.content}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-18 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center mb-10 sm:mb-16 md:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-[36px] font-medium text-[#333333] mb-5 sm:mb-8 leading-tight">
              {data.whyTitle}
            </h2>
            <div className="space-y-5 sm:space-y-8 text-[#333333] text-[15px] sm:text-[17px] leading-relaxed text-left">
              <p>{data.whyText1}</p>
              <p>{data.whyText2}</p>
            </div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
              {data.processCards.map((card, idx) => (
                <div key={idx} className={`bg-white border-t-4 border-[#f2c92f] shadow-lg p-6 sm:p-8 md:p-10 flex flex-col h-full ${idx === 2 ? 'sm:col-span-2 md:col-span-1' : ''}`}>
                  <div className="mb-5 sm:mb-8 flex justify-center">
                    <card.icon className="w-10 h-10 sm:w-12 sm:h-12 text-[#333333]" strokeWidth={1} />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-[22px] font-medium text-[#333333] mb-4 sm:mb-6 text-center">{card.title}</h3>
                  <p className="text-[#666666] text-xs sm:text-sm mb-5 sm:mb-8 text-center leading-relaxed">
                    {card.subtitle}
                  </p>
                  <div className="space-y-2 mt-auto">
                    {card.items.map((item, i) => (
                      <div key={i} className="bg-[#f2f5f7] p-3 sm:p-4 text-[12px] sm:text-[13px] text-[#333333] leading-tight">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#007cc3] py-10 sm:py-14 md:py-16 text-center">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-medium mb-5 sm:mb-8">{data.ctaTitle}</h2>
            <Link href="/contact"
              className="inline-block bg-white text-[#007cc3] hover:bg-white/90 px-8 sm:px-10 md:px-12 py-2.5 sm:py-3 text-sm sm:text-base md:text-lg font-bold transition-colors"
            >
              Contacte-nos
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
