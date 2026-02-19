import { motion } from "motion/react";
import { Database, ShoppingCart, Brain, Bot } from "lucide-react";
import SlideFooter from "../SlideFooter";

/*
 * Design: Roadmap Gantt-style para apresentação presencial em tela grande.
 * Foco em marcos V1/V2/V3, barras de fase, alta legibilidade a distância.
 * Estilo executivo, tecnológico, profissional.
 */

interface Phase {
  startMonth: number;
  endMonth: number;
  label: string;
  isVersion?: boolean;
  highlight?: string; // V1, V2, V3 text
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
      { startMonth: 0, endMonth: 0, label: "Discovery", isVersion: false },
      { startMonth: 1, endMonth: 1, label: "V1", isVersion: true, highlight: "V1" },
      { startMonth: 2, endMonth: 5, label: "Integrações & CRM", isVersion: false },
      { startMonth: 6, endMonth: 6, label: "V2", isVersion: true, highlight: "V2" },
      { startMonth: 7, endMonth: 11, label: "IA & Escalabilidade", isVersion: false },
      { startMonth: 12, endMonth: 12, label: "V3", isVersion: true, highlight: "V3" },
    ],
  },
  {
    name: "Marketplace",
    icon: ShoppingCart,
    color: "#06B6D4",
    phases: [
      { startMonth: 0, endMonth: 0, label: "Discovery", isVersion: false },
      { startMonth: 1, endMonth: 1, label: "V1", isVersion: true, highlight: "V1" },
      { startMonth: 2, endMonth: 5, label: "Busca IA & App", isVersion: false },
      { startMonth: 6, endMonth: 6, label: "V2", isVersion: true, highlight: "V2" },
      { startMonth: 7, endMonth: 11, label: "SEO & Conversão", isVersion: false },
      { startMonth: 12, endMonth: 12, label: "V3", isVersion: true, highlight: "V3" },
    ],
  },
  {
    name: "Motor Comercial",
    icon: Brain,
    color: "#22C55E",
    phases: [
      { startMonth: 0, endMonth: 0, label: "Discovery", isVersion: false },
      { startMonth: 1, endMonth: 1, label: "Coleta de Dados", isVersion: false },
      { startMonth: 2, endMonth: 2, label: "V1", isVersion: true, highlight: "V1" },
      { startMonth: 3, endMonth: 5, label: "Modelos Preditivos", isVersion: false },
      { startMonth: 6, endMonth: 6, label: "V2", isVersion: true, highlight: "V2" },
      { startMonth: 7, endMonth: 11, label: "Inteligência 360°", isVersion: false },
      { startMonth: 12, endMonth: 12, label: "V3", isVersion: true, highlight: "V3" },
    ],
  },
  {
    name: "Copiloto Comercial",
    icon: Bot,
    color: "#CC092F",
    phases: [
      { startMonth: 0, endMonth: 0, label: "Discovery", isVersion: false },
      { startMonth: 1, endMonth: 1, label: "Visitas & Carteira", isVersion: false },
      { startMonth: 2, endMonth: 2, label: "V1", isVersion: true, highlight: "V1" },
      { startMonth: 3, endMonth: 5, label: "IA & Automação", isVersion: false },
      { startMonth: 6, endMonth: 6, label: "V2", isVersion: true, highlight: "V2" },
      { startMonth: 7, endMonth: 11, label: "Gamificação & BI", isVersion: false },
      { startMonth: 12, endMonth: 12, label: "V3", isVersion: true, highlight: "V3" },
    ],
  },
];

const TOTAL_MONTHS = 13; // 0 to 12

