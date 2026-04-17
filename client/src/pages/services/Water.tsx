import { Droplets, FlaskConical, Truck, ThermometerSun, ShieldCheck, Clock, Building2, Users, Hotel, Factory, Warehouse, HardHat } from "lucide-react";
import ServicePageTemplate, { type ServicePageData } from "./ServicePageTemplate";

const data: ServicePageData = {
  seoTitle: "Fornecimento de Água Potável em Angola",
  seoDescription: "Fornecimento de água potável certificada para eventos, indústria e construção em Angola. A Bioprev garante água pura e segura com cisternas certificadas.",
  seoKeywords: "água potável Angola, fornecimento água Luanda, cisternas água certificada, abastecimento água Angola, Bioprev água",
  seoCanonical: "/services/water",
  heroImage: "https://images.unsplash.com/photo-1548936226-be5006d2e279?auto=format&fit=crop&q=75&w=1280",
  heroImageAlt: "Fornecimento de água potável",
  breadcrumbLabel: "Água potável",
  heroTitle: "Fornecimento de água\npotável",
  heroSubtitle: "Abastecimento de água potável certificada para eventos, indústria, construção e situações de emergência em todo o território angolano.",
  sectionTitle: "Qualidade e pureza em cada entrega",
  sectionText: "A Bioprev fornece água potável para os mais diversos fins — desde grandes eventos a obras de construção, escritórios sem rede de abastecimento e situações de emergência — sempre com qualidade certificada e entrega pontual.",
  serviceCards: [
    {
      title: "Cisternas alimentares",
      description: "Frota de cisternas alimentares certificadas para o transporte seguro de água potável, com limpeza e desinfeção regulares e rastreabilidade completa de cada carga.",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=75&w=800",
      imageAlt: "Cisternas alimentares"
    },
    {
      title: "Apoio a eventos",
      description: "Abastecimento contínuo de água potável para grandes eventos, festivais, feiras e concentrações de público, com planeamento logístico e capacidade de resposta rápida.",
      image: "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&q=75&w=800",
      imageAlt: "Apoio a eventos"
    }
  ],
  detailsTitle: "Os nossos serviços de fornecimento de água",
  detailsSubtitle: "Soluções completas de abastecimento de água potável para todos os setores e situações.",
  details: [
    { icon: Droplets, title: "Água potável certificada", description: "Toda a água fornecida é analisada laboratorialmente e certificada como potável, cumprindo os padrões de qualidade exigidos pelas autoridades de saúde." },
    { icon: FlaskConical, title: "Análises laboratoriais", description: "Realizamos análises microbiológicas e físico-químicas regulares para garantir que a água fornecida mantém a sua qualidade em todas as entregas." },
    { icon: Truck, title: "Transporte em cisternas alimentares", description: "Utilizamos exclusivamente cisternas de grau alimentar, certificadas e regularmente inspecionadas, para garantir a pureza da água durante o transporte." },
    { icon: ThermometerSun, title: "Monitorização de qualidade", description: "Sistemas de monitorização de temperatura e condições de transporte para garantir que a água mantém as suas propriedades desde a captação até à entrega." },
    { icon: ShieldCheck, title: "Limpeza de depósitos", description: "Serviço de limpeza e desinfeção de depósitos e reservatórios de água do cliente, garantindo que o armazenamento não compromete a qualidade." },
    { icon: Clock, title: "Entrega programada e urgente", description: "Serviço de entregas programadas com frequência regular e capacidade de resposta urgente para situações de emergência ou necessidades imprevistas." },
    { icon: Building2, title: "Obras e construção", description: "Abastecimento de água potável para obras de construção civil, garantindo o cumprimento das normas de segurança e saúde no trabalho." },
    { icon: Users, title: "Comunidades e organizações", description: "Fornecimento de água potável para comunidades, organizações e instalações sem acesso à rede de abastecimento público." }
  ],
  approachTitle: "O nosso fluxo de qualidade",
  approachText: "A Bioprev segue um processo rigoroso em cada etapa do fornecimento de água potável, garantindo qualidade e segurança desde a captação até ao ponto de consumo.",
  approachSteps: [
    { title: "Captação controlada", content: "A água é captada de fontes controladas e aprovadas pelas autoridades competentes, com monitorização constante da qualidade na origem." },
    { title: "Análise laboratorial", content: "Antes de cada entrega, realizamos análises microbiológicas e físico-químicas para confirmar que a água cumpre todos os parâmetros de potabilidade exigidos." },
    { title: "Transporte em cisternas alimentares", content: "A água é transportada em cisternas de grau alimentar, limpas e desinfetadas antes de cada carga, com monitorização de condições durante o transporte." },
    { title: "Entrega e armazenamento", content: "A entrega é realizada por técnicos treinados que verificam as condições do ponto de receção e do depósito de armazenamento do cliente antes de transferir a água." },
    { title: "Monitorização de depósitos", content: "Oferecemos serviço de monitorização periódica dos depósitos e reservatórios do cliente, incluindo limpeza e desinfeção programadas para manter a qualidade da água armazenada." }
  ],
  whyTitle: "Porquê escolher a Bioprev para água potável?",
  whyText1: "A qualidade da água que fornece aos seus colaboradores, clientes e visitantes é uma questão de saúde pública e de responsabilidade corporativa. Na Bioprev, cada entrega é tratada com o rigor e a atenção que a saúde das pessoas exige, com rastreabilidade completa e certificação em todas as fases.",
  whyText2: "Com uma frota de cisternas alimentares e uma equipa de técnicos especializados, garantimos entregas pontuais em todo o território angolano, mesmo em situações de emergência ou em locais de difícil acesso.",
  ctaTitle: "Garanta água potável de qualidade para o seu negócio",
  sectorsTitle: "Setores onde fornecemos água potável",
  sectorsText: "A Bioprev garante o abastecimento de água potável certificada para diversos setores, com entregas programadas e capacidade de resposta urgente.",
  sectors: [
    { icon: Hotel, name: "Hotelaria", description: "Abastecimento de água potável para hotéis e resorts, garantindo qualidade para consumo dos hóspedes e operações de cozinha." },
    { icon: Factory, name: "Processamento alimentar", description: "Fornecimento de água certificada para processos de produção alimentar que exigem os mais altos padrões de qualidade." },
    { icon: Building2, name: "Gestão de instalações", description: "Abastecimento de edifícios comerciais e escritórios sem acesso à rede de distribuição ou com necessidade de reforço." },
    { icon: Warehouse, name: "Logística e armazenamento", description: "Fornecimento de água potável para centros logísticos e armazéns, garantindo o bem-estar dos trabalhadores." },
    { icon: HardHat, name: "Construção civil", description: "Abastecimento contínuo de água potável para obras de construção, cumprindo normas de segurança e saúde no trabalho." },
  ]
};

export default function Water() {
  return <ServicePageTemplate data={data} />;
}
