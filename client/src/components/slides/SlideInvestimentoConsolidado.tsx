import { motion } from "motion/react";
import { Database, ShoppingCart, Brain, Bot, DollarSign, TrendingUp, Clock, CalendarClock } from "lucide-react";
import SlideFooter from "../SlideFooter";

/*
 * Design: 4 cards lado a lado (DMS, Marketplace, Motor, Copiloto)
 * + 2 blocos de subtotal (Plataforma Autoline | Motor + Copiloto)
 * + barra total inferior
 * Estilo executivo, números grandes, sem detalhes de features.
 * 
 * Alterações:
 * - "Estruturação" renomeado para "Desenvolvimento"
 * - DMS = R$ 7.340.000 / Marketplace = R$ 13.214.551 (total = R$ 20.554.551)
 * - Sustentação só a partir do Ano 2 (não cobra no Ano 1)
 */

const products = [
  {
    name: "DMS (Gestor)",
    icon: Database,
    color: "#2B7FFF",
    bgGradient: "linear-gradient(160deg, rgba(43,127,255,0.12), rgba(43,127,255,0.04))",
    borderColor: "rgba(43,127,255,0.3)",
    development: "R$ 7.340.000",
    developmentValue: 7340000,
    sustaining: "R$ 274.465/mês",
    sustainingValue: 274465,
    period: "Mês 0 → 12",
  },
  {
    name: "Marketplace",
    icon: ShoppingCart,
    color: "#06B6D4",
    bgGradient: "linear-gradient(160deg, rgba(6,182,212,0.12), rgba(6,182,212,0.04))",
    borderColor: "rgba(6,182,212,0.3)",
    development: "R$ 13.214.551",
    developmentValue: 13214551,
    sustaining: "R$ 494.132/mês",
    sustainingValue: 494132,
    period: "Mês 0 → 12",
  },
  {
    name: "Motor Comercial",
    icon: Brain,
    color: "#22C55E",
    bgGradient: "linear-gradient(160deg, rgba(34,197,94,0.12), rgba(34,197,94,0.04))",
    borderColor: "rgba(34,197,94,0.3)",
    development: "R$ 3.000.000",
    developmentValue: 3000000,
    sustaining: "R$ 250.000/mês",
    sustainingValue: 250000,
    period: "Mês 0 → 12",
  },
  {
    name: "Copiloto Comercial",
    icon: Bot,
    color: "#CC092F",
    bgGradient: "linear-gradient(160deg, rgba(204,9,47,0.12), rgba(204,9,47,0.04))",
    borderColor: "rgba(204,9,47,0.3)",
    development: "R$ 3.000.000",
    developmentValue: 3000000,
    sustaining: "R$ 250.000/mês",
    sustainingValue: 250000,
    period: "Mês 0 → 12",
  },
];

