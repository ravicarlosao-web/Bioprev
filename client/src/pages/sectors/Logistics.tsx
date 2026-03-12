import { Warehouse, PackageCheck, Truck, ClipboardCheck, Bug, ThermometerSun, ScanLine, AlertTriangle } from "lucide-react";
import { Search, Target, CheckCircle2 } from "lucide-react";
import SectorPageTemplate, { type SectorPageData } from "./SectorPageTemplate";

const data: SectorPageData = {
  heroImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000",
  heroImageAlt: "Logística e armazenamento",
  breadcrumbLabel: "Logística e armazenamento",
  heroTitle: "Controle de pragas para\nlogística e armazenamento",
  heroSubtitle: "Proteja as suas mercadorias armazenadas e centros de distribuição com soluções de controle de pragas que salvaguardam a integridade dos seus produtos e da cadeia de abastecimento.",
  introText: "Armazéns e centros de distribuição são alvos privilegiados para pragas devido aos grandes volumes de mercadorias armazenadas. Uma infestação pode resultar em perdas significativas de stock, contaminação de produtos e interrupção da cadeia de abastecimento.",
  introSubtext: "A Bioprev oferece programas especializados para o setor de logística e armazenamento, com soluções que protegem as suas mercadorias desde a receção até à expedição. Os nossos técnicos compreendem as particularidades dos diferentes tipos de armazéns e os riscos específicos associados aos produtos armazenados.",
  sectionTitle: "Proteção integral da cadeia de abastecimento",
  sectionText: "Desde armazéns de matérias-primas a centros de distribuição de produtos acabados, a Bioprev garante que as suas mercadorias estão protegidas contra pragas em todas as fases da cadeia logística.",
  serviceCards: [
    {
      title: "Proteção de armazéns",
      description: "Programas abrangentes de controle de pragas para armazéns de todos os tamanhos, com foco na prevenção de danos a mercadorias armazenadas e na manutenção de condições sanitárias adequadas.",
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=1000",
      imageAlt: "Proteção de armazéns"
    },
    {
      title: "Centros de distribuição",
      description: "Soluções para centros de distribuição com elevada rotação de mercadorias, onde a velocidade das operações exige métodos de controle de pragas eficientes e não disruptivos.",
      image: "https://images.unsplash.com/photo-1565891741441-64926e441838?auto=format&fit=crop&q=80&w=1000",
      imageAlt: "Centros de distribuição"
    }
  ],
  detailsTitle: "Serviços para logística e armazenamento",
  detailsSubtitle: "Soluções especializadas para proteger as suas operações logísticas e mercadorias armazenadas contra todos os tipos de pragas.",
  details: [
    { icon: Warehouse, title: "Proteção de armazéns", description: "Programas de controle de pragas adaptados ao tipo e dimensão do armazém, protegendo mercadorias de alto valor contra roedores, insetos e outras pragas." },
    { icon: PackageCheck, title: "Inspeção de mercadorias", description: "Protocolos de inspeção na receção e expedição de mercadorias para prevenir a entrada e propagação de pragas através da cadeia de abastecimento." },
    { icon: Truck, title: "Proteção em trânsito", description: "Aconselhamento e soluções para proteger mercadorias durante o transporte, minimizando o risco de contaminação durante a distribuição." },
    { icon: ClipboardCheck, title: "Conformidade e auditorias", description: "Documentação completa e relatórios que suportam os requisitos de auditoria e certificação para operações logísticas." },
    { icon: Bug, title: "Controle de pragas de armazém", description: "Tratamentos específicos para pragas comuns em armazéns, incluindo gorgulhos, traças, baratas e roedores." },
    { icon: ThermometerSun, title: "Gestão de condições ambientais", description: "Aconselhamento sobre controle de temperatura e humidade para reduzir as condições favoráveis ao desenvolvimento de pragas." },
    { icon: ScanLine, title: "Monitorização digital", description: "Sistemas de monitorização conectados que fornecem alertas em tempo real e dados analíticos sobre a atividade de pragas no armazém." },
    { icon: AlertTriangle, title: "Resposta a incidentes", description: "Serviço de resposta rápida para lidar com infestações detetadas, minimizando o impacto nas operações e nas mercadorias." }
  ],
  approachTitle: "A nossa abordagem para logística",
  approachText: "A Bioprev implementa programas de controle de pragas que se adaptam ao ritmo das operações logísticas, sem causar paragens ou atrasos na cadeia de abastecimento.",
  approachSteps: [
    { title: "Mapeamento da operação logística", content: "Analisamos o fluxo de mercadorias, os tipos de produtos armazenados, as condições ambientais e os pontos de risco para desenvolver um plano de controle de pragas otimizado." },
    { title: "Programa de prevenção", content: "Implementamos medidas preventivas, incluindo vedação de pontos de entrada, instalação de estações de monitorização e recomendações para boas práticas de armazenamento." },
    { title: "Intervenções coordenadas", content: "Os tratamentos são coordenados com as operações do armazém para evitar interrupções, realizados preferencialmente durante períodos de menor atividade." },
    { title: "Monitorização e alertas", content: "Utilizamos sistemas de monitorização digital que fornecem dados em tempo real e alertas automáticos quando é detetada atividade de pragas." },
    { title: "Análise de tendências e otimização", content: "Analisamos regularmente os dados recolhidos para identificar tendências, otimizar o programa e antecipar riscos sazonais ou relacionados com mudanças nas operações." }
  ],
  whyTitle: "Porquê a Bioprev para logística e armazenamento?",
  whyText1: "As suas mercadorias representam um investimento significativo. Na Bioprev, compreendemos que uma falha no controle de pragas pode resultar em perdas financeiras substanciais e danos à relação com os seus clientes. Os nossos programas são desenhados para proteger o valor das suas mercadorias em todas as fases da cadeia logística.",
  whyText2: "Com experiência em armazéns de todas as dimensões e tipos de mercadorias, oferecemos soluções que equilibram eficácia no controle de pragas com a necessidade de manter operações logísticas fluidas e ininterruptas.",
  processCards: [
    { icon: Search, title: "1. Avaliação do armazém", subtitle: "Análise completa da operação", items: ["Inspeção de todas as áreas de armazenamento", "Avaliação do fluxo de mercadorias", "Identificação de riscos específicos"] },
    { icon: Target, title: "2. Proteção integrada", subtitle: "Soluções sem interrupção operacional", items: ["Tratamentos fora do pico operacional", "Métodos seguros para mercadorias", "Monitorização digital contínua"] },
    { icon: CheckCircle2, title: "3. Rastreabilidade total", subtitle: "Documentação para auditorias", items: ["Relatórios detalhados de intervenções", "Análise de tendências de pragas", "Suporte para certificações logísticas"] }
  ],
  ctaTitle: "Proteja as suas mercadorias e armazéns"
};

export default function Logistics() {
  return <SectorPageTemplate data={data} />;
}
