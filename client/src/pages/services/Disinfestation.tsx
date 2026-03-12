import { ShieldCheck, Zap, Shield, SprayCan, Microscope, Wind, FileCheck, AlertTriangle } from "lucide-react";
import { Search, Target, CheckCircle2 } from "lucide-react";
import ServicePageTemplate, { type ServicePageData } from "./ServicePageTemplate";

const data: ServicePageData = {
  heroImage: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&q=80&w=2000",
  heroImageAlt: "Serviço de desinfestação",
  breadcrumbLabel: "Desinfestação",
  heroTitle: "Serviços e soluções de\ndesinfestação profissional",
  heroSubtitle: "Como líder nacional em soluções de higiene, a Bioprev oferece serviços de desinfestação especializados, fiáveis e profissionais a clientes comerciais em todo o país.",
  introText: "A Bioprev protege pessoas, residências e empresas dos perigos da falta de higiene e de doenças infecciosas com décadas de experiência no mercado angolano.",
  introSubtext: "Acreditamos que a inovação é um fator-chave para o sucesso. O nosso centro de pesquisa e desenvolvimento fornece aos nossos técnicos as ferramentas e soluções de que necessitam para fornecer serviços de desinfestação diferenciados. A Bioprev está comprometida com a sustentabilidade e em explorar o uso de soluções mais ecológicas e não tóxicas, ao mesmo tempo em que continua a oferecer aos nossos clientes os altos níveis de proteção que as suas empresas necessitam.",
  sectionTitle: "Serviços especializados de desinfestação comercial",
  sectionText: "A Bioprev dedica-se a manter os seus funcionários, clientes e a reputação da marca protegidos com serviços de desinfestação líderes de mercado, adaptados ao seu negócio e que apoiam totalmente a conformidade regulamentar. Com a higiene como prioridade, as nossas equipas de especialistas podem ajudar a salvaguardar o seu negócio para o futuro.",
  serviceCards: [
    {
      title: "Desinfestação especializada",
      description: "Os nossos serviços de desinfestação especializada fornecem uma resposta rápida para ajudá-lo a manter um alto nível de higiene nas suas instalações, reduzindo o risco de infecção e contaminação.",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000",
      imageAlt: "Desinfestação especializada"
    },
    {
      title: "Desinfestação preventiva",
      description: "Uma série de soluções de desinfestação preventiva concebidas para ajudar as empresas a manter um ambiente seguro e proporcionar paz de espírito aos funcionários e visitantes.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000",
      imageAlt: "Desinfestação preventiva"
    }
  ],
  detailsTitle: "As nossas soluções de desinfestação",
  detailsSubtitle: "Conheça em detalhe os serviços especializados de desinfestação que a Bioprev oferece para proteger o seu negócio e as suas instalações.",
  details: [
    { icon: SprayCan, title: "Nebulização ULV", description: "Tratamentos de nebulização de ultra-baixo volume que eliminam patógenos em grandes áreas de forma rápida e eficaz, com mínima interrupção das operações." },
    { icon: ShieldCheck, title: "Desinfestação de superfícies", description: "Tratamentos de contacto para superfícies de alto risco, incluindo maçanetas, balcões, interruptores e outras áreas frequentemente tocadas." },
    { icon: Microscope, title: "Análise microbiológica", description: "Testes laboratoriais para identificar os agentes patogénicos presentes e determinar o tratamento mais eficaz para a situação específica." },
    { icon: Shield, title: "Proteção contra vírus", description: "Programas especializados de desinfestação contra vírus, incluindo coronavírus, influenza e outros patógenos de elevado risco." },
    { icon: Wind, title: "Tratamento de ar e HVAC", description: "Desinfestação de sistemas de ventilação e ar condicionado para prevenir a propagação de patógenos através da circulação de ar." },
    { icon: FileCheck, title: "Certificação pós-tratamento", description: "Emissão de certificados de desinfestação que comprovam o cumprimento dos protocolos de higiene e segurança exigidos." },
    { icon: Zap, title: "Resposta de emergência", description: "Serviço de desinfestação de emergência disponível para situações de surtos ou contaminações que requerem intervenção imediata." },
    { icon: AlertTriangle, title: "Gestão de surtos", description: "Protocolos específicos para gestão de surtos infecciosos, com isolamento de áreas afetadas e descontaminação progressiva." }
  ],
  approachTitle: "O nosso processo de desinfestação",
  approachText: "A Bioprev segue uma abordagem rigorosa para a desinfestação profissional, garantindo que todas as etapas sejam tratadas com os mais altos padrões de segurança e qualidade.",
  approachSteps: [
    { title: "Pesquisa e avaliação de risco", content: "Realizamos uma avaliação detalhada das suas instalações para identificar áreas de alto risco, pontos de contacto frequente e potenciais fontes de contaminação. Esta análise permite-nos desenvolver um plano de desinfestação personalizado." },
    { title: "Preparação e protocolos de segurança", content: "Antes de iniciar o tratamento, estabelecemos todos os protocolos de segurança necessários, incluindo isolamento de áreas, proteção de equipamentos sensíveis e coordenação com a sua equipa para minimizar interrupções." },
    { title: "Implementação do tratamento", content: "Os nossos técnicos certificados aplicam os tratamentos utilizando equipamento de última geração e produtos aprovados, seguindo rigorosos protocolos que garantem a eliminação eficaz de patógenos." },
    { title: "Verificação pós-tratamento", content: "Após o tratamento, realizamos testes de verificação para confirmar a eficácia da desinfestação e garantir que os níveis de segurança foram alcançados em todas as áreas tratadas." },
    { title: "Certificação e relatórios", content: "Emitimos um certificado de desinfestação e um relatório detalhado que documenta todas as áreas tratadas, os métodos utilizados e os resultados obtidos, prontos para auditorias e inspeções." }
  ],
  whyTitle: "Porquê escolher a Bioprev para desinfestação?",
  whyText1: "Na Bioprev, os nossos especialistas em desinfestação dedicam-se a identificar as soluções mais seguras e eficazes para proteger a sua casa e negócio. Entendendo que cada situação é única, enfatizamos a necessidade de uma inspeção minuciosa antes de cada tratamento. Esta abordagem permite-nos adaptar os nossos métodos especificamente às suas necessidades, garantindo a higienização mais eficiente e eficaz.",
  whyText2: "Escolha a Bioprev para uma experiência sem complicações, soluções ecológicas e um compromisso com os mais altos padrões de serviço e segurança. Os nossos técnicos são certificados e utilizam apenas produtos aprovados pelas autoridades competentes.",
  processCards: [
    { icon: Search, title: "1. Avaliação de risco", subtitle: "Pesquisa e consulta sem complicações", items: ["Inspeção programada no horário de sua conveniência", "Revisão e consultoria de risco de higiene no local", "Orçamento sem compromisso e recomendações"] },
    { icon: Target, title: "2. Tratamento de desinfestação", subtitle: "Programa abrangente adaptado às suas necessidades", items: ["Especialistas locais certificados em desinfestação", "Tratamentos avançados de nebulização ULV e superfícies", "Padrões de segurança específicos do setor"] },
    { icon: CheckCircle2, title: "3. Verificação e certificação", subtitle: "Garantindo um ambiente limpo e seguro", items: ["Certificado de higiene pós-serviço", "Relatórios e recomendações detalhados", "Aconselhamento na manutenção de ambientes seguros"] }
  ],
  ctaTitle: "Agende a sua avaliação de risco de higiene hoje"
};

export default function Disinfestation() {
  return <ServicePageTemplate data={data} />;
}
