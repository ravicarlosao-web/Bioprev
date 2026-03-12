import { ShoppingCart, Package, Refrigerator, Store, Scan, ClipboardCheck, Rat, ShieldAlert } from "lucide-react";
import { Search, Target, CheckCircle2 } from "lucide-react";
import SectorPageTemplate, { type SectorPageData } from "./SectorPageTemplate";

const data: SectorPageData = {
  heroImage: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&q=80&w=2000",
  heroImageAlt: "Retalho alimentar",
  breadcrumbLabel: "Retalho alimentar",
  heroTitle: "Controle de pragas para\nretalho alimentar",
  heroSubtitle: "Proteja os seus clientes e a sua marca com soluções de controle de pragas especializadas para supermercados, mercearias e lojas de alimentos.",
  introText: "No retalho alimentar, a presença de pragas pode resultar em encerramento temporário, perda de produtos, multas regulamentares e, mais importante, perda da confiança dos clientes. A segurança alimentar é uma responsabilidade que não pode ser descurada.",
  introSubtext: "A Bioprev oferece programas de controle de pragas desenhados especificamente para o ambiente dinâmico do retalho alimentar, onde a rotação de produtos é elevada e as portas estão constantemente a abrir. Os nossos técnicos compreendem a necessidade de intervir sem perturbar os clientes ou interromper as vendas.",
  sectionTitle: "Segurança alimentar no ponto de venda",
  sectionText: "Desde hipermercados a pequenas mercearias, a Bioprev garante que os seus espaços de venda permanecem livres de pragas, protegendo os produtos, os clientes e a reputação da sua marca.",
  serviceCards: [
    {
      title: "Proteção da área de vendas",
      description: "Programas para áreas de venda ao público que mantêm os espaços livres de pragas de forma discreta, utilizando métodos que não interferem com a experiência de compra dos clientes.",
      image: "https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=1000",
      imageAlt: "Área de vendas"
    },
    {
      title: "Gestão de armazém e stock",
      description: "Soluções para áreas de armazenamento e câmaras frias que protegem o stock contra roedores, insetos e outras pragas que podem contaminar ou danificar os produtos.",
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=1000",
      imageAlt: "Armazém de stock"
    }
  ],
  detailsTitle: "Serviços para retalho alimentar",
  detailsSubtitle: "Soluções completas que cobrem todas as áreas da sua loja, desde a área de vendas ao armazém e zonas de preparação.",
  details: [
    { icon: ShoppingCart, title: "Área de vendas", description: "Controle discreto de pragas na área de vendas, incluindo prateleiras, expositores e zonas de produtos frescos, sem interferir com a experiência do cliente." },
    { icon: Package, title: "Gestão de entregas", description: "Protocolos de inspeção de mercadorias na receção para prevenir a entrada de pragas através de fornecedores e entregas." },
    { icon: Refrigerator, title: "Câmaras frigoríficas", description: "Tratamentos especializados para câmaras frias e áreas refrigeradas, onde roedores e outras pragas procuram abrigo e alimento." },
    { icon: Store, title: "Padaria e charcutaria", description: "Programas específicos para áreas de preparação de alimentos dentro da loja, garantindo conformidade sanitária." },
    { icon: Scan, title: "Monitorização contínua", description: "Sistemas de monitorização em pontos estratégicos da loja que permitem deteção precoce e resposta rápida a qualquer atividade de pragas." },
    { icon: ClipboardCheck, title: "Conformidade regulamentar", description: "Documentação e relatórios que demonstram conformidade com todas as normas sanitárias e regulamentações do setor alimentar." },
    { icon: Rat, title: "Controle de roedores", description: "Estações de isca e sistemas de exclusão posicionados estrategicamente para prevenir a entrada e proliferação de roedores." },
    { icon: ShieldAlert, title: "Resposta a incidentes", description: "Serviço de emergência para responder rapidamente a qualquer deteção de pragas, minimizando o impacto nas operações e na imagem da loja." }
  ],
  approachTitle: "A nossa abordagem para o retalho alimentar",
  approachText: "A Bioprev adapta os seus programas ao ritmo acelerado do retalho alimentar, com intervenções eficientes que não perturbam as vendas nem os clientes.",
  approachSteps: [
    { title: "Avaliação da loja", content: "Realizamos uma inspeção completa de todas as áreas — vendas, armazenamento, receção, preparação e zonas exteriores — identificando riscos específicos e pontos de entrada de pragas." },
    { title: "Programa adaptado ao horário", content: "Desenvolvemos um calendário de intervenções que respeita o horário de funcionamento da loja, com tratamentos realizados fora do horário de abertura ao público." },
    { title: "Implementação discreta", content: "Os nossos técnicos trabalham de forma eficiente e discreta, completando os tratamentos antes da abertura da loja e garantindo que nenhum produto ou superfície fica comprometido." },
    { title: "Monitorização permanente", content: "Estações de monitorização instaladas em pontos estratégicos fornecem dados contínuos sobre a atividade de pragas, permitindo intervenções preventivas." },
    { title: "Formação e boas práticas", content: "Formamos a equipa da loja sobre boas práticas de higiene e armazenamento que contribuem para a prevenção de infestações." }
  ],
  whyTitle: "Porquê a Bioprev para o seu negócio alimentar?",
  whyText1: "No retalho alimentar, a confiança dos clientes é conquistada diariamente. Na Bioprev, compreendemos que uma única falha no controle de pragas pode ter consequências devastadoras para o seu negócio. Os nossos programas são desenhados para garantir que os seus clientes nunca se deparam com pragas na sua loja.",
  whyText2: "Trabalhamos com as principais cadeias de supermercados e lojas de alimentos em Angola, oferecendo programas que combinam eficácia no controle de pragas com total respeito pelo ambiente de vendas e pela experiência do cliente.",
  processCards: [
    { icon: Search, title: "1. Inspeção da loja", subtitle: "Análise de todas as áreas e riscos", items: ["Avaliação de área de vendas e armazém", "Inspeção de zonas de preparação", "Análise de pontos de entrada"] },
    { icon: Target, title: "2. Tratamento eficiente", subtitle: "Intervenções fora do horário público", items: ["Tratamentos antes da abertura", "Métodos seguros para alimentos", "Sem interferência nas vendas"] },
    { icon: CheckCircle2, title: "3. Proteção contínua", subtitle: "Monitorização e conformidade", items: ["Estações de monitorização permanentes", "Relatórios para inspeções sanitárias", "Formação contínua da equipa"] }
  ],
  ctaTitle: "Proteja a sua loja e os seus clientes"
};

export default function FoodRetail() {
  return <SectorPageTemplate data={data} />;
}
