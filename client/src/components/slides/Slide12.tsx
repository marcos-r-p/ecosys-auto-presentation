import { motion } from "motion/react";
import { UserPlus, Package, DollarSign, Heart, ArrowRight, TrendingUp, Zap } from "lucide-react";
import SlideFooter from "../SlideFooter";

/*
 * Slide 12 — Assistente IA do Lojista
 * Design: 4 agentes em sequência lógica (pré-venda → estoque → financeiro → pós-venda)
 * Financeiro como protagonista (card maior, glow, badge)
 * Bullets curtos, escaneável à distância
 * Frase de impacto sobre eficiência e rentabilidade
 * Animação: revelação sequencial dos agentes → impacto final
 */

export default function Slide12() {
  return (
    <div className="flex flex-col h-full overflow-hidden" style={{ padding: "0 clamp(16px, 3vw, 60px)" }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center shrink-0"
        style={{ paddingTop: "clamp(10px, 2vh, 28px)", paddingBottom: "clamp(4px, 0.8vh, 12px)" }}
      >
        <p className="text-[#8A8A8E] uppercase tracking-[0.2em] mb-1" style={{ fontSize: "clamp(9px, 1vh, 12px)" }}>
          Ciclo completo de negócio com IA
        </p>
        <h2
          className="font-extrabold tracking-tight text-[#EDEDEF]"
          style={{ fontSize: "clamp(22px, 3.8vh, 46px)", lineHeight: "1.1", marginBottom: "clamp(2px, 0.5vh, 8px)" }}
        >
          Assistente IA <span className="text-[#2B7FFF]">do Lojista</span>
        </h2>
        <p className="text-[#8A8A8E] max-w-4xl mx-auto" style={{ fontSize: "clamp(11px, 1.3vh, 16px)" }}>
          4 agentes especializados que operam 24/7 em cada etapa do ciclo da revenda
        </p>
      </motion.div>

      {/* Main content */}
      <div className="flex-1 flex flex-col justify-start w-full max-w-7xl mx-auto" style={{ gap: "clamp(6px, 1vh, 14px)", marginTop: "clamp(4px, 0.8vh, 12px)" }}>

        {/* Flow: 4 agents in sequence with arrows */}
        <div className="grid grid-cols-4 items-start" style={{ gap: "clamp(6px, 0.8vw, 16px)" }}>

          {/* Agent 1 — Pré-Venda */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            <div
              className="rounded-xl h-full relative"
              style={{
                padding: "clamp(10px, 1.4vh, 20px) clamp(10px, 1.2vw, 18px)",
                background: "rgba(255,255,255,0.03)",
                border: "1.5px solid rgba(139,92,246,0.25)",
                borderTopWidth: "2.5px",
                borderTopColor: "#8B5CF6",
              }}
            >
              {/* Step badge */}
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="px-2 py-0.5 rounded-full font-bold text-[#8B5CF6] border border-[#8B5CF6]/30"
                  style={{ fontSize: "clamp(7px, 0.8vh, 10px)", background: "rgba(139,92,246,0.1)" }}
                >
                  ETAPA 01
                </span>
              </div>

              {/* Icon + Title */}
              <div className="flex items-center gap-2 mb-2">
                <div
                  className="rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ width: "clamp(28px, 3.5vh, 40px)", height: "clamp(28px, 3.5vh, 40px)", background: "rgba(139,92,246,0.12)" }}
                >
                  <UserPlus style={{ width: "clamp(14px, 1.8vh, 22px)", height: "clamp(14px, 1.8vh, 22px)" }} className="text-[#8B5CF6]" />
                </div>
                <h3 className="font-bold text-[#EDEDEF]" style={{ fontSize: "clamp(12px, 1.6vh, 20px)", lineHeight: "1.2" }}>
                  Pré-Venda
                </h3>
              </div>

              <p className="text-[#8A8A8E] mb-2" style={{ fontSize: "clamp(9px, 1vh, 12px)" }}>
                SDR inteligente
              </p>

              {/* Bullets */}
              <div style={{ display: "flex", flexDirection: "column", gap: "clamp(3px, 0.5vh, 8px)" }}>
                <div className="flex items-start gap-1.5">
                  <Zap style={{ width: "clamp(10px, 1.2vh, 14px)", height: "clamp(10px, 1.2vh, 14px)" }} className="text-[#8B5CF6] flex-shrink-0 mt-0.5" />
                  <span className="text-[#C5C5C7]" style={{ fontSize: "clamp(10px, 1.2vh, 14px)" }}>Qualifica leads automaticamente</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <Zap style={{ width: "clamp(10px, 1.2vh, 14px)", height: "clamp(10px, 1.2vh, 14px)" }} className="text-[#8B5CF6] flex-shrink-0 mt-0.5" />
                  <span className="text-[#C5C5C7]" style={{ fontSize: "clamp(10px, 1.2vh, 14px)" }}>Agenda visitas e simulações</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <Zap style={{ width: "clamp(10px, 1.2vh, 14px)", height: "clamp(10px, 1.2vh, 14px)" }} className="text-[#8B5CF6] flex-shrink-0 mt-0.5" />
                  <span className="text-[#C5C5C7]" style={{ fontSize: "clamp(10px, 1.2vh, 14px)" }}>Foco nas oportunidades quentes</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Agent 2 — Gestão de Estoque */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <div
              className="rounded-xl h-full relative"
              style={{
                padding: "clamp(10px, 1.4vh, 20px) clamp(10px, 1.2vw, 18px)",
                background: "rgba(255,255,255,0.03)",
                border: "1.5px solid rgba(6,182,212,0.25)",
                borderTopWidth: "2.5px",
                borderTopColor: "#06B6D4",
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="px-2 py-0.5 rounded-full font-bold text-[#06B6D4] border border-[#06B6D4]/30"
                  style={{ fontSize: "clamp(7px, 0.8vh, 10px)", background: "rgba(6,182,212,0.1)" }}
                >
                  ETAPA 02
                </span>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <div
                  className="rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ width: "clamp(28px, 3.5vh, 40px)", height: "clamp(28px, 3.5vh, 40px)", background: "rgba(6,182,212,0.12)" }}
                >
                  <Package style={{ width: "clamp(14px, 1.8vh, 22px)", height: "clamp(14px, 1.8vh, 22px)" }} className="text-[#06B6D4]" />
                </div>
                <h3 className="font-bold text-[#EDEDEF]" style={{ fontSize: "clamp(12px, 1.6vh, 20px)", lineHeight: "1.2" }}>
                  Estoque
                </h3>
              </div>

              <p className="text-[#8A8A8E] mb-2" style={{ fontSize: "clamp(9px, 1vh, 12px)" }}>
                Gestão inteligente em tempo real
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "clamp(3px, 0.5vh, 8px)" }}>
                <div className="flex items-start gap-1.5">
                  <Zap style={{ width: "clamp(10px, 1.2vh, 14px)", height: "clamp(10px, 1.2vh, 14px)" }} className="text-[#06B6D4] flex-shrink-0 mt-0.5" />
                  <span className="text-[#C5C5C7]" style={{ fontSize: "clamp(10px, 1.2vh, 14px)" }}>Ajuste de preço e margem</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <Zap style={{ width: "clamp(10px, 1.2vh, 14px)", height: "clamp(10px, 1.2vh, 14px)" }} className="text-[#06B6D4] flex-shrink-0 mt-0.5" />
                  <span className="text-[#C5C5C7]" style={{ fontSize: "clamp(10px, 1.2vh, 14px)" }}>Recomenda compra por demanda</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <Zap style={{ width: "clamp(10px, 1.2vh, 14px)", height: "clamp(10px, 1.2vh, 14px)" }} className="text-[#06B6D4] flex-shrink-0 mt-0.5" />
                  <span className="text-[#C5C5C7]" style={{ fontSize: "clamp(10px, 1.2vh, 14px)" }}>Estoque lucrativo e otimizado</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Agent 3 — FINANCEIRO (Protagonista) */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            <div
              className="rounded-xl h-full relative overflow-hidden"
              style={{
                padding: "clamp(10px, 1.4vh, 20px) clamp(10px, 1.2vw, 18px)",
                background: "linear-gradient(160deg, rgba(34,197,94,0.08), rgba(34,197,94,0.03))",
                border: "2px solid rgba(34,197,94,0.4)",
                borderTopWidth: "3px",
                borderTopColor: "#22C55E",
                boxShadow: "0 0 25px rgba(34,197,94,0.08), inset 0 1px 0 rgba(34,197,94,0.1)",
              }}
            >
              {/* Glow */}
              <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-15 blur-3xl" style={{ background: "radial-gradient(circle, #22C55E, transparent)" }} />

              <div className="relative">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="px-2 py-0.5 rounded-full font-bold text-[#22C55E] border border-[#22C55E]/40"
                    style={{ fontSize: "clamp(7px, 0.8vh, 10px)", background: "rgba(34,197,94,0.15)" }}
                  >
                    ETAPA 03
                  </span>
                  <span
                    className="px-2 py-0.5 rounded-full font-bold text-[#EDEDEF] border border-[#22C55E]/40"
                    style={{ fontSize: "clamp(7px, 0.8vh, 10px)", background: "rgba(34,197,94,0.25)" }}
                  >
                    PROTAGONISTA
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <div
                    className="rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ width: "clamp(30px, 4vh, 44px)", height: "clamp(30px, 4vh, 44px)", background: "rgba(34,197,94,0.15)", border: "1px solid rgba(34,197,94,0.3)" }}
                  >
                    <DollarSign style={{ width: "clamp(16px, 2vh, 24px)", height: "clamp(16px, 2vh, 24px)" }} className="text-[#22C55E]" />
                  </div>
                  <h3 className="font-extrabold text-[#22C55E]" style={{ fontSize: "clamp(13px, 1.8vh, 22px)", lineHeight: "1.2" }}>
                    Financeiro
                  </h3>
                </div>

                <p className="text-[#8A8A8E] mb-2" style={{ fontSize: "clamp(9px, 1vh, 12px)" }}>
                  Saúde financeira 24/7
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "clamp(3px, 0.5vh, 8px)" }}>
                  <div className="flex items-start gap-1.5">
                    <Zap style={{ width: "clamp(10px, 1.2vh, 14px)", height: "clamp(10px, 1.2vh, 14px)" }} className="text-[#22C55E] flex-shrink-0 mt-0.5" />
                    <span className="text-[#C5C5C7]" style={{ fontSize: "clamp(10px, 1.2vh, 14px)" }}>Gargalos de fluxo de caixa</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <Zap style={{ width: "clamp(10px, 1.2vh, 14px)", height: "clamp(10px, 1.2vh, 14px)" }} className="text-[#22C55E] flex-shrink-0 mt-0.5" />
                    <span className="text-[#C5C5C7]" style={{ fontSize: "clamp(10px, 1.2vh, 14px)" }}>Alertas de inadimplência</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <Zap style={{ width: "clamp(10px, 1.2vh, 14px)", height: "clamp(10px, 1.2vh, 14px)" }} className="text-[#22C55E] flex-shrink-0 mt-0.5" />
                    <span className="text-[#C5C5C7]" style={{ fontSize: "clamp(10px, 1.2vh, 14px)" }}>Rentabilidade por veículo</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <Zap style={{ width: "clamp(10px, 1.2vh, 14px)", height: "clamp(10px, 1.2vh, 14px)" }} className="text-[#22C55E] flex-shrink-0 mt-0.5" />
                    <span className="text-[#C5C5C7]" style={{ fontSize: "clamp(10px, 1.2vh, 14px)" }}>Estratégias de cobrança</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Agent 4 — Pós-Venda */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <div
              className="rounded-xl h-full relative"
              style={{
                padding: "clamp(10px, 1.4vh, 20px) clamp(10px, 1.2vw, 18px)",
                background: "rgba(255,255,255,0.03)",
                border: "1.5px solid rgba(244,63,94,0.25)",
                borderTopWidth: "2.5px",
                borderTopColor: "#F43F5E",
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="px-2 py-0.5 rounded-full font-bold text-[#F43F5E] border border-[#F43F5E]/30"
                  style={{ fontSize: "clamp(7px, 0.8vh, 10px)", background: "rgba(244,63,94,0.1)" }}
                >
                  ETAPA 04
                </span>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <div
                  className="rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ width: "clamp(28px, 3.5vh, 40px)", height: "clamp(28px, 3.5vh, 40px)", background: "rgba(244,63,94,0.12)" }}
                >
                  <Heart style={{ width: "clamp(14px, 1.8vh, 22px)", height: "clamp(14px, 1.8vh, 22px)" }} className="text-[#F43F5E]" />
                </div>
                <h3 className="font-bold text-[#EDEDEF]" style={{ fontSize: "clamp(12px, 1.6vh, 20px)", lineHeight: "1.2" }}>
                  Pós-Venda
                </h3>
              </div>

              <p className="text-[#8A8A8E] mb-2" style={{ fontSize: "clamp(9px, 1vh, 12px)" }}>
                Fidelização e LTV
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "clamp(3px, 0.5vh, 8px)" }}>
                <div className="flex items-start gap-1.5">
                  <Zap style={{ width: "clamp(10px, 1.2vh, 14px)", height: "clamp(10px, 1.2vh, 14px)" }} className="text-[#F43F5E] flex-shrink-0 mt-0.5" />
                  <span className="text-[#C5C5C7]" style={{ fontSize: "clamp(10px, 1.2vh, 14px)" }}>Relacionamento automatizado</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <Zap style={{ width: "clamp(10px, 1.2vh, 14px)", height: "clamp(10px, 1.2vh, 14px)" }} className="text-[#F43F5E] flex-shrink-0 mt-0.5" />
                  <span className="text-[#C5C5C7]" style={{ fontSize: "clamp(10px, 1.2vh, 14px)" }}>Ofertas personalizadas</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <Zap style={{ width: "clamp(10px, 1.2vh, 14px)", height: "clamp(10px, 1.2vh, 14px)" }} className="text-[#F43F5E] flex-shrink-0 mt-0.5" />
                  <span className="text-[#C5C5C7]" style={{ fontSize: "clamp(10px, 1.2vh, 14px)" }}>Reduz CAC, impulsiona LTV</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Flow arrows connecting the 4 agents */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.7 }}
          className="flex items-center justify-center"
          style={{ gap: "clamp(8px, 1.5vw, 24px)", marginTop: "clamp(-2px, -0.3vh, -4px)" }}
        >
          <div className="flex items-center" style={{ gap: "clamp(4px, 0.6vw, 12px)" }}>
            <span className="text-[#8B5CF6] font-bold" style={{ fontSize: "clamp(9px, 1.1vh, 13px)" }}>Pré-Venda</span>
            <ArrowRight style={{ width: "clamp(12px, 1.4vh, 18px)", height: "clamp(12px, 1.4vh, 18px)" }} className="text-[#8A8A8E]" />
            <span className="text-[#06B6D4] font-bold" style={{ fontSize: "clamp(9px, 1.1vh, 13px)" }}>Estoque</span>
            <ArrowRight style={{ width: "clamp(12px, 1.4vh, 18px)", height: "clamp(12px, 1.4vh, 18px)" }} className="text-[#8A8A8E]" />
            <span className="text-[#22C55E] font-extrabold" style={{ fontSize: "clamp(10px, 1.3vh, 15px)" }}>Financeiro</span>
            <ArrowRight style={{ width: "clamp(12px, 1.4vh, 18px)", height: "clamp(12px, 1.4vh, 18px)" }} className="text-[#8A8A8E]" />
            <span className="text-[#F43F5E] font-bold" style={{ fontSize: "clamp(9px, 1.1vh, 13px)" }}>Pós-Venda</span>
          </div>
        </motion.div>

        {/* Impact Result */}
        <motion.div
          initial={{ opacity: 0, y: 15, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.85 }}
        >
          <div
            className="rounded-xl relative overflow-hidden"
            style={{
              padding: "clamp(10px, 1.5vh, 22px) clamp(16px, 2vw, 32px)",
              background: "linear-gradient(135deg, rgba(43,127,255,0.08) 0%, rgba(34,197,94,0.06) 100%)",
              border: "1.5px solid rgba(43,127,255,0.2)",
              boxShadow: "0 0 25px rgba(43,127,255,0.05)",
            }}
          >
            <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-10 blur-3xl" style={{ background: "radial-gradient(circle, #2B7FFF, transparent)" }} />

            <div className="relative flex items-center gap-4">
              <div className="flex-shrink-0">
                <div
                  className="rounded-lg flex items-center justify-center"
                  style={{ width: "clamp(32px, 4vh, 48px)", height: "clamp(32px, 4vh, 48px)", background: "linear-gradient(135deg, rgba(43,127,255,0.2), rgba(34,197,94,0.2))", border: "1px solid rgba(43,127,255,0.3)" }}
                >
                  <TrendingUp style={{ width: "clamp(16px, 2vh, 24px)", height: "clamp(16px, 2vh, 24px)" }} className="text-[#EDEDEF]" />
                </div>
              </div>

              <div className="flex-1">
                <p className="text-[#C5C5C7]" style={{ fontSize: "clamp(11px, 1.4vh, 17px)" }}>
                  4 agentes operando <strong className="text-[#2B7FFF]">cada etapa do ciclo</strong> — mais eficiência, menos custo operacional e <strong className="text-[#22C55E]">maior rentabilidade</strong> para a revenda
                </p>
              </div>

              {/* Metrics */}
              <div className="flex items-center flex-shrink-0" style={{ gap: "clamp(8px, 1.2vw, 20px)" }}>
                <div className="text-center">
                  <p className="font-extrabold text-[#2B7FFF]" style={{ fontSize: "clamp(12px, 1.6vh, 20px)" }}>+Eficiência</p>
                  <p className="text-[#8A8A8E]" style={{ fontSize: "clamp(7px, 0.8vh, 10px)" }}>operacional</p>
                </div>
                <div className="text-center">
                  <p className="font-extrabold text-[#22C55E]" style={{ fontSize: "clamp(12px, 1.6vh, 20px)" }}>+Rentab.</p>
                  <p className="text-[#8A8A8E]" style={{ fontSize: "clamp(7px, 0.8vh, 10px)" }}>por veículo</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Final tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.0 }}
          className="text-center"
        >
          <div
            className="rounded-lg inline-flex items-center gap-2 mx-auto"
            style={{
              padding: "clamp(6px, 1vh, 14px) clamp(16px, 2.5vw, 36px)",
              background: "rgba(43,127,255,0.06)",
              border: "1px solid rgba(43,127,255,0.15)",
            }}
          >
            <span className="text-[#2B7FFF]" style={{ fontSize: "clamp(12px, 1.5vh, 18px)" }}>&#9889;</span>
            <span className="text-[#C5C5C7]" style={{ fontSize: "clamp(11px, 1.3vh, 16px)" }}>
              IA que opera o ciclo completo — <span className="text-[#2B7FFF] font-semibold">decisões inteligentes</span> = <span className="text-[#22C55E] font-semibold">mais resultado</span> para a revenda e o Bradesco
            </span>
          </div>
        </motion.div>
      </div>

      <SlideFooter />
    </div>
  );
}
