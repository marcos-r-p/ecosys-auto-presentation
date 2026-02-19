import { motion } from "motion/react";
import { MapPin, Bell, ShoppingCart, TrendingUp, Landmark } from "lucide-react";
import SlideFooter from "../SlideFooter";

/*
 * Slide 19 — Canal Mobile de Aquisição e Conversão 24/7
 * Design: Funil horizontal de 5 etapas com cards compactos
 * Iluminação progressiva da esquerda para direita
 * Monetização com destaque vermelho Bradesco
 * Setas luminosas azuis conectando as etapas
 * Banner premium inferior
 */

const steps = [
  {
    id: "descoberta",
    phase: "01",
    label: "DESCOBERTA",
    title: "Busca por Geolocalização",
    icon: MapPin,
    color: "#2B7FFF",
    intensity: 0.3,
    bullets: [
      "Ofertas próximas ao usuário",
      "Estímulo à visita presencial",
      "Redução da fricção inicial",
    ],
  },
  {
    id: "engajamento",
    phase: "02",
    label: "ENGAJAMENTO",
    title: "Notificações Inteligentes",
    icon: Bell,
    color: "#2B7FFF",
    intensity: 0.45,
    bullets: [
      "Alertas personalizados",
      "Reativação contínua da demanda",
      "Comunicação direta",
    ],
  },
  {
    id: "conversao",
    phase: "03",
    label: "CONVERSÃO",
    title: "Jornada de Compra Mobile",
    icon: ShoppingCart,
    color: "#2B7FFF",
    intensity: 0.6,
    bullets: [
      "Decisão rápida e sem fricção",
      "Comparação simplificada",
      "Redução do abandono",
    ],
  },
  {
    id: "originacao",
    phase: "04",
    label: "ORIGINAÇÃO",
    title: "Qualificação do Lead",
    icon: TrendingUp,
    color: "#2B7FFF",
    intensity: 0.8,
    highlight: true,
    bullets: [
      "Simulação e pré-aprovação",
      "Captura de dados qualificados",
      "Lead pronto p/ financiamento",
    ],
  },
  {
    id: "monetizacao",
    phase: "05",
    label: "MONETIZAÇÃO",
    title: "Produtos Bradesco",
    icon: Landmark,
    color: "#CC1E3A",
    intensity: 1,
    isRed: true,
    bullets: [
      "Crédito e seguros segmentados",
      "Múltiplos pontos de contato",
      "Relacionamento duradouro",
    ],
  },
];

function hexToRgb(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
}

