import { Pill, FlaskConical, Microscope, ShieldCheck, FileCheck, Thermometer, Wind, Lock } from "lucide-react";
import { Search, Target, CheckCircle2 } from "lucide-react";
import SectorPageTemplate, { type SectorPageData } from "./SectorPageTemplate";

const data: SectorPageData = {
  seoTitle: "Controle de Pragas para Indústria Farmacêutica",
  seoDescription: "Soluções de controle de pragas para laboratórios e fábricas farmacêuticas em Angola. Conformidade GMP e proteção da saúde pública com a Bioprev.",
  seoKeywords: "controle pragas farmacêutica Angola, GMP Angola, pragas laboratórios, higiene farmacêutica, Bioprev farmacêutica",
  seoCanonical: "/sectors/pharmaceutical",
  heroImage: "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=75&w=1280",
  heroImageAlt: "Indústria farmacêutica",
  breadcrumbLabel: "Farmacêutica",
  heroTitle: "Controle de pragas para\na indústria farmacêutica",
  heroSubtitle: "Soluções de controle de pragas que cumprem os rigorosos padrões da indústria farmacêutica, protegendo a integridade dos seus produtos e a saúde pública.",
  introText: "A indústria farmacêutica opera sob as mais rigorosas regulamentações de qualidade e higiene. Uma contaminação por pragas pode comprometer lotes inteiros de medicamentos, resultar em recalls e colocar em risco a saúde pública.",
  introSubtext: "A Bioprev oferece programas de controle de pragas especificamente concebidos para instalações farmacêuticas, incluindo laboratórios, fábricas de produção e centros de distribuição. Os nossos técnicos possuem formação em Boas Práticas de Fabrico (GMP) e compreendem os requisitos regulamentares que regem a indústria farmacêutica em Angola.",
  sectionTitle: "Proteção para ambientes de alta exigência",
  sectionText: "Desde laboratórios de investigação a linhas de produção farmacêutica, a Bioprev oferece soluções que mantêm os ambientes ultra-limpos que a indústria exige, com total rastreabilidade e conformidade regulamentar.",
  serviceCards: [
    {
      title: "Ambientes de produção GMP",
      description: "Programas de controle de pragas desenhados para cumprir os requisitos das Boas Práticas de Fabrico, com documentação completa e métodos compatíveis com ambientes farmacêuticos.",
      image: "https://images.unsplash.com/photo-1563213126-a4273aed2016?auto=format&fit=crop&q=75&w=800",
      imageAlt: "Produção farmacêutica"
    },
    {
      title: "Laboratórios e investigação",
      description: "Soluções para ambientes de laboratório onde a precisão e a esterilidade são fundamentais, utilizando métodos que não interferem com as condições controladas necessárias para a investigação.",
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&q=75&w=800",
      imageAlt: "Laboratório"
    }
  ],
  detailsTitle: "Serviços para a indústria farmacêutica",
  detailsSubtitle: "Soluções que cumprem os mais exigentes padrões da indústria farmacêutica, garantindo a integridade dos seus produtos e processos.",
  details: [
    { icon: Pill, title: "Proteção de áreas de produção", description: "Controle de pragas para linhas de produção farmacêutica, utilizando exclusivamente métodos e produtos compatíveis com ambientes GMP." },
    { icon: FlaskConical, title: "Laboratórios controlados", description: "Soluções para salas limpas e ambientes controlados que mantêm os níveis de esterilidade exigidos para investigação e controle de qualidade." },
    { icon: Microscope, title: "Controle microbiológico", description: "Programas que complementam o seu controle microbiológico, eliminando pragas que podem ser vetores de contaminação microbiana." },
    { icon: ShieldCheck, title: "Conformidade GMP", description: "Todos os nossos processos são documentados e rastreáveis, cumprindo os requisitos das Boas Práticas de Fabrico e prontos para auditorias regulamentares." },
    { icon: FileCheck, title: "Documentação regulamentar", description: "Relatórios e registos detalhados que satisfazem os requisitos de auditorias da FDA, EMA e autoridades regulamentares locais." },
    { icon: Thermometer, title: "Controle ambiental", description: "Monitorização e aconselhamento sobre condições ambientais que influenciam a atividade de pragas em ambientes farmacêuticos." },
    { icon: Wind, title: "Sistemas de exclusão", description: "Implementação de barreiras físicas e sistemas de exclusão que previnem a entrada de pragas em áreas críticas da instalação." },
    { icon: Lock, title: "Áreas de armazenamento", description: "Proteção de armazéns de matérias-primas e produtos acabados contra pragas que podem comprometer a qualidade dos medicamentos." }
  ],
  approachTitle: "A nossa abordagem para o setor farmacêutico",
  approachText: "A Bioprev aplica uma metodologia rigorosa e documentada para o controle de pragas em instalações farmacêuticas, garantindo total conformidade com as normas da indústria.",
  approachSteps: [
    { title: "Avaliação de risco GMP", content: "Realizamos uma avaliação de risco completa segundo os princípios GMP, identificando pontos críticos de controle e classificando áreas por nível de risco de contaminação por pragas." },
    { title: "Programa de qualificação", content: "Desenvolvemos um programa documentado e qualificado que se integra no sistema de qualidade da instalação, com protocolos de intervenção aprovados pela equipa de qualidade." },
    { title: "Implementação controlada", content: "Todas as intervenções seguem procedimentos operacionais padronizados (SOPs) e são realizadas por técnicos com formação GMP, utilizando apenas produtos aprovados para ambientes farmacêuticos." },
    { title: "Monitorização e tendências", content: "Sistemas de monitorização fornecem dados analíticos sobre a atividade de pragas, permitindo análise de tendências e demonstração de controle contínuo perante auditores." },
    { title: "Revisão e validação", content: "O programa é revisto periodicamente em conjunto com a equipa de qualidade, com atualização de procedimentos e revalidação quando ocorrem mudanças nas instalações ou processos." }
  ],
  whyTitle: "Porquê a Bioprev para a indústria farmacêutica?",
  whyText1: "Na indústria farmacêutica, não há margem para compromissos com a qualidade. Na Bioprev, os nossos especialistas compreendem as exigências únicas deste setor e a importância de cada detalhe na prevenção de contaminações. Cada intervenção é documentada, rastreável e realizada segundo os mais altos padrões.",
  whyText2: "Trabalhamos com laboratórios e fabricantes farmacêuticos em Angola, oferecendo um nível de serviço e documentação que satisfaz os requisitos das auditorias mais exigentes e protege a integridade dos seus produtos.",
  processCards: [
    { icon: Search, title: "1. Avaliação de risco", subtitle: "Análise segundo princípios GMP", items: ["Mapeamento de áreas críticas", "Classificação de risco por zona", "Avaliação de pontos de entrada"] },
    { icon: Target, title: "2. Programa qualificado", subtitle: "Métodos aprovados para farmacêutica", items: ["Produtos compatíveis com GMP", "SOPs documentados e aprovados", "Técnicos com formação específica"] },
    { icon: CheckCircle2, title: "3. Conformidade total", subtitle: "Documentação para auditorias", items: ["Relatórios para auditorias regulamentares", "Análise de tendências documentada", "Validação periódica do programa"] }
  ],
  ctaTitle: "Proteja a integridade dos seus produtos farmacêuticos"
};

export default function Pharmaceutical() {
  return <SectorPageTemplate data={data} />;
}
