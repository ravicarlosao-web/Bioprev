import { Trash2, Recycle, Truck, FileCheck, AlertTriangle, Leaf, Factory, Shield, Building, Home, HardHat } from "lucide-react";
import { Search, Target, CheckCircle2 } from "lucide-react";
import ServicePageTemplate, { type ServicePageData } from "./ServicePageTemplate";

const data: ServicePageData = {
  seoTitle: "Recolha de Resíduos em Angola",
  seoDescription: "Recolha de resíduos urbanos, domésticos, hospitalares, industriais e pós-construção em Angola. A Bioprev garante gestão ambiental responsável em Luanda, Benguela e Huambo.",
  seoKeywords: "recolha resíduos Angola, gestão lixo Luanda, resíduos hospitalares, resíduos industriais Angola, recolha lixo, Bioprev resíduos",
  seoCanonical: "/services/waste",
  heroImage: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=2000",
  heroImageAlt: "Recolha de resíduos",
  breadcrumbLabel: "Recolha de resíduos",
  heroTitle: "Recolha de resíduos\ne gestão de lixo",
  heroSubtitle: "Recolha de resíduos urbanos, domésticos, pós-construção, hospitalares e industriais. A BIOPREV conta com equipes especializadas na coleta de resíduos, usando técnicas e tecnologias atualizadas considerando a saúde e imagem dos clientes.",
  introText: "Residual da fonte de produção, para o ponto de tratamento ou disposição final. Para realizarmos os serviços de recolha de resíduos, usamos parâmetros definidos, para selecionarmos o tipo de recipiente e equipamentos a ser utilizado por cada cliente.",
  introSubtext: "A BIOPREV conta com equipes especializadas na coleta de resíduos, usando técnicas de limpeza e coleta de resíduos com ajuda das mais atualizadas tecnologias de remoção de lixo considerando todos os aspetos como saúde e imagem dos clientes. Trabalhamos com soluções de recolha para cinco categorias principais: resíduos urbanos, domésticos, pós-construção, hospitalares e industriais.",
  sectionTitle: "Gestão completa de resíduos para cada necessidade",
  sectionText: "A Bioprev oferece programas de gestão de resíduos que combinam eficiência operacional com responsabilidade ambiental. Cobrimos todas as categorias — desde resíduos urbanos e domésticos até pós-construção, hospitalares e industriais — com equipas e equipamentos adequados a cada tipo.",
  serviceCards: [
    {
      title: "Resíduos urbanos e domésticos",
      description: "Recolha regular de resíduos urbanos em condomínios, bairros e áreas residenciais, além de serviços de recolha doméstica personalizada, mantendo os espaços limpos e saudáveis para as comunidades.",
      image: "https://images.unsplash.com/photo-1618477461839-210199432687?auto=format&fit=crop&q=80&w=1000",
      imageAlt: "Resíduos urbanos e domésticos"
    },
    {
      title: "Resíduos especializados",
      description: "Manuseamento seguro e transporte certificado de resíduos pós-construção, hospitalares e industriais, cumprindo todas as normas de segurança e garantindo o destino correto de cada tipo de resíduo.",
      image: "https://images.unsplash.com/photo-1591193686104-fddba4d0e4d8?auto=format&fit=crop&q=80&w=1000",
      imageAlt: "Resíduos especializados"
    }
  ],
  detailsTitle: "Os nossos serviços de recolha de resíduos",
  detailsSubtitle: "Soluções completas para todos os tipos de resíduos, desde a recolha na origem até ao destino final, com equipas e equipamentos adequados a cada categoria.",
  details: [
    { icon: Trash2, title: "Resíduos urbanos", description: "Serviço de recolha programada de resíduos urbanos em condomínios, bairros e áreas comerciais, com frequência adaptada ao volume de produção e às necessidades da comunidade." },
    { icon: Home, title: "Resíduos domésticos", description: "Recolha de lixo doméstico em residências e condomínios, com contentores adequados e frequência regular, mantendo o ambiente residencial limpo e saudável para as famílias." },
    { icon: HardHat, title: "Resíduos pós-construção", description: "Recolha e remoção de entulho e resíduos gerados por obras de construção, demolição ou renovação, incluindo transporte para destinos licenciados e limpeza do local da obra." },
    { icon: Shield, title: "Resíduos hospitalares", description: "Gestão especializada de resíduos hospitalares e clínicos, seguindo protocolos rigorosos de segurança biológica para o manuseamento, transporte e tratamento adequado de resíduos de saúde." },
    { icon: Factory, title: "Resíduos industriais", description: "Soluções para a gestão de resíduos de produção industrial, incluindo resíduos de processos fabris, químicos e materiais contaminados, com transporte e destino certificados." },
    { icon: Truck, title: "Transporte com frota própria", description: "Frota de veículos próprios licenciados e equipados para o transporte seguro de todos os tipos de resíduos, com rastreabilidade completa desde a recolha até ao destino final." },
    { icon: Recycle, title: "Separação e reciclagem", description: "Implementação de sistemas de separação na origem e recolha seletiva para maximizar a taxa de reciclagem de papel, plástico, vidro e metais, reduzindo custos e impacto ambiental." },
    { icon: FileCheck, title: "Certificação de destino", description: "Documentação completa que certifica o destino final de todos os resíduos recolhidos, garantindo rastreabilidade total e conformidade com as normas ambientais em vigor." }
  ],
  approachTitle: "O nosso ciclo de gestão de resíduos",
  approachText: "A Bioprev segue um ciclo completo de gestão de resíduos que garante a conformidade ambiental e a rastreabilidade desde a origem até ao destino final, para todas as categorias de resíduos.",
  approachSteps: [
    { title: "Identificação e classificação", content: "Realizamos uma avaliação aos resíduos produzidos — urbanos, domésticos, pós-construção, hospitalares ou industriais — classificando-os por tipo e perigosidade, e definindo os parâmetros para seleção do tipo de recipiente e equipamentos adequados." },
    { title: "Acondicionamento e contentores", content: "Fornecemos contentores e sistemas de acondicionamento adequados a cada tipo de resíduo, com sinalização adequada. Para resíduos hospitalares e industriais, utilizamos recipientes especiais que garantem a segurança no manuseamento." },
    { title: "Recolha com frota própria", content: "Os nossos veículos próprios recolhem os resíduos com a frequência definida, utilizando técnicas de limpeza e coleta com as mais atualizadas tecnologias de remoção de lixo, considerando a saúde e imagem dos clientes." },
    { title: "Transporte e destino certificado", content: "Encaminhamos cada tipo de resíduo para o destino mais adequado — reciclagem, tratamento específico ou disposição final — garantindo que todos os processos cumprem as normas ambientais e de segurança." },
    { title: "Certificação e relatórios", content: "Emitimos certificados que documentam o destino final de todos os resíduos recolhidos, garantindo a rastreabilidade total e o cumprimento das obrigações legais da sua empresa ou condomínio." }
  ],
  whyTitle: "Porquê escolher a Bioprev para recolha de resíduos?",
  whyText1: "A BIOPREV conta com equipes especializadas na coleta de resíduos, usando técnicas de limpeza e coleta com ajuda das mais atualizadas tecnologias de remoção de lixo considerando todos os aspetos como saúde e imagem dos clientes. Para realizarmos os serviços de recolha de resíduos, usamos parâmetros definidos, para selecionarmos o tipo de recipiente e equipamentos a ser utilizado por cada cliente.",
  whyText2: "Com frota própria e licenças para o transporte de todos os tipos de resíduos em Angola — urbanos, domésticos, pós-construção, hospitalares e industriais — oferecemos tranquilidade e conformidade total, com documentação que suporta auditorias ambientais e demonstra responsabilidade corporativa.",
  processCards: [
    { icon: Search, title: "1. Avaliação de resíduos", subtitle: "Análise completa dos seus fluxos", items: ["Classificação por tipo: urbano, doméstico, hospitalar, industrial", "Seleção de recipientes e equipamentos adequados", "Definição de frequência de recolha"] },
    { icon: Target, title: "2. Recolha especializada", subtitle: "Frota própria e equipas certificadas", items: ["Recolha urbana e doméstica regular", "Remoção de entulho pós-construção", "Resíduos hospitalares e industriais"] },
    { icon: CheckCircle2, title: "3. Conformidade garantida", subtitle: "Documentação e rastreabilidade total", items: ["Certificados de destino final", "Relatórios ambientais periódicos", "Tecnologias atualizadas de remoção"] }
  ],
  ctaTitle: "Soluções completas de recolha de resíduos"
};

export default function Waste() {
  return <ServicePageTemplate data={data} />;
}
