import { ChevronRight, ArrowRight, Lock, Monitor, Shield, FileText, Bug, Rat, Lamp, MousePointer2, ClipboardList, BarChart3 } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "wouter";
import { useState, useEffect, useRef } from "react";
import SEOHead, { breadcrumbSchema, serviceSchema } from "@/components/SEOHead";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  LineChart, Line, ComposedChart, Cell
} from "recharts";

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function ChartCard({ title, subtitle, children, testId }: { title: string; subtitle: string; children: React.ReactNode; testId: string }) {
  const { ref, inView } = useInView(0.15);
  return (
    <div
      ref={ref}
      className={`bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      data-testid={testId}
    >
      <div className="border-b border-gray-100 px-6 py-5">
        <h3 className="text-xl sm:text-2xl font-bold text-[#333333]">{title}</h3>
        <p className="text-sm text-[#555555] mt-1">{subtitle}</p>
      </div>
      <div className="p-4 sm:p-6">
        {inView && children}
      </div>
    </div>
  );
}

const ocorrenciaData = [
  { mes: "Jan", Tesourinhas: 1, Outros: 4, Moscas: 1, Escorpioes: 4, Besouros: 7, Baratas: 2, Aranhas: 0, Abelhas: 0, Roedores: 0, Mosquitos: 0, Formigas: 0, Carunchos: 0 },
  { mes: "Fev", Tesourinhas: 0, Outros: 0, Moscas: 0, Escorpioes: 0, Besouros: 0, Baratas: 0, Aranhas: 0, Abelhas: 0, Roedores: 0, Mosquitos: 0, Formigas: 0, Carunchos: 0 },
  { mes: "Mar", Tesourinhas: 1, Outros: 2, Moscas: 1, Escorpioes: 2, Besouros: 2, Baratas: 1, Aranhas: 0, Abelhas: 0, Roedores: 0, Mosquitos: 0, Formigas: 0, Carunchos: 0 },
  { mes: "Abr", Tesourinhas: 1, Outros: 1, Moscas: 1, Escorpioes: 1, Besouros: 1, Baratas: 1, Aranhas: 0, Abelhas: 0, Roedores: 0, Mosquitos: 0, Formigas: 0, Carunchos: 0 },
  { mes: "Mai", Tesourinhas: 1, Outros: 1, Moscas: 1, Escorpioes: 1, Besouros: 1, Baratas: 0, Aranhas: 1, Abelhas: 0, Roedores: 0, Mosquitos: 0, Formigas: 0, Carunchos: 0 },
  { mes: "Jun", Tesourinhas: 2, Outros: 2, Moscas: 0, Escorpioes: 1, Besouros: 2, Baratas: 0, Aranhas: 0, Abelhas: 0, Roedores: 0, Mosquitos: 0, Formigas: 0, Carunchos: 0 },
  { mes: "Jul", Tesourinhas: 0, Outros: 0, Moscas: 0, Escorpioes: 0, Besouros: 0, Baratas: 0, Aranhas: 0, Abelhas: 0, Roedores: 0, Mosquitos: 0, Formigas: 0, Carunchos: 0 },
  { mes: "Ago", Tesourinhas: 0, Outros: 0, Moscas: 0, Escorpioes: 0, Besouros: 0, Baratas: 0, Aranhas: 0, Abelhas: 0, Roedores: 0, Mosquitos: 0, Formigas: 0, Carunchos: 0 },
  { mes: "Set", Tesourinhas: 0, Outros: 0, Moscas: 0, Escorpioes: 0, Besouros: 0, Baratas: 0, Aranhas: 0, Abelhas: 0, Roedores: 0, Mosquitos: 0, Formigas: 0, Carunchos: 0 },
  { mes: "Out", Tesourinhas: 0, Outros: 0, Moscas: 0, Escorpioes: 0, Besouros: 0, Baratas: 0, Aranhas: 0, Abelhas: 0, Roedores: 0, Mosquitos: 0, Formigas: 0, Carunchos: 0 },
  { mes: "Nov", Tesourinhas: 0, Outros: 0, Moscas: 0, Escorpioes: 0, Besouros: 0, Baratas: 0, Aranhas: 0, Abelhas: 0, Roedores: 0, Mosquitos: 0, Formigas: 0, Carunchos: 0 },
  { mes: "Dez", Tesourinhas: 0, Outros: 0, Moscas: 0, Escorpioes: 0, Besouros: 0, Baratas: 0, Aranhas: 0, Abelhas: 0, Roedores: 0, Mosquitos: 0, Formigas: 0, Carunchos: 0 },
];

const ocorrenciaColors: Record<string, string> = {
  Tesourinhas: "#8B6914",
  Outros: "#1a3a5c",
  Moscas: "#6ec6e6",
  Escorpioes: "#4a7a3a",
  Besouros: "#c8a850",
  Baratas: "#d94040",
  Aranhas: "#d4a050",
  Abelhas: "#5a9bd5",
  Roedores: "#333333",
  Mosquitos: "#e8a080",
  Formigas: "#f0e0a0",
  Carunchos: "#c0c0c0",
};

const roedoresData = [
  { mes: "Jan", ano2019: 1.57, ano2020: null },
  { mes: "Fev", ano2019: 0.79, ano2020: null },
  { mes: "Mar", ano2019: 3.94, ano2020: 0.65 },
  { mes: "Abr", ano2019: 1.57, ano2020: null },
  { mes: "Mai", ano2019: 0.65, ano2020: 0.79 },
  { mes: "Jun", ano2019: 3.82, ano2020: 0.65 },
  { mes: "Jul", ano2019: 4.39, ano2020: null },
  { mes: "Ago", ano2019: 6.87, ano2020: null },
  { mes: "Set", ano2019: 4.58, ano2020: null },
  { mes: "Out", ano2019: 0.68, ano2020: null },
  { mes: "Nov", ano2019: 1.3, ano2020: null },
  { mes: "Dez", ano2019: 0, ano2020: null },
];

const armadilhaLuminosaData = [
  { mes: "Jan", Tracas: 35, Moscas: 220, Mariposas: 220, Mosquitos: 255, Carunchos: 0, Besouros: 0, Aleluias: 0, Abelhas: 0 },
  { mes: "Fev", Tracas: 20, Moscas: 90, Mariposas: 110, Mosquitos: 100, Carunchos: 0, Besouros: 0, Aleluias: 0, Abelhas: 0 },
  { mes: "Mar", Tracas: 5, Moscas: 90, Mariposas: 200, Mosquitos: 210, Carunchos: 0, Besouros: 0, Aleluias: 0, Abelhas: 230 },
  { mes: "Abr", Tracas: 60, Moscas: 235, Mariposas: 160, Mosquitos: 280, Carunchos: 0, Besouros: 0, Aleluias: 0, Abelhas: 0 },
  { mes: "Mai", Tracas: 40, Moscas: 220, Mariposas: 140, Mosquitos: 220, Carunchos: 0, Besouros: 0, Aleluias: 0, Abelhas: 0 },
  { mes: "Jun", Tracas: 35, Moscas: 220, Mariposas: 140, Mosquitos: 220, Carunchos: 0, Besouros: 0, Aleluias: 0, Abelhas: 0 },
  { mes: "Jul", Tracas: 0, Moscas: 155, Mariposas: 100, Mosquitos: 180, Carunchos: 0, Besouros: 0, Aleluias: 0, Abelhas: 0 },
  { mes: "Ago", Tracas: 0, Moscas: 0, Mariposas: 0, Mosquitos: 0, Carunchos: 0, Besouros: 0, Aleluias: 0, Abelhas: 0 },
  { mes: "Set", Tracas: 0, Moscas: 0, Mariposas: 0, Mosquitos: 0, Carunchos: 0, Besouros: 0, Aleluias: 0, Abelhas: 0 },
  { mes: "Out", Tracas: 0, Moscas: 0, Mariposas: 0, Mosquitos: 0, Carunchos: 0, Besouros: 0, Aleluias: 0, Abelhas: 0 },
  { mes: "Nov", Tracas: 0, Moscas: 0, Mariposas: 0, Mosquitos: 0, Carunchos: 0, Besouros: 0, Aleluias: 0, Abelhas: 0 },
  { mes: "Dez", Tracas: 0, Moscas: 0, Mariposas: 0, Mosquitos: 0, Carunchos: 0, Besouros: 0, Aleluias: 0, Abelhas: 0 },
];

const luminosaColors: Record<string, string> = {
  Tracas: "#6ec6e6",
  Mosquitos: "#f2c92f",
  Moscas: "#1a3a5c",
  Mariposas: "#c0c0c0",
  Carunchos: "#2a7a5a",
  Besouros: "#d94040",
  Aleluias: "#d4a050",
  Abelhas: "#5a9bd5",
};

const portaIscasData = [
  { mes: "Jan", IscaConsumida: 2.5, IscaNaoConsumida: 48.8, SemAcesso: 48.8, IscaEstragada: 0, IscaAusente: 0, ArmadilhaAusente: 0, ArmQuebrada: 0 },
  { mes: "Fev", IscaConsumida: 0, IscaNaoConsumida: 0, SemAcesso: 0, IscaEstragada: 0, IscaAusente: 0, ArmadilhaAusente: 0, ArmQuebrada: 0 },
  { mes: "Mar", IscaConsumida: 2.5, IscaNaoConsumida: 21.3, SemAcesso: 70.0, IscaEstragada: 3.8, IscaAusente: 0, ArmadilhaAusente: 0, ArmQuebrada: 1.3 },
  { mes: "Abr", IscaConsumida: 1.3, IscaNaoConsumida: 8.8, SemAcesso: 86.3, IscaEstragada: 0, IscaAusente: 0, ArmadilhaAusente: 0, ArmQuebrada: 2.5 },
  { mes: "Mai", IscaConsumida: 1.3, IscaNaoConsumida: 11.3, SemAcesso: 86.3, IscaEstragada: 0, IscaAusente: 0, ArmadilhaAusente: 0, ArmQuebrada: 1.3 },
  { mes: "Jun", IscaConsumida: 1.3, IscaNaoConsumida: 8.8, SemAcesso: 88.8, IscaEstragada: 0, IscaAusente: 0, ArmadilhaAusente: 0, ArmQuebrada: 1.3 },
  { mes: "Jul", IscaConsumida: 0, IscaNaoConsumida: 0, SemAcesso: 0, IscaEstragada: 0, IscaAusente: 0, ArmadilhaAusente: 0, ArmQuebrada: 0 },
  { mes: "Ago", IscaConsumida: 0, IscaNaoConsumida: 0, SemAcesso: 0, IscaEstragada: 0, IscaAusente: 0, ArmadilhaAusente: 0, ArmQuebrada: 0 },
  { mes: "Set", IscaConsumida: 0, IscaNaoConsumida: 0, SemAcesso: 0, IscaEstragada: 0, IscaAusente: 0, ArmadilhaAusente: 0, ArmQuebrada: 0 },
  { mes: "Out", IscaConsumida: 0, IscaNaoConsumida: 0, SemAcesso: 0, IscaEstragada: 0, IscaAusente: 0, ArmadilhaAusente: 0, ArmQuebrada: 0 },
  { mes: "Nov", IscaConsumida: 0, IscaNaoConsumida: 0, SemAcesso: 0, IscaEstragada: 0, IscaAusente: 0, ArmadilhaAusente: 0, ArmQuebrada: 0 },
  { mes: "Dez", IscaConsumida: 0, IscaNaoConsumida: 0, SemAcesso: 0, IscaEstragada: 0, IscaAusente: 0, ArmadilhaAusente: 0, ArmQuebrada: 0 },
];

const portaIscasColors: Record<string, string> = {
  SemAcesso: "#f2c92f",
  IscaEstragada: "#c0c0c0",
  IscaAusente: "#d94040",
  ArmadilhaAusente: "#d4a050",
  IscaNaoConsumida: "#1a3a5c",
  IscaConsumida: "#2a6a7a",
  ArmQuebrada: "#5a9bd5",
};

const portaIscasLabels: Record<string, string> = {
  SemAcesso: "Sem Acesso",
  IscaEstragada: "Isca Estragada",
  IscaAusente: "Isca Ausente",
  ArmadilhaAusente: "Armadilha Ausente",
  IscaNaoConsumida: "Isca Não Consumida",
  IscaConsumida: "Isca Consumida",
  ArmQuebrada: "Arm. Quebrada",
};

const armadilhasAdesivasData = [
  { mes: "Jan", SemAcesso: 2.9, NaoCaptura: 55.9, RefilEstragado: 20.6, ArmQuebrada: 20.6 },
  { mes: "Fev", SemAcesso: 0, NaoCaptura: 64.7, RefilEstragado: 23.5, ArmQuebrada: 11.8 },
  { mes: "Mar", SemAcesso: 0, NaoCaptura: 64.7, RefilEstragado: 23.5, ArmQuebrada: 11.8 },
  { mes: "Abr", SemAcesso: 0, NaoCaptura: 61.8, RefilEstragado: 29.4, ArmQuebrada: 8.8 },
  { mes: "Mai", SemAcesso: 0, NaoCaptura: 67.6, RefilEstragado: 26.5, ArmQuebrada: 5.9 },
  { mes: "Jun", SemAcesso: 0, NaoCaptura: 64.7, RefilEstragado: 23.5, ArmQuebrada: 11.8 },
  { mes: "Jul", SemAcesso: 0, NaoCaptura: 64.7, RefilEstragado: 23.5, ArmQuebrada: 11.8 },
  { mes: "Ago", SemAcesso: 0, NaoCaptura: 0, RefilEstragado: 0, ArmQuebrada: 0 },
  { mes: "Set", SemAcesso: 0, NaoCaptura: 0, RefilEstragado: 0, ArmQuebrada: 0 },
  { mes: "Out", SemAcesso: 0, NaoCaptura: 0, RefilEstragado: 0, ArmQuebrada: 0 },
  { mes: "Nov", SemAcesso: 0, NaoCaptura: 0, RefilEstragado: 0, ArmQuebrada: 0 },
  { mes: "Dez", SemAcesso: 0, NaoCaptura: 0, RefilEstragado: 0, ArmQuebrada: 0 },
];

const adesivasColors: Record<string, string> = {
  SemAcesso: "#1a3a5c",
  RefilEstragado: "#d94040",
  NaoCaptura: "#f2c92f",
  ArmQuebrada: "#5a9bd5",
};

const adesivasLabels: Record<string, string> = {
  SemAcesso: "Sem Acesso",
  RefilEstragado: "Refil Estragado",
  NaoCaptura: "Não Captura",
  ArmQuebrada: "Arm. Quebrada - Refil Estragado",
};

function CustomTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  const filtered = payload.filter((p: any) => p.value > 0);
  if (!filtered.length) return null;
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-3 text-xs max-w-[220px]">
      <p className="font-bold text-[#333333] mb-2 border-b border-gray-100 pb-1">{label} — 2020</p>
      {filtered.map((p: any, i: number) => (
        <div key={i} className="flex items-center gap-2 py-0.5">
          <div className="w-2.5 h-2.5 rounded-sm shrink-0" style={{ backgroundColor: p.color || p.fill }} />
          <span className="text-[#555555]">{p.name}:</span>
          <span className="font-semibold text-[#333333] ml-auto">{typeof p.value === 'number' ? p.value.toLocaleString('pt-AO') : p.value}</span>
        </div>
      ))}
    </div>
  );
}

function RoedoresTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-3 text-xs">
      <p className="font-bold text-[#333333] mb-2 border-b border-gray-100 pb-1">{label}</p>
      {payload.map((p: any, i: number) => (
        p.value != null && (
          <div key={i} className="flex items-center gap-2 py-0.5">
            <div className="w-2.5 h-2.5 rounded-sm shrink-0" style={{ backgroundColor: p.color || p.stroke || p.fill }} />
            <span className="text-[#555555]">{p.name}:</span>
            <span className="font-semibold text-[#333333] ml-auto">{p.value}%</span>
          </div>
        )
      ))}
    </div>
  );
}

const reportTypes = [
  { num: 1, icon: Lamp, title: "Pragas Capturadas por Tipo de Armadilha" },
  { num: 2, icon: FileText, title: "Consumo de Pesticida" },
  { num: 3, icon: Bug, title: "Ocorrência de Pragas nas fichas de Monitoramento" },
  { num: 4, icon: MousePointer2, title: "Relatório de ocorrência por tipo de Armadilha" },
  { num: 5, icon: ClipboardList, title: "Relatório de trabalho Preventivo e corretivo" },
  { num: 6, icon: Rat, title: "Ocorrência por tipo de armadilha para roedores" },
];

export default function Reports() {
  const introAnim = useInView(0.15);
  const typesAnim = useInView(0.15);
  const chartsHeaderAnim = useInView(0.15);

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
              Relatório estatístico<br />de controle de pragas
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed" data-testid="text-reports-subtitle">
              Plataforma online exclusiva para clientes com acesso a relatórios detalhados, gráficos de monitoramento e dados estatísticos em tempo real.
            </p>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div
              ref={introAnim.ref}
              className={`max-w-3xl mx-auto transition-all duration-700 ${introAnim.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6 text-center" data-testid="text-intro-title">
                Relatório Estatístico de Controle de Pragas
              </h2>
              <p className="text-[#555555] text-lg leading-relaxed mb-5">
                O relatório estatístico de controle de pragas apresentado nas páginas a seguir, espelha a eficiência dos serviços prestados e produtos usados pela Bioprev para atingir os objectivos dos nossos clientes (pragas zero), os mesmos poderão ser acessados por cada cliente em específico a partir de uma plataforma pertencente à Bioprev, com todas informações dos serviços prestados, seus resultados, previsões de surgimento de novas pragas e as melhores soluções para exterminá-las.
              </p>
              <p className="text-[#555555] text-lg leading-relaxed">
                Cada cliente possuirá uma conta particular com a palavra passe e usuário a partir da qual poderá acessar todos os relatórios descritos abaixo e avaliar o desempenho dos nossos serviços.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#f8f9fa] py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div
              ref={typesAnim.ref}
              className={`max-w-3xl mx-auto transition-all duration-700 ${typesAnim.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-[#333333] mb-8 text-center" data-testid="text-types-title">
                Tipos de relatórios disponíveis
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {reportTypes.map((r, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 bg-white rounded-lg p-4 border border-gray-100 shadow-sm"
                    style={{ transitionDelay: `${i * 80}ms` }}
                    data-testid={`card-report-type-${i}`}
                  >
                    <div className="w-10 h-10 bg-[#f8f9fa] rounded-lg flex items-center justify-center shrink-0 border border-gray-100">
                      <span className="text-sm font-bold text-[#007cc3]">{r.num}</span>
                    </div>
                    <span className="text-[15px] text-[#333333] font-medium leading-snug">{r.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div
              ref={chartsHeaderAnim.ref}
              className={`max-w-3xl mx-auto text-center mb-14 transition-all duration-700 ${chartsHeaderAnim.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <div className="inline-flex items-center gap-2 bg-[#007cc3]/10 text-[#007cc3] px-4 py-2 rounded-full text-sm font-semibold mb-6" data-testid="badge-charts">
                <BarChart3 className="w-4 h-4" />
                Dados Estatísticos 2020
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#333333] mb-4" data-testid="text-charts-title">
                Gráficos de monitoramento
              </h2>
              <p className="text-[#555555] text-lg leading-relaxed">
                Acompanhe visualmente os dados recolhidos ao longo do ano, com gráficos detalhados de cada tipo de monitoramento realizado nas instalações dos nossos clientes.
              </p>
            </div>

            <div className="max-w-5xl mx-auto space-y-10">

              <ChartCard
                title="Ocorrência de Pragas nas Fichas de Monitoramento"
                subtitle="Nº de ocorrências por tipo de praga — Janeiro a Dezembro 2020"
                testId="chart-ocorrencia"
              >
                <ResponsiveContainer width="100%" height={380}>
                  <BarChart data={ocorrenciaData} margin={{ top: 10, right: 10, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#eee" vertical={false} />
                    <XAxis dataKey="mes" tick={{ fontSize: 12, fill: '#555' }} axisLine={{ stroke: '#ddd' }} tickLine={false} />
                    <YAxis tick={{ fontSize: 12, fill: '#555' }} axisLine={false} tickLine={false} label={{ value: 'Nº de Ocorrências', angle: -90, position: 'insideLeft', style: { fontSize: 11, fill: '#888' } }} />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend wrapperStyle={{ fontSize: 11, paddingTop: 8 }} />
                    {Object.entries(ocorrenciaColors).map(([key, color]) => (
                      <Bar key={key} dataKey={key} stackId="a" fill={color} animationDuration={1200} animationBegin={0} radius={key === 'Carunchos' ? [2, 2, 0, 0] : [0, 0, 0, 0]} />
                    ))}
                  </BarChart>
                </ResponsiveContainer>
              </ChartCard>

              <ChartCard
                title="Resumo da Presença de Roedores"
                subtitle="Comparação de ocorrências (%) entre 2019 e 2020"
                testId="chart-roedores"
              >
                <ResponsiveContainer width="100%" height={380}>
                  <ComposedChart data={roedoresData} margin={{ top: 10, right: 10, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#eee" vertical={false} />
                    <XAxis dataKey="mes" tick={{ fontSize: 12, fill: '#555' }} axisLine={{ stroke: '#ddd' }} tickLine={false} />
                    <YAxis tick={{ fontSize: 12, fill: '#555' }} axisLine={false} tickLine={false} domain={[0, 8]} label={{ value: 'Ocorrências em %', angle: -90, position: 'insideLeft', style: { fontSize: 11, fill: '#888' } }} />
                    <Tooltip content={<RoedoresTooltip />} />
                    <Legend wrapperStyle={{ fontSize: 11, paddingTop: 8 }} />
                    <Line type="monotone" dataKey="ano2019" name="2019" stroke="#333333" strokeWidth={2.5} dot={{ fill: '#333', r: 4, strokeWidth: 0 }} activeDot={{ r: 6 }} animationDuration={1500} connectNulls />
                    <Bar dataKey="ano2020" name="2020" fill="#c8a850" barSize={28} animationDuration={1200} radius={[3, 3, 0, 0]} />
                  </ComposedChart>
                </ResponsiveContainer>
              </ChartCard>

              <ChartCard
                title="Armadilha Luminosa"
                subtitle="Quantidade de capturas por tipo de insecto voador — 2020"
                testId="chart-luminosa"
              >
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={armadilhaLuminosaData} margin={{ top: 10, right: 10, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#eee" vertical={false} />
                    <XAxis dataKey="mes" tick={{ fontSize: 12, fill: '#555' }} axisLine={{ stroke: '#ddd' }} tickLine={false} />
                    <YAxis tick={{ fontSize: 12, fill: '#555' }} axisLine={false} tickLine={false} domain={[0, 800]} label={{ value: 'Quantidade', angle: -90, position: 'insideLeft', style: { fontSize: 11, fill: '#888' } }} />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend wrapperStyle={{ fontSize: 11, paddingTop: 8 }} formatter={(value: string) => {
                      const labels: Record<string, string> = { Tracas: "Traças", Mosquitos: "Mosquitos", Moscas: "Moscas", Mariposas: "Mariposas", Carunchos: "Carunchos", Besouros: "Besouros", Aleluias: "Aleluias", Abelhas: "Abelhas" };
                      return labels[value] || value;
                    }} />
                    {Object.entries(luminosaColors).map(([key, color]) => (
                      <Bar key={key} dataKey={key} name={key} stackId="a" fill={color} animationDuration={1200} animationBegin={0} radius={key === 'Abelhas' ? [2, 2, 0, 0] : [0, 0, 0, 0]} />
                    ))}
                  </BarChart>
                </ResponsiveContainer>
              </ChartCard>

              <ChartCard
                title="Porta Iscas"
                subtitle="Estado das estações porta iscas (%) — 2020"
                testId="chart-porta-iscas"
              >
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={portaIscasData} margin={{ top: 10, right: 10, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#eee" vertical={false} />
                    <XAxis dataKey="mes" tick={{ fontSize: 12, fill: '#555' }} axisLine={{ stroke: '#ddd' }} tickLine={false} />
                    <YAxis tick={{ fontSize: 12, fill: '#555' }} axisLine={false} tickLine={false} domain={[0, 110]} label={{ value: 'Ocorrências em %', angle: -90, position: 'insideLeft', style: { fontSize: 11, fill: '#888' } }} />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend wrapperStyle={{ fontSize: 11, paddingTop: 8 }} formatter={(value: string) => portaIscasLabels[value] || value} />
                    {Object.entries(portaIscasColors).map(([key, color]) => (
                      <Bar key={key} dataKey={key} name={key} stackId="a" fill={color} animationDuration={1200} animationBegin={0} radius={key === 'ArmQuebrada' ? [2, 2, 0, 0] : [0, 0, 0, 0]} />
                    ))}
                  </BarChart>
                </ResponsiveContainer>
              </ChartCard>

              <ChartCard
                title="Armadilhas Adesivas"
                subtitle="Estado das armadilhas adesivas (%) — 2020"
                testId="chart-adesivas"
              >
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={armadilhasAdesivasData} margin={{ top: 10, right: 10, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#eee" vertical={false} />
                    <XAxis dataKey="mes" tick={{ fontSize: 12, fill: '#555' }} axisLine={{ stroke: '#ddd' }} tickLine={false} />
                    <YAxis tick={{ fontSize: 12, fill: '#555' }} axisLine={false} tickLine={false} domain={[0, 110]} label={{ value: 'Ocorrências em %', angle: -90, position: 'insideLeft', style: { fontSize: 11, fill: '#888' } }} />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend wrapperStyle={{ fontSize: 11, paddingTop: 8 }} formatter={(value: string) => adesivasLabels[value] || value} />
                    {Object.entries(adesivasColors).map(([key, color]) => (
                      <Bar key={key} dataKey={key} name={key} stackId="a" fill={color} animationDuration={1200} animationBegin={0} radius={key === 'ArmQuebrada' ? [2, 2, 0, 0] : [0, 0, 0, 0]} />
                    ))}
                  </BarChart>
                </ResponsiveContainer>
              </ChartCard>

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
