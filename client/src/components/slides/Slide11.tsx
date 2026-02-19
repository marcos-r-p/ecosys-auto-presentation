import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  MessageCircle,
  TrendingUp,
  ArrowRight,
  Zap,
  Target,
  DollarSign,
} from "lucide-react";
import SlideFooter from "../SlideFooter";

/*
 * Design: Comunicação Unificada — Fluxo de Geração e Conversão de Leads
 * Layout horizontal: Canais de Origem → eConversa CRM (protagonista) → Impacto em Vendas
 * Animação sequencial: canais → convergência → CRM → impacto → resultado
 * Foco em resultados de negócio, não funcionalidades
 * Estilo executivo para apresentação presencial em tela grande
 */

const channels = [
  { name: "WhatsApp", color: "#25D366", emoji: "💬" },
  { name: "OLX", color: "#6E0AD6", emoji: "🏷️" },
  { name: "Instagram", color: "#E4405F", emoji: "📸" },
  { name: "Facebook", color: "#1877F2", emoji: "👥" },
  { name: "Marketplace", color: "#2B7FFF", emoji: "🛒" },
];

const impactMetrics = [
  {
    icon: Zap,
    label: "Resposta instantânea",
    value: "Zero leads sem resposta",
    color: "#2B7FFF",
  },
  {
    icon: Target,
    label: "Conversão ampliada",
    value: "+40% taxa de fechamento",
    color: "#10B981",
  },
  {
    icon: DollarSign,
    label: "Receita acelerada",
    value: "Mais vendas por vendedor",
    color: "#F59E0B",
  },
];

