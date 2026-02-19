import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { TrendingDown, Zap, Brain, Users, ArrowRight } from "lucide-react";
import SlideFooter from "../SlideFooter";

/*
 * Design: Diagnóstico estratégico — revelação progressiva
 * Hierarquia: problemas agrupados por tema → oportunidade como conclusão
 * Animação: cards aparecem sequencialmente, oportunidade surge com glow
 */

const challenges = [
  {
    icon: TrendingDown,
    title: "Diferencial Competitivo",
    description:
      "Produtos financeiros fortes, mas desconectados do fluxo natural de venda.",
    group: "produto",
    severity: 2,
    delay: 0.4,
  },
  {
    icon: Zap,
    title: "Fricção Operacional",
    description:
      "Processos manuais elevam CAC e reduzem conversão.",
    group: "operacao",
    severity: 2,
    delay: 0.7,
  },
  {
    icon: Brain,
    title: "Falta de Inteligência Comercial",
    description:
      "Sem visão estruturada de performance, engajamento e oportunidades.",
    group: "dados",
    severity: 3,
    delay: 1.0,
  },
  {
    icon: Users,
    title: "Gestão Comercial (GEFINS)",
    subtitle: "GIO",
    description:
      "Gestão comercial dos GEFINS complexa, com baixa priorização, pouca previsibilidade e ausência de alertas acionáveis.",
    group: "gestao",
    severity: 4,
    isHighlight: true,
    delay: 1.3,
  },
];

