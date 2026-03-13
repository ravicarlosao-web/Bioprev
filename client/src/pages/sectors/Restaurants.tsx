import { Utensils, ChefHat, Wine, Flame, Rat, Bug, ClipboardCheck, SprayCan } from "lucide-react";
import { Search, Target, CheckCircle2 } from "lucide-react";
import SectorPageTemplate, { type SectorPageData } from "./SectorPageTemplate";

const data: SectorPageData = {
  seoTitle: "Controle de Pragas para Restauração",
  seoDescription: "Controle de pragas para restaurantes, bares e catering em Angola. A Bioprev garante segurança alimentar e higiene total no seu estabelecimento.",
  seoKeywords: "controle pragas restaurantes Angola, pragas restauração, higiene restaurantes Luanda, segurança alimentar catering, Bioprev restauração",
  seoCanonical: "/sectors/restaurants",
  heroImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=75&w=1280",
  heroImageAlt: "Restauração",
  breadcrumbLabel: "Restauração",
  heroTitle: "Controle de pragas para\nrestauração e catering",
  heroSubtitle: "Proteja o seu restaurante, os seus clientes e a sua reputação com soluções de controle de pragas que garantem os mais altos padrões de segurança alimentar e higiene.",
  introText: "Na restauração, a higiene é tudo. Um único avistamento de uma praga por um cliente pode resultar em avaliações negativas devastadoras, perda de clientes e até no encerramento do estabelecimento pelas autoridades sanitárias.",
  introSubtext: "A Bioprev protege restaurantes, bares, cafés e serviços de catering em todo o Angola com programas de controle de pragas que se adaptam ao ritmo intenso da restauração. Os nossos técnicos compreendem as pressões do setor e trabalham de forma eficiente para garantir que o seu estabelecimento permanece impecável e em total conformidade sanitária.",
  sectionTitle: "Higiene impecável para a sua cozinha e sala",
  sectionText: "Desde restaurantes de fine dining a cadeias de fast food, a Bioprev oferece soluções que protegem cada área do seu estabelecimento — da cozinha ao salão, do bar aos sanitários — contra todos os tipos de pragas.",
  serviceCards: [
    {
      title: "Proteção da cozinha",
      description: "Programas intensivos para cozinhas profissionais que eliminam baratas, roedores e insetos voadores, garantindo a segurança dos alimentos preparados e servidos aos seus clientes.",
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=75&w=800",
      imageAlt: "Cozinha profissional"
    },
    {
      title: "Sala e áreas de clientes",
      description: "Soluções discretas para o salão, esplanadas e áreas de clientes que mantêm os espaços livres de pragas sem comprometer a experiência gastronómica dos seus clientes.",
      image: "https://images.unsplash.com/photo-1550966871-3ed3cdb51f3a?auto=format&fit=crop&q=75&w=800",
      imageAlt: "Sala de restaurante"
    }
  ],
  detailsTitle: "Serviços para restauração",
  detailsSubtitle: "Soluções completas que cobrem todas as áreas do seu estabelecimento, garantindo conformidade sanitária e proteção da sua reputação.",
  details: [
    { icon: ChefHat, title: "Cozinhas profissionais", description: "Programas intensivos para cozinhas, com tratamentos que eliminam pragas comuns como baratas, formigas e moscas sem contaminar alimentos ou superfícies." },
    { icon: Utensils, title: "Áreas de preparação", description: "Proteção de zonas de preparação de alimentos, incluindo áreas de corte, bancadas e equipamentos, garantindo condições higiénicas ideais." },
    { icon: Wine, title: "Bar e adega", description: "Controle de pragas em áreas de bar e adegas, onde condições de humidade e armazenamento de bebidas podem atrair insetos e roedores." },
    { icon: Flame, title: "Sistemas de exaustão", description: "Tratamentos de sistemas de exaustão e ventilação que são frequentemente pontos de entrada e abrigo para pragas na cozinha." },
    { icon: Rat, title: "Controle de roedores", description: "Sistemas de exclusão e controle de roedores discretos e eficazes, posicionados estrategicamente para proteger todas as áreas do estabelecimento." },
    { icon: Bug, title: "Insetos voadores", description: "Sistemas de captura de insetos voadores para cozinhas e salas, utilizando tecnologia UV discreta que não perturba os clientes." },
    { icon: ClipboardCheck, title: "Conformidade sanitária", description: "Documentação e relatórios completos que demonstram a sua diligência no controle de pragas perante inspeções sanitárias." },
    { icon: SprayCan, title: "Limpeza profunda", description: "Serviços complementares de limpeza e desinfeção profunda para áreas de cozinha e preparação de alimentos." }
  ],
  approachTitle: "A nossa abordagem para a restauração",
  approachText: "A Bioprev conhece o ritmo intenso da restauração e adapta os seus programas para garantir máxima eficácia com zero interrupção das suas operações.",
  approachSteps: [
    { title: "Inspeção do estabelecimento", content: "Realizamos uma inspeção completa de todo o estabelecimento — cozinha, armazenamento, sala, bar, sanitários e áreas exteriores — durante o horário mais conveniente para a sua operação." },
    { title: "Programa adaptado à operação", content: "Desenvolvemos um calendário de tratamentos que se encaixa nos horários do seu restaurante, com intervenções antes da abertura ou após o encerramento, sem nunca interferir com o serviço." },
    { title: "Tratamentos de madrugada", content: "Os nossos técnicos realizam os tratamentos nas primeiras horas da manhã, garantindo que todos os produtos são seguros e que não existem odores quando a equipa de cozinha chega para preparar o serviço." },
    { title: "Monitorização semanal", content: "Visitas semanais de monitorização para verificar estações de isca, armadilhas e pontos de controle, garantindo proteção contínua ao longo de toda a semana." },
    { title: "Suporte para inspeções", content: "Preparamos toda a documentação necessária e fornecemos suporte durante inspeções sanitárias, demonstrando o seu compromisso com os mais altos padrões de higiene." }
  ],
  whyTitle: "Porquê a Bioprev para o seu restaurante?",
  whyText1: "O seu restaurante é mais do que um negócio — é uma paixão. Na Bioprev, partilhamos o seu compromisso com a excelência e compreendemos que a reputação construída ao longo de anos pode ser destruída por um único incidente com pragas. Os nossos programas são desenhados para que isso nunca aconteça.",
  whyText2: "Trabalhamos com restaurantes de todos os tipos em Angola — desde estabelecimentos de fine dining a cadeias de restauração rápida — oferecendo soluções que se adaptam ao carácter único do seu negócio e garantem a confiança dos seus clientes.",
  processCards: [
    { icon: Search, title: "1. Inspeção completa", subtitle: "Análise de cozinha a sala", items: ["Avaliação de cozinha e armazenamento", "Inspeção de sala e sanitários", "Análise de sistemas de ventilação"] },
    { icon: Target, title: "2. Tratamento noturno", subtitle: "Sem interferência no serviço", items: ["Intervenções de madrugada", "Produtos seguros para alimentos", "Sem odores ou resíduos"] },
    { icon: CheckCircle2, title: "3. Conformidade total", subtitle: "Pronto para inspeções sanitárias", items: ["Monitorização semanal", "Documentação para inspeções", "Formação da equipa de cozinha"] }
  ],
  ctaTitle: "Proteja o seu restaurante e a sua reputação"
};

export default function Restaurants() {
  return <SectorPageTemplate data={data} />;
}
