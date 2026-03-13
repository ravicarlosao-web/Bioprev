import { Building2, Shield, Users, ClipboardList, Zap, Leaf, Clock, Settings } from "lucide-react";
import { Search, Target, CheckCircle2 } from "lucide-react";
import SectorPageTemplate, { type SectorPageData } from "./SectorPageTemplate";

const data: SectorPageData = {
  seoTitle: "Controle de Pragas para Gestão de Instalações",
  seoDescription: "Soluções de controle de pragas para gestores de edifícios comerciais e instalações em Angola. Proteção discreta e eficaz com a Bioprev.",
  seoKeywords: "controle pragas edifícios Angola, gestão instalações, pragas edifícios comerciais, Bioprev instalações",
  seoCanonical: "/sectors/facilities",
  heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=75&w=1280",
  heroImageAlt: "Gestão de instalações",
  breadcrumbLabel: "Gestão de instalações",
  heroTitle: "Controle de pragas para\ngestão de instalações",
  heroSubtitle: "Soluções completas de controle de pragas para gestores de instalações que procuram proteger edifícios, inquilinos e a reputação dos seus portfólios imobiliários.",
  introText: "A gestão de instalações exige atenção constante à manutenção e higiene dos edifícios. Uma infestação de pragas pode comprometer o conforto dos ocupantes, violar regulamentações sanitárias e depreciar o valor dos seus imóveis.",
  introSubtext: "A Bioprev trabalha em parceria com gestores de instalações em todo o Angola, oferecendo programas de controle de pragas proativos que se integram na gestão diária dos edifícios. Os nossos técnicos compreendem as dinâmicas de edifícios multi-ocupantes e sabem como intervir de forma discreta e eficaz.",
  sectionTitle: "Gestão de pragas para edifícios de excelência",
  sectionText: "Desde torres de escritórios a centros comerciais, a Bioprev oferece soluções que protegem os seus edifícios contra pragas, garantindo ambientes confortáveis e seguros para todos os ocupantes e visitantes.",
  serviceCards: [
    {
      title: "Programas para edifícios comerciais",
      description: "Soluções de controle de pragas desenhadas para edifícios de escritórios e centros comerciais, com intervenções discretas que não perturbam as operações dos inquilinos.",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=75&w=800",
      imageAlt: "Edifícios comerciais"
    },
    {
      title: "Manutenção preventiva integrada",
      description: "Programas contínuos que se integram no plano de manutenção das suas instalações, prevenindo infestações antes que causem problemas aos ocupantes ou danos estruturais.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=75&w=800",
      imageAlt: "Manutenção preventiva"
    }
  ],
  detailsTitle: "Serviços para gestão de instalações",
  detailsSubtitle: "Descubra as soluções que a Bioprev oferece para manter as suas instalações livres de pragas e em perfeitas condições.",
  details: [
    { icon: Building2, title: "Edifícios multi-ocupantes", description: "Programas coordenados para edifícios com múltiplos inquilinos, garantindo cobertura completa sem duplicação de esforços." },
    { icon: Shield, title: "Proteção estrutural", description: "Identificação e tratamento de pragas que podem causar danos estruturais, como térmitas e carunchos, protegendo o seu investimento imobiliário." },
    { icon: Users, title: "Gestão de inquilinos", description: "Comunicação discreta e profissional com inquilinos durante intervenções, minimizando perturbações e mantendo a satisfação." },
    { icon: ClipboardList, title: "Relatórios de gestão", description: "Relatórios mensais detalhados para o gestor de instalações, com análise de tendências e recomendações de melhoria." },
    { icon: Zap, title: "Resposta de emergência", description: "Serviço de resposta rápida para situações urgentes, com técnicos disponíveis para intervir rapidamente em caso de infestação." },
    { icon: Leaf, title: "Soluções sustentáveis", description: "Métodos de controle de pragas ecológicos que se alinham com as políticas de sustentabilidade e certificações verdes do edifício." },
    { icon: Clock, title: "Horários flexíveis", description: "Intervenções fora do horário laboral para minimizar o impacto nos ocupantes e nas operações do edifício." },
    { icon: Settings, title: "Manutenção preventiva", description: "Inspeções regulares e tratamentos preventivos integrados no calendário de manutenção das suas instalações." }
  ],
  approachTitle: "A nossa abordagem para gestão de instalações",
  approachText: "A Bioprev trabalha como parceiro estratégico dos gestores de instalações, oferecendo soluções que se integram perfeitamente na operação diária dos edifícios.",
  approachSteps: [
    { title: "Avaliação completa do edifício", content: "Realizamos uma inspeção detalhada de todo o edifício, desde as fundações ao telhado, identificando pontos de entrada de pragas, áreas de risco e condições que favorecem infestações." },
    { title: "Plano integrado de gestão", content: "Desenvolvemos um programa de controle de pragas que se integra no plano de manutenção existente, com calendário de intervenções coordenado com as operações do edifício." },
    { title: "Implementação discreta", content: "Os nossos técnicos realizam todas as intervenções de forma profissional e discreta, utilizando equipamento e vestuário adequados e respeitando as regras do edifício." },
    { title: "Monitorização contínua", content: "Sistemas de monitorização instalados em pontos estratégicos fornecem dados em tempo real sobre a atividade de pragas, permitindo intervenções proativas." },
    { title: "Relatórios e comunicação", content: "Fornecemos relatórios regulares ao gestor de instalações e apoiamos a comunicação com inquilinos quando necessário, mantendo total transparência." }
  ],
  whyTitle: "Porquê a Bioprev para as suas instalações?",
  whyText1: "Gerir instalações é um trabalho exigente que requer parceiros de confiança. Na Bioprev, compreendemos a pressão de manter edifícios em perfeitas condições e a importância de prevenir problemas antes que afetem os ocupantes. Trabalhamos como uma extensão da sua equipa de manutenção.",
  whyText2: "A nossa experiência com os mais diversos tipos de edifícios em Angola permite-nos antecipar problemas e implementar soluções que protegem não só a estrutura física, mas também o valor e a reputação dos seus imóveis.",
  processCards: [
    { icon: Search, title: "1. Inspeção do edifício", subtitle: "Avaliação completa de todas as áreas", items: ["Inspeção de fundações ao telhado", "Identificação de pontos de entrada", "Mapeamento de áreas de risco"] },
    { icon: Target, title: "2. Programa integrado", subtitle: "Soluções adaptadas ao edifício", items: ["Calendário coordenado com manutenção", "Intervenções fora do horário laboral", "Métodos discretos e profissionais"] },
    { icon: CheckCircle2, title: "3. Gestão contínua", subtitle: "Acompanhamento permanente", items: ["Relatórios mensais de gestão", "Monitorização em tempo real", "Resposta rápida a emergências"] }
  ],
  ctaTitle: "Proteja as suas instalações com a Bioprev"
};

export default function Facilities() {
  return <SectorPageTemplate data={data} />;
}