export default function SlideInvestimentoConsolidado() {
  return (
    <div className="flex flex-col h-full overflow-hidden" style={{ padding: "0 clamp(16px, 3vw, 60px)" }}>
      {/* Título */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center shrink-0"
        style={{ paddingTop: "clamp(12px, 2.5vh, 36px)", paddingBottom: "clamp(6px, 1.2vh, 18px)" }}
      >
        <h2
          className="font-extrabold text-[#EDEDEF] tracking-tight"
          style={{ fontSize: "clamp(22px, 3.8vh, 48px)", lineHeight: "1.1", marginBottom: "clamp(2px, 0.5vh, 8px)" }}
        >
          Investimento — Visão Consolidada
        </h2>
        <p className="text-[#8A8A8E]" style={{ fontSize: "clamp(10px, 1.3vh, 16px)" }}>
          Desenvolvimento Ano 1 + Sustentação a partir do Ano 2
        </p>
      </motion.div>

      {/* Cards dos 4 produtos */}
      <div className="flex-1 flex flex-col justify-center w-full max-w-6xl mx-auto" style={{ gap: "clamp(6px, 1vh, 16px)" }}>
        <div className="grid grid-cols-4" style={{ gap: "clamp(6px, 0.8vw, 16px)" }}>
          {products.map((product, idx) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + idx * 0.08 }}
                className="rounded-xl relative overflow-hidden"
                style={{
                  background: product.bgGradient,
                  border: `1.5px solid ${product.borderColor}`,
                  padding: "clamp(10px, 1.5vh, 24px) clamp(8px, 1vw, 20px)",
                }}
              >
                {/* Icon + Name */}
                <div className="flex items-center gap-2 mb-3">
                  <div
                    className="rounded-lg flex items-center justify-center"
                    style={{
                      width: "clamp(28px, 3.5vh, 44px)",
                      height: "clamp(28px, 3.5vh, 44px)",
                      background: `${product.color}20`,
                      border: `1px solid ${product.color}50`,
                    }}
                  >
                    <Icon style={{ width: "clamp(14px, 1.8vh, 24px)", height: "clamp(14px, 1.8vh, 24px)", color: product.color }} />
                  </div>
                  <h3 className="font-bold text-[#EDEDEF] leading-tight" style={{ fontSize: "clamp(11px, 1.4vh, 18px)" }}>
                    {product.name}
                  </h3>
                </div>

                {/* Divider */}
                <div className="h-px w-full mb-3" style={{ background: `linear-gradient(to right, ${product.color}40, transparent)` }} />

                {/* Desenvolvimento */}
                <div className="mb-3">
                  <div className="flex items-center gap-1.5 mb-1">
                    <DollarSign style={{ width: "clamp(10px, 1.2vh, 16px)", height: "clamp(10px, 1.2vh, 16px)" }} className="text-[#8A8A8E]" />
                    <span className="text-[#8A8A8E] font-medium uppercase tracking-wider" style={{ fontSize: "clamp(7px, 0.85vh, 11px)" }}>
                      Desenvolvimento
                    </span>
                  </div>
                  <p
                    className="font-extrabold leading-tight text-[#EDEDEF]"
                    style={{
                      fontSize: "clamp(14px, 2vh, 28px)",
                    }}
                  >
                    {product.development}
                  </p>
                </div>

                {/* Sustentação */}
                <div className="mb-3">
                  <div className="flex items-center gap-1.5 mb-1">
                    <TrendingUp style={{ width: "clamp(10px, 1.2vh, 16px)", height: "clamp(10px, 1.2vh, 16px)" }} className="text-[#8A8A8E]" />
                    <span className="text-[#8A8A8E] font-medium uppercase tracking-wider" style={{ fontSize: "clamp(7px, 0.85vh, 11px)" }}>
                      Sustentação (a partir do Ano 2)
                    </span>
                  </div>
                  <p
                    className="font-bold leading-tight"
                    style={{
                      fontSize: product.sustainingValue ? "clamp(12px, 1.6vh, 22px)" : "clamp(10px, 1.2vh, 16px)",
                      color: product.sustainingValue ? "#EDEDEF" : "#8A8A8E",
                    }}
                  >
                    {product.sustaining}
                  </p>
                </div>

                {/* Período */}
                <div className="flex items-center gap-1.5">
                  <Clock style={{ width: "clamp(10px, 1.2vh, 16px)", height: "clamp(10px, 1.2vh, 16px)" }} className="text-[#8A8A8E]" />
                  <span className="text-[#8A8A8E] font-medium" style={{ fontSize: "clamp(8px, 1vh, 13px)" }}>
                    {product.period}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Subtotais: Plataforma Autoline | Motor + Copiloto */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="grid grid-cols-2"
          style={{ gap: "clamp(6px, 0.8vw, 16px)" }}
        >
          {/* Plataforma Autoline */}
          <div
            className="rounded-lg flex items-center justify-between"
            style={{
              padding: "clamp(8px, 1.2vh, 18px) clamp(12px, 1.5vw, 24px)",
              background: "linear-gradient(135deg, rgba(43,127,255,0.08), rgba(6,182,212,0.08))",
              border: "1px solid rgba(43,127,255,0.2)",
            }}
          >
            <div>
              <span className="font-bold text-[#8A8A8E] uppercase tracking-wider" style={{ fontSize: "clamp(7px, 0.85vh, 11px)" }}>
                Plataforma Autoline (DMS + Marketplace)
              </span>
              <div className="flex items-baseline gap-3 mt-1">
                <span className="font-extrabold text-[#EDEDEF]" style={{ fontSize: "clamp(16px, 2.2vh, 30px)" }}>
                  R$ 20.554.551
                </span>
              </div>
            </div>
            <div className="text-right">
              <span className="text-[#8A8A8E] block" style={{ fontSize: "clamp(7px, 0.85vh, 11px)" }}>Sustentação (Ano 2+)</span>
              <span className="font-bold text-[#EDEDEF]" style={{ fontSize: "clamp(11px, 1.4vh, 18px)" }}>
                R$ 768.597<span className="text-[#8A8A8E] font-normal">/mês</span>
              </span>
            </div>
          </div>

          {/* Motor + Copiloto */}
          <div
            className="rounded-lg flex items-center justify-between"
            style={{
              padding: "clamp(8px, 1.2vh, 18px) clamp(12px, 1.5vw, 24px)",
              background: "linear-gradient(135deg, rgba(34,197,94,0.08), rgba(204,9,47,0.08))",
              border: "1px solid rgba(34,197,94,0.2)",
            }}
          >
            <div>
              <span className="font-bold text-[#8A8A8E] uppercase tracking-wider" style={{ fontSize: "clamp(7px, 0.85vh, 11px)" }}>
                Motor Comercial + Copiloto Comercial
              </span>
              <div className="flex items-baseline gap-3 mt-1">
                <span className="font-extrabold text-[#EDEDEF]" style={{ fontSize: "clamp(16px, 2.2vh, 30px)" }}>
                  R$ 6.000.000
                </span>
              </div>
            </div>
            <div className="text-right">
              <span className="text-[#8A8A8E] block" style={{ fontSize: "clamp(7px, 0.85vh, 11px)" }}>Sustentação (Ano 2+)</span>
              <span className="font-bold text-[#EDEDEF]" style={{ fontSize: "clamp(11px, 1.4vh, 18px)" }}>
                R$ 500.000<span className="text-[#8A8A8E] font-normal">/mês</span>
              </span>
            </div>
          </div>
        </motion.div>

        {/* Total Geral */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="rounded-xl relative overflow-hidden"
          style={{
            padding: "clamp(10px, 1.5vh, 22px) clamp(16px, 2vw, 32px)",
            background: "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
            border: "2px solid rgba(255,255,255,0.12)",
          }}
        >
          <div className="flex items-center justify-between flex-wrap" style={{ gap: "clamp(8px, 1vw, 20px)" }}>
            <div>
              <span className="font-bold text-[#8A8A8E] uppercase tracking-wider" style={{ fontSize: "clamp(8px, 1vh, 13px)" }}>
                Total Desenvolvimento Ano 1
              </span>
              <p className="font-black text-[#EDEDEF]" style={{ fontSize: "clamp(20px, 3vh, 40px)", lineHeight: "1.1" }}>
                R$ 26.554.551
              </p>
            </div>

            <div className="h-10 w-px bg-white/10 hidden sm:block" />

            <div>
              <span className="font-bold text-[#8A8A8E] uppercase tracking-wider" style={{ fontSize: "clamp(8px, 1vh, 13px)" }}>
                Sustentação Mensal (Ano 2+)
              </span>
              <p className="font-black text-[#EDEDEF]" style={{ fontSize: "clamp(18px, 2.5vh, 34px)", lineHeight: "1.1" }}>
                R$ 1.268.597<span className="text-[#8A8A8E] font-normal" style={{ fontSize: "clamp(11px, 1.4vh, 18px)" }}>/mês</span>
              </p>
            </div>

            <div className="h-10 w-px bg-white/10 hidden sm:block" />

            <div>
              <span className="font-bold text-[#8A8A8E] uppercase tracking-wider" style={{ fontSize: "clamp(8px, 1vh, 13px)" }}>
                Novos Desenvolvimentos
              </span>
              <p className="font-bold text-[#EDEDEF]" style={{ fontSize: "clamp(14px, 1.8vh, 24px)", lineHeight: "1.1" }}>
                R$ 350<span className="text-[#8A8A8E] font-normal" style={{ fontSize: "clamp(10px, 1.2vh, 16px)" }}>/hora</span>
              </p>
            </div>
          </div>

          {/* Notas */}
          <div className="mt-2 pt-2 border-t border-white/[0.06] flex flex-col" style={{ gap: "clamp(2px, 0.3vh, 6px)" }}>
            <div className="flex items-center gap-2">
              <CalendarClock style={{ width: "clamp(10px, 1.2vh, 16px)", height: "clamp(10px, 1.2vh, 16px)" }} className="text-[#8A8A8E] shrink-0" />
              <p className="text-[#8A8A8E]" style={{ fontSize: "clamp(7px, 0.85vh, 11px)" }}>
                <span className="text-[#EDEDEF] font-semibold">Ano 1:</span> somente desenvolvimento, sem cobrança de sustentação
              </p>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp style={{ width: "clamp(10px, 1.2vh, 16px)", height: "clamp(10px, 1.2vh, 16px)" }} className="text-[#8A8A8E] shrink-0" />
              <p className="text-[#8A8A8E]" style={{ fontSize: "clamp(7px, 0.85vh, 11px)" }}>
                Valores de sustentação corrigidos anualmente por <span className="text-[#EDEDEF] font-semibold">IGPM + 0,5% a.m.</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <SlideFooter />
    </div>
  );
}
