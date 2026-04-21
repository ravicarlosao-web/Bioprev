import { Sparkles, Building2, Factory, Home, Truck, Fuel, GraduationCap, Hotel, Utensils, Briefcase, ShoppingCart, Warehouse, Pill } from "lucide-react";
import ServicePageTemplate, { type ServicePageData } from "./ServicePageTemplate";

const data: ServicePageData = {
  seoTitle: "Limpeza Profissional em Angola",
  seoDescription: "Serviços de limpeza industrial, doméstica, urbana e de tanques de combustível em Angola. A Bioprev mantém os seus espaços limpos e saudáveis em Luanda, Benguela e Huambo.",
  seoKeywords: "limpeza profissional Angola, limpeza industrial Luanda, limpeza doméstica Angola, varredura urbana, limpeza tanques combustível, Bioprev limpeza",
  seoCanonical: "/services/cleaning",
  heroImage: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1920",
  heroImageAlt: "Equipa profissional de limpeza em serviço",
  breadcrumbLabel: "Serviços de limpeza",
  heroTitle: "Serviços de limpeza\nprofissional",
  heroSubtitle: "Limpeza industrial, doméstica, urbana e de tanques de combustível. A BIOPREV desenvolveu uma equipa especializada e equipada com equipamentos de última geração para manter o seu espaço limpo e saudável.",
  introText: "Identificando a necessidade e importância de manter o seu ambiente de trabalho limpo e saudável, a BIOPREV desenvolveu uma equipa especializada e equipada com equipamentos de última geração, para manter a sua empresa mais limpa e saudável, ajudando assim a manter os seus colaboradores em plena saúde e produtividade.",
  introSubtext: "Temos os melhores técnicos certificados, equipamentos de última geração e muita vontade de tornar o seu espaço limpo e seguro. Oferecemos limpeza industrial, hospitalar, de área alimentar, escritórios, centros comerciais, pós obra, estacionamento, áreas públicas, limpeza doméstica, varredura urbana em vias públicas e limpeza de tanques de combustível.",
  sectionTitle: "Excelência em higiene para todos os espaços",
  sectionText: "A Bioprev fornece programas de limpeza profissional que se adaptam ao ritmo do seu negócio e às necessidades do seu lar, garantindo espaços limpos, seguros e acolhedores para colaboradores, clientes, visitantes e famílias.",
  serviceCards: [
    {
      title: "Limpeza comercial e industrial",
      description: "Serviços de limpeza para escritórios, lojas, fábricas, hospitais, áreas alimentares, centros comerciais e espaços públicos, com equipas dedicadas, equipamento de última geração e horários flexíveis.",
      image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=75&w=800",
      imageAlt: "Limpeza comercial e industrial"
    },
    {
      title: "Limpeza doméstica e urbana",
      description: "Serviços de limpeza para residências, condomínios e varredura urbana em vias públicas. A limpeza das cidades é uma necessidade higiénica, de proteção ambiental e estética, imperativa para a saúde pública.",
      image: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&q=75&w=800",
      imageAlt: "Limpeza doméstica e urbana"
    }
  ],
  detailsTitle: "Os nossos serviços de limpeza",
  detailsSubtitle: "Soluções completas de limpeza profissional para todos os tipos de espaços — industriais, comerciais, domésticos, urbanos e especializados.",
  details: [
    { icon: Factory, title: "Limpeza industrial", description: "Limpeza especializada de instalações de produção, armazéns e áreas técnicas. Ambientes industriais exigem equipamentos e técnicas específicas para cada tipo de superfície e contaminação, garantindo segurança e higiene." },
    { icon: Home, title: "Limpeza doméstica", description: "Serviços de limpeza para residências e condomínios, com equipas treinadas e produtos seguros para o ambiente doméstico. Cuidamos do seu lar com a mesma excelência que aplicamos nos espaços comerciais." },
    { icon: Truck, title: "Varredura urbana em vias públicas", description: "A limpeza das cidades é uma necessidade não só higiénica e de proteção ambiental, mas também estética. A presença de resíduos na via pública representa um problema ambiental, originando impacto visual negativo e acarretando riscos higiénicos e sanitários para a saúde pública." },
    { icon: Fuel, title: "Limpeza de tanques de combustível", description: "Serviço especializado de limpeza e descontaminação de tanques de combustível, utilizando técnicas e equipamentos certificados para garantir a segurança, a qualidade do combustível armazenado e o cumprimento das normas ambientais." },
    { icon: Building2, title: "Limpeza de escritórios", description: "Serviço diário ou periódico de limpeza de escritórios, incluindo áreas de trabalho, salas de reunião, copas e instalações sanitárias, com horários flexíveis adaptados ao funcionamento do seu negócio." },
    { icon: Sparkles, title: "Limpeza hospitalar e alimentar", description: "Programas de limpeza rigorosos para hospitais, clínicas e áreas de preparação alimentar, seguindo protocolos de higiene e desinfecção que garantem a segurança de pacientes, colaboradores e consumidores." },
    { icon: GraduationCap, title: "Limpeza pós-obra e centros comerciais", description: "Serviços de limpeza intensiva após obras de construção ou renovação, e manutenção regular de centros comerciais, estacionamentos e áreas públicas de grande circulação." },
  ],
  approachTitle: "O nosso processo de limpeza",
  approachText: "A Bioprev segue uma metodologia profissional que garante resultados consistentes e de alta qualidade em cada intervenção de limpeza, seja industrial, doméstica ou urbana.",
  approachSteps: [
    { title: "Avaliação do espaço", content: "Realizamos uma avaliação detalhada das suas instalações para compreender as necessidades específicas, o tipo de superfícies, os horários de funcionamento e os requisitos especiais de cada área. Para varredura urbana, avaliamos as vias e o volume de resíduos a tratar." },
    { title: "Definição do plano de limpeza", content: "Desenvolvemos um plano de limpeza personalizado que define a frequência, os métodos, os produtos e os equipamentos a utilizar em cada área — seja escritório, fábrica, residência, via pública ou tanque de combustível." },
    { title: "Execução com equipamentos de última geração", content: "As nossas equipas treinadas executam o plano de limpeza utilizando técnicas profissionais e equipamento de última geração, seguindo protocolos que garantem resultados superiores em qualquer tipo de ambiente." },
    { title: "Controlo de qualidade", content: "Realizamos inspeções regulares de qualidade utilizando checklists detalhados e feedback dos clientes para garantir que os padrões são mantidos e melhorados continuamente em todas as intervenções." },
    { title: "Relatório de serviço", content: "Fornecemos relatórios periódicos que documentam os serviços realizados, os resultados das inspeções de qualidade e as recomendações para otimização do programa de limpeza." }
  ],
  whyTitle: "Porquê escolher a Bioprev para limpeza?",
  whyText1: "Na Bioprev, acreditamos que um ambiente limpo é fundamental para a produtividade, o bem-estar e a imagem profissional da sua organização. As nossas equipas de limpeza são cuidadosamente selecionadas, formadas e supervisionadas para garantir os mais altos padrões de serviço — seja limpeza industrial, doméstica, urbana ou de tanques de combustível.",
  whyText2: "Utilizamos produtos de limpeza ecológicos e equipamento profissional de última geração. A limpeza das cidades, por exemplo, é uma necessidade imperativa que tratamos com a mesma seriedade que a limpeza de instalações industriais. Trabalhamos de forma discreta e eficiente para que os seus espaços estejam sempre impecáveis.",
  ctaTitle: "Ambiente limpo é produtividade garantida",
  sectorsTitle: "Setores onde atuamos com limpeza profissional",
  sectorsText: "A Bioprev adapta os seus serviços de limpeza às exigências de cada setor, garantindo ambientes limpos, seguros e em conformidade com as normas específicas de cada indústria.",
  sectors: [
    { icon: Hotel, name: "Hotelaria", description: "Limpeza profissional de quartos, áreas comuns, restaurantes e spas, mantendo os mais altos padrões de higiene que os hóspedes esperam." },
    { icon: Utensils, name: "Restauração", description: "Programas de limpeza intensiva para cozinhas, salas de refeição e áreas de preparação de alimentos, garantindo conformidade sanitária." },
    { icon: Briefcase, name: "Escritórios", description: "Serviços diários ou periódicos de limpeza para escritórios, salas de reunião, copas e instalações sanitárias, com horários flexíveis." },
    { icon: Building2, name: "Gestão de instalações", description: "Limpeza coordenada para edifícios comerciais com múltiplos pisos e inquilinos, incluindo áreas comuns e zonas técnicas." },
    { icon: Factory, name: "Processamento alimentar", description: "Limpeza especializada de instalações de produção alimentar, seguindo protocolos rigorosos de higiene e desinfecção." },
    { icon: ShoppingCart, name: "Retalho alimentar", description: "Limpeza de supermercados e lojas de alimentos, incluindo áreas de venda, zonas de preparação e câmaras frigoríficas." },
    { icon: Warehouse, name: "Logística e armazenamento", description: "Limpeza industrial de armazéns e centros de distribuição, mantendo condições sanitárias adequadas para as mercadorias." },
    { icon: Pill, name: "Farmacêutica", description: "Limpeza de salas limpas, laboratórios e áreas de produção farmacêutica, cumprindo os padrões GMP exigidos pela indústria." },
  ]
};

export default function Cleaning() {
  return <ServicePageTemplate data={data} />;
}
