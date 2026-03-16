import { BarChart3, PieChart, LineChart, FileText, Shield, Bug, Rat, Lamp, MousePointer2, ClipboardList, Lock, Monitor, TrendingUp, CheckCircle2, Search, Target, ChevronRight, LogIn, Eye, Download, Bell, ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "wouter";
import { useState } from "react";
import SEOHead, { breadcrumbSchema, serviceSchema } from "@/components/SEOHead";

const reportTypes = [
  {
    icon: Lamp,
    title: "Pragas por Armadilha",
    description: "Relatório detalhado que identifica quais pragas foram capturadas em cada armadilha instalada, permitindo mapear as áreas mais afetadas e direcionar ações corretivas de forma precisa e eficiente.",
    features: ["Identificação por tipo de praga", "Mapeamento por localização", "Histórico de capturas", "Análise de tendências"]
  },
  {
    icon: FileText,
    title: "Consumo de Pesticida",
    description: "Acompanhamento completo do consumo de pesticidas utilizados em cada tratamento, incluindo tipos de produtos, quantidades aplicadas e frequência de utilização, garantindo total transparência e conformidade.",
    features: ["Quantidades aplicadas", "Tipos de produtos", "Frequência de utilização", "Conformidade regulamentar"]
  },
  {
    icon: Bug,
    title: "Ocorrência de Pragas",
    description: "Registo estatístico de todas as ocorrências de pragas identificadas ao longo do tempo, com análise de tendências sazonais e identificação de padrões que permitem antecipar futuros focos de infestação.",
    features: ["Registo cronológico", "Tendências sazonais", "Padrões de infestação", "Previsão de focos"]
  },
  {
    icon: MousePointer2,
    title: "Relatório por Tipo de Armadilha",
    description: "Análise comparativa do desempenho de cada tipo de armadilha utilizada — luminosas, adesivas e porta iscas — com dados de captura e eficácia para otimizar a estratégia de posicionamento.",
    features: ["Comparação de eficácia", "Dados de captura", "Otimização de posicionamento", "Análise por tipo"]
  },
  {
    icon: ClipboardList,
    title: "Trabalho Preventivo/Corretivo",
    description: "Balanço entre as intervenções preventivas e corretivas realizadas, demonstrando a evolução do programa de controle de pragas e a redução progressiva da necessidade de ações de emergência.",
    features: ["Intervenções preventivas", "Ações corretivas", "Evolução temporal", "Indicadores de eficácia"]
  },
  {
    icon: Rat,
    title: "Armadilhas para Roedores",
    description: "Relatório específico sobre o monitoramento de roedores, incluindo dados de captura por localização, atividade detectada em estações de monitoramento e eficácia das medidas de desratização.",
    features: ["Capturas por localização", "Atividade detectada", "Eficácia de desratização", "Estações de monitoramento"]
  },
];

const monitoringCharts = [
  {
    title: "Armadilha Luminosa",
    icon: Lamp,
    description: "Monitoramento de insectos voadores através de insectocutores estrategicamente posicionados.",
    details: [
      "Número de capturas por período",
      "Espécies identificadas",
      "Picos de atividade sazonal",
      "Comparação entre localizações",
      "Avaliação de eficácia por posição",
      "Recomendações de ajuste"
    ]
  },
  {
    title: "Porta Iscas",
    icon: Target,
    description: "Controle e monitoramento de estações porta iscas para roedores em toda a instalação.",
    details: [
      "Consumo de isca por estação",
      "Atividade de roedores detectada",
      "Tendências ao longo do tempo",
      "Alertas automáticos de atividade",
      "Mapeamento de pontos críticos",
      "Intervenções direcionadas"
    ]
  },
  {
    title: "Armadilhas Adesivas",
    icon: Search,
    description: "Acompanhamento de armadilhas adesivas para monitoramento de insectos rasteiros.",
    details: [
      "Capturas por localização",
      "Identificação de espécies frequentes",
      "Variação sazonal",
      "Comparação áreas internas/externas",
      "Densidade de capturas por m²",
      "Alertas de infestação"
    ]
  }
];

export default function Reports() {
  const [openChart, setOpenChart] = useState<number | null>(null);

  return (
    <>
      <SEOHead
        title="Relatórios Estatísticos de Controle de Pragas"
        description="Plataforma online de relatórios estatísticos de controle de pragas. Monitoramento por armadilhas, consumo de pesticida, ocorrência de pragas e gráficos de acompanhamento em tempo real."
        canonical="/reports"
        keywords="relatórios controle de pragas Angola, monitoramento de pragas, relatório estatístico pragas, armadilha luminosa, porta iscas, armadilhas adesivas, plataforma online pragas, Bioprev relatórios"
        structuredData={[
          breadcrumbSchema([
            { name: "Início", url: "/" },
            { name: "Relatórios Estatísticos", url: "/reports" },
          ]),
          serviceSchema("Relatórios Estatísticos de Controle de Pragas", "Plataforma online com relatórios detalhados e gráficos de monitoramento de pragas em tempo real.", "/reports"),
        ]}
      />
      <Header />
      <main id="main-content">
        <section
          className="relative min-h-[420px] md:min-h-[480px] flex items-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=75&w=1280')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-[#001d3d]/80" />
          <div className="container mx-auto px-4 relative z-10 py-16 md:py-24">
            <nav className="flex items-center gap-2 text-sm text-white/70 mb-8" aria-label="Breadcrumb" data-testid="breadcrumb-reports">
              <Link href="/" className="hover:text-white transition-colors">Início</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-white font-medium">Relatórios Estatísticos</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight max-w-3xl" data-testid="text-reports-title">
              Relatórios estatísticos<br />de controle de pragas
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed" data-testid="text-reports-subtitle">
              Plataforma online exclusiva para clientes com acesso a relatórios detalhados, gráficos de monitoramento e dados estatísticos em tempo real.
            </p>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-[#007cc3]/10 text-[#007cc3] px-4 py-2 rounded-full text-sm font-semibold mb-6" data-testid="badge-platform">
                <Monitor className="w-4 h-4" />
                Plataforma Online
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#333333] mb-6" data-testid="text-platform-title">
                Plataforma online para clientes
              </h2>
              <p className="text-[#555555] text-lg leading-relaxed mb-4">
                A Bioprev disponibiliza aos seus clientes uma plataforma online com login exclusivo, onde é possível acompanhar toda a evolução do controle de pragas nas suas instalações através de relatórios estatísticos completos e gráficos de monitoramento.
              </p>
              <p className="text-[#555555] leading-relaxed">
                Esta ferramenta permite ao cliente ter total transparência sobre os serviços prestados, acompanhando indicadores-chave como ocorrência de pragas, consumo de pesticidas, eficácia das armadilhas e trabalho preventivo versus corretivo — tudo disponível num painel digital seguro e de fácil utilização.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14 max-w-4xl mx-auto">
              {[
                { icon: Lock, title: "Acesso seguro", desc: "Login exclusivo por cliente com dados protegidos e encriptados" },
                { icon: Eye, title: "Dados em tempo real", desc: "Acompanhe a evolução do controle de pragas a qualquer momento" },
                { icon: Download, title: "Relatórios exportáveis", desc: "Exporte dados para auditorias e conformidade regulamentar" },
              ].map((item, i) => (
                <div key={i} className="bg-[#f8f9fa] rounded-lg p-6 text-center border border-gray-100" data-testid={`card-platform-feature-${i}`}>
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <item.icon className="w-6 h-6 text-[#007cc3]" />
                  </div>
                  <h3 className="font-bold text-[#333333] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#555555]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f8f9fa] py-16 md:py-24" id="tipos-relatorios">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#333333] mb-4" data-testid="text-report-types-title">
                6 tipos de relatórios especializados
              </h2>
              <p className="text-[#555555] text-lg leading-relaxed">
                Cada relatório é concebido para fornecer informações específicas e accionáveis sobre diferentes aspectos do programa de controle de pragas nas suas instalações.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {reportTypes.map((report, i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg border-t-4 border-[#f2c92f] shadow-sm p-6 hover:shadow-md transition-shadow"
                  data-testid={`card-report-type-${i}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#f8f9fa] rounded-lg flex items-center justify-center shrink-0">
                      <report.icon className="w-5 h-5 text-[#007cc3]" />
                    </div>
                    <h3 className="font-bold text-[#333333] text-lg">{report.title}</h3>
                  </div>
                  <p className="text-sm text-[#555555] leading-relaxed mb-4">{report.description}</p>
                  <ul className="space-y-1.5">
                    {report.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-[#555555]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#007cc3] shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24" id="graficos">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#333333] mb-4" data-testid="text-charts-title">
                Gráficos de monitoramento
              </h2>
              <p className="text-[#555555] text-lg leading-relaxed">
                A plataforma disponibiliza gráficos visuais que permitem acompanhar a evolução do controle de pragas ao longo do tempo, facilitando a identificação de tendências e a tomada de decisões estratégicas.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {monitoringCharts.map((chart, i) => (
                <div
                  key={i}
                  className="bg-[#f8f9fa] rounded-lg border border-gray-100 overflow-hidden"
                  data-testid={`accordion-chart-${i}`}
                >
                  <button
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                    onClick={() => setOpenChart(openChart === i ? null : i)}
                    data-testid={`button-chart-toggle-${i}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm shrink-0">
                        <chart.icon className="w-6 h-6 text-[#007cc3]" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#333333] text-lg">{chart.title}</h3>
                        <p className="text-sm text-[#555555] mt-0.5">{chart.description}</p>
                      </div>
                    </div>
                    <ChevronRight className={`w-5 h-5 text-[#999999] shrink-0 transition-transform duration-200 ${openChart === i ? 'rotate-90' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openChart === i ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-6 pb-6 pt-0">
                      <div className="bg-white rounded-lg p-5 border border-gray-100">
                        <p className="text-sm font-semibold text-[#333333] mb-3">Dados disponíveis:</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {chart.details.map((detail, j) => (
                            <div key={j} className="flex items-center gap-2 text-sm text-[#555555]">
                              <div className="w-1.5 h-1.5 bg-[#f2c92f] rounded-full shrink-0" />
                              {detail}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f8f9fa] py-16 md:py-24" id="acesso">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#333333] mb-4" data-testid="text-how-it-works-title">
                Como funciona
              </h2>
              <p className="text-[#555555] text-lg leading-relaxed">
                O acesso à plataforma é simples e seguro, desenhado para que possa consultar os seus relatórios em qualquer momento.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  step: "1",
                  icon: LogIn,
                  title: "Acesso seguro",
                  subtitle: "Plataforma com login exclusivo",
                  items: ["Credenciais únicas por cliente", "Dados protegidos e encriptados", "Acesso a qualquer hora, em qualquer dispositivo"]
                },
                {
                  step: "2",
                  icon: Monitor,
                  title: "Painel de controle",
                  subtitle: "Visualização intuitiva dos dados",
                  items: ["6 tipos de relatórios especializados", "Gráficos de monitoramento em tempo real", "Filtros por período, localização e tipo de praga"]
                },
                {
                  step: "3",
                  icon: TrendingUp,
                  title: "Análise e decisão",
                  subtitle: "Dados que geram acção",
                  items: ["Identificação de tendências e padrões", "Suporte para auditorias e certificações", "Recomendações baseadas em dados"]
                },
              ].map((card, i) => (
                <div key={i} className="bg-white rounded-lg shadow-sm p-6 relative" data-testid={`card-process-${i}`}>
                  <div className="absolute -top-4 left-6 w-8 h-8 bg-[#007cc3] rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {card.step}
                  </div>
                  <div className="mt-4 mb-4">
                    <card.icon className="w-8 h-8 text-[#007cc3]" />
                  </div>
                  <h3 className="font-bold text-[#333333] text-lg mb-1">{card.title}</h3>
                  <p className="text-sm text-[#007cc3] font-medium mb-4">{card.subtitle}</p>
                  <ul className="space-y-2">
                    {card.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-[#555555]">
                        <CheckCircle2 className="w-4 h-4 text-[#f2c92f] shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6" data-testid="text-why-reports-title">
                    Porquê utilizar os nossos relatórios?
                  </h2>
                  <p className="text-[#555555] leading-relaxed mb-4">
                    A plataforma de relatórios estatísticos da Bioprev transforma dados brutos em informações accionáveis. Com acesso protegido por login, cada cliente pode acompanhar em tempo real o estado do controle de pragas nas suas instalações, identificar tendências e tomar decisões informadas baseadas em dados concretos.
                  </p>
                  <p className="text-[#555555] leading-relaxed">
                    Os relatórios são essenciais para cumprir requisitos de auditoria, demonstrar conformidade com normas de higiene e segurança alimentar, e comprovar a eficácia do programa de controle de pragas perante entidades reguladoras e clientes.
                  </p>
                </div>
                <div className="space-y-4">
                  {[
                    { icon: Shield, text: "Transparência total sobre os serviços prestados" },
                    { icon: TrendingUp, text: "Tomada de decisões baseada em dados" },
                    { icon: FileText, text: "Suporte para auditorias e certificações" },
                    { icon: Bell, text: "Alertas automáticos de atividade irregular" },
                    { icon: BarChart3, text: "Evolução temporal com gráficos detalhados" },
                    { icon: CheckCircle2, text: "Conformidade com normas de higiene e segurança" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-[#f8f9fa] rounded-lg" data-testid={`item-benefit-${i}`}>
                      <item.icon className="w-5 h-5 text-[#007cc3] shrink-0" />
                      <span className="text-sm text-[#333333] font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#007cc3] py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4" data-testid="text-cta-title">
              Solicite acesso à plataforma de relatórios
            </h2>
            <p className="text-white/85 text-lg mb-8 max-w-2xl mx-auto">
              Entre em contacto connosco para obter as suas credenciais de acesso e começar a acompanhar o controle de pragas nas suas instalações em tempo real.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-3 font-bold text-sm hover:bg-white hover:text-[#007cc3] transition-colors rounded"
                data-testid="link-cta-contact"
              >
                Solicitar acesso
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/244928737888?text=Olá, gostaria de solicitar acesso à plataforma de relatórios estatísticos."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#007cc3] px-8 py-3 font-bold text-sm hover:bg-gray-100 transition-colors rounded"
                data-testid="link-cta-whatsapp"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