export default function Slide4() {
  const [revealedCount, setRevealedCount] = useState(0);
  const [showOpportunity, setShowOpportunity] = useState(false);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    challenges.forEach((c, i) => {
      timers.push(
        setTimeout(() => setRevealedCount(i + 1), c.delay * 1000)
      );
    });
    // Show opportunity after all challenges
    timers.push(
      setTimeout(() => setShowOpportunity(true), 1.8 * 1000)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="flex flex-col h-full px-6 md:px-12 lg:px-16 pt-4 pb-1 overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center mb-3"
      >
        <h2
          className="font-black tracking-tight text-[#EDEDEF] leading-none"
          style={{ fontSize: "clamp(24px, 3.5vh, 48px)" }}
        >
          O Desafio do{" "}
          <span className="text-[#CC092F]">Bradesco</span>
        </h2>
        <p
          className="text-[#8A8A8E] mt-2 max-w-2xl mx-auto"
          style={{ fontSize: "clamp(12px, 1.5vh, 18px)" }}
        >
          A baixa adoção não é de produto. É de integração operacional.
        </p>
      </motion.div>

      {/* Main content */}
      <div className="flex-1 flex flex-col justify-center gap-3 max-w-5xl mx-auto w-full pr-8">
        {/* Problem cards — numbered, sequential */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {challenges.map((challenge, index) => {
            const isVisible = revealedCount > index;
            const isHighlight = challenge.isHighlight;

            return (
              <motion.div
                key={challenge.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -25 : 25, scale: 0.95 }}
                animate={
                  isVisible
                    ? { opacity: 1, x: 0, scale: 1 }
                    : { opacity: 0, x: index % 2 === 0 ? -25 : 25, scale: 0.95 }
                }
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={isHighlight ? "md:col-span-2" : ""}
              >
                <div
                  className="relative rounded-xl p-4 transition-all duration-300 group hover:scale-[1.01]"
                  style={{
                    background: isHighlight
                      ? "linear-gradient(135deg, rgba(204,9,47,0.08), rgba(204,9,47,0.02))"
                      : "rgba(255,255,255,0.025)",
                    border: isHighlight
                      ? "1.5px solid rgba(204,9,47,0.35)"
                      : "1px solid rgba(255,255,255,0.06)",
                    boxShadow: isHighlight
                      ? "0 0 30px rgba(204,9,47,0.06)"
                      : "none",
                  }}
                >
                  {/* Severity indicator */}
                  <div className="absolute top-3 right-3 flex gap-0.5">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-1.5 h-1.5 rounded-full"
                        style={{
                          background:
                            i < challenge.severity
                              ? isHighlight
                                ? "#CC092F"
                                : "#2B7FFF"
                              : "rgba(255,255,255,0.08)",
                        }}
                      />
                    ))}
                  </div>

                  <div className="flex items-start gap-3">
                    {/* Number badge */}
                    <div
                      className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center font-black text-sm"
                      style={{
                        background: isHighlight
                          ? "rgba(204,9,47,0.15)"
                          : "rgba(43,127,255,0.1)",
                        color: isHighlight ? "#CC092F" : "#2B7FFF",
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    {/* Icon */}
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{
                        background: isHighlight
                          ? "rgba(204,9,47,0.12)"
                          : "rgba(255,255,255,0.04)",
                        border: isHighlight
                          ? "1px solid rgba(204,9,47,0.2)"
                          : "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      <challenge.icon
                        className="w-5 h-5"
                        style={{
                          color: isHighlight ? "#CC092F" : "#EDEDEF",
                        }}
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3
                          className="font-bold leading-tight"
                          style={{
                            fontSize: isHighlight
                              ? "clamp(16px, 2vh, 22px)"
                              : "clamp(14px, 1.7vh, 20px)",
                            color: isHighlight ? "#EDEDEF" : "#CDCDCF",
                          }}
                        >
                          {challenge.title}
                          {challenge.subtitle && (
                            <>
                              {" — "}
                              <span style={{ color: "#2B7FFF" }}>
                                {challenge.subtitle}
                              </span>
                            </>
                          )}
                        </h3>
                        {isHighlight && (
                          <span
                            className="px-2 py-0.5 text-[10px] font-bold rounded-full tracking-wider uppercase"
                            style={{
                              background: "rgba(204,9,47,0.2)",
                              color: "#CC092F",
                              border: "1px solid rgba(204,9,47,0.3)",
                            }}
                          >
                            Crítico
                          </span>
                        )}
                      </div>
                      <p
                        className="leading-relaxed"
                        style={{
                          fontSize: "clamp(12px, 1.4vh, 16px)",
                          color: isHighlight ? "#ABABAF" : "#8A8A8E",
                        }}
                      >
                        {challenge.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Opportunity — central conclusion with glow */}
        <motion.div
          initial={{ opacity: 0, y: 15, scale: 0.96 }}
          animate={
            showOpportunity
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: 15, scale: 0.96 }
          }
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-2"
        >
          <div
            className="relative rounded-xl px-6 py-4 text-center overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(43,127,255,0.08), rgba(43,127,255,0.02))",
              border: "1.5px solid rgba(43,127,255,0.3)",
              boxShadow:
                "0 0 40px rgba(43,127,255,0.08), 0 0 80px rgba(43,127,255,0.03)",
            }}
          >
            {/* Subtle animated glow */}
            <motion.div
              className="absolute inset-0 rounded-xl pointer-events-none"
              animate={{
                boxShadow: [
                  "inset 0 0 20px rgba(43,127,255,0.03)",
                  "inset 0 0 40px rgba(43,127,255,0.06)",
                  "inset 0 0 20px rgba(43,127,255,0.03)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative flex items-center justify-center gap-3">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{
                  background: "rgba(43,127,255,0.15)",
                  border: "1px solid rgba(43,127,255,0.25)",
                }}
              >
                <ArrowRight className="w-4 h-4 text-[#2B7FFF]" />
              </div>
              <div>
                <p
                  className="font-bold text-[#EDEDEF]"
                  style={{ fontSize: "clamp(14px, 1.8vh, 22px)" }}
                >
                  A oportunidade está na{" "}
                  <span className="text-[#2B7FFF]">
                    integração operacional
                  </span>
                </p>
                <p
                  className="text-[#8A8A8E] mt-0.5"
                  style={{ fontSize: "clamp(11px, 1.2vh, 15px)" }}
                >
                  Conectar produto financeiro ao fluxo natural de venda da
                  revenda
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <SlideFooter />
    </div>
  );
}
