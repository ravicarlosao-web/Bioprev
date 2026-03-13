import { Factory, Thermometer, ShieldCheck, ClipboardCheck, Bug, Droplets, Wind, FlaskConical } from "lucide-react";
import { Search, Target, CheckCircle2 } from "lucide-react";
import SectorPageTemplate, { type SectorPageData } from "./SectorPageTemplate";

const data: SectorPageData = {
  seoTitle: "Controle de Pragas para Processamento Alimentar",
  seoDescription: "Soluções de controle de pragas e higiene para a indústria de processamento de alimentos em Angola. Conformidade HACCP e segurança alimentar com a Bioprev.",
  seoKeywords: "controle pragas indústria alimentar Angola, HACCP Angola, segurança alimentar, higiene processamento alimentos, Bioprev alimentar",
  seoCanonical: "/sectors/food-processing",
  heroImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=2000",
  heroImageAlt: "Processamento alimentar",
  breadcrumbLabel: "Processamento alimentar",
  heroTitle: "Controle de pragas para\nprocessamento alimentar",
  heroSubtitle: "Soluções especializadas de controle de pragas para a indústria de processamento de alimentos, garantindo segurança alimentar, conformidade regulamentar e proteção da sua marca.",
  introText: "A indústria de processamento alimentar exige os mais altos padrões de higiene e segurança. Uma infestação de pragas pode comprometer toda a cadeia de produção, resultar em recalls de produtos e causar danos irreparáveis à reputação da sua marca.",
  introSubtext: "A Bioprev compreende os desafios únicos do processamento alimentar e oferece programas de Gestão Integrada de Pragas (IPM) que se integram perfeitamente nas suas operações de produção, sem causar interrupções. Os nossos técnicos possuem formação específica em segurança alimentar e conhecem as normas HACCP, BRC, IFS e outras certificações exigidas pela indústria.",
  sectionTitle: "Proteção completa para a sua linha de produção",
  sectionText: "Desde a receção de matérias-primas até ao produto acabado, a Bioprev protege cada etapa do seu processo de produção alimentar com soluções de controle de pragas que cumprem os mais rigorosos padrões de segurança alimentar.",
  serviceCards: [
    {
      title: "Controle preventivo de pragas",
      description: "Programas preventivos que identificam e eliminam riscos de pragas antes que se tornem problemas, protegendo as suas linhas de produção e garantindo a conformidade com as normas de segurança alimentar.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=1000",
      imageAlt: "Controle preventivo"
    },
    {
      title: "Monitorização contínua",
      description: "Sistemas avançados de monitorização que detetam a atividade de pragas em tempo real, permitindo uma resposta imediata e minimizando o risco de contaminação dos seus produtos alimentares.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000",
      imageAlt: "Monitorização contínua"
    }
  ],
  detailsTitle: "Serviços especializados para processamento alimentar",
  detailsSubtitle: "Conheça as soluções que a Bioprev oferece especificamente para proteger as suas instalações de processamento de alimentos.",
  details: [
    { icon: Factory, title: "Proteção de linhas de produção", description: "Soluções que protegem as suas linhas de produção sem interromper as operações, utilizando métodos aprovados para ambientes alimentares." },
    { icon: Thermometer, title: "Controle em câmaras frias", description: "Programas especializados para câmaras frigoríficas e áreas de armazenamento refrigerado, onde pragas como roedores são particularmente problemáticas." },
    { icon: ShieldCheck, title: "Conformidade HACCP", description: "Os nossos programas são desenhados para apoiar o seu sistema HACCP, com documentação completa e rastreabilidade de todas as intervenções." },
    { icon: ClipboardCheck, title: "Suporte para auditorias", description: "Relatórios detalhados e documentação preparada para auditorias BRC, IFS e outras certificações da indústria alimentar." },
    { icon: Bug, title: "Controle de insetos voadores", description: "Sistemas de captura de insetos voadores estrategicamente posicionados para maximizar a eficácia sem comprometer a segurança alimentar." },
    { icon: Droplets, title: "Gestão de resíduos", description: "Aconselhamento sobre gestão de resíduos para eliminar fontes de atração de pragas nas áreas de produção e armazenamento." },
    { icon: Wind, title: "Vedação e exclusão", description: "Identificação e selagem de pontos de entrada de pragas para evitar infestações nas suas instalações de processamento." },
    { icon: FlaskConical, title: "Tratamentos aprovados", description: "Utilização exclusiva de produtos e métodos aprovados para uso em ambientes de processamento alimentar, garantindo a segurança dos seus produtos." }
  ],
  approachTitle: "A nossa abordagem para o processamento alimentar",
  approachText: "A Bioprev segue uma metodologia rigorosa para garantir que as instalações de processamento alimentar permaneçam livres de pragas e em total conformidade regulamentar.",
  approachSteps: [
    { title: "Auditoria inicial das instalações", content: "Realizamos uma inspeção completa das suas instalações de processamento, identificando pontos críticos de controle, potenciais pontos de entrada de pragas e áreas de risco elevado. Esta auditoria inclui a avaliação das práticas atuais e a análise do ambiente envolvente." },
    { title: "Plano de IPM personalizado", content: "Desenvolvemos um programa de Gestão Integrada de Pragas adaptado às especificidades da sua operação, incluindo os tipos de produtos processados, os turnos de produção e as certificações necessárias." },
    { title: "Implementação sem interrupções", content: "Os nossos técnicos implementam as soluções de forma a não interferir com as suas operações de produção, realizando tratamentos durante paragens programadas ou fora dos horários de produção." },
    { title: "Monitorização e relatórios", content: "Utilizamos sistemas de monitorização avançados e fornecemos relatórios detalhados que documentam todas as atividades, tendências de pragas e ações corretivas, prontos para auditorias." },
    { title: "Revisão e melhoria contínua", content: "Realizamos revisões periódicas do programa para garantir a sua eficácia contínua, adaptando as estratégias às mudanças sazonais e às novas exigências regulamentares." }
  ],
  whyTitle: "Porquê a Bioprev para processamento alimentar?",
  whyText1: "A segurança alimentar não admite compromissos. Na Bioprev, os nossos especialistas em processamento alimentar compreendem os desafios únicos desta indústria e as consequências graves de uma falha no controle de pragas. Trabalhamos como extensão da sua equipa de qualidade, garantindo que as suas instalações cumprem os mais elevados padrões de higiene.",
  whyText2: "Com experiência comprovada junto dos maiores processadores alimentares de Angola, oferecemos soluções que não só eliminam pragas, mas que também demonstram due diligence perante auditores e entidades reguladoras.",
  processCards: [
    { icon: Search, title: "1. Auditoria especializada", subtitle: "Avaliação focada na segurança alimentar", items: ["Inspeção de pontos críticos de controle", "Análise de conformidade HACCP", "Mapeamento de riscos de pragas"] },
    { icon: Target, title: "2. Tratamento integrado", subtitle: "Soluções compatíveis com produção alimentar", items: ["Produtos food-safe aprovados", "Tratamentos fora do horário de produção", "Zero interferência na cadeia de produção"] },
    { icon: CheckCircle2, title: "3. Documentação completa", subtitle: "Suporte total para auditorias e certificações", items: ["Relatórios prontos para auditorias BRC/IFS", "Registos de rastreabilidade completos", "Planos de ação corretiva documentados"] }
  ],
  ctaTitle: "Proteja a sua produção alimentar hoje"
};

export default function FoodProcessing() {
  return <SectorPageTemplate data={data} />;
}
