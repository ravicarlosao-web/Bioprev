import { Zap, Shield, Bug, SprayCan, Droplets, Trees, Trash2, ClipboardCheck } from "lucide-react";
import ServicePageTemplate, { type ServicePageData } from "../services/ServicePageTemplate";

const data: ServicePageData = {
  seoTitle: "Soluções Nacionais de Controle de Pragas",
  seoDescription: "Todos os serviços Bioprev num único programa nacional: desinfestação, limpeza, resíduos, água e jardinagem coordenados centralmente em Angola.",
  seoKeywords: "soluções nacionais pragas Angola, serviços integrados controle pragas, programa nacional Bioprev, serviços multi-localização",
  seoCanonical: "/national-accounts/solutions",
  heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=75&w=1280",
  heroImageAlt: "Soluções nacionais Bioprev",
  breadcrumbLabel: "Soluções nacionais",
  breadcrumbParent: { label: "Contas nacionais", href: "/national-accounts" },
  heroTitle: "Soluções nacionais de\ncontrole de pragas",
  heroSubtitle: "Uma gama completa de serviços disponíveis em todas as regiões de Angola através do programa de Contas Nacionais. Desinfestação, limpeza, recolha de resíduos, tratamento de água e jardinagem — tudo coordenado centralmente.",
  introText: "O programa de Contas Nacionais da Bioprev disponibiliza todos os nossos serviços de forma integrada e coordenada em todas as suas localizações. Cada serviço é prestado por equipas locais especializadas, com supervisão centralizada do gestor de conta.",
  introSubtext: "Desde a desinfestação e controle de pragas até à limpeza profissional, recolha de resíduos, tratamento de água e jardinagem — oferecemos uma solução completa que cobre todas as necessidades de higiene e manutenção das suas instalações em Luanda, Benguela, Huambo e outras regiões de Angola.",
  sectionTitle: "Todos os serviços num único programa",
  sectionText: "As soluções nacionais da Bioprev integram todos os nossos serviços num programa coerente e coordenado, eliminando a necessidade de gerir múltiplos fornecedores e contratos para diferentes necessidades de higiene e manutenção.",
  serviceCards: [
    {
      title: "Desinfestação e controle de pragas",
      description: "Fumigação, pulverização, desratização, desbaratização e gel — todos os métodos de desinfestação disponíveis em todas as suas localizações, com protocolos padronizados e relatórios unificados.",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=75&w=800",
      imageAlt: "Desinfestação nacional"
    },
    {
      title: "Limpeza, resíduos e manutenção",
      description: "Limpeza industrial e doméstica, recolha de resíduos, tratamento de água e jardinagem — serviços complementares que garantem a higiene e apresentação de todas as suas instalações.",
      image: "https://images.unsplash.com/photo-1581578731522-745505146317?auto=format&fit=crop&q=75&w=800",
      imageAlt: "Serviços complementares"
    }
  ],
  detailsTitle: "Serviços disponíveis no programa",
  detailsSubtitle: "Todos os serviços da Bioprev estão disponíveis no programa de Contas Nacionais, permitindo que a sua organização beneficie de uma solução integrada para todas as necessidades.",
  details: [
    { icon: Shield, title: "Desinfestação geral", description: "Fumigação, pulverização, desratização, desbaratização e aplicação de gel em todas as suas instalações, com métodos selecionados de acordo com o tipo de praga e o ambiente de cada unidade." },
    { icon: Bug, title: "Controle de gorgulhos e traças", description: "Proteção especializada para produtos armazenados — cereais, grãos, têxteis e arquivos — com monitorização por feromonas, tratamento térmico e relatórios estatísticos de controle por localização." },
    { icon: SprayCan, title: "Limpeza profissional", description: "Limpeza industrial, doméstica, hospitalar, de áreas alimentares, escritórios, varredura urbana e limpeza de tanques de combustível em todas as suas unidades." },
    { icon: Trash2, title: "Recolha de resíduos", description: "Recolha e gestão de resíduos urbanos, domésticos, pós-construção, hospitalares e industriais com frota própria e certificação de destino final para cada localização." },
    { icon: Droplets, title: "Tratamento de água", description: "Fornecimento e tratamento de água potável para as suas instalações, garantindo a qualidade e segurança do abastecimento em conformidade com as normas sanitárias." },
    { icon: Trees, title: "Jardinagem e paisagismo", description: "Manutenção de espaços verdes, jardins e áreas exteriores das suas instalações, contribuindo para um ambiente agradável e a imagem profissional da organização." },
    { icon: Zap, title: "Resposta de emergência", description: "Serviço de resposta rápida para emergências de pragas em qualquer localização, com mobilização coordenada de equipas e recursos das filiais mais próximas." },
    { icon: ClipboardCheck, title: "Auditorias e conformidade", description: "Auditorias regulares de higiene e controle de pragas em todas as instalações, com documentação e relatórios que suportam auditorias externas e requisitos de certificação." }
  ],
  approachTitle: "Como implementamos as soluções nacionais",
  approachText: "A implementação das soluções nacionais segue uma abordagem estruturada que garante que cada serviço é adaptado às necessidades específicas de cada localização, mantendo a consistência organizacional.",
  approachSteps: [
    { title: "Mapeamento de necessidades por localização", content: "Para cada instalação, identificamos quais serviços são necessários — desinfestação, limpeza, recolha de resíduos, água ou jardinagem — e definimos os requisitos específicos de cada um com base nas condições locais." },
    { title: "Programa integrado multi-serviço", content: "Desenvolvemos um programa que integra todos os serviços necessários num cronograma coordenado, evitando sobreposições e maximizando a eficiência das intervenções em cada localização." },
    { title: "Atribuição de equipas especializadas", content: "Cada serviço é prestado por equipas especializadas da filial mais próxima — Luanda, Benguela ou Huambo — garantindo conhecimento local e tempos de resposta rápidos." },
    { title: "Monitorização integrada", content: "Todos os serviços são monitorizados de forma integrada, com relatórios que combinam dados de desinfestação, limpeza, resíduos e outros serviços para oferecer uma visão completa do estado de cada instalação." },
    { title: "Revisão e adaptação", content: "Realizamos revisões periódicas de todos os serviços para avaliar resultados, identificar novas necessidades e adaptar o programa às mudanças nas operações ou nas condições das instalações." }
  ],
  whyTitle: "Uma solução completa para toda a organização",
  whyText1: "Gerir múltiplos fornecedores para diferentes serviços de higiene e manutenção consome tempo, gera inconsistências e dificulta a visibilidade sobre o estado geral das suas instalações. Com as soluções nacionais da Bioprev, simplifica tudo num único programa integrado.",
  whyText2: "Desde a desinfestação até à jardinagem, cada serviço é coordenado pelo mesmo gestor de conta, prestado por equipas especializadas e documentado em relatórios consolidados. O resultado é menos trabalho administrativo, mais consistência e melhor proteção para toda a organização.",
  ctaTitle: "Todas as soluções que a sua organização precisa"
};

export default function Solutions() {
  return <ServicePageTemplate data={data} />;
}
