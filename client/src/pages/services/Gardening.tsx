import { Hotel, Utensils, Briefcase, Building2, Home } from "lucide-react";
import ServicePageTemplate, { type ServicePageData } from "./ServicePageTemplate";
import jardinagemHero from "../../assets/images/service-jardinagem-hero.jpg";
import gardeningCard1 from "../../assets/images/gardening-card1.jpg";
import gardeningCard2 from "../../assets/images/gardening-card2.jpg";

const data: ServicePageData = {
  seoTitle: "Jardinagem e Paisagismo em Angola",
  seoDescription: "Serviços profissionais de jardinagem e paisagismo em Angola para empresas, hotéis e condomínios em Luanda, Benguela e Huambo.",
  seoKeywords: "jardinagem Angola, paisagismo Luanda, manutenção jardins, espaços verdes empresas Angola, Bioprev jardinagem",
  seoCanonical: "/services/gardening",
  heroImage: jardinagemHero,
  heroImageAlt: "Serviços de jardinagem",
  breadcrumbLabel: "Jardinagem",
  heroTitle: "Serviços de jardinagem\ne paisagismo",
  heroSubtitle: "Criação e manutenção de espaços verdes deslumbrantes que valorizam a imagem da sua organização e contribuem para o bem-estar de todos.",
  introText: "Os espaços verdes são o cartão de visita do seu negócio. A Bioprev oferece serviços de jardinagem e paisagismo profissional que transformam e mantêm os seus exteriores em perfeitas condições durante todo o ano.",
  serviceCards: [
    {
      title: "Manutenção regular",
      description: "Serviços de manutenção programada que incluem corte de relva, podas, fertilização, controlo de ervas daninhas e cuidados sazonais para manter os seus jardins sempre impecáveis.",
      image: gardeningCard1,
      imageAlt: "Manutenção de jardins"
    },
    {
      title: "Projeto paisagístico",
      description: "Design e criação de novos jardins e espaços de lazer, com seleção de espécies adaptadas ao clima local, sistemas de rega eficientes e elementos decorativos.",
      image: gardeningCard2,
      imageAlt: "Projeto paisagístico"
    }
  ],
  details: [],
  ctaTitle: "Transforme os seus espaços verdes com a Bioprev",
  sectorsTitle: "Setores onde atuamos com jardinagem",
  sectorsText: "A Bioprev adapta os serviços de jardinagem às necessidades de cada setor, valorizando áreas exteriores com manutenção profissional e atenção aos detalhes.",
  sectors: [
    { icon: Hotel, name: "Hotelaria", description: "Manutenção de jardins, piscinas e áreas de lazer exteriores de hotéis e resorts, criando ambientes acolhedores para os hóspedes." },
    { icon: Briefcase, name: "Escritórios", description: "Espaços verdes corporativos que melhoram o bem-estar dos colaboradores e projetam uma imagem profissional e sustentável." },
    { icon: Building2, name: "Gestão de instalações", description: "Manutenção de jardins e áreas verdes em edifícios comerciais, centros empresariais e condomínios." },
    { icon: Utensils, name: "Restauração", description: "Jardins e esplanadas de restaurantes que proporcionam ambientes agradáveis para os clientes e valorizam o espaço." },
    { icon: Home, name: "Residencial", description: "Criação e manutenção de jardins residenciais e de condomínios, com cuidados adaptados às preferências de cada cliente." },
  ]
};

export default function Gardening() {
  return <ServicePageTemplate data={data} />;
}
