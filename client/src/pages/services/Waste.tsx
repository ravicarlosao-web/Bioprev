import { Trash2, Recycle, Truck, FileCheck, AlertTriangle, Leaf, Factory, Shield } from "lucide-react";
import { Search, Target, CheckCircle2 } from "lucide-react";
import ServicePageTemplate, { type ServicePageData } from "./ServicePageTemplate";

const data: ServicePageData = {
  heroImage: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=2000",
  heroImageAlt: "Recolha de resíduos",
  breadcrumbLabel: "Recolha de resíduos",
  heroTitle: "Gestão e recolha de\nresíduos",
  heroSubtitle: "Gestão profissional e sustentável de resíduos comerciais e industriais, cumprindo todas as normas ambientais e garantindo o destino correto de cada tipo de resíduo.",
  introText: "A gestão responsável de resíduos é fundamental para a sustentabilidade do seu negócio e para o cumprimento das regulamentações ambientais em Angola. A Bioprev oferece soluções completas de recolha e gestão de resíduos.",
  introSubtext: "A nossa abordagem à gestão de resíduos foca-se na minimização do impacto ambiental e na correta gestão de cada fluxo de desperdício. Trabalhamos com os nossos clientes para implementar programas de separação na origem, maximizar a reciclagem e garantir que todos os resíduos são encaminhados para destinos licenciados e certificados.",
  sectionTitle: "Sustentabilidade e conformidade ambiental",
  sectionText: "A Bioprev oferece programas de gestão de resíduos que combinam eficiência operacional com responsabilidade ambiental, ajudando o seu negócio a cumprir todas as obrigações legais e a contribuir para um futuro mais sustentável.",
  serviceCards: [
    {
      title: "Resíduos perigosos",
      description: "Manuseamento seguro, transporte certificado e tratamento adequado de resíduos perigosos, incluindo químicos, biológicos e hospitalares, cumprindo todas as normas de segurança.",
      image: "https://images.unsplash.com/photo-1618477461839-210199432687?auto=format&fit=crop&q=80&w=1000",
      imageAlt: "Resíduos perigosos"
    },
    {
      title: "Reciclagem comercial",
      description: "Maximizamos o reaproveitamento de materiais recicláveis do seu negócio — papel, plástico, vidro e metais — com programas de separação na origem e recolha dedicada.",
      image: "https://images.unsplash.com/photo-1591193686104-fddba4d0e4d8?auto=format&fit=crop&q=80&w=1000",
      imageAlt: "Reciclagem comercial"
    }
  ],
  detailsTitle: "Os nossos serviços de gestão de resíduos",
  detailsSubtitle: "Soluções completas para todos os tipos de resíduos, desde a separação na origem até ao destino final certificado.",
  details: [
    { icon: Trash2, title: "Recolha regular", description: "Serviço de recolha programada de resíduos comerciais com frequência adaptada ao volume de produção do seu negócio." },
    { icon: Recycle, title: "Programas de reciclagem", description: "Implementação de sistemas de separação na origem e recolha seletiva para maximizar a taxa de reciclagem e reduzir custos de eliminação." },
    { icon: AlertTriangle, title: "Resíduos perigosos", description: "Gestão especializada de resíduos perigosos — químicos, biológicos, eletrónicos — com manuseamento, transporte e tratamento certificados." },
    { icon: Truck, title: "Transporte licenciado", description: "Frota de veículos licenciados e equipados para o transporte seguro de todos os tipos de resíduos, incluindo resíduos perigosos." },
    { icon: Factory, title: "Resíduos industriais", description: "Soluções para a gestão de resíduos de produção industrial, incluindo resíduos de construção, demolição e processos fabris." },
    { icon: Leaf, title: "Resíduos orgânicos", description: "Programas de compostagem e valorização de resíduos orgânicos provenientes de restaurantes, cantinas e indústria alimentar." },
    { icon: FileCheck, title: "Certificação de destino", description: "Documentação completa que certifica o destino final de todos os resíduos recolhidos, garantindo rastreabilidade e conformidade legal." },
    { icon: Shield, title: "Resíduos hospitalares", description: "Gestão especializada de resíduos hospitalares e clínicos, seguindo protocolos rigorosos de segurança biológica." }
  ],
  approachTitle: "O nosso ciclo de gestão de resíduos",
  approachText: "A Bioprev segue um ciclo completo de gestão de resíduos que garante a conformidade ambiental e a rastreabilidade desde a origem até ao destino final.",
  approachSteps: [
    { title: "Identificação e classificação", content: "Realizamos uma auditoria aos resíduos produzidos pelo seu negócio, classificando-os por tipo e perigosidade, e identificando oportunidades de redução e reciclagem." },
    { title: "Acondicionamento seguro", content: "Fornecemos contentores e sistemas de acondicionamento adequados a cada tipo de resíduo, incluindo sinalização e formação dos colaboradores sobre separação na origem." },
    { title: "Transporte licenciado", content: "Os nossos veículos licenciados recolhem os resíduos com a frequência definida, seguindo rotas otimizadas e protocolos de segurança adequados ao tipo de carga." },
    { title: "Tratamento e reciclagem", content: "Encaminhamos cada tipo de resíduo para o destino mais adequado — reciclagem, valorização energética, compostagem ou tratamento específico — maximizando a recuperação de materiais." },
    { title: "Certificação de destino final", content: "Emitimos certificados que documentam o destino final de todos os resíduos recolhidos, garantindo a rastreabilidade total e o cumprimento das obrigações legais da sua empresa." }
  ],
  whyTitle: "Porquê escolher a Bioprev para gestão de resíduos?",
  whyText1: "A gestão adequada de resíduos é uma obrigação legal e uma responsabilidade ambiental. Na Bioprev, ajudamos os nossos clientes a transformar a gestão de resíduos de um custo numa oportunidade, maximizando a reciclagem e reduzindo os volumes enviados para aterro.",
  whyText2: "Com licenças e certificações para o transporte e gestão de todos os tipos de resíduos em Angola, oferecemos tranquilidade e conformidade total aos nossos clientes, com documentação que suporta auditorias ambientais e demonstra responsabilidade corporativa.",
  processCards: [
    { icon: Search, title: "1. Auditoria de resíduos", subtitle: "Análise completa dos seus fluxos", items: ["Classificação de todos os tipos de resíduos", "Identificação de oportunidades de reciclagem", "Proposta de otimização personalizada"] },
    { icon: Target, title: "2. Gestão integrada", subtitle: "Recolha e tratamento certificados", items: ["Contentores adequados a cada resíduo", "Recolha programada com veículos licenciados", "Destinos de tratamento certificados"] },
    { icon: CheckCircle2, title: "3. Conformidade garantida", subtitle: "Documentação e rastreabilidade total", items: ["Certificados de destino final", "Relatórios ambientais periódicos", "Suporte para auditorias ambientais"] }
  ],
  ctaTitle: "Soluções sustentáveis para o seu negócio"
};

export default function Waste() {
  return <ServicePageTemplate data={data} />;
}
