import Header from "@/components/layout/Header";
import { ChevronRight, Plus, CheckCircle2, Target, Search, ShieldCheck, Zap, Shield, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Disinfestation() {
  const sectors = [
    { name: "Food processing", icon: "https://www.rentokil.com/assets/images/icons/sector-food-processing.png" },
    { name: "Food retail", icon: "https://www.rentokil.com/assets/images/icons/sector-food-retail.png" },
    { name: "Logistics & warehousing", icon: "https://www.rentokil.com/assets/images/icons/sector-logistics.png" },
    { name: "Facilities management", icon: "https://www.rentokil.com/assets/images/icons/sector-facilities.png" },
    { name: "Hotels", icon: "https://www.rentokil.com/assets/images/icons/sector-hotels.png" },
  ];

  const disinfectionStages = [
    "Survey and risk assessment",
    "Preparation and safety protocols",
    "Disinfection treatment implementation",
    "Post-treatment verification",
    "Certification and reporting"
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[500px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&q=80&w=2000" 
              alt="Disinfestation service" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          
          <div className="container mx-auto px-4 z-10">
            <div className="max-w-4xl">
              <nav className="flex items-center space-x-2 text-white/90 text-sm mb-8 font-medium">
                <a href="/" className="hover:underline">Home</a>
                <ChevronRight className="w-4 h-4" />
                <a href="/services" className="hover:underline">Services</a>
                <ChevronRight className="w-4 h-4" />
                <span>Disinfection</span>
              </nav>
              
              <h1 className="text-white text-5xl md:text-6xl font-medium mb-8 leading-tight">
                Professional disinfection<br />services and solutions
              </h1>
              
              <p className="text-white text-xl md:text-[22px] max-w-3xl mb-12 leading-relaxed font-light">
                As the global leader in hygiene solutions, Rentokil brings expert, reliable and professional disinfection services to commercial customers all over the world.
              </p>
              
              <Button 
                variant="outline" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#333333] px-10 py-6 text-lg font-medium transition-all duration-300 rounded-none"
                data-testid="button-get-in-touch"
              >
                Get in touch
              </Button>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-4">
            <div className="w-12 h-8 bg-[#e31837] flex items-center justify-center clip-path-v">
              <ChevronRight className="w-6 h-6 text-white rotate-90" />
            </div>
          </div>
        </section>

        {/* Intro Text */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <p className="text-[#333333] text-lg mb-8 leading-relaxed font-medium">
              Rentokil has been protecting people, homes, and businesses from the dangers of poor hygiene and infectious diseases for 100 years.
            </p>
            <p className="text-[#666666] text-base mb-16 leading-relaxed">
              We believe that innovation is a key factor to success. Our <span className="text-[#007cc3] cursor-pointer hover:underline">global research and development centre</span> provides our front-line colleagues with the tools and solutions they need to deliver <span className="text-[#007cc3] cursor-pointer hover:underline">differentiated disinfection services</span>. Rentokil is committed to <span className="text-[#007cc3] cursor-pointer hover:underline">sustainability</span> and exploring the use of greener, non-toxic solutions, while continuing to offer our customers the high levels of protection their businesses need.
            </p>
            
            <h2 className="text-3xl md:text-[40px] font-medium text-[#333333] mb-8 leading-tight">
              Specialized commercial disinfection services
            </h2>
            <p className="text-[#666666] text-base leading-relaxed">
              Rentokil is dedicated to keeping your staff, customers, and brand reputation protected with industry-leading <span className="text-[#007cc3] cursor-pointer hover:underline">disinfection services</span> that are tailored to your business and fully support regulatory compliance. With hygiene remaining a priority, our expert teams can help safeguard your business for the future.
            </p>
          </div>
        </section>

        {/* Service Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2">
          {/* Card 1 */}
          <div className="relative h-[600px] group overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000" 
              alt="Specialist Disinfection" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md px-4">
              <div className="bg-white border-t-4 border-[#e31837] shadow-xl p-10">
                <h3 className="text-2xl md:text-[28px] font-medium text-[#333333] mb-6">Specialist disinfection</h3>
                <p className="text-[#666666] leading-relaxed mb-8">
                  Our specialist disinfection services provide a rapid response to help you maintain a high level of hygiene in your premises, reducing the risk of infection.
                </p>
                <button className="text-[#007cc3] font-medium border border-[#007cc3] px-6 py-2 hover:bg-[#007cc3] hover:text-white transition-all">
                  Find out more
                </button>
              </div>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="relative h-[600px] group overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000" 
              alt="Precautionary Disinfection" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md px-4">
              <div className="bg-white border-t-4 border-[#e31837] shadow-xl p-10">
                <h3 className="text-2xl md:text-[28px] font-medium text-[#333333] mb-6">Precautionary disinfection</h3>
                <p className="text-[#666666] leading-relaxed mb-8">
                  A range of preventative disinfection solutions designed to help businesses maintain a safe environment and provide peace of mind to staff and visitors.
                </p>
                <button className="text-[#007cc3] font-medium border border-[#007cc3] px-6 py-2 hover:bg-[#007cc3] hover:text-white transition-all">
                  Find out more
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Sectors */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-6xl text-center">
            <h2 className="text-3xl md:text-[36px] font-medium text-[#333333] mb-8 leading-tight">
              Industry experience and sector expertise
            </h2>
            <p className="text-[#666666] max-w-4xl mx-auto mb-16 leading-relaxed">
              Rentokil offers integrated hygiene and disinfection programmes tailored to individual client needs, fully supporting regulatory requirements. Our 100-year history gives us the knowledge to identify and anticipate <span className="text-[#007cc3] cursor-pointer hover:underline">hygiene</span> threats to your business.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {sectors.map((sector, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-6 flex flex-col items-center justify-center hover:shadow-md transition-shadow cursor-pointer group">
                  <div className="w-16 h-16 mb-4 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all">
                    <img src={sector.icon} alt={sector.name} className="max-w-full max-h-full" />
                  </div>
                  <span className="text-[13px] font-bold text-[#007cc3] text-center leading-tight">{sector.name}</span>
                </div>
              ))}
              <div className="bg-[#1a2b3c] p-6 flex flex-col items-center justify-center cursor-pointer group">
                <Plus className="w-10 h-10 text-white mb-4 transition-transform group-hover:scale-110" strokeWidth={1} />
                <span className="text-[13px] font-bold text-white text-center">Show all sectors</span>
              </div>
            </div>
          </div>
        </section>

        {/* Disinfection Stages */}
        <section className="py-24 bg-[#f2f5f7]">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-[36px] font-medium text-[#333333] mb-8 leading-tight">
              Our disinfection process
            </h2>
            <p className="text-[#666666] mb-12 leading-relaxed">
              Rentokil follows a rigorous approach to professional disinfection, ensuring every stage is handled with the highest safety and quality standards.
            </p>
            
            <div className="space-y-2">
              {disinfectionStages.map((step, idx) => (
                <Accordion type="single" collapsible key={idx} className="w-full">
                  <AccordionItem value={`item-${idx}`} className="border-none">
                    <AccordionTrigger className="bg-[#d0dae1] px-8 py-5 hover:bg-[#c4cfd7] transition-colors hover:no-underline rounded-none group flex justify-between items-center">
                      <span className="text-[18px] font-medium text-[#333333] text-left">{step}</span>
                      <Plus className="w-6 h-6 text-[#333333] shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-45" />
                    </AccordionTrigger>
                    <AccordionContent className="bg-white px-8 py-6 text-left text-[#666666] leading-relaxed border-x border-b border-[#d0dae1]">
                      Detailed information about {step} would go here, explaining the specific protocols and safety measures taken during this phase of the disinfection service.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-4xl text-center mb-20">
            <h2 className="text-3xl md:text-[36px] font-medium text-[#333333] mb-8 leading-tight">
              How does Rentokil work?
            </h2>
            <div className="space-y-8 text-[#333333] text-[17px] leading-relaxed text-left">
              <p>
                At Rentokil, our disinfection experts are dedicated to identifying the safest and most effective solutions to protect your home and business. Understanding that every situation is unique, we emphasise the necessity of a thorough inspection before each treatment. This approach allows us to tailor our methods specifically to your needs, ensuring the most efficient and effective sanitization.
              </p>
              <p>
                Choose Rentokil for a hassle-free experience, environmentally-sensitive solutions, and a commitment to the highest standards of service and safety.
              </p>
            </div>
          </div>

          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="bg-white border-t-4 border-[#e31837] shadow-lg p-10 flex flex-col h-full">
                <div className="mb-8 flex justify-center">
                  <Search className="w-12 h-12 text-[#333333]" strokeWidth={1} />
                </div>
                <h3 className="text-[22px] font-medium text-[#333333] mb-6 text-center">1. Hygiene risk assessment</h3>
                <p className="text-[#666666] text-sm mb-8 text-center leading-relaxed">
                  Hassle-free survey and consultation
                </p>
                <div className="space-y-2 mt-auto">
                  {["Scheduled inspection at a time of your convenience", "On-site hygiene risk review and consultancy", "No-obligation quote and recommendations"].map((item, i) => (
                    <div key={i} className="bg-[#f2f5f7] p-4 text-[13px] text-[#333333] leading-tight">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white border-t-4 border-[#e31837] shadow-lg p-10 flex flex-col h-full">
                <div className="mb-8 flex justify-center">
                  <Target className="w-12 h-12 text-[#333333]" strokeWidth={1} />
                </div>
                <h3 className="text-[22px] font-medium text-[#333333] mb-6 text-center">2. Disinfection treatment</h3>
                <p className="text-[#666666] text-sm mb-8 text-center leading-relaxed">
                  Comprehensive treatment programme tailored to your needs
                </p>
                <div className="space-y-2 mt-auto">
                  {["Certified, local disinfection experts", "Advanced ULV fogging and surface treatments", "Industry-specific safety standards ensure compliance"].map((item, i) => (
                    <div key={i} className="bg-[#f2f5f7] p-4 text-[13px] text-[#333333] leading-tight">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white border-t-4 border-[#e31837] shadow-lg p-10 flex flex-col h-full">
                <div className="mb-8 flex justify-center">
                  <CheckCircle2 className="w-12 h-12 text-[#333333]" strokeWidth={1} />
                </div>
                <h3 className="text-[22px] font-medium text-[#333333] mb-6 text-center">3. Safety verification</h3>
                <p className="text-[#666666] text-sm mb-8 text-center leading-relaxed">
                  Ensuring a clean, safe environment post-treatment
                </p>
                <div className="space-y-2 mt-auto">
                  {["Post-service hygiene certificate", "Detailed service reporting and recommendations", "Expert advice on maintaining safe environments"].map((item, i) => (
                    <div key={i} className="bg-[#f2f5f7] p-4 text-[13px] text-[#333333] leading-tight">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#007cc3] py-16 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-white text-3xl font-medium mb-8">Book your hygiene risk assessment today</h2>
            <Button 
              className="bg-white text-[#007cc3] hover:bg-white/90 px-12 py-6 text-lg font-bold rounded-none"
              data-testid="button-cta-book"
            >
              Contact us
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t-8 border-[#e31837] pt-16 pb-8">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="space-y-3">
              <a href="#" className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium">Locations</a>
              <a href="#" className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium">Search</a>
              <a href="#" className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium">Contact</a>
              <a href="#" className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium">Login</a>
            </div>
            <div className="space-y-3">
              <a href="#" className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium">Home</a>
              <a href="/services" className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium">Services</a>
              <a href="#" className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium">Global accounts</a>
              <a href="#" className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium">Business sectors</a>
              <a href="#" className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium">About</a>
              <a href="#" className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium">Blog</a>
            </div>
            <div className="space-y-3">
              <a href="#" className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium">Careers</a>
              <a href="#" className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium">Company information</a>
              <a href="#" className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium">Legal statement</a>
              <a href="#" className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium">Privacy policy</a>
              <a href="#" className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium">Cookie policy</a>
              <a href="#" className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium">Supplier code</a>
            </div>
            <div className="flex flex-col items-start md:items-end space-y-6">
              <span className="text-[#e31837] text-4xl font-bold tracking-tight">Rentokil</span>
              <div className="text-xs text-[#666666] text-left md:text-right leading-relaxed max-w-[280px]">
                © {new Date().getFullYear()} Rentokil Initial plc and subject to the conditions in the <a href="#" className="text-[#007cc3] hover:underline">legal statement</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
