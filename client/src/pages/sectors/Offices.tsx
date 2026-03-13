import { Briefcase, Users, Coffee, Monitor, Leaf, Clock, Building, HeartPulse } from "lucide-react";
import { Search, Target, CheckCircle2 } from "lucide-react";
import SectorPageTemplate, { type SectorPageData } from "./SectorPageTemplate";

const data: SectorPageData = {
  seoTitle: "Controle de Pragas para Escritórios",
  seoDescription: "Soluções discretas de controle de pragas para escritórios em Angola. A Bioprev protege o bem-estar dos colaboradores e a imagem profissional da empresa.",
  seoKeywords: "controle pragas escritórios Angola, pragas ambiente trabalho, desinfestação escritórios Luanda, Bioprev escritórios",
  seoCanonical: "/sectors/offices",
  heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=75&w=1280",
  heroImageAlt: "Escritórios",
  breadcrumbLabel: "Escritórios",
  heroTitle: "Controle de pragas para\nambientes de escritório",
  heroSubtitle: "Mantenha os seus escritórios confortáveis, seguros e livres de pragas com soluções discretas que protegem o bem-estar dos seus colaboradores e a imagem profissional da sua empresa.",
  introText: "Os escritórios são ambientes onde as pessoas passam grande parte do seu dia. A presença de pragas — desde formigas nas copas a roedores nos tetos falsos — afeta o bem-estar dos colaboradores, reduz a produtividade e projeta uma imagem negativa da empresa.",
  introSubtext: "A Bioprev oferece soluções de controle de pragas concebidas para o ambiente de escritório, onde a discrição é essencial. Os nossos técnicos trabalham fora do horário laboral e utilizam métodos que não deixam odores, resíduos ou qualquer vestígio que possa perturbar os colaboradores ou visitantes.",
  sectionTitle: "Ambientes de trabalho saudáveis e produtivos",
  sectionText: "Desde pequenos escritórios a grandes sedes corporativas, a Bioprev garante espaços de trabalho livres de pragas, contribuindo para o bem-estar dos colaboradores e para a imagem profissional da sua organização.",
  serviceCards: [
    {
      title: "Escritórios corporativos",
      description: "Programas para sedes corporativas e grandes escritórios, com cobertura de todas as áreas — desde os open spaces às salas de reunião, copas e zonas técnicas — com total discrição.",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=75&w=800",
      imageAlt: "Escritório corporativo"
    },
    {
      title: "Espaços partilhados e coworking",
      description: "Soluções para espaços de trabalho partilhados e coworking, onde a elevada rotação de utilizadores e o acesso público criam desafios adicionais para o controle de pragas.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=75&w=800",
      imageAlt: "Espaço de coworking"
    }
  ],
  detailsTitle: "Serviços para ambientes de escritório",
  detailsSubtitle: "Soluções que mantêm os seus espaços de trabalho limpos, seguros e confortáveis para todos os colaboradores e visitantes.",
  details: [
    { icon: Briefcase, title: "Áreas de trabalho", description: "Controle de pragas em open spaces, gabinetes e salas de reunião, eliminando insetos e roedores sem perturbar as atividades profissionais." },
    { icon: Coffee, title: "Copas e áreas de refeição", description: "Programas específicos para copas e áreas de refeição, onde restos de alimentos atraem pragas como formigas, baratas e moscas." },
    { icon: Monitor, title: "Salas técnicas e servidores", description: "Proteção de salas de servidores e equipamentos técnicos contra roedores que podem danificar cabos e causar interrupções nos sistemas." },
    { icon: Users, title: "Áreas comuns", description: "Controle de pragas em receções, corredores, casas de banho e outras áreas comuns frequentadas por colaboradores e visitantes." },
    { icon: Leaf, title: "Métodos ecológicos", description: "Utilização prioritária de métodos de controle de pragas ecológicos e sustentáveis, alinhados com as políticas ambientais da sua empresa." },
    { icon: Clock, title: "Intervenções noturnas", description: "Tratamentos realizados fora do horário de trabalho para garantir zero perturbação nas atividades dos colaboradores." },
    { icon: Building, title: "Edifícios multi-pisos", description: "Programas coordenados para edifícios de escritórios com múltiplos pisos, garantindo proteção uniforme em todas as áreas." },
    { icon: HeartPulse, title: "Saúde ocupacional", description: "Soluções que contribuem para um ambiente de trabalho saudável, eliminando pragas que podem causar alergias e problemas respiratórios." }
  ],
  approachTitle: "A nossa abordagem para escritórios",
  approachText: "A Bioprev implementa programas de controle de pragas que se adaptam à dinâmica dos ambientes de escritório, garantindo espaços de trabalho confortáveis e livres de pragas.",
  approachSteps: [
    { title: "Avaliação do espaço de trabalho", content: "Inspecionamos todas as áreas do escritório, incluindo espaços de trabalho, copas, casas de banho, tetos falsos, pisos técnicos e zonas de serviço, identificando riscos e pontos de entrada de pragas." },
    { title: "Programa discreto", content: "Desenvolvemos um programa de intervenções realizadas fora do horário laboral, utilizando métodos que não deixam odores ou resíduos que possam afetar os colaboradores no dia seguinte." },
    { title: "Implementação profissional", content: "Os nossos técnicos realizam os tratamentos de forma profissional e eficiente, respeitando a confidencialidade e segurança dos espaços de trabalho." },
    { title: "Monitorização contínua", content: "Estações de monitorização discretas em pontos estratégicos permitem acompanhar a atividade de pragas e intervir preventivamente quando necessário." },
    { title: "Relatórios e recomendações", content: "Fornecemos relatórios regulares ao gestor do edifício e recomendações de boas práticas para os colaboradores contribuírem para a prevenção de pragas." }
  ],
  whyTitle: "Porquê a Bioprev para o seu escritório?",
  whyText1: "Um escritório livre de pragas é fundamental para o bem-estar e a produtividade dos seus colaboradores. Na Bioprev, compreendemos que o ambiente de trabalho reflete a cultura da empresa, e uma infestação de pragas pode minar a moral da equipa e a confiança dos clientes que visitam as suas instalações.",
  whyText2: "Oferecemos soluções que operam completamente nos bastidores, garantindo que os seus colaboradores e visitantes nunca se deparam com pragas ou vestígios de tratamentos. A nossa abordagem preventiva minimiza o risco de infestações e mantém os seus espaços impecáveis.",
  processCards: [
    { icon: Search, title: "1. Avaliação discreta", subtitle: "Inspeção de todas as áreas do escritório", items: ["Análise de copas e áreas de refeição", "Inspeção de tetos falsos e pisos técnicos", "Avaliação de pontos de entrada"] },
    { icon: Target, title: "2. Tratamento noturno", subtitle: "Zero perturbação para os colaboradores", items: ["Intervenções fora do horário laboral", "Métodos sem odor ou resíduos", "Respeito pela confidencialidade"] },
    { icon: CheckCircle2, title: "3. Ambiente saudável", subtitle: "Espaço de trabalho livre de pragas", items: ["Monitorização preventiva contínua", "Recomendações de boas práticas", "Relatórios regulares de gestão"] }
  ],
  ctaTitle: "Garanta um escritório confortável e livre de pragas"
};

export default function Offices() {
  return <SectorPageTemplate data={data} />;
}
