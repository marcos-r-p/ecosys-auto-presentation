import { motion } from "motion/react";
import { Code2, Brain, Bot, Database, ShoppingCart, Calculator, Calendar, Shield, TrendingUp, AlertTriangle } from "lucide-react";
import SlideFooter from "../SlideFooter";

/*
 * Design: Slide executivo com as condições de buyout do código-fonte.
 * Dois blocos principais:
 * 1. Motor Comercial + Copiloto Comercial (compra a qualquer momento)
 * 2. DMS + Marketplace (compra a partir do ano 3, fórmula de cálculo)
 * + Nota sobre correção IGPM
 */

export default function SlideAquisicaoCodigo() {
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
        <div className="flex items-center justify-center gap-2 mb-1">
          <Code2 style={{ width: "clamp(20px, 3vh, 36px)", height: "clamp(20px, 3vh, 36px)" }} className="text-[#EDEDEF]" />
          <h2
            className="font-extrabold text-[#EDEDEF] tracking-tight"
            style={{ fontSize: "clamp(22px, 3.8vh, 48px)", lineHeight: "1.1" }}
          >
            Condições de Aquisição do Código
          </h2>
        </div>
        <p className="text-[#8A8A8E]" style={{ fontSize: "clamp(10px, 1.3vh, 16px)" }}>
          Opções de compra do código-fonte para internalização completa
        </p>
      </motion.div>

      {/* Conteúdo principal */}
      <div className="flex-1 flex flex-col justify-center w-full max-w-6xl mx-auto" style={{ gap: "clamp(8px, 1.2vh, 20px)" }}>
        {/* Bloco 1: Motor Comercial + Copiloto Comercial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="rounded-xl relative overflow-hidden"
          style={{
            padding: "clamp(12px, 1.8vh, 28px) clamp(16px, 2vw, 32px)",
            background: "linear-gradient(160deg, rgba(34,197,94,0.08), rgba(204,9,47,0.06))",
            border: "1.5px solid rgba(34,197,94,0.25)",
          }}
        >
          {/* Header */}
          <div className="flex items-center gap-3 mb-3">
            <div className="flex items-center gap-2">
              <div
                className="rounded-lg flex items-center justify-center"
                style={{ width: "clamp(28px, 3.5vh, 44px)", height: "clamp(28px, 3.5vh, 44px)", background: "rgba(34,197,94,0.15)", border: "1px solid rgba(34,197,94,0.4)" }}
              >
                <Brain style={{ width: "clamp(14px, 1.8vh, 24px)", height: "clamp(14px, 1.8vh, 24px)", color: "#22C55E" }} />
              </div>
              <div
                className="rounded-lg flex items-center justify-center"
                style={{ width: "clamp(28px, 3.5vh, 44px)", height: "clamp(28px, 3.5vh, 44px)", background: "rgba(204,9,47,0.15)", border: "1px solid rgba(204,9,47,0.4)" }}
              >
                <Bot style={{ width: "clamp(14px, 1.8vh, 24px)", height: "clamp(14px, 1.8vh, 24px)", color: "#CC092F" }} />
              </div>
            </div>
            <div>
              <h3 className="font-bold text-[#EDEDEF]" style={{ fontSize: "clamp(14px, 1.8vh, 24px)" }}>
                Motor Comercial + Copiloto Comercial
              </h3>
              <span className="text-[#8A8A8E]" style={{ fontSize: "clamp(9px, 1.1vh, 14px)" }}>
                Compra disponível a qualquer momento
              </span>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px w-full mb-3" style={{ background: "linear-gradient(to right, rgba(34,197,94,0.3), rgba(204,9,47,0.3), transparent)" }} />

          {/* Condições */}
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "clamp(8px, 1vw, 20px)" }}>
            <div className="bg-white/[0.04] rounded-lg" style={{ padding: "clamp(8px, 1vh, 16px)" }}>
              <div className="flex items-center gap-1.5 mb-2">
                <Calendar style={{ width: "clamp(12px, 1.4vh, 18px)", height: "clamp(12px, 1.4vh, 18px)" }} className="text-[#22C55E]" />
                <span className="font-bold text-[#EDEDEF]" style={{ fontSize: "clamp(10px, 1.2vh, 15px)" }}>Disponibilidade</span>
              </div>
              <p className="text-[#C8C8CD] font-medium" style={{ fontSize: "clamp(9px, 1.1vh, 14px)" }}>
                A qualquer momento durante o contrato
              </p>
            </div>

            <div className="bg-white/[0.04] rounded-lg" style={{ padding: "clamp(8px, 1vh, 16px)" }}>
              <div className="flex items-center gap-1.5 mb-2">
                <Calculator style={{ width: "clamp(12px, 1.4vh, 18px)", height: "clamp(12px, 1.4vh, 18px)" }} className="text-[#22C55E]" />
                <span className="font-bold text-[#EDEDEF]" style={{ fontSize: "clamp(10px, 1.2vh, 15px)" }}>Mecanismo</span>
              </div>
              <p className="text-[#C8C8CD] font-medium" style={{ fontSize: "clamp(9px, 1.1vh, 14px)" }}>
                Antecipação de todos os pagamentos de sustentação futuros
              </p>
            </div>

            <div className="bg-white/[0.04] rounded-lg" style={{ padding: "clamp(8px, 1vh, 16px)" }}>
              <div className="flex items-center gap-1.5 mb-2">
                <Shield style={{ width: "clamp(12px, 1.4vh, 18px)", height: "clamp(12px, 1.4vh, 18px)" }} className="text-[#22C55E]" />
                <span className="font-bold text-[#EDEDEF]" style={{ fontSize: "clamp(10px, 1.2vh, 15px)" }}>Resultado</span>
              </div>
              <p className="text-[#C8C8CD] font-medium" style={{ fontSize: "clamp(9px, 1.1vh, 14px)" }}>
                Código-fonte transferido + propriedade intelectual completa
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bloco 2: DMS + Marketplace */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="rounded-xl relative overflow-hidden"
          style={{
            padding: "clamp(12px, 1.8vh, 28px) clamp(16px, 2vw, 32px)",
            background: "linear-gradient(160deg, rgba(43,127,255,0.08), rgba(6,182,212,0.06))",
            border: "1.5px solid rgba(43,127,255,0.25)",
          }}
        >
          {/* Header */}
          <div className="flex items-center gap-3 mb-3">
            <div className="flex items-center gap-2">
              <div
                className="rounded-lg flex items-center justify-center"
                style={{ width: "clamp(28px, 3.5vh, 44px)", height: "clamp(28px, 3.5vh, 44px)", background: "rgba(43,127,255,0.15)", border: "1px solid rgba(43,127,255,0.4)" }}
              >
                <Database style={{ width: "clamp(14px, 1.8vh, 24px)", height: "clamp(14px, 1.8vh, 24px)", color: "#2B7FFF" }} />
              </div>
              <div
                className="rounded-lg flex items-center justify-center"
                style={{ width: "clamp(28px, 3.5vh, 44px)", height: "clamp(28px, 3.5vh, 44px)", background: "rgba(6,182,212,0.15)", border: "1px solid rgba(6,182,212,0.4)" }}
              >
                <ShoppingCart style={{ width: "clamp(14px, 1.8vh, 24px)", height: "clamp(14px, 1.8vh, 24px)", color: "#06B6D4" }} />
              </div>
            </div>
            <div>
              <h3 className="font-bold text-[#EDEDEF]" style={{ fontSize: "clamp(14px, 1.8vh, 24px)" }}>
                Plataforma Autoline (DMS + Marketplace)
              </h3>
              <span className="text-[#8A8A8E]" style={{ fontSize: "clamp(9px, 1.1vh, 14px)" }}>
                Compra disponível a partir do <span className="text-[#2B7FFF] font-bold">3.º ano</span> de contrato
              </span>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px w-full mb-3" style={{ background: "linear-gradient(to right, rgba(43,127,255,0.3), rgba(6,182,212,0.3), transparent)" }} />

          {/* Condições + Fórmula */}
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "clamp(8px, 1vw, 20px)" }}>
            {/* Condições */}
            <div className="flex flex-col" style={{ gap: "clamp(6px, 0.8vh, 12px)" }}>
              <div className="bg-white/[0.04] rounded-lg" style={{ padding: "clamp(8px, 1vh, 16px)" }}>
                <div className="flex items-center gap-1.5 mb-2">
                  <Calendar style={{ width: "clamp(12px, 1.4vh, 18px)", height: "clamp(12px, 1.4vh, 18px)" }} className="text-[#2B7FFF]" />
                  <span className="font-bold text-[#EDEDEF]" style={{ fontSize: "clamp(10px, 1.2vh, 15px)" }}>Pré-requisitos</span>
                </div>
                <p className="text-[#C8C8CD] font-medium" style={{ fontSize: "clamp(9px, 1.1vh, 14px)" }}>
                  Ano 1 completo (estruturação) + Ano 2 completo (sustentação). Compra possível a partir do início do Ano 3.
                </p>
              </div>

              <div className="bg-white/[0.04] rounded-lg" style={{ padding: "clamp(8px, 1vh, 16px)" }}>
                <div className="flex items-center gap-1.5 mb-2">
                  <AlertTriangle style={{ width: "clamp(12px, 1.4vh, 18px)", height: "clamp(12px, 1.4vh, 18px)" }} className="text-[#2B7FFF]" />
                  <span className="font-bold text-[#EDEDEF]" style={{ fontSize: "clamp(10px, 1.2vh, 15px)" }}>Na data da transação</span>
                </div>
                <p className="text-[#C8C8CD] font-medium" style={{ fontSize: "clamp(9px, 1.1vh, 14px)" }}>
                  Vencem todos os pagamentos de sustentação futuros + valor calculado pela fórmula de aquisição.
                </p>
              </div>
            </div>

            {/* Fórmula */}
            <div
              className="rounded-lg relative overflow-hidden"
              style={{
                padding: "clamp(10px, 1.5vh, 22px) clamp(12px, 1.5vw, 24px)",
                background: "rgba(43,127,255,0.06)",
                border: "1px solid rgba(43,127,255,0.2)",
              }}
            >
              <div className="flex items-center gap-1.5 mb-3">
                <Calculator style={{ width: "clamp(12px, 1.4vh, 18px)", height: "clamp(12px, 1.4vh, 18px)" }} className="text-[#2B7FFF]" />
                <span className="font-bold text-[#2B7FFF]" style={{ fontSize: "clamp(10px, 1.2vh, 15px)" }}>Fórmula de Aquisição</span>
              </div>

              {/* Fórmula visual */}
              <div
                className="rounded-lg bg-[#0A0A0B]/80 border border-white/[0.08] text-center"
                style={{ padding: "clamp(10px, 1.5vh, 22px)", marginBottom: "clamp(8px, 1vh, 16px)" }}
              >
                <p className="font-black text-[#EDEDEF]" style={{ fontSize: "clamp(12px, 1.6vh, 22px)", lineHeight: "1.4" }}>
                  <span className="text-[#2B7FFF]">Revendas Ativas</span>
                  <span className="text-[#8A8A8E] mx-1">×</span>
                  <span className="text-[#06B6D4]">Ticket Médio Anual</span>
                  <span className="text-[#8A8A8E] mx-1">×</span>
                  <span className="text-[#22C55E]">5</span>
                </p>
              </div>

              {/* Exemplo */}
              <div className="bg-white/[0.04] rounded-lg" style={{ padding: "clamp(6px, 0.8vh, 14px) clamp(8px, 1vw, 16px)" }}>
                <span className="font-bold text-[#8A8A8E] uppercase tracking-wider block mb-1.5" style={{ fontSize: "clamp(7px, 0.8vh, 10px)" }}>
                  Exemplo Ilustrativo
                </span>
                <div className="flex items-center flex-wrap" style={{ gap: "clamp(4px, 0.5vw, 10px)", fontSize: "clamp(9px, 1.1vh, 14px)" }}>
                  <span className="text-[#2B7FFF] font-bold">1.000 lojas</span>
                  <span className="text-[#8A8A8E]">×</span>
                  <span className="text-[#06B6D4] font-bold">R$ 5.000/ano*</span>
                  <span className="text-[#8A8A8E]">×</span>
                  <span className="text-[#22C55E] font-bold">5</span>
                  <span className="text-[#8A8A8E]">=</span>
                  <span className="text-[#EDEDEF] font-extrabold" style={{ fontSize: "clamp(11px, 1.4vh, 18px)" }}>R$ 25.000.000</span>
                </div>
                <p className="text-[#8A8A8E] mt-1" style={{ fontSize: "clamp(7px, 0.8vh, 10px)" }}>
                  * Ticket médio = faturamento mensal × 12 (para que lojas com menos de 1 ano não prejudiquem o cálculo)
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Nota de correção IGPM */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="rounded-lg"
          style={{
            padding: "clamp(8px, 1.2vh, 18px) clamp(16px, 2vw, 32px)",
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div className="flex items-center gap-3">
            <TrendingUp style={{ width: "clamp(16px, 2vh, 24px)", height: "clamp(16px, 2vh, 24px)" }} className="text-[#8A8A8E] shrink-0" />
            <div>
              <p className="text-[#EDEDEF] font-semibold" style={{ fontSize: "clamp(10px, 1.2vh, 16px)" }}>
                Correção Anual dos Valores de Sustentação
              </p>
              <p className="text-[#8A8A8E]" style={{ fontSize: "clamp(9px, 1.1vh, 14px)" }}>
                Todos os valores de sustentação serão corrigidos anualmente por <span className="text-[#EDEDEF] font-bold">IGPM + 0,5% a.m.</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <SlideFooter />
    </div>
  );
}
