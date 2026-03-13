import { useState } from "react";
import { Link } from "wouter";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { MapPin, Phone, Mail, Clock, ChevronRight } from "lucide-react";
import SEOHead, { breadcrumbSchema } from "@/components/SEOHead";

interface LocationData {
  id: string;
  city: string;
  address: string;
  phones: string[];
  email: string;
  hours: string;
  mapSrc: string;
}

const locations: LocationData[] = [
  {
    id: "luanda",
    city: "Luanda",
    address: "Rua Urbanova, C/N, Benfica, Luanda",
    phones: ["+244 928 737 888", "+244 947 059 109"],
    email: "geral@bioprev.com",
    hours: "Seg - Sex: 08:00 - 17:00",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.8!2d13.1634195!3d-8.9406722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a518ab1cfa110f1%3A0x5a820c888ab3f769!2sBioprev%20Angola!5e0!3m2!1spt-BR!2sao!4v1710000000000!5m2!1spt-BR!2sao"
  },
  {
    id: "benguela",
    city: "Benguela",
    address: "Rua do Compão, Benguela",
    phones: ["+244 927 375 940", "+244 912 289 858"],
    email: "dp.comercial@bioprevangola.com",
    hours: "Seg - Sex: 08:00 - 17:00",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31543.0!2d13.3833!3d-12.5763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ba7291d5ca3e5b1%3A0x74234d98e4e6f5a!2sBenguela%2C%20Angola!5e0!3m2!1spt-BR!2sao!4v1710000000001!5m2!1spt-BR!2sao"
  },
  {
    id: "huambo",
    city: "Huambo",
    address: "Huambo, Angola",
    phones: ["+244 912 289 858"],
    email: "dp.comercial@bioprevangola.com",
    hours: "Seg - Sex: 08:00 - 17:00",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31543.0!2d15.7395!3d-12.7761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1.0%3A0x0!2sHuambo%2C%20Angola!5e0!3m2!1spt-BR!2sao!4v1710000000002!5m2!1spt-BR!2sao"
  }
];

export default function Locations() {
  const [selected, setSelected] = useState<string>("luanda");

  const current = locations.find(l => l.id === selected) || locations[0];

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Localizações"
        description="Encontre a Bioprev Angola perto de si. Escritórios em Luanda (Rua Urbanova, Benfica), Benguela e Huambo. Contacte-nos para controle de pragas na sua região."
        canonical="/locations"
        keywords="Bioprev Luanda, Bioprev Benguela, Bioprev Huambo, localizações controle pragas Angola, escritórios Bioprev"
        structuredData={breadcrumbSchema([
          { name: "Início", url: "/" },
          { name: "Localizações", url: "/locations" },
        ])}
      />
      <Header />

      <div className="bg-[#001d3d] text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-300 mb-6" data-testid="breadcrumb-locations">
            <Link href="/" className="hover:text-[#f2c92f] transition-colors">Início</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#f2c92f]">Locais</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight" data-testid="text-locations-hero-title">
            As nossas localizações
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl" data-testid="text-locations-hero-subtitle">
            A Bioprev está presente em Luanda, Benguela e Huambo para servir melhor os nossos clientes em todo o país.
          </p>
        </div>
      </div>

      <div className="flex-1 bg-[#f8f9fa]">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-4" data-testid="list-location-cards">
              {locations.map((loc) => (
                <button
                  key={loc.id}
                  onClick={() => setSelected(loc.id)}
                  className={`w-full text-left p-6 rounded-lg border-t-4 shadow-sm transition-all ${
                    selected === loc.id
                      ? "border-[#f2c92f] bg-white shadow-md"
                      : "border-transparent bg-white hover:border-[#f2c92f] hover:shadow-md"
                  }`}
                  data-testid={`button-location-${loc.id}`}
                >
                  <div className="flex items-start gap-3">
                    <MapPin className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                      selected === loc.id ? "text-[#007cc3]" : "text-gray-400"
                    }`} />
                    <div className="flex-1">
                      <h3 className={`text-lg font-semibold mb-2 ${
                        selected === loc.id ? "text-[#007cc3]" : "text-[#1a1a1a]"
                      }`} data-testid={`text-location-city-${loc.id}`}>
                        {loc.city}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3" data-testid={`text-location-address-${loc.id}`}>
                        {loc.address}
                      </p>

                      <div className="space-y-2">
                        {loc.phones.map((phone, idx) => (
                          <a
                            key={idx}
                            href={`tel:${phone.replace(/\s/g, '')}`}
                            className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#007cc3] transition-colors"
                            data-testid={`link-phone-${loc.id}-${idx}`}
                          >
                            <Phone className="w-3.5 h-3.5 flex-shrink-0" />
                            {phone}
                          </a>
                        ))}
                        <a
                          href={`mailto:${loc.email}`}
                          className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#007cc3] transition-colors"
                          data-testid={`link-email-${loc.id}`}
                        >
                          <Mail className="w-3.5 h-3.5 flex-shrink-0" />
                          {loc.email}
                        </a>
                        <div className="flex items-center gap-2 text-sm text-gray-600" data-testid={`text-hours-${loc.id}`}>
                          <Clock className="w-3.5 h-3.5 flex-shrink-0" />
                          {loc.hours}
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="lg:col-span-2" data-testid="map-container">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden h-full min-h-[400px] lg:min-h-[500px]">
                <div className="bg-[#007cc3] px-6 py-3 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-white" />
                  <span className="text-white font-medium text-sm" data-testid="text-map-title">
                    {current.city} — {current.address}
                  </span>
                </div>
                <iframe
                  key={current.id}
                  src={current.mapSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "450px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Mapa da Bioprev em ${current.city}`}
                  data-testid={`iframe-map-${current.id}`}
                />
              </div>
            </div>
          </div>

          <div className="mt-12 bg-[#007cc3] rounded-lg p-8 md:p-10 text-center" data-testid="cta-locations">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Precisa dos nossos serviços?
            </h2>
            <p className="text-blue-100 mb-6 max-w-xl mx-auto">
              Entre em contacto com a filial mais próxima ou solicite um orçamento sem compromisso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block border-2 border-white text-white px-8 py-3 font-semibold hover:bg-white hover:text-[#007cc3] transition-colors rounded"
                data-testid="link-cta-contact"
              >
                Pedir orçamento
              </Link>
              <a
                href="https://wa.me/244928737888"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-[#007cc3] px-8 py-3 font-semibold hover:bg-blue-50 transition-colors rounded"
                data-testid="link-cta-whatsapp"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
