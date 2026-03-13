import { BarChart3, PieChart, LineChart, FileText, Shield, Bug, Rat, Lamp, MousePointer2, ClipboardList, Lock, Monitor, TrendingUp, CheckCircle2, Search, Target } from "lucide-react";
import ServicePageTemplate, { type ServicePageData } from "./ServicePageTemplate";

const data: ServicePageData = {
  seoTitle: "Relatórios Estatísticos de Controle de Pragas — Bioprev Angola",
  seoDescription: "Plataforma online de relatórios estatísticos de controle de pragas. Monitoramento por armadilhas, consumo de pesticida, ocorrência de pragas e gráficos de acompanhamento em tempo real.",
  seoKeywords: "relatórios controle de pragas Angola, monitoramento de pragas, relatório estatístico pragas, armadilha luminosa, porta iscas, armadilhas adesivas, plataforma online pragas, Bioprev relatórios",
  seoCanonical: "/services/reports",
  heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=75&w=1280",
  heroImageAlt: "Relatórios estatísticos de controle de pragas",
  breadcrumbLabel: "Relatórios Estatísticos",
  heroTitle: "Relatórios estatísticos\nde controle de pragas",
  heroSubtitle: "Plataforma online exclusiva para clientes com acesso a relatórios detalhados, gráficos de monitoramento e dados estatísticos em tempo real sobre o controle de pragas nas suas instalações.",
  introTitle: "Plataforma online para clientes",
  introText: "A Bioprev disponibiliza aos seus clientes uma plataforma online com login exclusivo, onde é possível acompanhar toda a evolução do controle de pragas nas suas instalações através de relatórios estatísticos completos e gráficos de monitoramento.",
  introSubtext: "Esta ferramenta permite ao cliente ter total transparência sobre os serviços prestados, acompanhando indicadores-chave como ocorrência de pragas, consumo de pesticidas, eficácia das armadilhas e trabalho preventivo versus corretivo — tudo disponível num painel digital seguro e de fácil utilização.",
  sectionTitle: "Dados e relatórios ao seu alcance",
  sectionText: "A nossa plataforma oferece seis tipos de relatórios especializados e três categorias de gráficos de monitoramento, proporcionando uma visão completa e detalhada do estado do controle de pragas nas suas instalações. Com acesso protegido por login, os seus dados estão sempre seguros e disponíveis.",
  serviceCards: [
    {
      title: "Relatórios detalhados",
      description: "Aceda a seis tipos de relatórios especializados — desde pragas por armadilha até trabalho preventivo e corretivo — com dados precisos para tomada de decisões informadas sobre o controle de pragas na sua empresa.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=75&w=800",
      imageAlt: "Relatórios detalhados de controle de pragas"
    },
    {
      title: "Gráficos de monitoramento",
      description: "Acompanhe visualmente a evolução do controle de pragas com gráficos de monitoramento para armadilhas luminosas, porta iscas e armadilhas adesivas — dados essenciais para garantir a eficácia contínua do programa.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=75&w=800",
      imageAlt: "Gráficos de monitoramento de pragas"
    }
  ],
  detailsTitle: "Os nossos 6 tipos de relatórios",
  detailsSubtitle: "Cada relatório é concebido para fornecer informações específicas e accionáveis sobre diferentes aspectos do programa de controle de pragas nas suas instalações.",
  details: [
    { icon: Lamp, title: "Pragas por Armadilha", description: "Relatório detalhado que identifica quais pragas foram capturadas em cada armadilha instalada, permitindo mapear as áreas mais afetadas e direcionar ações corretivas de forma precisa e eficiente." },
    { icon: FileText, title: "Consumo de Pesticida", description: "Acompanhamento completo do consumo de pesticidas utilizados em cada tratamento, incluindo tipos de produtos, quantidades aplicadas e frequência de utilização, garantindo total transparência e conformidade." },
    { icon: Bug, title: "Ocorrência de Pragas", description: "Registo estatístico de todas as ocorrências de pragas identificadas ao longo do tempo, com análise de tendências sazonais e identificação de padrões que permitem antecipar futuros focos de infestação." },
    { icon: MousePointer2, title: "Relatório por Tipo de Armadilha", description: "Análise comparativa do desempenho de cada tipo de armadilha utilizada — luminosas, adesivas e porta iscas — com dados de captura e eficácia para otimizar a estratégia de posicionamento." },
    { icon: ClipboardList, title: "Trabalho Preventivo/Corretivo", description: "Balanço entre as intervenções preventivas e corretivas realizadas, demonstrando a evolução do programa de controle de pragas e a redução progressiva da necessidade de ações de emergência." },
    { icon: Rat, title: "Armadilhas para Roedores", description: "Relatório específico sobre o monitoramento de roedores, incluindo dados de captura por localização, atividade detectada em estações de monitoramento e eficácia das medidas de desratização implementadas." },
  ],
  approachTitle: "Gráficos de monitoramento",
  approachText: "A plataforma disponibiliza gráficos visuais que permitem acompanhar a evolução do controle de pragas ao longo do tempo, facilitando a identificação de tendências e a tomada de decisões estratégicas.",
  approachSteps: [
    { title: "Armadilha Luminosa", content: "Gráficos de monitoramento das armadilhas luminosas (insectocutores) que capturam insectos voadores. Os dados incluem número de capturas por período, espécies identificadas, picos de atividade e comparação entre localizações, permitindo avaliar a eficácia das armadilhas e ajustar o posicionamento para máxima proteção." },
    { title: "Porta Iscas", content: "Monitoramento gráfico das estações porta iscas instaladas para controle de roedores. Inclui dados de consumo de isca por estação, atividade de roedores detectada, tendências ao longo do tempo e alertas automáticos quando é detectado aumento de atividade, permitindo intervenções rápidas e direcionadas." },
    { title: "Armadilhas Adesivas", content: "Acompanhamento visual das armadilhas adesivas instaladas para monitoramento de insectos rasteiros. Os gráficos mostram o número de capturas por localização, identificação das espécies mais frequentes, variação sazonal e comparação entre áreas internas e externas das instalações." },
  ],
  whyTitle: "Porquê utilizar os nossos relatórios?",
  whyText1: "A plataforma de relatórios estatísticos da Bioprev transforma dados brutos em informações accionáveis. Com acesso protegido por login, cada cliente pode acompanhar em tempo real o estado do controle de pragas nas suas instalações, identificar tendências e tomar decisões informadas baseadas em dados concretos.",
  whyText2: "Os relatórios são essenciais para cumprir requisitos de auditoria, demonstrar conformidade com normas de higiene e segurança alimentar, e comprovar a eficácia do programa de controle de pragas perante entidades reguladoras e clientes. Com a Bioprev, tem toda a informação de que precisa ao alcance de um clique.",
  processCards: [
    { icon: Lock, title: "1. Acesso seguro", subtitle: "Plataforma com login exclusivo", items: ["Credenciais únicas por cliente", "Dados protegidos e encriptados", "Acesso a qualquer hora, em qualquer dispositivo"] },
    { icon: Monitor, title: "2. Painel de controle", subtitle: "Visualização intuitiva dos dados", items: ["6 tipos de relatórios especializados", "Gráficos de monitoramento em tempo real", "Filtros por período, localização e tipo de praga"] },
    { icon: TrendingUp, title: "3. Análise e decisão", subtitle: "Dados que geram acção", items: ["Identificação de tendências e padrões", "Suporte para auditorias e certificações", "Recomendações baseadas em dados"] },
  ],
  ctaTitle: "Solicite acesso à plataforma de relatórios"
};

export default function Reports() {
  return <ServicePageTemplate data={data} />;
}
