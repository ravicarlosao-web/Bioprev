import { Globe, Users, Building2, BarChart3, Handshake, ShieldCheck, Clock, HeadphonesIcon } from "lucide-react";
import ServicePageTemplate, { type ServicePageData } from "../services/ServicePageTemplate";

const data: ServicePageData = {
  seoTitle: "Contas Nacionais — Visão Geral",
  seoDescription: "Programa centralizado de gestão de pragas para empresas com múltiplas localizações em Angola. Simplifique custos e garanta proteção consistente com a Bioprev.",
  seoKeywords: "contas nacionais controle pragas Angola, gestão centralizada pragas, programa multi-localizações, Bioprev contas nacionais",
  seoCanonical: "/national-accounts/overview",
  heroImage: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=75&w=1280",
  heroImageAlt: "Visão geral das contas nacionais",
  breadcrumbLabel: "Visão geral",
  breadcrumbParent: { label: "Contas nacionais", href: "/national-accounts" },
  heroTitle: "Visão geral das\nContas Nacionais",
  heroSubtitle: "Um programa centralizado de gestão de pragas para empresas com múltiplas localizações em Angola. Simplifique a gestão, reduza custos e garanta proteção consistente em todas as suas instalações.",
  introText: "Empresas com múltiplas localizações enfrentam desafios únicos na gestão de pragas: garantir serviço consistente, coordenar fornecedores e manter visibilidade sobre o estado de cada unidade. O programa de Contas Nacionais da Bioprev foi desenhado para resolver estes desafios.",
  introSubtext: "Com um gestor de conta dedicado, protocolos padronizados e equipas locais em Luanda, Benguela e Huambo, o nosso programa garante que cada instalação da sua organização recebe o mesmo nível de excelência. Um único contrato, um único ponto de contacto e relatórios consolidados que simplificam a gestão e reduzem custos operacionais.",
  sectionTitle: "Como funciona o programa de Contas Nacionais",
  sectionText: "O programa foi desenhado para empresas que operam em múltiplas regiões de Angola e necessitam de uma abordagem centralizada, eficiente e transparente para o controle de pragas em todas as suas instalações.",
  serviceCards: [
    {
      title: "Gestão centralizada",
      description: "Um gestor de conta dedicado coordena todos os serviços em todas as suas localizações, garantindo comunicação clara, resposta rápida e serviço consistente em cada unidade da sua organização.",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=75&w=800",
      imageAlt: "Gestão centralizada"
    },
    {
      title: "Cobertura em todo o país",
      description: "Conheça a BIOPREV — empresa de direito angolano com 15 anos de experiência, com sede em Luanda, na Rua do Clube Hípico S/N, Benfica, com filial em Benguela, Huambo, Lubango e Kwanza Norte, e com objetivos modernos de aplicação profissional e máxima qualidade.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=75&w=800",
      imageAlt: "Cobertura nacional"
    }
  ],
  detailsTitle: "Benefícios do programa",
  detailsSubtitle: "O programa de Contas Nacionais oferece uma série de benefícios que simplificam a gestão de pragas e protegem todas as suas instalações de forma eficiente.",
  details: [
    { icon: Users, title: "Gestor de conta dedicado", description: "Um único ponto de contacto que conhece a fundo a sua organização, coordena todos os serviços e assegura que as suas necessidades são atendidas de forma rápida e eficaz em cada localização." },
    { icon: Building2, title: "Contrato único e simplificado", description: "Um único contrato que cobre todas as suas instalações em Angola, simplificando a gestão administrativa, a faturação e as condições comerciais pelo volume consolidado." },
    { icon: BarChart3, title: "Relatórios consolidados", description: "Relatórios unificados de todas as suas localizações com indicadores de desempenho, tendências, pragas capturadas e estado de cada unidade, fornecendo uma visão completa da organização." },
    { icon: ShieldCheck, title: "Padrões de qualidade consistentes", description: "Protocolos padronizados que garantem o mesmo nível de proteção e qualidade em cada uma das suas unidades, independentemente da região onde se encontram." },
    { icon: Clock, title: "Resposta rápida em todo o país", description: "As nossas equipas locais em Luanda, Benguela e Huambo garantem tempos de resposta rápidos para intervenções de emergência ou serviços programados em qualquer localização." },
    { icon: Handshake, title: "Parceria estratégica", description: "Não somos apenas um fornecedor — somos um parceiro estratégico que compreende os desafios do seu negócio e trabalha proativamente para prevenir problemas e otimizar custos." },
    { icon: Globe, title: "Coordenação entre filiais", description: "Coordenação eficiente entre as nossas filiais para garantir que surtos ou problemas numa localização são comunicados e prevenidos nas restantes unidades da organização." },
    { icon: HeadphonesIcon, title: "Suporte dedicado", description: "Linha de contacto prioritária para clientes de Contas Nacionais, com atendimento preferencial e tempos de resposta garantidos para questões urgentes e não urgentes." }
  ],
  approachTitle: "O processo de ativação do programa",
  approachText: "A ativação do programa de Contas Nacionais segue uma abordagem estruturada para garantir que todas as suas necessidades são compreendidas e atendidas desde o primeiro dia.",
  approachSteps: [
    { title: "Reunião de alinhamento", content: "Reunimos com a sua equipa de gestão para compreender a estrutura da organização, as localizações, os desafios atuais de pragas e os objetivos de serviço. Este alinhamento inicial é fundamental para desenhar um programa que se adapte perfeitamente às suas necessidades." },
    { title: "Auditoria de todas as localizações", content: "As nossas equipas visitam cada uma das suas instalações para realizar uma avaliação detalhada dos riscos de pragas, identificar vulnerabilidades e documentar as condições específicas de cada unidade." },
    { title: "Plano de gestão personalizado", content: "Com base na auditoria, desenvolvemos um plano de gestão de pragas personalizado que define protocolos, cronogramas, métodos de tratamento e indicadores de desempenho para cada localização." },
    { title: "Atribuição de gestor de conta", content: "Atribuímos um gestor de conta dedicado que será o seu ponto de contacto único, responsável por coordenar todos os serviços, gerir as equipas locais e garantir a qualidade do programa." },
    { title: "Implementação e monitorização", content: "Iniciamos a implementação do programa em todas as localizações simultaneamente, com monitorização contínua e relatórios regulares que permitem acompanhar os resultados e identificar oportunidades de melhoria." }
  ],
  whyTitle: "Porquê escolher as Contas Nacionais da Bioprev?",
  whyText1: "Empresas com presença em múltiplas regiões de Angola precisam de um parceiro que compreenda a complexidade de gerir o controle de pragas de forma centralizada. A Bioprev é a única empresa em Angola com filiais operacionais em Luanda, Benguela e Huambo, garantindo cobertura e proximidade em todo o território.",
  whyText2: "O nosso programa de Contas Nacionais foi desenvolvido com base na experiência adquirida com empresas angolanas de referência, e é desenhado para simplificar a gestão, reduzir custos e garantir que cada instalação recebe proteção de primeiro nível, com total transparência e relatórios unificados.",
  ctaTitle: "Simplifique a gestão de pragas da sua organização"
};

export default function Overview() {
  return <ServicePageTemplate data={data} />;
}
