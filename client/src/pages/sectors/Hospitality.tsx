import { Hotel, Star, BedDouble, UtensilsCrossed, Waves, TreePine, DoorOpen, Sparkles } from "lucide-react";
import { Search, Target, CheckCircle2 } from "lucide-react";
import SectorPageTemplate, { type SectorPageData } from "./SectorPageTemplate";

const data: SectorPageData = {
  seoTitle: "Controle de Pragas para Hotelaria",
  seoDescription: "Soluções de controle de pragas para hotéis e resorts em Angola. A Bioprev garante os mais altos padrões de higiene e conforto para os seus hóspedes.",
  seoKeywords: "controle pragas hotéis Angola, pragas hotelaria, higiene hotéis Luanda, Bioprev hotelaria",
  seoCanonical: "/sectors/hospitality",
  heroImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2000",
  heroImageAlt: "Hotelaria",
  breadcrumbLabel: "Hotelaria",
  heroTitle: "Controle de pragas para\no setor hoteleiro",
  heroSubtitle: "Proteja a reputação do seu hotel com soluções discretas e eficazes de controle de pragas que garantem o conforto e a segurança dos seus hóspedes.",
  introText: "No setor hoteleiro, a presença de pragas pode destruir anos de construção de reputação numa única avaliação negativa. Os hóspedes esperam ambientes impecáveis, e qualquer falha na higiene pode resultar em perda de clientes e danos irreversíveis à sua marca.",
  introSubtext: "A Bioprev é o parceiro de confiança dos principais hotéis e resorts em Angola. Os nossos programas de controle de pragas são concebidos para operar de forma totalmente discreta, sem que os hóspedes sequer percebam a nossa presença. Compreendemos que cada área do hotel — quartos, restaurantes, spas, áreas de lazer — requer uma abordagem diferente.",
  sectionTitle: "Proteção discreta para experiências memoráveis",
  sectionText: "Desde hotéis boutique a grandes resorts, a Bioprev oferece soluções que mantêm os seus espaços impecáveis e livres de pragas, permitindo que os seus hóspedes desfrutem de uma experiência perfeita.",
  serviceCards: [
    {
      title: "Proteção de áreas de hóspedes",
      description: "Programas discretos para quartos, suites e áreas comuns que eliminam pragas como percevejos, baratas e formigas sem causar qualquer inconveniente aos hóspedes.",
      image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=1000",
      imageAlt: "Quartos de hotel"
    },
    {
      title: "Segurança alimentar no hotel",
      description: "Soluções para cozinhas, restaurantes e bares do hotel que garantem a segurança alimentar e a conformidade com as normas sanitárias, protegendo a saúde dos hóspedes.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=1000",
      imageAlt: "Restaurante de hotel"
    }
  ],
  detailsTitle: "Serviços especializados para hotelaria",
  detailsSubtitle: "Soluções adaptadas a cada área do seu hotel, garantindo proteção completa sem comprometer a experiência dos hóspedes.",
  details: [
    { icon: BedDouble, title: "Controle de percevejos", description: "Deteção precoce e eliminação de percevejos com tratamentos que permitem a reocupação rápida dos quartos, minimizando o impacto na taxa de ocupação." },
    { icon: UtensilsCrossed, title: "Segurança alimentar", description: "Programas para cozinhas e áreas de restauração que cumprem os mais altos padrões de higiene e segurança alimentar exigidos no setor hoteleiro." },
    { icon: Waves, title: "Áreas de piscina e spa", description: "Controle de insetos e pragas em áreas húmidas como piscinas, spas e saunas, onde as condições favorecem o desenvolvimento de pragas." },
    { icon: TreePine, title: "Áreas exteriores e jardins", description: "Gestão de pragas em jardins, terraços e áreas de lazer exteriores, incluindo controle de mosquitos e outros insetos voadores." },
    { icon: Star, title: "Programa de excelência", description: "Programas premium para hotéis de 4 e 5 estrelas com níveis de serviço e discrição que correspondem às expectativas dos seus hóspedes." },
    { icon: DoorOpen, title: "Áreas de serviço", description: "Proteção de áreas de serviço, lavandarias e zonas técnicas que são frequentemente pontos de origem de infestações." },
    { icon: Hotel, title: "Gestão multi-propriedade", description: "Programas coordenados para cadeias hoteleiras com múltiplas propriedades, garantindo padrões consistentes em todas as unidades." },
    { icon: Sparkles, title: "Tratamentos de choque", description: "Intervenções rápidas e eficazes para situações urgentes, com capacidade de resposta imediata para proteger a experiência dos hóspedes." }
  ],
  approachTitle: "A nossa abordagem para hotelaria",
  approachText: "A Bioprev compreende que a discrição é fundamental no setor hoteleiro. Os nossos programas são desenhados para operar nos bastidores, garantindo que os hóspedes nunca são expostos a pragas ou a tratamentos.",
  approachSteps: [
    { title: "Auditoria discreta", content: "Realizamos uma inspeção completa de todas as áreas do hotel — quartos, restaurantes, cozinhas, áreas de lazer e zonas de serviço — sem perturbar os hóspedes ou as operações." },
    { title: "Programa adaptado à operação", content: "Desenvolvemos um calendário de intervenções coordenado com as operações do hotel, aproveitando períodos de menor ocupação e janelas de manutenção para realizar tratamentos." },
    { title: "Intervenções invisíveis", content: "Os nossos técnicos trabalham de forma discreta, utilizando vestuário neutro e equipamento compacto, realizando tratamentos de forma eficiente e sem deixar vestígios." },
    { title: "Monitorização preventiva", content: "Sistemas de monitorização instalados em pontos estratégicos permitem a deteção precoce de qualquer atividade de pragas, permitindo intervenção antes que se torne visível para os hóspedes." },
    { title: "Formação da equipa", content: "Formamos a equipa do hotel para identificar sinais precoces de pragas e seguir boas práticas que contribuem para a prevenção de infestações." }
  ],
  whyTitle: "Porquê a Bioprev para o seu hotel?",
  whyText1: "A reputação do seu hotel é o seu ativo mais valioso. Na Bioprev, tratamos cada propriedade como se fosse nossa, com o mesmo cuidado e atenção ao detalhe que dedica aos seus hóspedes. Os nossos programas são desenhados para ser completamente invisíveis, operando nos bastidores para garantir experiências perfeitas.",
  whyText2: "Com experiência nos melhores hotéis de Angola, compreendemos as expectativas do setor e oferecemos um nível de serviço que corresponde aos padrões de excelência que define para o seu estabelecimento.",
  processCards: [
    { icon: Search, title: "1. Inspeção completa", subtitle: "Auditoria discreta de todas as áreas", items: ["Inspeção de quartos e áreas comuns", "Avaliação de cozinhas e restaurantes", "Análise de áreas exteriores"] },
    { icon: Target, title: "2. Proteção discreta", subtitle: "Tratamentos invisíveis e eficazes", items: ["Intervenções fora do horário de hóspedes", "Técnicos em vestuário discreto", "Métodos sem odor ou resíduos"] },
    { icon: CheckCircle2, title: "3. Excelência contínua", subtitle: "Manutenção dos mais altos padrões", items: ["Monitorização preventiva permanente", "Formação contínua da equipa", "Resposta de emergência 24/7"] }
  ],
  ctaTitle: "Proteja a reputação do seu hotel"
};

export default function Hospitality() {
  return <SectorPageTemplate data={data} />;
}
