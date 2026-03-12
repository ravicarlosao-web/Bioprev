import { Sparkles, Building2, Factory, GraduationCap, Sofa, Wind, ClipboardCheck, Clock } from "lucide-react";
import { Search, Target, CheckCircle2 } from "lucide-react";
import ServicePageTemplate, { type ServicePageData } from "./ServicePageTemplate";

const data: ServicePageData = {
  heroImage: "https://images.unsplash.com/photo-1581578731522-745505146317?auto=format&fit=crop&q=80&w=2000",
  heroImageAlt: "Serviços de limpeza",
  breadcrumbLabel: "Serviços de limpeza",
  heroTitle: "Serviços de limpeza\nprofissional",
  heroSubtitle: "Mantemos o seu ambiente de trabalho impecável e higienizado com as melhores práticas do setor, equipas qualificadas e produtos de limpeza de alta qualidade.",
  introText: "A Bioprev oferece serviços de limpeza profissional que vão muito além da limpeza convencional. Cada espaço recebe uma atenção personalizada que garante os mais altos padrões de higiene e apresentação.",
  introSubtext: "As nossas equipas de limpeza são treinadas e equipadas com as mais recentes tecnologias e produtos ecológicos para garantir resultados superiores. Oferecemos soluções de limpeza profunda, manutenção diária e serviços especializados adaptados às necessidades de cada cliente, desde escritórios corporativos a instalações industriais.",
  sectionTitle: "Excelência em higiene para o seu negócio",
  sectionText: "A Bioprev fornece programas de limpeza profissional que se adaptam ao ritmo do seu negócio, garantindo espaços limpos, seguros e acolhedores para colaboradores, clientes e visitantes.",
  serviceCards: [
    {
      title: "Limpeza comercial",
      description: "Serviços de limpeza para escritórios, lojas e espaços públicos que mantêm os seus ambientes sempre apresentáveis e higienizados, com equipas dedicadas e horários flexíveis.",
      image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=1000",
      imageAlt: "Limpeza comercial"
    },
    {
      title: "Limpeza industrial",
      description: "Especialistas em limpeza de ambientes de produção, armazéns e instalações industriais, utilizando equipamento e técnicas adequados a cada tipo de superfície e contaminação.",
      image: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&q=80&w=1000",
      imageAlt: "Limpeza industrial"
    }
  ],
  detailsTitle: "Os nossos serviços de limpeza",
  detailsSubtitle: "Soluções completas de limpeza profissional para todos os tipos de espaços comerciais e industriais.",
  details: [
    { icon: Building2, title: "Limpeza de escritórios", description: "Serviço diário ou periódico de limpeza de escritórios, incluindo áreas de trabalho, salas de reunião, copas e instalações sanitárias." },
    { icon: Factory, title: "Limpeza industrial", description: "Limpeza especializada de instalações de produção, armazéns e áreas técnicas, com equipamento industrial e produtos adequados." },
    { icon: Sparkles, title: "Limpeza profunda", description: "Serviços de limpeza intensiva para renovação de espaços, incluindo limpeza de tetos, paredes, pisos e áreas de difícil acesso." },
    { icon: GraduationCap, title: "Instituições de ensino", description: "Programas de limpeza adaptados a escolas e universidades, com foco na higiene de salas de aula, cantinas e áreas desportivas." },
    { icon: Sofa, title: "Limpeza de estofados", description: "Tratamento profissional de carpetes, tapetes, cortinas e mobiliário estofado com equipamento de extração e produtos especializados." },
    { icon: Wind, title: "Tratamento de pisos", description: "Lavagem, enceramento e polimento de pisos de todos os tipos — mosaico, madeira, vinil, betão e pedra natural." },
    { icon: ClipboardCheck, title: "Controlo de qualidade", description: "Inspeções regulares de qualidade para garantir que os padrões de limpeza são mantidos de forma consistente em todas as visitas." },
    { icon: Clock, title: "Horários flexíveis", description: "Serviços de limpeza disponíveis em horários diurnos, noturnos e de fim de semana, adaptados ao funcionamento do seu negócio." }
  ],
  approachTitle: "O nosso processo de limpeza",
  approachText: "A Bioprev segue uma metodologia profissional que garante resultados consistentes e de alta qualidade em cada intervenção de limpeza.",
  approachSteps: [
    { title: "Avaliação do espaço", content: "Realizamos uma avaliação detalhada das suas instalações para compreender as necessidades específicas, o tipo de superfícies, os horários de funcionamento e os requisitos especiais de cada área." },
    { title: "Definição do plano de limpeza", content: "Desenvolvemos um plano de limpeza personalizado que define a frequência, os métodos, os produtos e os equipamentos a utilizar em cada área, garantindo eficiência e consistência." },
    { title: "Execução técnica", content: "As nossas equipas treinadas executam o plano de limpeza utilizando técnicas profissionais e equipamento de qualidade, seguindo protocolos que garantem resultados superiores." },
    { title: "Controlo de qualidade", content: "Realizamos inspeções regulares de qualidade utilizando checklists detalhados e feedback dos clientes para garantir que os padrões são mantidos e melhorados continuamente." },
    { title: "Relatório de serviço", content: "Fornecemos relatórios periódicos que documentam os serviços realizados, os resultados das inspeções de qualidade e as recomendações para otimização do programa." }
  ],
  whyTitle: "Porquê escolher a Bioprev para limpeza?",
  whyText1: "Na Bioprev, acreditamos que um ambiente limpo é fundamental para a produtividade, o bem-estar e a imagem profissional da sua organização. As nossas equipas de limpeza são cuidadosamente selecionadas, formadas e supervisionadas para garantir os mais altos padrões de serviço em cada visita.",
  whyText2: "Utilizamos produtos de limpeza ecológicos e equipamento profissional de última geração, e trabalhamos de forma discreta e eficiente para que os seus espaços estejam sempre impecáveis sem interferir com as suas operações.",
  processCards: [
    { icon: Search, title: "1. Avaliação personalizada", subtitle: "Análise detalhada das suas necessidades", items: ["Inspeção de todas as áreas e superfícies", "Definição de frequência e horários", "Orçamento transparente sem surpresas"] },
    { icon: Target, title: "2. Execução profissional", subtitle: "Equipas treinadas e equipamento de qualidade", items: ["Técnicas profissionais de limpeza", "Produtos ecológicos certificados", "Atenção a cada detalhe"] },
    { icon: CheckCircle2, title: "3. Qualidade garantida", subtitle: "Padrões elevados em cada visita", items: ["Inspeções regulares de qualidade", "Feedback e melhoria contínua", "Relatórios periódicos de serviço"] }
  ],
  ctaTitle: "Ambiente limpo é produtividade garantida"
};

export default function Cleaning() {
  return <ServicePageTemplate data={data} />;
}