export default function SlideRoadmapEntregas() {
  return (
    <div className="flex flex-col h-full overflow-hidden" style={{ padding: "0 clamp(16px, 3vw, 60px)", paddingRight: "clamp(50px, 6vw, 90px)" }}>
      {/* Título */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center shrink-0"
        style={{ paddingTop: "clamp(12px, 2.5vh, 36px)", paddingBottom: "clamp(8px, 1.5vh, 20px)" }}
      >
        <h2
          className="font-extrabold text-[#EDEDEF] tracking-tight"
          style={{ fontSize: "clamp(22px, 4vh, 52px)", lineHeight: "1.1", marginBottom: "clamp(4px, 0.8vh, 12px)" }}
        >
          Roadmap de Entregas
        </h2>
        <p className="text-[#8A8A8E]" style={{ fontSize: "clamp(11px, 1.5vh, 18px)" }}>
          Valor entregue desde o primeiro mês — 4 produtos em evolução contínua
        </p>
      </motion.div>

      {/* Gantt Chart */}
      <div className="flex-1 flex flex-col justify-center w-full max-w-[1300px] mx-auto" style={{ gap: "clamp(6px, 1vh, 16px)" }}>
        
        {/* Eixo temporal - meses */}
        <div className="flex items-end" style={{ paddingLeft: "clamp(100px, 14vw, 200px)", gap: 0 }}>
          {Array.from({ length: TOTAL_MONTHS }, (_, i) => (
            <div
              key={i}
              className="text-center font-bold"
              style={{
                width: `${100 / TOTAL_MONTHS}%`,
                fontSize: "clamp(10px, 1.4vh, 18px)",
                color: i === 0 ? "#EDEDEF" : (i === 1 || i === 2 || i === 6 || i === 12) ? "#EDEDEF" : "#6B6B70",
                paddingBottom: "clamp(4px, 0.8vh, 12px)",
              }}
            >
              M{i}
            </div>
          ))}
        </div>

        {/* Linha do eixo temporal */}
        <div className="flex items-center" style={{ paddingLeft: "clamp(100px, 14vw, 200px)", marginTop: "-2px", marginBottom: "clamp(2px, 0.5vh, 8px)" }}>
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
              style={{ gap: 0, minHeight: "clamp(48px, 7vh, 90px)" }}
            >
              {/* Label do produto */}
              <div
                className="flex items-center gap-2 shrink-0"
                style={{
                  width: "clamp(100px, 14vw, 200px)",
                  paddingRight: "clamp(8px, 1vw, 20px)",
                }}
              >
                <div
                  className="flex items-center justify-center rounded-lg shrink-0"
                  style={{
                    width: "clamp(28px, 4vh, 48px)",
                    height: "clamp(28px, 4vh, 48px)",
                    background: `${track.color}18`,
                    border: `1.5px solid ${track.color}40`,
                  }}
                >
                  <Icon style={{ width: "clamp(14px, 2vh, 24px)", height: "clamp(14px, 2vh, 24px)", color: track.color }} />
                </div>
                <span
                  className="font-bold text-[#EDEDEF] leading-tight"
                  style={{ fontSize: "clamp(9px, 1.3vh, 16px)" }}
                >
                  {track.name}
                </span>
              </div>

              {/* Barras Gantt */}
              <div className="flex-1 relative" style={{ height: "clamp(40px, 6vh, 76px)" }}>
                {/* Background grid lines */}
                <div className="absolute inset-0 flex">
                  {Array.from({ length: TOTAL_MONTHS }, (_, i) => (
                    <div
                      key={i}
                      style={{
                        width: `${100 / TOTAL_MONTHS}%`,
                        borderRight: i < TOTAL_MONTHS - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
                      }}
                    />
                  ))}
                </div>

                {/* Phase bars */}
                {track.phases.map((phase, phaseIdx) => {
                  const leftPct = (phase.startMonth / TOTAL_MONTHS) * 100;
                  const widthPct = ((phase.endMonth - phase.startMonth + 1) / TOTAL_MONTHS) * 100;
                  const isVersion = phase.isVersion;
                  const isDiscovery = phase.label === "Discovery";

                  return (
                    <motion.div
                      key={phaseIdx}
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{ scaleX: 1, opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.3 + trackIdx * 0.1 + phaseIdx * 0.05 }}
                      className="absolute flex items-center justify-center"
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
                        border: isVersion
                          ? `2px solid ${track.color}`
                          : isDiscovery
                            ? "1px dashed rgba(255,255,255,0.15)"
                            : `1px solid ${track.color}30`,
                        boxShadow: isVersion
                          ? `0 0 20px ${track.color}40, 0 4px 12px ${track.color}20`
                          : "none",
                        zIndex: isVersion ? 10 : 1,
                      }}
                    >
                      <span
                        className="font-bold text-center leading-none truncate"
                        style={{
                          fontSize: isVersion
                            ? "clamp(12px, 1.8vh, 24px)"
                            : "clamp(7px, 0.9vh, 12px)",
                          color: isVersion
                            ? "#FFFFFF"
                            : isDiscovery
                              ? "#8A8A8E"
                              : `${track.color}CC`,
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
          style={{ gap: "clamp(16px, 3vw, 40px)", marginTop: "clamp(6px, 1.2vh, 16px)", fontSize: "clamp(9px, 1.2vh, 15px)" }}
        >
          <div className="flex items-center gap-2">
            <div
              className="rounded"
              style={{
                width: "clamp(24px, 3vh, 36px)",
                height: "clamp(14px, 2vh, 22px)",
                background: "rgba(255,255,255,0.05)",
                border: "1px dashed rgba(255,255,255,0.15)",
              }}
            />
            <span className="text-[#8A8A8E] font-medium">Discovery</span>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="rounded"
              style={{
                width: "clamp(24px, 3vh, 36px)",
                height: "clamp(14px, 2vh, 22px)",
                background: "rgba(43,127,255,0.15)",
                border: "1px solid rgba(43,127,255,0.3)",
              }}
            />
            <span className="text-[#8A8A8E] font-medium">Evolução contínua</span>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="rounded"
              style={{
                width: "clamp(24px, 3vh, 36px)",
                height: "clamp(14px, 2vh, 22px)",
                background: "linear-gradient(135deg, #2B7FFF, #2B7FFFCC)",
                border: "2px solid #2B7FFF",
                boxShadow: "0 0 8px #2B7FFF40",
              }}
            />
            <span className="text-[#EDEDEF] font-bold">Release (V1 / V2 / V3)</span>
          </div>
        </motion.div>

        {/* Mensagem-chave */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="text-center"
          style={{ marginTop: "clamp(4px, 0.8vh, 12px)" }}
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
      </div>

      <SlideFooter />
    </div>
  );
}
