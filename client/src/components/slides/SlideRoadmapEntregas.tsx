import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Database, ShoppingCart, Brain, Bot } from "lucide-react";
import SlideFooter from "../SlideFooter";

/*
 * Design: Gantt-style roadmap para apresentação presencial.
 * Layout limpo com barras de fase + hover detalhado por fase.
 * V1/V2/V3 são marcos destacados. Hover mostra entregas concretas.
 */

interface Phase {
  startMonth: number;
  endMonth: number;
  label: string;
  isVersion?: boolean;
  highlight?: string;
  deliverables: string[];
}

interface ProductTrack {
  name: string;
  icon: React.ElementType;
  color: string;
  phases: Phase[];
}

const tracks: ProductTrack[] = [
  {
    name: "DMS Gestor",
    icon: Database,
    color: "#2B7FFF",
    phases: [
      { startMonth: 0, endMonth: 0, label: "Discovery", deliverables: ["Levantamento de requisitos", "Definição de arquitetura", "Setup infraestrutura e CI/CD"] },
      { startMonth: 1, endMonth: 1, label: "V1", isVersion: true, highlight: "V1", deliverables: ["Gestor Lite (fork)", "Controle de acessos básico", "Gestão de estoque"] },
      { startMonth: 2, endMonth: 5, label: "Integrações & CRM", deliverables: ["CRM e funil comercial", "DRE e controle financeiro", "Comunicação omnichannel (WhatsApp)", "App do vendedor mobile", "Integração Bradesco (originação)", "eConversa (OLX, Facebook, portais)"] },
      { startMonth: 6, endMonth: 6, label: "V2", isVersion: true, highlight: "V2", deliverables: ["Originação Bradesco completa", "Dashboard executivo", "Analytics de vendas"] },
      { startMonth: 7, endMonth: 11, label: "IA & Escalabilidade", deliverables: ["Insights IA para lojistas", "Precificação inteligente", "Copiloto IA do Autoline", "Disaster recovery", "Automações inteligentes", "Carteira avançada"] },
      { startMonth: 12, endMonth: 12, label: "V3", isVersion: true, highlight: "V3", deliverables: ["Plataforma completa com IA", "Automações e fidelização", "Embedded app Bradesco"] },
    ],
  },
  {
    name: "Marketplace",
    icon: ShoppingCart,
    color: "#06B6D4",
    phases: [
      { startMonth: 0, endMonth: 0, label: "Discovery", deliverables: ["Discovery UX", "Wireframes", "Definição de catálogo e integrações"] },
      { startMonth: 1, endMonth: 1, label: "V1", isVersion: true, highlight: "V1", deliverables: ["Catálogo com filtros", "Listagem com fotos", "Busca simples", "Área logada"] },
      { startMonth: 2, endMonth: 5, label: "Busca IA & App", deliverables: ["Favoritos e alertas", "Busca avançada e SEO", "\"Descubra Meu Carro\" (IA)", "\"Quanto Vale Meu Carro\"", "Filtro por localidade"] },
      { startMonth: 6, endMonth: 6, label: "V2", isVersion: true, highlight: "V2", deliverables: ["App nativo iOS/Android", "Push notifications", "Busca inteligente IA completa"] },
      { startMonth: 7, endMonth: 11, label: "SEO & Conversão", deliverables: ["Conteúdo curado Bradesco", "Selos de qualidade", "SEO avançado", "Simulação financeira IA", "Leads pré-aprovados", "Personalização por perfil"] },
      { startMonth: 12, endMonth: 12, label: "V3", isVersion: true, highlight: "V3", deliverables: ["Experiência premium completa", "IA financeira integrada", "Conteúdo curado"] },
    ],
  },
  {
    name: "Motor Comercial",
    icon: Brain,
    color: "#22C55E",
    phases: [
      { startMonth: 0, endMonth: 0, label: "Discovery", deliverables: ["Discovery de dados", "Mapeamento de fontes", "Arquitetura da plataforma"] },
      { startMonth: 1, endMonth: 1, label: "Coleta de Dados", deliverables: ["Coleta e integração de dados", "Pipeline de ingestão ativo"] },
      { startMonth: 2, endMonth: 2, label: "V1", isVersion: true, highlight: "V1", deliverables: ["Antecipação de demanda", "Health Score v1 dos lojistas", "Dashboards iniciais"] },
      { startMonth: 3, endMonth: 5, label: "Modelos Preditivos", deliverables: ["Priorização por dados", "Alertas de performance", "Share-of-wallet real-time", "Leads ultra-qualificados", "Modelos preditivos v1"] },
      { startMonth: 6, endMonth: 6, label: "V2", isVersion: true, highlight: "V2", deliverables: ["Dados em tempo real", "Refinamento de modelos", "Integração Autoline ↔ GIO"] },
      { startMonth: 7, endMonth: 11, label: "Inteligência 360°", deliverables: ["Previsão de churn", "Inteligência competitiva", "Visão 360° do ecossistema", "Forecast preditivo", "APIs bidirecionais completas"] },
      { startMonth: 12, endMonth: 12, label: "V3", isVersion: true, highlight: "V3", deliverables: ["Plataforma de inteligência completa", "Decisões estratégicas por dados"] },
    ],
  },
  {
    name: "Copiloto Comercial",
    icon: Bot,
    color: "#CC092F",
    phases: [
      { startMonth: 0, endMonth: 0, label: "Discovery", deliverables: ["Discovery com GEFINS", "Mapeamento de processos", "Definição de MVP"] },
      { startMonth: 1, endMonth: 1, label: "Visitas & Carteira", deliverables: ["Gestão de visitas + GPS", "Carteira de lojistas básica"] },
      { startMonth: 2, endMonth: 2, label: "V1", isVersion: true, highlight: "V1", deliverables: ["Health Score + semáforo", "Comunicação rápida", "Piloto 20-30 GEFINS"] },
      { startMonth: 3, endMonth: 5, label: "IA & Automação", deliverables: ["Priorização por IA", "Alertas automáticos", "Integração Teams + Outlook", "Painel gerencial", "Rollout 50-100 GEFINS", "Kanban + SLAs"] },
      { startMonth: 6, endMonth: 6, label: "V2", isVersion: true, highlight: "V2", deliverables: ["Painel gerencial completo", "\"Modo Guerra\"", "Rollout ampliado"] },
      { startMonth: 7, endMonth: 11, label: "Gamificação & BI", deliverables: ["First IA: voz → insights", "Playbooks inteligentes", "Gamificação e ranking", "Gestão de projetos (Trello)", "Power BI integrado"] },
      { startMonth: 12, endMonth: 12, label: "V3", isVersion: true, highlight: "V3", deliverables: ["100% operacional", "Embedded app Bradesco", "Experiência unificada"] },
    ],
  },
];

