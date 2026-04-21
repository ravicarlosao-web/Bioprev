import { TreePine, Flower2, Droplets, Sun, Scissors, Bug, Palette, Wrench, Hotel, Utensils, Briefcase, Building2, Home } from "lucide-react";
import ServicePageTemplate, { type ServicePageData } from "./ServicePageTemplate";
import jardinagemHero from "../../assets/images/service-jardinagem-hero.jpg";
import gardeningCard1 from "../../assets/images/gardening-card1.jpg";
import gardeningCard2 from "../../assets/images/gardening-card2.jpg";

const data: ServicePageData = {
  seoTitle: "Jardinagem e Paisagismo em Angola",
  seoDescription: "Serviços profissionais de jardinagem e paisagismo em Angola. A Bioprev cria e mantém espaços verdes para empresas, hotéis e condomínios em Luanda, Benguela e Huambo.",
  seoKeywords: "jardinagem Angola, paisagismo Luanda, manutenção jardins, espaços verdes empresas Angola, Bioprev jardinagem",
  seoCanonical: "/services/gardening",
  heroImage: jardinagemHero,
  heroImageAlt: "Serviços de jardinagem",
  breadcrumbLabel: "Jardinagem",
  heroTitle: "Serviços de jardinagem\ne paisagismo",
  heroSubtitle: "Criação e manutenção de espaços verdes deslumbrantes que valorizam a imagem da sua organização e contribuem para o bem-estar de todos.",
  introText: "Os espaços verdes são o cartão de visita do seu negócio. A Bioprev oferece serviços de jardinagem e paisagismo profissional que transformam e mantêm os seus exteriores em perfeitas condições durante todo o ano.",
  introSubtext: "A nossa equipa de jardineiros e paisagistas profissionais possui conhecimento profundo da flora local e das condições climáticas de Angola, permitindo-nos criar e manter jardins que prosperam no nosso clima. Desde a conceção de novos espaços verdes à manutenção regular de jardins existentes, oferecemos um serviço completo que valoriza as suas instalações.",
  sectionTitle: "Espaços verdes que inspiram",
  sectionText: "A Bioprev cria e mantém espaços verdes para empresas, hotéis, condomínios e espaços públicos, combinando estética, funcionalidade e sustentabilidade em cada projeto.",
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
  detailsTitle: "Os nossos serviços de jardinagem",
  detailsSubtitle: "Soluções completas de jardinagem e paisagismo para criar e manter espaços verdes de excelência.",
  details: [
    { icon: TreePine, title: "Manutenção de jardins", description: "Corte de relva, podas de árvores e arbustos, limpeza de canteiros e cuidados sazonais programados para manter os seus espaços sempre cuidados." },
    { icon: Flower2, title: "Plantação e floração", description: "Seleção e plantação de espécies adaptadas ao clima de Angola, com programas de floração sazonal que garantem cor e vida durante todo o ano." },
    { icon: Droplets, title: "Sistemas de rega", description: "Projeto, instalação e manutenção de sistemas de rega automática eficientes que otimizam o consumo de água e garantem a hidratação adequada de todas as plantas." },
    { icon: Sun, title: "Limpeza de terrenos", description: "Serviços de limpeza e desmatação de terrenos, preparação de solo para novos projetos e remoção de vegetação indesejada." },
    { icon: Scissors, title: "Poda artística", description: "Podas de formação e poda artística de sebes, topiárias e árvores ornamentais que conferem carácter e distinção aos seus espaços." },
    { icon: Bug, title: "Controlo fitossanitário", description: "Tratamentos preventivos e curativos contra pragas e doenças de plantas, utilizando métodos integrados e produtos ecológicos sempre que possível." },
    { icon: Palette, title: "Design paisagístico", description: "Projetos de paisagismo completos, desde a conceção à execução, incluindo seleção de plantas, pavimentos, iluminação e elementos decorativos." },
    { icon: Wrench, title: "Instalação de equipamentos", description: "Instalação de sistemas de iluminação exterior, mobiliário de jardim, pérgolas, fontes e outros elementos que valorizam os seus espaços verdes." }
  ],
  approachTitle: "O nosso ciclo de manutenção",
  approachText: "A Bioprev segue um ciclo de manutenção estruturado que garante que os seus espaços verdes se mantêm saudáveis e atraentes em todas as estações do ano.",
  approachSteps: [
    { title: "Planeamento paisagístico", content: "Avaliamos o espaço existente, as condições de solo e clima, e desenvolvemos um plano de manutenção ou um projeto paisagístico personalizado que responde aos seus objetivos e orçamento." },
    { title: "Manutenção programada", content: "Implementamos um calendário de manutenção regular que inclui corte de relva, podas, fertilização, controlo de ervas daninhas e cuidados sazonais específicos para cada espécie." },
    { title: "Gestão de sistemas de rega", content: "Monitorizamos e ajustamos os sistemas de rega de acordo com as condições meteorológicas e as necessidades das plantas, otimizando o consumo de água." },
    { title: "Controlo fitossanitário", content: "Realizamos inspeções regulares para detetar precocemente pragas e doenças, aplicando tratamentos preventivos e curativos que protegem a saúde das plantas." },
    { title: "Limpeza e conservação", content: "Mantemos todos os elementos do jardim — caminhos, bordaduras, equipamentos e mobiliário — limpos e em bom estado, garantindo um aspeto cuidado e convidativo." }
  ],
  ctaTitle: "Transforme os seus espaços verdes com a Bioprev",
  sectorsTitle: "Setores onde atuamos com jardinagem",
  sectorsText: "A Bioprev cria e mantém espaços verdes para os mais diversos setores, combinando estética, funcionalidade e sustentabilidade em cada projeto.",
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
