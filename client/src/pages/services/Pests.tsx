import { Bug, Wheat, Archive, Thermometer, FlaskConical, ScanLine, ShieldCheck, AlertTriangle } from "lucide-react";
import { Search, Target, CheckCircle2 } from "lucide-react";
import ServicePageTemplate, { type ServicePageData } from "./ServicePageTemplate";

const data: ServicePageData = {
  heroImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=2000",
  heroImageAlt: "Gorgulhos e traças",
  breadcrumbLabel: "Gorgulhos e traças",
  heroTitle: "Controlo de gorgulhos\ne traças",
  heroSubtitle: "Soluções especializadas para proteger os seus stocks e produtos armazenados contra infestações de gorgulhos e traças, preservando a qualidade e integridade das suas mercadorias.",
  introText: "Infestações de gorgulhos e traças podem causar danos irreparáveis a stocks alimentares, têxteis e produtos armazenados. A deteção precoce e o tratamento eficaz são fundamentais para minimizar perdas.",
  introSubtext: "A Bioprev utiliza tecnologias avançadas de monitorização por feromonas e tratamentos térmicos inovadores para identificar e eliminar infestações de gorgulhos e traças. A nossa abordagem integrada combina métodos preventivos com tratamentos curativos, garantindo a proteção a longo prazo dos seus produtos armazenados e cumprindo todas as normas de segurança alimentar.",
  sectionTitle: "Proteção especializada para produtos armazenados",
  sectionText: "Garantimos a integridade dos seus produtos com inspeções detalhadas e métodos de controlo que respeitam as normas de segurança alimentar, protegendo cereais, farinhas, têxteis e outros materiais vulneráveis.",
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
  detailsSubtitle: "Soluções completas para proteger os seus produtos armazenados contra todas as espécies de gorgulhos e traças, com métodos adaptados a cada tipo de produto.",
  details: [
    { icon: Bug, title: "Identificação de espécies", description: "Análise laboratorial para identificar a espécie exata de praga presente, permitindo a seleção do tratamento mais eficaz e direcionado." },
    { icon: Wheat, title: "Proteção de cereais e grãos", description: "Programas específicos para silos e armazéns de cereais, protegendo trigo, milho, arroz e outros grãos contra gorgulhos e carunchos." },
    { icon: Archive, title: "Proteção de têxteis e arquivos", description: "Tratamentos para proteger roupas, tapetes, documentos históricos e coleções de museu contra traças e outros insetos destruidores." },
    { icon: Thermometer, title: "Tratamento térmico", description: "Eliminação de pragas através de calor controlado, um método ecológico que não utiliza químicos e é seguro para produtos alimentares e têxteis sensíveis." },
    { icon: FlaskConical, title: "Fumigação controlada", description: "Fumigação profissional de armazéns e contentores de transporte para eliminar todas as fases do ciclo de vida das pragas, incluindo ovos e larvas." },
    { icon: ScanLine, title: "Monitorização por feromonas", description: "Armadilhas com feromonas específicas para deteção precoce de atividade de gorgulhos e traças, permitindo intervenção antes que a infestação se propague." },
    { icon: ShieldCheck, title: "Tratamento preventivo de stocks", description: "Aplicação de tratamentos preventivos em mercadorias recebidas para evitar a introdução de pragas no armazém através de fornecedores." },
    { icon: AlertTriangle, title: "Resposta a infestações ativas", description: "Intervenção rápida para infestações já estabelecidas, com isolamento de produtos afetados e tratamento intensivo para evitar a propagação." }
  ],
  approachTitle: "O nosso processo de controlo",
  approachText: "A Bioprev segue uma metodologia estruturada para o controlo de gorgulhos e traças, combinando ciência aplicada com experiência de campo para resultados garantidos.",
  approachSteps: [
    { title: "Identificação da espécie", content: "Recolhemos amostras e realizamos análise laboratorial para identificar a espécie exata de praga, o seu ciclo de vida e o nível de infestação. Esta informação é essencial para selecionar o tratamento mais eficaz." },
    { title: "Avaliação do nível de infestação", content: "Através de armadilhas de monitorização e inspeção visual, determinamos a extensão da infestação e identificamos as áreas e produtos mais afetados, permitindo priorizar as intervenções." },
    { title: "Tratamento personalizado", content: "Selecionamos o método de tratamento mais adequado — térmico, químico ou fumigação — com base na espécie identificada, no tipo de produto afetado e nas condições do armazém." },
    { title: "Monitorização pós-tratamento", content: "Após o tratamento, mantemos armadilhas de monitorização ativas para confirmar a eficácia da intervenção e detetar precocemente qualquer reinfestação." },
    { title: "Prevenção e aconselhamento", content: "Fornecemos recomendações detalhadas sobre boas práticas de armazenamento, rotação de stock e controle ambiental para prevenir futuras infestações." }
  ],
  whyTitle: "Porquê escolher a Bioprev?",
  whyText1: "Os gorgulhos e traças podem destruir stocks inteiros em pouco tempo se não forem detetados e tratados atempadamente. Na Bioprev, os nossos entomologistas e técnicos especializados possuem conhecimento profundo sobre o comportamento destas pragas e as melhores estratégias para a sua eliminação e prevenção.",
  whyText2: "Com experiência em armazéns alimentares, silos, museus e arquivos em Angola, oferecemos soluções que protegem os seus produtos mais valiosos, utilizando métodos que respeitam a natureza dos materiais armazenados e as normas de segurança alimentar aplicáveis.",
  processCards: [
    { icon: Search, title: "1. Diagnóstico especializado", subtitle: "Identificação precisa da praga", items: ["Análise laboratorial de espécies", "Mapeamento da extensão da infestação", "Avaliação de produtos afetados"] },
    { icon: Target, title: "2. Tratamento direcionado", subtitle: "Método adaptado ao produto e à praga", items: ["Tratamentos térmicos ecológicos", "Fumigação controlada certificada", "Produtos seguros para alimentos"] },
    { icon: CheckCircle2, title: "3. Prevenção contínua", subtitle: "Proteção a longo prazo dos seus stocks", items: ["Monitorização permanente por feromonas", "Aconselhamento de boas práticas", "Inspeção regular de mercadorias"] }
  ],
  ctaTitle: "Proteja os seus produtos armazenados hoje"
};

export default function Pests() {
  return <ServicePageTemplate data={data} />;
}