export default function Slide11() {
  const [phase, setPhase] = useState(0);
  const [hoveredChannel, setHoveredChannel] = useState<number | null>(null);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 300),   // Header
      setTimeout(() => setPhase(2), 700),   // Canais
      setTimeout(() => setPhase(3), 1300),  // Setas convergência
      setTimeout(() => setPhase(4), 1700),  // CRM central
      setTimeout(() => setPhase(5), 2400),  // Seta saída + Impacto
      setTimeout(() => setPhase(6), 3000),  // Resultado final
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="flex flex-col items-center justify-start h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-[120px] pr-16 pt-2 sm:pt-3 md:pt-3 lg:pt-4 pb-2 overflow-hidden">
      <div className="max-w-7xl w-full flex flex-col h-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={phase >= 1 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2
            className="font-extrabold tracking-tight text-[#EDEDEF]"
            style={{
              fontSize: "clamp(28px, 4.2vh, 50px)",
              lineHeight: "1.1",
              marginBottom: "clamp(4px, 0.6vh, 10px)",
            }}
          >
            Comunicação Unificada para{" "}
            <span className="text-[#2B7FFF]">Maximizar a Conversão</span>
          </h2>
          <p
            className="text-[#8A8A8E] max-w-3xl mx-auto"
            style={{ fontSize: "clamp(13px, 1.5vh, 18px)" }}
          >
            De 5 canais dispersos para 1 plataforma inteligente — nenhum lead se perde
          </p>
        </motion.div>

        {/* Main Flow: Canais → CRM → Impacto */}
        <div className="flex-1 flex flex-col justify-center min-h-0">
          {/* Resultado Final - acima do fluxo */}
          <div className="flex items-center gap-0">
          {/* ── COLUNA 1: Canais de Origem ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={phase >= 2 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-2 flex-shrink-0"
            style={{ width: "clamp(165px, 20vw, 230px)" }}
          >
            <p
              className="text-[#8A8A8E] font-semibold uppercase tracking-wider mb-1 text-center"
              style={{ fontSize: "clamp(12px, 1.3vh, 15px)" }}
            >
              Canais de Origem
            </p>
            {channels.map((ch, i) => (
              <motion.div
                key={ch.name}
                initial={{ opacity: 0, x: -20 }}
                animate={phase >= 2 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                onMouseEnter={() => setHoveredChannel(i)}
                onMouseLeave={() => setHoveredChannel(null)}
              >
                <div
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-xl border transition-all duration-200 cursor-pointer interactive-card ${
                    hoveredChannel === i
                      ? "bg-white/[0.08] border-white/[0.2] scale-[1.03]"
                      : "bg-white/[0.03] border-white/[0.08]"
                  }`}
                >
                  <span style={{ fontSize: "clamp(16px, 1.8vh, 20px)" }}>{ch.emoji}</span>
                  <span
                    className="font-semibold"
                    style={{
                      fontSize: "clamp(14px, 1.6vh, 18px)",
                      color: ch.color,
                    }}
                  >
                    {ch.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* ── SETAS DE CONVERGÊNCIA ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={phase >= 3 ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center px-1 flex-shrink-0"
            style={{ width: "clamp(30px, 4vw, 60px)" }}
          >
            <svg
              viewBox="0 0 40 200"
              className="w-full"
              style={{ height: "clamp(140px, 20vh, 260px)" }}
            >
              {/* 5 lines converging from left to center-right */}
              {[0, 1, 2, 3, 4].map((i) => {
                const yStart = 20 + i * 40;
                const yEnd = 100;
                return (
                  <motion.path
                    key={i}
                    d={`M 0 ${yStart} C 20 ${yStart}, 20 ${yEnd}, 38 ${yEnd}`}
                    fill="none"
                    stroke="#2B7FFF"
                    strokeWidth="1.5"
                    strokeOpacity="0.4"
                    initial={{ pathLength: 0 }}
                    animate={phase >= 3 ? { pathLength: 1 } : {}}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                  />
                );
              })}
              {/* Arrow tip */}
              <motion.polygon
                points="34,95 40,100 34,105"
                fill="#2B7FFF"
                fillOpacity="0.6"
                initial={{ opacity: 0 }}
                animate={phase >= 3 ? { opacity: 1 } : {}}
                transition={{ duration: 0.2, delay: 0.4 }}
              />
            </svg>
          </motion.div>

          {/* ── COLUNA 2: eConversa CRM (Protagonista) ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={phase >= 4 ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
            className="flex-1 min-w-0"
            style={{ maxWidth: "clamp(280px, 32vw, 400px)" }}
          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute -inset-2 rounded-2xl bg-[#2B7FFF]/10 blur-xl" />
              <div className="relative rounded-2xl border-2 border-[#2B7FFF]/30 bg-gradient-to-br from-[#2B7FFF]/[0.08] to-[#2B7FFF]/[0.02] p-4">
                {/* Header */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-xl bg-[#2B7FFF]/15 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-[#2B7FFF]" />
                  </div>
                  <div className="min-w-0">
                    <span
                      className="text-[#2B7FFF] font-bold uppercase tracking-wider block"
                      style={{ fontSize: "clamp(11px, 1.2vh, 14px)" }}
                    >
                      Plataforma Central
                    </span>
                    <h3
                      className="font-bold text-[#EDEDEF]"
                      style={{ fontSize: "clamp(22px, 2.8vh, 32px)", lineHeight: "1.2" }}
                    >
                      eConversa
                    </h3>
                  </div>
                  <span className="ml-auto px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-[#2B7FFF]/15 text-[#2B7FFF] border border-[#2B7FFF]/30 whitespace-nowrap flex-shrink-0">
                    CRM Omnichannel
                  </span>
                </div>

                {/* Key capabilities */}
                <div className="space-y-1.5 mb-2">
                  {[
                    "1 inbox para todos os canais",
                    "Atribuição automática de leads",
                    "Histórico completo do cliente",
                    "Nenhuma conversa sem resposta",
                  ].map((text, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={phase >= 4 ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.25, delay: 0.15 + i * 0.08 }}
                      className="flex items-center gap-2"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#2B7FFF] flex-shrink-0" />
                      <span
                        className="text-[#C0C0C4]"
                        style={{ fontSize: "clamp(13px, 1.5vh, 17px)" }}
                      >
                        {text}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Flow summary */}
                <div className="flex items-center justify-center gap-2 pt-2.5 border-t border-white/[0.06]">
                  <span className="text-[#8A8A8E] font-medium" style={{ fontSize: "clamp(11px, 1.2vh, 14px)" }}>
                    5 canais
                  </span>
                  <ArrowRight className="w-3 h-3 text-[#2B7FFF]" />
                  <span className="text-[#EDEDEF] font-bold" style={{ fontSize: "clamp(11px, 1.2vh, 14px)" }}>
                    1 plataforma
                  </span>
                  <ArrowRight className="w-3 h-3 text-[#2B7FFF]" />
                  <span className="text-[#2B7FFF] font-bold" style={{ fontSize: "clamp(11px, 1.2vh, 14px)" }}>
                    0 leads perdidos
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── SETA DE SAÍDA ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={phase >= 5 ? { opacity: 1 } : {}}
            transition={{ duration: 0.4 }}
            className="flex items-center px-1 flex-shrink-0"
            style={{ width: "clamp(30px, 4vw, 60px)" }}
          >
            <svg viewBox="0 0 50 40" className="w-full h-10">
              <motion.line
                x1="0" y1="20" x2="38" y2="20"
                stroke="url(#exitGrad)"
                strokeWidth="2.5"
                initial={{ pathLength: 0 }}
                animate={phase >= 5 ? { pathLength: 1 } : {}}
                transition={{ duration: 0.3 }}
              />
              <motion.polygon
                points="35,13 46,20 35,27"
                fill="#10B981"
                fillOpacity="0.7"
                initial={{ opacity: 0 }}
                animate={phase >= 5 ? { opacity: 1 } : {}}
                transition={{ duration: 0.2, delay: 0.3 }}
              />
              <defs>
                <linearGradient id="exitGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#2B7FFF" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#10B981" stopOpacity="0.6" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>

          {/* ── COLUNA 3: Impacto em Vendas ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={phase >= 5 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-2 flex-shrink-0"
            style={{ width: "clamp(185px, 22vw, 250px)" }}
          >
            <p
              className="text-[#8A8A8E] font-semibold uppercase tracking-wider mb-1 text-center"
              style={{ fontSize: "clamp(12px, 1.3vh, 15px)" }}
            >
              Impacto em Vendas
            </p>
            {impactMetrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, x: 20 }}
                animate={phase >= 5 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.3, delay: i * 0.12 }}
                className="group"
              >
                <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-3 hover:bg-white/[0.06] hover:border-white/[0.15] transition-all">
                  <div className="flex items-center gap-2 mb-1">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: metric.color + "15" }}
                    >
                      <metric.icon
                        className="w-4 h-4"
                        style={{ color: metric.color }}
                      />
                    </div>
                    <span
                      className="font-semibold text-[#EDEDEF]"
                      style={{ fontSize: "clamp(12px, 1.3vh, 15px)" }}
                    >
                      {metric.label}
                    </span>
                  </div>
                  <p
                    className="font-bold ml-9"
                    style={{
                      fontSize: "clamp(13px, 1.5vh, 17px)",
                      color: metric.color,
                    }}
                  >
                    {metric.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
           </div>

          {/* ── Resultado Final ── */}
          <AnimatePresence>
            {phase >= 6 && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative mt-3"
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#2B7FFF]/12 via-[#10B981]/8 to-[#F59E0B]/8 blur-lg animate-pulse" />
                <div className="relative rounded-xl border border-[#2B7FFF]/20 bg-white/[0.03] px-5 py-2.5 flex items-center justify-center gap-3">
                  <TrendingUp className="w-5 h-5 text-[#2B7FFF] flex-shrink-0" />
                  <p
                    className="text-[#EDEDEF] font-bold text-center"
                    style={{ fontSize: "clamp(14px, 1.7vh, 20px)" }}
                  >
                    Comunicação centralizada ={" "}
                    <span className="text-[#10B981]">mais conversão</span> ={" "}
                    <span className="text-[#F59E0B]">mais receita</span> para o Bradesco
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <SlideFooter />
    </div>
  );
}
