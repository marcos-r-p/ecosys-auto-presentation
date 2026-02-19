import { motion } from "motion/react";
import { Award, Shield, FileCheck, CheckCircle, TrendingUp, Eye, Lock } from "lucide-react";
import SlideFooter from "../SlideFooter";

/*
 * Slide 18 — Plataforma de Conteúdo: Infraestrutura de Confiança e Compliance
 * Design: Dois pilares lado a lado com cores distintas + resultado hero com glow
 * Pilar 1 (azul): Selos de Qualidade — reduz risco
 * Pilar 2 (verde): Gestão de Conteúdo Bradesco — garante compliance
 * Resultado: Banner hero com impacto em confiança, leads e conversão
 * Animação: Pilares revelam primeiro → resultado aparece com destaque
 */

export default function Slide18() {
  return (
    <div className="flex flex-col items-center justify-start h-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-3 sm:pt-4 md:pt-5 pb-3 overflow-hidden">
      <div className="max-w-7xl w-full flex flex-col flex-1">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-2"
        >
          <p className="text-[#8A8A8E] uppercase tracking-[0.2em] mb-1" style={{ fontSize: "clamp(9px, 1.1vh, 13px)" }}>
            Infraestrutura de confiança do marketplace
          </p>
          <h2
            className="font-extrabold tracking-tight text-[#EDEDEF]"
            style={{ fontSize: "clamp(22px, 3.8vh, 44px)", lineHeight: "1.1", marginBottom: "clamp(4px, 0.8vh, 10px)" }}
          >
            Plataforma de Conteúdo:{" "}
            <span className="text-[#3B82F6]">Credibilidade</span> e{" "}
            <span className="text-[#10B981]">Compliance</span>
          </h2>
          <p className="text-[#8A8A8E] max-w-4xl mx-auto" style={{ fontSize: "clamp(11px, 1.4vh, 17px)" }}>
            Dois pilares que elevam a reputação do marketplace e qualificam cada lead antes da conversão
          </p>
        </motion.div>

        {/* Two Pillars */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex-1 flex flex-col justify-start mt-2"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
            {/* Pilar 1 — Selos de Qualidade */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div
                className="bg-white/[0.04] border rounded-xl p-4 h-full"
                style={{ borderColor: "rgba(59,130,246,0.25)", borderTopWidth: "2px", borderTopColor: "#3B82F6" }}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(59,130,246,0.15)" }}>
                    <Shield className="w-5 h-5 text-[#3B82F6]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-[#EDEDEF]" style={{ fontSize: "clamp(14px, 2vh, 22px)" }}>
                        Selos de Qualidade
                      </h3>
                      <span
                        className="px-2 py-0.5 rounded-full text-[#3B82F6] font-semibold border border-[#3B82F6]/30"
                        style={{ fontSize: "clamp(8px, 0.9vh, 11px)", background: "rgba(59,130,246,0.1)" }}
                      >
                        REDUZ RISCO
                      </span>
                    </div>
                    <p className="text-[#8A8A8E]" style={{ fontSize: "clamp(10px, 1.1vh, 13px)" }}>
                      Verificação e curadoria de lojistas e veículos
                    </p>
                  </div>
                </div>

                {/* Bullets */}
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#3B82F6] flex-shrink-0 mt-0.5" />
                    <span className="text-[#C5C5C7]" style={{ fontSize: "clamp(11px, 1.3vh, 15px)" }}>
                      Documentação validada + CSAT dos clientes
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#3B82F6] flex-shrink-0 mt-0.5" />
                    <span className="text-[#C5C5C7]" style={{ fontSize: "clamp(11px, 1.3vh, 15px)" }}>
                      Curadoria própria atesta qualidade do veículo
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#3B82F6] flex-shrink-0 mt-0.5" />
                    <span className="text-[#C5C5C7]" style={{ fontSize: "clamp(11px, 1.3vh, 15px)" }}>
                      Minimiza risco de transação para o consumidor
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#3B82F6] flex-shrink-0 mt-0.5" />
                    <span className="text-[#C5C5C7]" style={{ fontSize: "clamp(11px, 1.3vh, 15px)" }}>
                      Credibilidade do parceiro garantida por selo
                    </span>
                  </div>
                </div>

                {/* Impact metric */}
                <div className="mt-3 pt-2 border-t border-white/[0.06] flex items-center gap-2">
                  <Eye className="w-4 h-4 text-[#3B82F6]" />
                  <span className="text-[#8A8A8E]" style={{ fontSize: "clamp(10px, 1.1vh, 13px)" }}>
                    Impacto: <strong className="text-[#3B82F6]">+confiança do consumidor</strong> na hora da compra
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Pilar 2 — Gestão de Conteúdo Bradesco */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
            >
              <div
                className="bg-white/[0.04] border rounded-xl p-4 h-full"
                style={{ borderColor: "rgba(16,185,129,0.25)", borderTopWidth: "2px", borderTopColor: "#10B981" }}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(16,185,129,0.15)" }}>
                    <FileCheck className="w-5 h-5 text-[#10B981]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-[#EDEDEF]" style={{ fontSize: "clamp(14px, 2vh, 22px)" }}>
                        Gestão de Conteúdo
                      </h3>
                      <span
                        className="px-2 py-0.5 rounded-full text-[#10B981] font-semibold border border-[#10B981]/30"
                        style={{ fontSize: "clamp(8px, 0.9vh, 11px)", background: "rgba(16,185,129,0.1)" }}
                      >
                        COMPLIANCE
                      </span>
                    </div>
                    <p className="text-[#8A8A8E]" style={{ fontSize: "clamp(10px, 1.1vh, 13px)" }}>
                      Ferramenta interna dedicada ao time Bradesco
                    </p>
                  </div>
                </div>

                {/* Bullets */}
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                    <span className="text-[#C5C5C7]" style={{ fontSize: "clamp(11px, 1.3vh, 15px)" }}>
                      Gerencia descrições, fotos e selos do marketplace
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                    <span className="text-[#C5C5C7]" style={{ fontSize: "clamp(11px, 1.3vh, 15px)" }}>
                      Valida dados de lojistas e veículos
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                    <span className="text-[#C5C5C7]" style={{ fontSize: "clamp(11px, 1.3vh, 15px)" }}>
                      Assegura consistência e padrão de qualidade
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                    <span className="text-[#C5C5C7]" style={{ fontSize: "clamp(11px, 1.3vh, 15px)" }}>
                      Curadoria editorial eleva SEO/GEO orgânico
                    </span>
                  </div>
                </div>

                {/* Impact metric */}
                <div className="mt-3 pt-2 border-t border-white/[0.06] flex items-center gap-2">
                  <Lock className="w-4 h-4 text-[#10B981]" />
                  <span className="text-[#8A8A8E]" style={{ fontSize: "clamp(10px, 1.1vh, 13px)" }}>
                    Impacto: <strong className="text-[#10B981]">compliance + reputação</strong> do marketplace
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Result Hero — Principal */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mb-3"
          >
            <div
              className="relative overflow-hidden rounded-xl p-4"
              style={{
                background: "linear-gradient(135deg, rgba(59,130,246,0.1) 0%, rgba(16,185,129,0.08) 100%)",
                border: "1.5px solid rgba(59,130,246,0.25)",
                boxShadow: "0 0 30px rgba(59,130,246,0.06), 0 0 30px rgba(16,185,129,0.06)",
              }}
            >
              {/* Glow */}
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-15 blur-3xl" style={{ background: "radial-gradient(circle, #3B82F6, transparent)" }} />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full opacity-15 blur-3xl" style={{ background: "radial-gradient(circle, #10B981, transparent)" }} />

              <div className="relative flex items-center gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.2), rgba(16,185,129,0.2))", border: "1px solid rgba(59,130,246,0.3)" }}>
                    <TrendingUp className="w-6 h-6 text-[#EDEDEF]" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-bold text-[#EDEDEF]" style={{ fontSize: "clamp(14px, 2vh, 22px)" }}>
                      Resultado Estratégico
                    </h4>
                    <span
                      className="px-2 py-0.5 rounded-full font-semibold border"
                      style={{ fontSize: "clamp(8px, 0.9vh, 11px)", color: "#10B981", borderColor: "rgba(16,185,129,0.3)", background: "rgba(16,185,129,0.1)" }}
                    >
                      IMPACTO DIRETO
                    </span>
                  </div>
                  <p className="text-[#C5C5C7]" style={{ fontSize: "clamp(11px, 1.4vh, 16px)" }}>
                    Consumidor chega ao lojista com <strong className="text-[#3B82F6]">alta confiança</strong> e dúvidas resolvidas — mais tráfego orgânico, <strong className="text-[#10B981]">leads mais qualificados</strong> e maior taxa de conversão
                  </p>
                </div>

                {/* Metrics */}
                <div className="flex-shrink-0 flex gap-3">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1">
                      <Shield className="w-4 h-4 text-[#3B82F6]" />
                      <span className="font-bold text-[#EDEDEF]" style={{ fontSize: "clamp(13px, 1.8vh, 20px)" }}>+Confiança</span>
                    </div>
                    <span className="text-[#8A8A8E]" style={{ fontSize: "clamp(8px, 0.9vh, 11px)" }}>do consumidor</span>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1">
                      <TrendingUp className="w-4 h-4 text-[#10B981]" />
                      <span className="font-bold text-[#EDEDEF]" style={{ fontSize: "clamp(13px, 1.8vh, 20px)" }}>+Conversão</span>
                    </div>
                    <span className="text-[#8A8A8E]" style={{ fontSize: "clamp(8px, 0.9vh, 11px)" }}>para lojistas</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Impact Banner */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <div
              className="rounded-lg py-2.5 px-4 text-center"
              style={{
                background: "linear-gradient(135deg, rgba(59,130,246,0.12) 0%, rgba(16,185,129,0.08) 100%)",
                border: "1px solid rgba(59,130,246,0.15)",
              }}
            >
              <p className="text-[#EDEDEF] font-semibold" style={{ fontSize: "clamp(12px, 1.5vh, 18px)" }}>
                🛡️ Confiança gera conversão — <span className="text-[#3B82F6]">conteúdo verificado</span> = <span className="text-[#10B981]">leads qualificados</span> = mais receita para o Bradesco
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <SlideFooter />
    </div>
  );
}