export default function Slide19() {
  return (
    <div
      className="flex flex-col h-full overflow-hidden"
      style={{ padding: "clamp(10px, 1.5vh, 20px) clamp(14px, 1.8vw, 32px) clamp(6px, 0.8vh, 10px) clamp(14px, 1.8vw, 32px)" }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center flex-shrink-0"
        style={{ marginBottom: "clamp(6px, 1vh, 14px)" }}
      >
        <p
          className="uppercase tracking-[0.25em] text-[#2B7FFF] font-semibold"
          style={{ fontSize: "clamp(10px, 1.2vh, 14px)", marginBottom: "clamp(2px, 0.3vh, 5px)" }}
        >
          App Marketplace Autoline
        </p>
        <h2
          className="font-extrabold tracking-tight text-[#EDEDEF]"
          style={{ fontSize: "clamp(28px, 4.8vh, 56px)", lineHeight: "1.1" }}
        >
          Canal Mobile de Aquisição e{" "}
          <span className="text-[#2B7FFF]">Conversão 24/7</span>
        </h2>
      </motion.div>

      {/* Funnel Section Label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="flex-shrink-0 flex items-center gap-3"
        style={{ marginBottom: "clamp(8px, 1.2vh, 16px)" }}
      >
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#2B7FFF]/20 to-transparent" />
        <p
          className="uppercase tracking-[0.25em] text-[#6B6B70] font-semibold flex-shrink-0"
          style={{ fontSize: "clamp(8px, 1vh, 12px)" }}
        >
          Jornada do Consumidor no App
        </p>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#2B7FFF]/20 to-transparent" />
      </motion.div>

      {/* Horizontal Funnel - 5 compact cards */}
      <div className="flex-1 flex items-center min-h-0" style={{ maxHeight: "clamp(200px, 42vh, 400px)" }}>
        <div
          className="flex items-stretch w-full"
          style={{ gap: "clamp(3px, 0.4vw, 8px)", paddingRight: "clamp(10px, 1.5vw, 24px)" }}
        >
          {steps.map((step, index) => {
            const rgb = hexToRgb(step.color);
            const isHighlight = !!(step as any).highlight;
            const isRed = !!(step as any).isRed;
            const progressOpacity = 0.03 + step.intensity * 0.09;
            const borderOpacity = 0.08 + step.intensity * 0.25;

            return (
              <div
                key={step.id}
                className="flex items-center"
                style={{ flex: 1, minWidth: 0 }}
              >
                {/* Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + index * 0.12,
                  }}
                  className="flex-1 min-w-0"
                >
                  <div
                    className="relative rounded-xl overflow-hidden"
                    style={{
                      padding: "clamp(12px, 1.7vh, 20px) clamp(10px, 1vw, 16px)",
                      background: isRed
                        ? `linear-gradient(160deg, rgba(${rgb},0.12) 0%, rgba(${rgb},0.03) 100%)`
                        : isHighlight
                          ? `linear-gradient(160deg, rgba(${rgb},0.10) 0%, rgba(${rgb},0.02) 100%)`
                          : `rgba(255,255,255,${progressOpacity})`,
                      border: isRed
                        ? `2px solid rgba(${rgb},0.5)`
                        : isHighlight
                          ? `2px solid rgba(${rgb},0.4)`
                          : `1px solid rgba(255,255,255,${borderOpacity})`,
                      backdropFilter: "blur(16px)",
                      boxShadow: isRed
                        ? `0 0 30px rgba(${rgb},0.12), 0 0 60px rgba(${rgb},0.05)`
                        : isHighlight
                          ? `0 0 25px rgba(${rgb},0.08), 0 0 50px rgba(${rgb},0.03)`
                          : `inset 0 1px 0 rgba(255,255,255,${0.02 + step.intensity * 0.03})`,
                    }}
                  >
                    {/* Progressive glow overlay */}
                    {(isHighlight || isRed) && (
                      <motion.div
                        className="absolute inset-0 rounded-xl pointer-events-none"
                        animate={{
                          boxShadow: [
                            `inset 0 0 20px rgba(${rgb},0.04)`,
                            `inset 0 0 40px rgba(${rgb},0.08)`,
                            `inset 0 0 20px rgba(${rgb},0.04)`,
                          ],
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      />
                    )}

                    {/* Top row: Phase + Label + Badge */}
                    <div
                      className="flex items-center gap-1.5 relative"
                      style={{ marginBottom: "clamp(6px, 0.8vh, 10px)" }}
                    >
                      <span
                        className="font-mono font-bold"
                        style={{
                          fontSize: "clamp(9px, 1.1vh, 13px)",
                          color: step.color,
                          opacity: 0.5 + step.intensity * 0.5,
                        }}
                      >
                        {step.phase}
                      </span>
                      <span
                        className="uppercase tracking-[0.12em] font-bold truncate"
                        style={{
                          fontSize: "clamp(8px, 1vh, 12px)",
                          color: step.color,
                          opacity: 0.5 + step.intensity * 0.5,
                        }}
                      >
                        {step.label}
                      </span>
                      {isRed && (
                        <span
                          className="ml-auto px-1.5 py-0.5 rounded font-bold uppercase tracking-wider flex-shrink-0"
                          style={{
                            fontSize: "clamp(5px, 0.55vh, 7px)",
                            color: "#CC1E3A",
                            background: "rgba(204,30,58,0.15)",
                            border: "1px solid rgba(204,30,58,0.35)",
                          }}
                        >
                          Bradesco
                        </span>
                      )}
                      {isHighlight && (
                        <span
                          className="ml-auto px-1.5 py-0.5 rounded font-bold uppercase tracking-wider flex-shrink-0"
                          style={{
                            fontSize: "clamp(5px, 0.55vh, 7px)",
                            color: "#2B7FFF",
                            background: "rgba(43,127,255,0.15)",
                            border: "1px solid rgba(43,127,255,0.3)",
                          }}
                        >
                          Principal
                        </span>
                      )}
                    </div>

                    {/* Icon */}
                    <div
                      className="rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        width: "clamp(34px, 4.5vh, 52px)",
                        height: "clamp(34px, 4.5vh, 52px)",
                        background: `rgba(${rgb}, ${0.06 + step.intensity * 0.1})`,
                        border: `1px solid rgba(${rgb}, ${0.15 + step.intensity * 0.25})`,
                        marginBottom: "clamp(6px, 0.8vh, 12px)",
                      }}
                    >
                      <step.icon
                        style={{
                          width: "clamp(18px, 2.4vh, 28px)",
                          height: "clamp(18px, 2.4vh, 28px)",
                        }}
                        color={step.color}
                        strokeWidth={isRed || isHighlight ? 2.5 : 2}
                      />
                    </div>

                    {/* Title */}
                    <h3
                      className="font-bold text-[#EDEDEF] relative"
                      style={{
                        fontSize: "clamp(14px, 1.9vh, 22px)",
                        lineHeight: "1.2",
                        marginBottom: "clamp(6px, 0.8vh, 10px)",
                      }}
                    >
                      {step.title}
                    </h3>

                    {/* Bullets */}
                    <div className="flex flex-col relative" style={{ gap: "clamp(2px, 0.3vh, 5px)" }}>
                      {step.bullets.map((bullet, i) => (
                        <div key={i} className="flex items-start gap-1.5">
                          <div
                            className="rounded-full flex-shrink-0"
                            style={{
                              width: "clamp(3px, 0.4vh, 5px)",
                              height: "clamp(3px, 0.4vh, 5px)",
                              background: step.color,
                              opacity: 0.4 + step.intensity * 0.4,
                              marginTop: "clamp(4px, 0.5vh, 7px)",
                            }}
                          />
                          <span
                            className="text-[#9A9A9E]"
                            style={{
                              fontSize: "clamp(11px, 1.4vh, 17px)",
                              lineHeight: "1.35",
                            }}
                          >
                            {bullet}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Arrow between cards */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.12 }}
                    className="flex-shrink-0 flex items-center justify-center"
                    style={{
                      width: "clamp(16px, 1.5vw, 28px)",
                    }}
                  >
                    <svg
                      viewBox="0 0 24 32"
                      fill="none"
                      style={{
                        width: "clamp(12px, 1.3vw, 20px)",
                        height: "clamp(18px, 2.5vh, 32px)",
                      }}
                    >
                      {/* Glow line */}
                      <motion.line
                        x1="3"
                        y1="16"
                        x2="17"
                        y2="16"
                        stroke={`rgba(${hexToRgb(steps[Math.min(index + 1, steps.length - 1)].color)},${0.2 + steps[index + 1].intensity * 0.3})`}
                        strokeWidth="2"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.4, delay: 0.6 + index * 0.12 }}
                      />
                      {/* Arrowhead */}
                      <motion.path
                        d="M14 10 L21 16 L14 22"
                        stroke={`rgba(${hexToRgb(steps[Math.min(index + 1, steps.length - 1)].color)},${0.3 + steps[index + 1].intensity * 0.4})`}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        animate={{
                          opacity: [0.4, 0.9, 0.4],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.4,
                        }}
                      />
                      {/* Glow dot traveling */}
                      <motion.circle
                        cx="10"
                        cy="16"
                        r="2"
                        fill={steps[Math.min(index + 1, steps.length - 1)].color}
                        animate={{
                          cx: [3, 18],
                          opacity: [0, 0.6, 0],
                        }}
                        transition={{
                          duration: 1.8,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 1 + index * 0.5,
                        }}
                      />
                    </svg>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Banner */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        className="flex-shrink-0"
        style={{ marginTop: "clamp(8px, 1.2vh, 16px)" }}
      >
        <div
          className="relative rounded-xl overflow-hidden"
          style={{
            padding: "clamp(10px, 1.4vh, 18px) clamp(16px, 2vw, 32px)",
            background: "linear-gradient(135deg, rgba(43,127,255,0.06) 0%, rgba(204,30,58,0.04) 100%)",
            border: "1px solid rgba(43,127,255,0.2)",
            boxShadow: "0 0 30px rgba(43,127,255,0.04)",
          }}
        >
          <div
            className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(43,127,255,0.08), transparent)", opacity: 0.8 }}
          />
          <div
            className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full blur-3xl pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(204,30,58,0.06), transparent)", opacity: 0.8 }}
          />
          <p
            className="text-center text-[#C5C5C7] relative font-medium"
            style={{ fontSize: "clamp(14px, 1.8vh, 21px)", lineHeight: "1.4" }}
          >
            <strong className="text-[#2B7FFF]">Originação digital contínua</strong>{" "}
            — independente da loja física
          </p>
        </div>
      </motion.div>

      <SlideFooter />
    </div>
  );
}
