import { Bug, Wheat, Archive, Thermometer, FlaskConical, ScanLine, ShieldCheck, AlertTriangle, BarChart3 } from "lucide-react";
import { Search, Target, CheckCircle2 } from "lucide-react";
import ServicePageTemplate, { type ServicePageData } from "./ServicePageTemplate";

const data: ServicePageData = {
  heroImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=2000",
  heroImageAlt: "Gorgulhos e traças (carunchos)",
  breadcrumbLabel: "Gorgulhos e traças",
  heroTitle: "Controlo de gorgulhos\ne traças (carunchos)",
  heroSubtitle: "Os Gorgulhos e traças, também conhecidos como insetos dos produtos armazenados, abrangem um grande número de insetos que podem infestar uma grande variedade de produtos armazenados, causando enormes perdas económicas.",
  introText: "Os Gorgulhos e traças, este tipo de praga é encontrada nos alimentos armazenados. Eles podem infestar uma grande variedade de produtos armazenados, em particular alimentos com grãos, cereais, frutas secas, nozes, sementes e até mesmo tabaco.",
  introSubtext: "Estes Gorgulhos, traças, escaravelhos e outros insetos dos produtos armazenados são um perigo para a saúde tanto em casas particulares como empresas, nomeadamente indústria alimentar, bares, cafés e restaurantes, supermercados e comércio alimentar, fábricas, armazéns e silos. Eles podem causar enormes perdas económicas por danos e contaminação de produtos alimentares. Qualquer contaminação irá fazer com que os alimentos fiquem impróprios para o consumo humano.",
  sectionTitle: "Proteção especializada para produtos armazenados",
  sectionText: "Identificar e remover a fonte da infestação de insetos dos produtos armazenados é uma parte essencial para eliminar eficazmente essas pragas. Garantimos a integridade dos seus produtos com inspeções detalhadas e métodos de controlo que respeitam as normas de segurança alimentar.",
  serviceCards: [
    {
      title: "Controlo de traças",
      description: "Tratamentos especializados para eliminar traças têxteis e alimentares, protegendo museus, arquivos, lojas têxteis e armazéns alimentares com métodos seguros e eficazes.",
      image: "https://images.unsplash.com/photo-1590611380053-9a367201c10d?auto=format&fit=crop&q=80&w=1000",
      imageAlt: "Controlo de traças"
    },
    {
      title: "Controlo de gorgulhos",
      description: "Soluções para silos, armazéns e indústria alimentar que eliminam gorgulhos e protegem cereais, farinhas e outros produtos secos contra contaminação e perdas de stock.",
      image: "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&q=80&w=1000",
      imageAlt: "Controlo de gorgulhos"
    }
  ],
  detailsTitle: "Os nossos serviços de controlo",
  detailsSubtitle: "Soluções completas para proteger os seus produtos armazenados contra todas as espécies de gorgulhos, traças e carunchos, com métodos adaptados a cada tipo de produto e relatórios estatísticos detalhados.",
  details: [
    { icon: Bug, title: "Identificação de espécies", description: "Análise para identificar a espécie exata de praga presente — gorgulhos, traças, escaravelhos ou carunchos — permitindo a seleção do tratamento mais eficaz e direcionado para a situação." },
    { icon: Wheat, title: "Proteção de cereais e grãos", description: "Programas específicos para silos e armazéns de cereais, protegendo grãos, cereais, frutas secas, nozes, sementes e tabaco contra gorgulhos e carunchos que causam perdas económicas." },
    { icon: Archive, title: "Proteção de têxteis e arquivos", description: "Tratamentos para proteger roupas, tapetes, documentos históricos e coleções de museu contra traças e outros insetos destruidores que danificam materiais armazenados." },
    { icon: Thermometer, title: "Tratamento térmico", description: "Eliminação de pragas através de calor controlado, um método ecológico que não utiliza químicos e é seguro para produtos alimentares e têxteis sensíveis, eliminando todas as fases do ciclo." },
    { icon: FlaskConical, title: "Fumigação controlada", description: "Fumigação profissional de armazéns, contentores e silos para eliminar todas as fases do ciclo de vida das pragas, incluindo ovos e larvas, com produtos certificados e seguros." },
    { icon: ScanLine, title: "Monitorização por feromonas", description: "Armadilhas com feromonas específicas para deteção precoce de atividade de gorgulhos e traças, permitindo intervenção antes que a infestação se propague e cause danos significativos." },
    { icon: BarChart3, title: "Relatório estatístico de controle", description: "Cada cliente possui acesso a relatórios estatísticos completos: pragas capturadas por tipo de armadilha, consumo de pesticida, ocorrência de pragas nas fichas de monitoramento, relatórios de trabalho preventivo e corretivo, e ocorrência por tipo de armadilha para roedores." },
    { icon: ShieldCheck, title: "Tratamento preventivo de stocks", description: "Aplicação de tratamentos preventivos em mercadorias recebidas para evitar a introdução de pragas no armazém através de fornecedores, com monitorização contínua e intervenção rápida." }
  ],
  approachTitle: "O nosso processo de controlo",
  approachText: "A Bioprev segue uma metodologia estruturada para o controlo de gorgulhos e traças, combinando ciência aplicada com experiência de campo para resultados garantidos e relatórios detalhados.",
  approachSteps: [
    { title: "Identificação da espécie e fonte", content: "Identificar e remover a fonte da infestação de insetos dos produtos armazenados é uma parte essencial para eliminar eficazmente essas pragas. Recolhemos amostras e realizamos análise para identificar a espécie exata, o ciclo de vida e o nível de infestação." },
    { title: "Avaliação do nível de infestação", content: "Através de armadilhas de monitorização (luminosas, porta-iscas e adesivas) e inspeção visual, determinamos a extensão da infestação e identificamos as áreas e produtos mais afetados, permitindo priorizar as intervenções." },
    { title: "Tratamento personalizado", content: "Selecionamos o método de tratamento mais adequado — térmico, químico ou fumigação — com base na espécie identificada, no tipo de produto afetado e nas condições do armazém, utilizando apenas produtos certificados." },
    { title: "Monitorização e relatórios estatísticos", content: "Após o tratamento, mantemos armadilhas de monitorização ativas e geramos relatórios estatísticos de controle de pragas. Cada cliente pode acessar dados sobre pragas capturadas, consumo de pesticida, ocorrência por tipo de armadilha e relatórios de trabalho preventivo e corretivo." },
    { title: "Prevenção e aconselhamento", content: "Fornecemos recomendações detalhadas sobre boas práticas de armazenamento, rotação de stock e controle ambiental para prevenir futuras infestações de gorgulhos, traças e carunchos." }
  ],
  whyTitle: "Porquê escolher a Bioprev?",
  whyText1: "Os gorgulhos, traças e carunchos podem destruir stocks inteiros em pouco tempo se não forem detetados e tratados atempadamente. Eles são um perigo para a saúde tanto em casas particulares como empresas — indústria alimentar, bares, cafés, restaurantes, supermercados, fábricas, armazéns e silos. Qualquer contaminação torna os alimentos impróprios para consumo humano.",
  whyText2: "Na Bioprev, oferecemos não apenas tratamentos eficazes, mas também um sistema completo de relatórios estatísticos de controle de pragas. Cada cliente possui acesso a dados sobre pragas capturadas por tipo de armadilha, consumo de pesticida, fichas de monitoramento e relatórios de trabalho preventivo e corretivo — permitindo avaliar o desempenho dos nossos serviços com total transparência.",
  processCards: [
    { icon: Search, title: "1. Diagnóstico especializado", subtitle: "Identificação precisa da praga", items: ["Identificação de gorgulhos, traças e carunchos", "Mapeamento da extensão da infestação", "Avaliação de produtos e locais afetados"] },
    { icon: Target, title: "2. Tratamento direcionado", subtitle: "Método adaptado ao produto e à praga", items: ["Tratamentos térmicos ecológicos", "Fumigação controlada certificada", "Armadilhas luminosas, porta-iscas e adesivas"] },
    { icon: CheckCircle2, title: "3. Monitorização e relatórios", subtitle: "Controle estatístico e prevenção contínua", items: ["Relatórios estatísticos por cliente", "Monitorização permanente por feromonas", "Previsões de surgimento de novas pragas"] }
  ],
  ctaTitle: "Proteja os seus produtos armazenados hoje"
};

export default function Pests() {
  return <ServicePageTemplate data={data} />;
}
