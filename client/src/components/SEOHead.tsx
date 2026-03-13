import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  type?: string;
  image?: string;
  keywords?: string;
  noindex?: boolean;
  structuredData?: object | object[];
}

const SITE_NAME = "Bioprev Angola";
const DEFAULT_IMAGE = "/opengraph.jpg";
const BASE_URL = "https://bioprevangola.com";

export default function SEOHead({
  title,
  description,
  canonical,
  type = "website",
  image,
  keywords,
  noindex = false,
  structuredData,
}: SEOHeadProps) {
  const fullTitle = title === "Início" ? `${SITE_NAME} — Controle de Pragas, Limpeza e Higiene` : `${title} | ${SITE_NAME}`;
  const ogImage = image || `${BASE_URL}${DEFAULT_IMAGE}`;
  const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : undefined;

  const structuredDataArray = structuredData
    ? Array.isArray(structuredData)
      ? structuredData
      : [structuredData]
    : [];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="pt_AO" />
      <meta property="og:site_name" content={SITE_NAME} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      <meta name="geo.region" content="AO" />
      <meta name="geo.placename" content="Luanda, Angola" />
      <meta name="author" content="Bioprev Angola" />

      {structuredDataArray.map((data, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
    </Helmet>
  );
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Bioprev Angola",
  url: "https://bioprevangola.com",
  logo: "https://bioprevangola.com/favicon.png",
  description: "Empresa angolana líder em controle de pragas, desinfestação, limpeza profissional, recolha de resíduos, tratamento de água e jardinagem.",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+244-928-737-888",
      contactType: "customer service",
      areaServed: "AO",
      availableLanguage: "Portuguese",
    },
    {
      "@type": "ContactPoint",
      telephone: "+244-947-059-109",
      contactType: "customer service",
      areaServed: "AO",
      availableLanguage: "Portuguese",
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Urbanova, C/N, Benfica",
    addressLocality: "Luanda",
    addressCountry: "AO",
  },
  sameAs: [],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Bioprev Angola",
  url: "https://bioprevangola.com",
  description: "Empresa angolana de controle de pragas, limpeza, desinfestação e gestão de resíduos.",
  inLanguage: "pt-AO",
  publisher: {
    "@type": "Organization",
    name: "Bioprev Angola",
  },
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://bioprevangola.com/#business",
  name: "Bioprev Angola",
  image: "https://bioprevangola.com/favicon.png",
  url: "https://bioprevangola.com",
  telephone: "+244-928-737-888",
  email: "geral@bioprev.com",
  description: "Empresa angolana especializada em controle de pragas, desinfestação, fumigação, limpeza profissional, recolha de resíduos, tratamento de água e jardinagem. Presente em Luanda, Benguela e Huambo.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Urbanova, C/N, Benfica",
    addressLocality: "Luanda",
    addressRegion: "Luanda",
    addressCountry: "AO",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -8.8368,
    longitude: 13.2343,
  },
  areaServed: {
    "@type": "Country",
    name: "Angola",
  },
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Serviços Bioprev",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Controle de Pragas" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Desinfestação" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fumigação" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Limpeza Profissional" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Recolha de Resíduos" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tratamento de Água" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Jardinagem" } },
    ],
  },
};

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://bioprevangola.com${item.url}`,
    })),
  };
}

export function serviceSchema(name: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `https://bioprevangola.com${url}`,
    provider: {
      "@type": "Organization",
      name: "Bioprev Angola",
      url: "https://bioprevangola.com",
    },
    areaServed: {
      "@type": "Country",
      name: "Angola",
    },
    serviceType: "Controle de Pragas e Higiene",
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