const TOTAL_MONTHS = 13;

export default function SlideRoadmapEntregas() {
  const [activePhase, setActivePhase] = useState<{ trackIdx: number; phaseIdx: number } | null>(null);

  const activeData = activePhase ? tracks[activePhase.trackIdx].phases[activePhase.phaseIdx] : null;
  const activeTrack = activePhase ? tracks[activePhase.trackIdx] : null;

  return (
    <div className="flex flex-col h-full overflow-hidden" style={{ padding: "0 clamp(16px, 3vw, 60px)", paddingRight: "clamp(50px, 6vw, 90px)" }}>
      {/* Título */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center shrink-0"
        style={{ paddingTop: "clamp(10px, 2vh, 28px)", paddingBottom: "clamp(4px, 0.8vh, 12px)" }}
      >
        <h2
          className="font-extrabold text-[#EDEDEF] tracking-tight"
          style={{ fontSize: "clamp(22px, 4vh, 52px)", lineHeight: "1.1", marginBottom: "clamp(2px, 0.5vh, 8px)" }}
        >
          Roadmap de Entregas
        </h2>
        <p className="text-[#8A8A8E]" style={{ fontSize: "clamp(11px, 1.4vh, 17px)" }}>
          Valor entregue desde o primeiro mês — passe o mouse para ver as entregas detalhadas
        </p>
      </motion.div>

      {/* Gantt Chart */}
      <div className="flex-1 flex flex-col justify-center w-full max-w-[1300px] mx-auto" style={{ gap: "clamp(4px, 0.6vh, 10px)" }}>
        
        {/* Eixo temporal */}
        <div className="flex items-end" style={{ paddingLeft: "clamp(100px, 14vw, 200px)", gap: 0 }}>
          {Array.from({ length: TOTAL_MONTHS }, (_, i) => (
            <div
              key={i}
              className="text-center font-bold"
              style={{
                width: `${100 / TOTAL_MONTHS}%`,
                fontSize: "clamp(10px, 1.4vh, 18px)",
                color: [0, 1, 2, 6, 12].includes(i) ? "#EDEDEF" : "#6B6B70",
                paddingBottom: "clamp(3px, 0.5vh, 8px)",
              }}
            >
              M{i}
            </div>
          ))}
        </div>

        {/* Linha do eixo */}
        <div className="flex items-center" style={{ paddingLeft: "clamp(100px, 14vw, 200px)", marginTop: "-2px", marginBottom: "clamp(1px, 0.3vh, 4px)" }}>
          <div className="w-full" style={{ height: "2px", background: "linear-gradient(to right, rgba(43,127,255,0.3), rgba(43,127,255,0.5), rgba(34,197,94,0.5), rgba(204,9,47,0.5))", borderRadius: "1px" }} />
        </div>

        {/* Trilhas */}
        {tracks.map((track, trackIdx) => {
          const Icon = track.icon;
          return (
            <motion.div
              key={trackIdx}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 + trackIdx * 0.1 }}
              className="flex items-center"
              style={{ gap: 0, minHeight: "clamp(42px, 6vh, 80px)" }}
            >
              {/* Label */}
              <div
                className="flex items-center gap-2 shrink-0"
                style={{ width: "clamp(100px, 14vw, 200px)", paddingRight: "clamp(8px, 1vw, 20px)" }}
              >
                <div
                  className="flex items-center justify-center rounded-lg shrink-0"
                  style={{
                    width: "clamp(26px, 3.5vh, 44px)",
                    height: "clamp(26px, 3.5vh, 44px)",
                    background: `${track.color}18`,
                    border: `1.5px solid ${track.color}40`,
                  }}
                >
                  <Icon style={{ width: "clamp(13px, 1.8vh, 22px)", height: "clamp(13px, 1.8vh, 22px)", color: track.color }} />
                </div>
                <span className="font-bold text-[#EDEDEF] leading-tight" style={{ fontSize: "clamp(9px, 1.2vh, 15px)" }}>
                  {track.name}
                </span>
              </div>

              {/* Barras Gantt */}
              <div className="flex-1 relative" style={{ height: "clamp(36px, 5.5vh, 70px)" }}>
                {/* Grid lines */}
                <div className="absolute inset-0 flex">
                  {Array.from({ length: TOTAL_MONTHS }, (_, i) => (
                    <div key={i} style={{ width: `${100 / TOTAL_MONTHS}%`, borderRight: i < TOTAL_MONTHS - 1 ? "1px solid rgba(255,255,255,0.04)" : "none" }} />
                  ))}
                </div>

                {/* Phase bars */}
                {track.phases.map((phase, phaseIdx) => {
                  const leftPct = (phase.startMonth / TOTAL_MONTHS) * 100;
                  const widthPct = ((phase.endMonth - phase.startMonth + 1) / TOTAL_MONTHS) * 100;
                  const isVersion = phase.isVersion;
                  const isDiscovery = phase.label === "Discovery";
                  const isActive = activePhase?.trackIdx === trackIdx && activePhase?.phaseIdx === phaseIdx;

                  return (
                    <motion.div
                      key={phaseIdx}
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{ scaleX: 1, opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.3 + trackIdx * 0.1 + phaseIdx * 0.05 }}
                      className="absolute flex items-center justify-center cursor-pointer transition-all duration-200 interactive-card"
                      style={{
                        left: `${leftPct}%`,
                        width: `${widthPct}%`,
                        top: "8%",
                        bottom: "8%",
                        transformOrigin: "left center",
                        borderRadius: isVersion ? "clamp(4px, 0.6vh, 10px)" : "clamp(3px, 0.4vh, 6px)",
                        background: isVersion
                          ? `linear-gradient(135deg, ${track.color}, ${track.color}CC)`
                          : isDiscovery
                            ? "rgba(255,255,255,0.05)"
                            : `${track.color}15`,
                        border: isActive
                          ? `2px solid ${track.color}`
                          : isVersion
                            ? `2px solid ${track.color}`
                            : isDiscovery
                              ? "1px dashed rgba(255,255,255,0.15)"
                              : `1px solid ${track.color}30`,
                        boxShadow: isActive
                          ? `0 0 24px ${track.color}50, 0 4px 16px ${track.color}30`
                          : isVersion
                            ? `0 0 20px ${track.color}40, 0 4px 12px ${track.color}20`
                            : "none",
                        zIndex: isActive ? 20 : isVersion ? 10 : 1,
                        transform: isActive && !isVersion ? `scaleY(1.15)` : undefined,
                      }}
                      onMouseEnter={() => setActivePhase({ trackIdx, phaseIdx })}
                      onMouseLeave={() => setActivePhase(null)}
                    >
                      <span
                        className="font-bold text-center leading-none truncate"
                        style={{
                          fontSize: isVersion ? "clamp(12px, 1.8vh, 24px)" : "clamp(7px, 0.9vh, 12px)",
                          color: isVersion ? "#FFFFFF" : isDiscovery ? "#8A8A8E" : `${track.color}CC`,
                          fontWeight: isVersion ? 900 : 600,
                          letterSpacing: isVersion ? "0.05em" : "0",
                          padding: "0 clamp(2px, 0.3vw, 6px)",
                        }}
                      >
                        {phase.label}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          );
        })}

        {/* Legenda */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex items-center justify-center"
          style={{ gap: "clamp(16px, 3vw, 40px)", marginTop: "clamp(4px, 0.8vh, 10px)", fontSize: "clamp(9px, 1.1vh, 14px)" }}
        >
          <div className="flex items-center gap-2">
            <div className="rounded" style={{ width: "clamp(20px, 2.5vh, 32px)", height: "clamp(12px, 1.6vh, 20px)", background: "rgba(255,255,255,0.05)", border: "1px dashed rgba(255,255,255,0.15)" }} />
            <span className="text-[#8A8A8E] font-medium">Discovery</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="rounded" style={{ width: "clamp(20px, 2.5vh, 32px)", height: "clamp(12px, 1.6vh, 20px)", background: "rgba(43,127,255,0.15)", border: "1px solid rgba(43,127,255,0.3)" }} />
            <span className="text-[#8A8A8E] font-medium">Evolução contínua</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="rounded" style={{ width: "clamp(20px, 2.5vh, 32px)", height: "clamp(12px, 1.6vh, 20px)", background: "linear-gradient(135deg, #2B7FFF, #2B7FFFCC)", border: "2px solid #2B7FFF", boxShadow: "0 0 8px #2B7FFF40" }} />
            <span className="text-[#EDEDEF] font-bold">Release (V1 / V2 / V3)</span>
          </div>
        </motion.div>

        {/* Painel de detalhes (hover) */}
        <div style={{ minHeight: "clamp(50px, 7vh, 90px)", marginTop: "clamp(2px, 0.4vh, 6px)" }}>
          <AnimatePresence mode="wait">
            {activeData && activeTrack && activePhase ? (
              <motion.div
                key={`${activePhase.trackIdx}-${activePhase.phaseIdx}`}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.15 }}
                className="rounded-lg backdrop-blur-sm"
                style={{
                  padding: "clamp(6px, 1vh, 14px) clamp(12px, 1.5vw, 24px)",
                  background: "rgba(255,255,255,0.04)",
                  border: `1px solid ${activeTrack.color}40`,
                }}
              >
                <div className="flex items-center gap-2" style={{ marginBottom: "clamp(4px, 0.6vh, 10px)" }}>
                  <activeTrack.icon style={{ width: "clamp(14px, 1.6vh, 20px)", height: "clamp(14px, 1.6vh, 20px)", color: activeTrack.color }} />
                  <span className="font-bold text-[#EDEDEF]" style={{ fontSize: "clamp(11px, 1.3vh, 17px)" }}>
                    {activeTrack.name}
                    <span className="text-[#8A8A8E] font-normal"> — M{activeData.startMonth}{activeData.endMonth !== activeData.startMonth ? `–M${activeData.endMonth}` : ""}</span>
                    {activeData.highlight && (
                      <span className="ml-2 px-2 py-0.5 rounded font-black" style={{ background: `${activeTrack.color}30`, color: activeTrack.color, fontSize: "clamp(9px, 1.1vh, 14px)" }}>
                        {activeData.highlight}
                      </span>
                    )}
                    {activeData.label === "Discovery" && (
                      <span className="ml-2 px-2 py-0.5 rounded font-bold bg-white/[0.06] text-[#8A8A8E]" style={{ fontSize: "clamp(9px, 1.1vh, 14px)" }}>
                        DISCOVERY
                      </span>
                    )}
                  </span>
                </div>
                <div className="flex flex-wrap" style={{ gap: "clamp(3px, 0.4vw, 8px)" }}>
                  {activeData.deliverables.map((item, i) => (
                    <span
                      key={i}
                      className="rounded-md bg-white/[0.04] border border-white/[0.08] text-[#C8C8CD] font-medium"
                      style={{ padding: "clamp(2px, 0.3vh, 5px) clamp(6px, 0.8vw, 12px)", fontSize: "clamp(9px, 1.1vh, 14px)" }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="msg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center"
                style={{ padding: "clamp(6px, 1vh, 14px)" }}
              >
                <p style={{ fontSize: "clamp(10px, 1.3vh, 16px)" }}>
                  <span className="text-[#8A8A8E]">DMS + Marketplace entregam </span>
                  <span className="text-[#2B7FFF] font-bold">V1 no Mês 1</span>
                  <span className="text-[#8A8A8E]"> — Motor + Copiloto entregam </span>
                  <span className="text-[#22C55E] font-bold">V1 no Mês 2</span>
                  <span className="text-[#8A8A8E]"> — Valor desde o </span>
                  <span className="text-[#EDEDEF] font-bold">dia zero</span>
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <SlideFooter />
    </div>
  );
}
