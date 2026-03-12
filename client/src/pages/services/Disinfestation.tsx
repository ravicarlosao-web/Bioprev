import { ShieldCheck, Zap, Shield, SprayCan, Microscope, Wind, FileCheck, AlertTriangle, Bug, Rat } from "lucide-react";
import { Search, Target, CheckCircle2 } from "lucide-react";
import ServicePageTemplate, { type ServicePageData } from "./ServicePageTemplate";

const data: ServicePageData = {
  heroImage: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&q=80&w=2000",
  heroImageAlt: "Serviço de desinfestação",
  breadcrumbLabel: "Desinfestação",
  heroTitle: "Serviços de desinfestação\ngeral e profissional",
  heroSubtitle: "A Bioprev oferece serviços especializados de fumigação, pulverização, desratização, desbaratização e tratamentos com gel — soluções completas para eliminar pragas com segurança e eficiência em todo o país.",
  introText: "A Bioprev protege pessoas, residências e empresas dos perigos das pragas urbanas com mais de nove anos de experiência no mercado angolano. Utilizamos produtos seguros, certificados e sem prejuízo para a saúde do homem e para o meio ambiente.",
  introSubtext: "É com intenção de servir a população e instituições no controlo de pragas que a BIOPREV utiliza equipamentos e métodos mais modernos, com garantia de um serviço profissional, eficiente e uma equipa técnica hábil e dedicada. Tornando-se parte ativa da estratégia e sucesso da empresa, oferecemos alta qualidade ao menor custo possível.",
  sectionTitle: "Serviços especializados de desinfestação geral",
  sectionText: "A Bioprev dedica-se a manter os seus funcionários, clientes e a reputação da marca protegidos com serviços de desinfestação líderes de mercado. Oferecemos cinco métodos principais de desinfestação — fumigação, pulverização, desratização, desbaratização e aplicação de gel — cada um adaptado ao tipo de praga e ao ambiente a tratar.",
  serviceCards: [
    {
      title: "Desinfestação especializada",
      description: "Os nossos serviços de desinfestação especializada fornecem uma resposta rápida para ajudá-lo a manter um alto nível de higiene nas suas instalações, reduzindo o risco de infecção e contaminação através de fumigação, pulverização e tratamentos com gel.",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000",
      imageAlt: "Desinfestação especializada"
    },
    {
      title: "Desinfestação preventiva",
      description: "Uma série de soluções de desinfestação preventiva — incluindo desratização e desbaratização — concebidas para ajudar as empresas a manter um ambiente seguro e proporcionar paz de espírito aos funcionários e visitantes.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000",
      imageAlt: "Desinfestação preventiva"
    }
  ],
  detailsTitle: "Os nossos métodos de desinfestação",
  detailsSubtitle: "Conheça em detalhe cada um dos métodos especializados que a Bioprev utiliza para eliminar pragas de forma segura e eficaz nas suas instalações.",
  details: [
    { icon: Wind, title: "Fumigação", description: "A fumigação consiste num tipo de controle de pragas que é um procedimento de desinfestação por via seca. Através do tratamento químico realizado com compostos químicos ou formulações pesticidas (fumegantes) voláteis em sistema hermético, visando a desinfestação de materiais e instalações. A fumaça é o melhor meio de difusão homogénea de um ingrediente ativo." },
    { icon: SprayCan, title: "Pulverização", description: "É a aplicação de um produto pesticida em um alvo vegetal (folhas, tronco, fruta, solo, etc.) em modo de dispersar através de gotas de dimensão variável dependendo do tipo de aparelho de pulverização, que ao secarem garantem uma distribuição correta e uniforme das substâncias ativas." },
    { icon: Rat, title: "Desratização", description: "Os ratos são uma das maiores pragas urbanas. Têm grande impacto nas casas, transmitem muitas doenças e trazem riscos à economia local. O serviço de desratização é feito por profissionais especializados para localizar os focos da infestação de ratos e remover essa praga urbana do local com segurança, através da aplicação de produtos químicos posicionados estrategicamente." },
    { icon: Bug, title: "Desbaratização", description: "A sua casa ou empresa pode ser um terreno fértil para certas espécies de baratas. Elas têm várias formas de obter acesso ao interior, seja através de aberturas da ventilação, canalização ou esgotos. A forma mais eficaz de prevenir das baratas é efectuar o serviço de desbaratização, com aplicação de gel ou spray nos pontos críticos." },
    { icon: Shield, title: "Gel anti-baratas", description: "Produto aconselhável para o controle de baratas, no qual apostamos fortemente, pois tem a vantagem de não ser tóxico. Este gel é aplicado em todos os pontos críticos das instalações, para obter um efeito máximo de mortalidade de baratas em menos de uma semana, sem qualquer risco para a saúde dos ocupantes." },
    { icon: ShieldCheck, title: "Desinfestação de superfícies", description: "Tratamentos de contacto para superfícies de alto risco, incluindo maçanetas, balcões, interruptores e outras áreas frequentemente tocadas, garantindo a eliminação de patógenos e pragas de forma segura." },
    { icon: Microscope, title: "Análise e identificação", description: "Testes e inspeções especializadas para identificar o tipo de praga presente, determinar os focos de infestação e selecionar o tratamento mais eficaz para a situação específica de cada cliente." },
    { icon: FileCheck, title: "Certificação pós-tratamento", description: "Emissão de certificados de desinfestação que comprovam o cumprimento dos protocolos de higiene e segurança exigidos, com relatórios detalhados de todos os métodos e produtos utilizados." }
  ],
  approachTitle: "O nosso processo de desinfestação",
  approachText: "A Bioprev segue uma abordagem rigorosa para a desinfestação profissional, garantindo que todas as etapas sejam tratadas com os mais altos padrões de segurança e qualidade.",
  approachSteps: [
    { title: "Pesquisa e avaliação de risco", content: "Realizamos uma avaliação detalhada das suas instalações para identificar áreas de alto risco, pontos de contacto frequente e potenciais focos de infestação. Esta análise permite-nos selecionar o método mais adequado — seja fumigação, pulverização, desratização, desbaratização ou gel — para a sua situação específica." },
    { title: "Preparação e protocolos de segurança", content: "Antes de iniciar o tratamento, estabelecemos todos os protocolos de segurança necessários, incluindo isolamento de áreas, proteção de equipamentos sensíveis e coordenação com a sua equipa para minimizar interrupções. Garantimos que todos os produtos utilizados são seguros e certificados." },
    { title: "Aplicação do tratamento especializado", content: "Os nossos técnicos certificados aplicam os tratamentos utilizando equipamento de última geração. Para fumigação, utilizamos sistemas herméticos com fumegantes voláteis. Na pulverização, aplicamos pesticidas com equipamentos de dispersão calibrados. Na desratização, posicionamos produtos químicos estrategicamente. Na desbaratização, aplicamos gel ou spray nos pontos críticos." },
    { title: "Verificação pós-tratamento", content: "Após o tratamento, realizamos verificações rigorosas para confirmar a eficácia da desinfestação e garantir que os níveis de segurança foram alcançados em todas as áreas tratadas. Monitoramos os resultados para assegurar a eliminação completa das pragas." },
    { title: "Certificação e relatórios", content: "Emitimos um certificado de desinfestação e um relatório detalhado que documenta todas as áreas tratadas, os métodos utilizados (fumigação, pulverização, gel, etc.) e os resultados obtidos, prontos para auditorias e inspeções regulamentares." }
  ],
  whyTitle: "Porquê escolher a Bioprev para desinfestação?",
  whyText1: "Na Bioprev, os nossos especialistas em desinfestação dedicam-se a identificar as soluções mais seguras e eficazes para proteger a sua casa e negócio. Oferecemos cinco métodos principais — fumigação, pulverização, desratização, desbaratização e gel — cada um selecionado após inspeção minuciosa para garantir o tratamento mais eficiente para a sua situação.",
  whyText2: "Utilizamos apenas produtos certificados e sem prejuízo para a saúde do homem e para o meio ambiente. O gel anti-baratas, por exemplo, tem a vantagem de não ser tóxico e proporciona resultados em menos de uma semana. Escolha a Bioprev para soluções completas, ecológicas e um compromisso com os mais altos padrões de serviço.",
  processCards: [
    { icon: Search, title: "1. Avaliação de risco", subtitle: "Pesquisa e consulta sem complicações", items: ["Inspeção programada no horário de sua conveniência", "Identificação dos focos de infestação", "Seleção do método mais adequado (fumigação, pulverização, gel, etc.)"] },
    { icon: Target, title: "2. Tratamento especializado", subtitle: "Programa abrangente adaptado às suas necessidades", items: ["Fumigação, pulverização ou aplicação de gel", "Desratização e desbaratização profissional", "Produtos seguros e certificados"] },
    { icon: CheckCircle2, title: "3. Verificação e certificação", subtitle: "Garantindo um ambiente limpo e seguro", items: ["Certificado de desinfestação pós-serviço", "Relatórios detalhados dos métodos utilizados", "Monitoramento e acompanhamento dos resultados"] }
  ],
  ctaTitle: "Agende a sua avaliação de desinfestação hoje"
};

export default function Disinfestation() {
  return <ServicePageTemplate data={data} />;
}
