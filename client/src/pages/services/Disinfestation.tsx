import { ShieldCheck, Zap, Shield, SprayCan, Microscope, Wind, FileCheck, AlertTriangle, Bug, Rat, Wheat, Archive, Thermometer, FlaskConical, ScanLine, BarChart3, Factory, Hotel, Utensils, ShoppingCart, Briefcase, Building2, Warehouse, Pill } from "lucide-react";
import { Search, Target, CheckCircle2 } from "lucide-react";
import ServicePageTemplate, { type ServicePageData } from "./ServicePageTemplate";
import desinfestacaoHero from "../../assets/images/service-desinfestacao-hero.jpg";

const data: ServicePageData = {
  seoTitle: "Desinfestação Profissional em Angola",
  seoDescription: "Serviços de desinfestação, fumigação, pulverização, desratização, desbaratização e controlo de gorgulhos e traças em Angola. A Bioprev elimina pragas com segurança em Luanda, Benguela e Huambo.",
  seoKeywords: "desinfestação Angola, fumigação Luanda, pulverização, desratização Angola, desbaratização, gorgulhos, traças, carunchos, controle de pragas Angola, Bioprev desinfestação",
  seoCanonical: "/services/disinfestation",
  heroImage: desinfestacaoHero,
  heroImageAlt: "Serviço de desinfestação",
  breadcrumbLabel: "Desinfestação",
  heroTitle: "Serviços de desinfestação\ngeral e profissional",
  heroSubtitle: "A Bioprev oferece serviços especializados de fumigação, pulverização, desratização, desbaratização, controlo de gorgulhos e traças, e tratamentos com gel — soluções completas para eliminar pragas com segurança e eficiência em todo o país.",
  introText: "A Bioprev protege pessoas, residências e empresas dos perigos das pragas urbanas com mais de nove anos de experiência no mercado angolano. Utilizamos produtos seguros, certificados e sem prejuízo para a saúde do homem e para o meio ambiente.",
  introSubtext: "É com intenção de servir a população e instituições no controlo de pragas que a BIOPREV utiliza equipamentos e métodos mais modernos, com garantia de um serviço profissional, eficiente e uma equipa técnica hábil e dedicada. Tornando-se parte ativa da estratégia e sucesso da empresa, oferecemos alta qualidade ao menor custo possível.",
  sectionTitle: "Serviços especializados de desinfestação geral",
  sectionText: "A Bioprev dedica-se a manter os seus funcionários, clientes e a reputação da marca protegidos com serviços de desinfestação líderes de mercado. Oferecemos métodos completos de desinfestação — fumigação, pulverização, desratização, desbaratização, controlo de gorgulhos e traças, e aplicação de gel — cada um adaptado ao tipo de praga e ao ambiente a tratar.",
  serviceCards: [
    {
      title: "Desinfestação especializada",
      description: "Os nossos serviços de desinfestação especializada fornecem uma resposta rápida para ajudá-lo a manter um alto nível de higiene nas suas instalações, reduzindo o risco de infecção e contaminação através de fumigação, pulverização e tratamentos com gel.",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=75&w=800",
      imageAlt: "Desinfestação especializada"
    },
    {
      title: "Desinfestação preventiva",
      description: "Uma série de soluções de desinfestação preventiva — incluindo desratização, desbaratização e controlo de gorgulhos e traças — concebidas para ajudar as empresas a manter um ambiente seguro e proporcionar paz de espírito aos funcionários e visitantes.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=75&w=800",
      imageAlt: "Desinfestação preventiva"
    }
  ],
  detailsTitle: "Os nossos métodos de desinfestação",
  detailsSubtitle: "Conheça em detalhe cada um dos métodos especializados que a Bioprev utiliza para eliminar pragas de forma segura e eficaz nas suas instalações, incluindo o controlo de gorgulhos, traças e carunchos em produtos armazenados.",
  details: [
    { icon: Wind, title: "Fumigação", description: "A fumigação consiste num tipo de controle de pragas que é um procedimento de desinfestação por via seca. Através do tratamento químico realizado com compostos químicos ou formulações pesticidas (fumegantes) voláteis em sistema hermético, visando a desinfestação de materiais e instalações. A fumaça é o melhor meio de difusão homogénea de um ingrediente ativo." },
    { icon: SprayCan, title: "Pulverização", description: "É a aplicação de um produto pesticida em um alvo vegetal (folhas, tronco, fruta, solo, etc.) em modo de dispersar através de gotas de dimensão variável dependendo do tipo de aparelho de pulverização, que ao secarem garantem uma distribuição correta e uniforme das substâncias ativas." },
    { icon: Rat, title: "Desratização", description: "Os ratos são uma das maiores pragas urbanas. Têm grande impacto nas casas, transmitem muitas doenças e trazem riscos à economia local. O serviço de desratização é feito por profissionais especializados para localizar os focos da infestação de ratos e remover essa praga urbana do local com segurança, através da aplicação de produtos químicos posicionados estrategicamente." },
    { icon: Bug, title: "Desbaratização", description: "A sua casa ou empresa pode ser um terreno fértil para certas espécies de baratas. Elas têm várias formas de obter acesso ao interior, seja através de aberturas da ventilação, canalização ou esgotos. A forma mais eficaz de prevenir das baratas é efectuar o serviço de desbaratização, com aplicação de gel ou spray nos pontos críticos." },
    { icon: Shield, title: "Gel anti-baratas", description: "Produto aconselhável para o controle de baratas, no qual apostamos fortemente, pois tem a vantagem de não ser tóxico. Este gel é aplicado em todos os pontos críticos das instalações, para obter um efeito máximo de mortalidade de baratas em menos de uma semana, sem qualquer risco para a saúde dos ocupantes." },
    { icon: Wheat, title: "Controlo de gorgulhos", description: "Os gorgulhos são insetos dos produtos armazenados que podem infestar cereais, farinhas, grãos, frutas secas, nozes, sementes e tabaco, causando enormes perdas económicas. Oferecemos soluções especializadas para silos, armazéns e indústria alimentar que eliminam gorgulhos e protegem os seus produtos contra contaminação e perdas de stock." },
    { icon: Archive, title: "Controlo de traças e carunchos", description: "Traças e carunchos podem danificar tanto produtos alimentares como têxteis, documentos históricos e coleções de museu. Realizamos tratamentos especializados para eliminar traças têxteis e alimentares, protegendo museus, arquivos, lojas têxteis e armazéns alimentares com métodos seguros e eficazes." },
    { icon: Thermometer, title: "Tratamento térmico", description: "Eliminação de pragas em produtos armazenados através de calor controlado, um método ecológico que não utiliza químicos e é seguro para produtos alimentares e têxteis sensíveis, eliminando todas as fases do ciclo de vida das pragas incluindo ovos e larvas." },
    { icon: FlaskConical, title: "Fumigação de armazéns", description: "Fumigação profissional de armazéns, contentores e silos para eliminar gorgulhos, traças e carunchos em todas as fases do ciclo de vida, incluindo ovos e larvas, com produtos certificados e seguros para produtos alimentares." },
    { icon: ScanLine, title: "Monitorização por feromonas", description: "Armadilhas com feromonas específicas para deteção precoce de atividade de gorgulhos e traças em produtos armazenados, permitindo intervenção antes que a infestação se propague e cause danos significativos aos seus stocks." },
    { icon: ShieldCheck, title: "Desinfestação de superfícies", description: "Tratamentos de contacto para superfícies de alto risco, incluindo maçanetas, balcões, interruptores e outras áreas frequentemente tocadas, garantindo a eliminação de patógenos e pragas de forma segura." },
    { icon: Microscope, title: "Análise e identificação", description: "Testes e inspeções especializadas para identificar o tipo de praga presente — incluindo espécies de gorgulhos, traças e carunchos — determinar os focos de infestação e selecionar o tratamento mais eficaz para a situação específica de cada cliente." },
    { icon: FileCheck, title: "Certificação pós-tratamento", description: "Emissão de certificados de desinfestação que comprovam o cumprimento dos protocolos de higiene e segurança exigidos, com relatórios detalhados de todos os métodos e produtos utilizados." },
    { icon: BarChart3, title: "Relatório estatístico de controle", description: "Cada cliente possui acesso a relatórios estatísticos completos: pragas capturadas por tipo de armadilha, consumo de pesticida, ocorrência de pragas nas fichas de monitoramento, relatórios de trabalho preventivo e corretivo, e ocorrência por tipo de armadilha para roedores." }
  ],
  approachTitle: "O nosso processo de desinfestação",
  approachText: "A Bioprev segue uma abordagem rigorosa para a desinfestação profissional, garantindo que todas as etapas sejam tratadas com os mais altos padrões de segurança e qualidade.",
  approachSteps: [
    { title: "Pesquisa e avaliação de risco", content: "Realizamos uma avaliação detalhada das suas instalações para identificar áreas de alto risco, pontos de contacto frequente e potenciais focos de infestação. Esta análise permite-nos selecionar o método mais adequado — seja fumigação, pulverização, desratização, desbaratização, controlo de gorgulhos e traças, ou gel — para a sua situação específica." },
    { title: "Identificação de espécies e fonte", content: "Identificar e remover a fonte da infestação é essencial. Recolhemos amostras e realizamos análise para identificar a espécie exata — incluindo gorgulhos, traças, escaravelhos e carunchos em produtos armazenados — o ciclo de vida e o nível de infestação, permitindo um tratamento direcionado." },
    { title: "Preparação e protocolos de segurança", content: "Antes de iniciar o tratamento, estabelecemos todos os protocolos de segurança necessários, incluindo isolamento de áreas, proteção de equipamentos sensíveis e coordenação com a sua equipa para minimizar interrupções. Garantimos que todos os produtos utilizados são seguros e certificados." },
    { title: "Aplicação do tratamento especializado", content: "Os nossos técnicos certificados aplicam os tratamentos utilizando equipamento de última geração. Para fumigação, utilizamos sistemas herméticos com fumegantes voláteis. Na pulverização, aplicamos pesticidas com equipamentos de dispersão calibrados. Na desratização, posicionamos produtos químicos estrategicamente. Para gorgulhos e traças, utilizamos tratamento térmico, fumigação controlada ou armadilhas de feromonas conforme a situação." },
    { title: "Verificação pós-tratamento", content: "Após o tratamento, realizamos verificações rigorosas para confirmar a eficácia da desinfestação e garantir que os níveis de segurança foram alcançados em todas as áreas tratadas. Monitoramos os resultados para assegurar a eliminação completa das pragas." },
    { title: "Certificação e relatórios estatísticos", content: "Emitimos um certificado de desinfestação e relatórios estatísticos completos que documentam todas as áreas tratadas, os métodos utilizados, pragas capturadas por tipo de armadilha, consumo de pesticida e resultados obtidos — prontos para auditorias e inspeções regulamentares." },
    { title: "Prevenção e aconselhamento contínuo", content: "Fornecemos recomendações detalhadas sobre boas práticas de armazenamento, rotação de stock e controle ambiental para prevenir futuras infestações, incluindo orientação específica para proteção contra gorgulhos, traças e carunchos em produtos armazenados." }
  ],
  whyTitle: "Porquê escolher a Bioprev para desinfestação?",
  whyText1: "Na Bioprev, os nossos especialistas em desinfestação dedicam-se a identificar as soluções mais seguras e eficazes para proteger a sua casa e negócio. Oferecemos métodos completos — fumigação, pulverização, desratização, desbaratização, controlo de gorgulhos e traças, e gel — cada um selecionado após inspeção minuciosa. Os gorgulhos, traças e carunchos podem destruir stocks inteiros em pouco tempo, sendo um perigo real para a indústria alimentar, armazéns e silos.",
  whyText2: "Utilizamos apenas produtos certificados e sem prejuízo para a saúde do homem e para o meio ambiente. Além de tratamentos eficazes, oferecemos um sistema completo de relatórios estatísticos de controle de pragas — cada cliente possui acesso a dados sobre pragas capturadas, consumo de pesticida, fichas de monitoramento e relatórios de trabalho preventivo e corretivo. Escolha a Bioprev para soluções completas, ecológicas e um compromisso com os mais altos padrões de serviço.",
  processCards: [
    { icon: Search, title: "1. Avaliação de risco", subtitle: "Pesquisa e consulta sem complicações", items: ["Inspeção programada no horário de sua conveniência", "Identificação dos focos de infestação", "Seleção do método mais adequado para cada praga"] },
    { icon: Target, title: "2. Tratamento especializado", subtitle: "Programa abrangente adaptado às suas necessidades", items: ["Fumigação, pulverização ou aplicação de gel", "Desratização, desbaratização e controlo de gorgulhos/traças", "Tratamento térmico e monitorização por feromonas"] },
    { icon: CheckCircle2, title: "3. Verificação e certificação", subtitle: "Garantindo um ambiente limpo e seguro", items: ["Certificado de desinfestação pós-serviço", "Relatórios estatísticos completos por cliente", "Monitoramento contínuo e prevenção de reinfestação"] }
  ],
  ctaTitle: "Agende a sua avaliação de desinfestação hoje",
  sectorsTitle: "Setores onde atuamos com desinfestação",
  sectorsText: "Os nossos serviços de desinfestação são adaptados às necessidades específicas de cada setor, garantindo soluções eficazes e em conformidade com as regulamentações de cada indústria.",
  sectors: [
    { icon: Factory, name: "Processamento alimentar", description: "Proteção de linhas de produção e armazéns de alimentos contra pragas que podem comprometer a segurança alimentar, com métodos compatíveis com normas HACCP." },
    { icon: Hotel, name: "Hotelaria", description: "Soluções discretas para hotéis e resorts que eliminam percevejos, baratas e roedores sem perturbar os hóspedes, protegendo a reputação do estabelecimento." },
    { icon: Utensils, name: "Restauração", description: "Programas intensivos para cozinhas e salas de restaurantes que garantem a segurança alimentar e a conformidade sanitária." },
    { icon: ShoppingCart, name: "Retalho alimentar", description: "Controle de pragas em supermercados e lojas de alimentos, protegendo produtos expostos e áreas de armazenamento." },
    { icon: Briefcase, name: "Escritórios", description: "Tratamentos discretos fora do horário laboral para manter ambientes de escritório confortáveis e livres de pragas." },
    { icon: Building2, name: "Gestão de instalações", description: "Programas coordenados para edifícios comerciais com múltiplos inquilinos, garantindo proteção uniforme em todas as áreas." },
    { icon: Warehouse, name: "Logística e armazenamento", description: "Proteção de armazéns e centros de distribuição contra roedores e insetos que podem danificar mercadorias armazenadas." },
    { icon: Pill, name: "Farmacêutica", description: "Soluções de controle de pragas compatíveis com normas GMP para laboratórios e instalações farmacêuticas, com documentação completa para auditorias." },
  ]
};

export default function Disinfestation() {
  return <ServicePageTemplate data={data} />;
}
