import { motion } from "motion/react";
import { MapPin, Bell, ShoppingCart, TrendingUp, Landmark, ChevronRight } from "lucide-react";
import SlideFooter from "../SlideFooter";

const steps = [
  {
    id: "descoberta",
    phase: "01",
    label: "Descoberta",
    title: "Busca por Geolocalização",
    icon: MapPin,
    color: "#2B7FFF",
    highlight: false,
    bullets: [
      "Ofertas relevantes próximas ao usuário",
      "Estímulo à visita às revendas",
      "Redução da fricção inicial",
    ],
  },
  {
    id: "engajamento",
    phase: "02",
    label: "Engajamento",
    title: "Notificações Inteligentes",
    icon: Bell,
    color: "#2B7FFF",
    highlight: false,
    bullets: [
      "Alertas personalizados e contextuais",
      "Reativação contínua da demanda",
      "Comunicação direta com o consumidor",
    ],
  },
  {
    id: "conversao",
    phase: "03",
    label: "Conversão",
    title: "Jornada de Compra Mobile",
    icon: ShoppingCart,
    color: "#2B7FFF",
    highlight: false,
    bullets: [
      "Experiência otimizada para decisão rápida",
      "Comparação e escolha sem fricção",
      "Redução do abandono",
    ],
  },
  {
    id: "originacao",
    phase: "04",
    label: "Originação",
    title: "Qualificação do Lead",
    icon: TrendingUp,
    color: "#2B7FFF",
    highlight: true,
    bullets: [
      "Simulação e pré-aprovação no app",
      "Captura de dados qualificados",
      "Lead pronto para financiamento",
    ],
  },
  {
    id: "monetizacao",
    phase: "05",
    label: "Monetização",
    title: "Produtos Bradesco",
    icon: Landmark,
    color: "#CC1E3A",
    highlight: false,
    bullets: [
      "Ofertas segmentadas de crédito e seguros",
      "Múltiplos pontos de contato contínuos",
      "Relacionamento financeiro duradouro",
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
      style={{ padding: "clamp(8px, 1.2vh, 16px) clamp(16px, 2vw, 60px)" }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center flex-shrink-0"
        style={{ marginBottom: "clamp(8px, 1.2vh, 18px)" }}
      >
        <p
          className="uppercase tracking-[0.2em] text-[#2B7FFF] font-semibold"
          style={{ fontSize: "clamp(7px, 0.9vh, 11px)", marginBottom: "clamp(3px, 0.5vh, 8px)" }}
        >
          App Marketplace Autoline
        </p>
        <h2
          className="font-extrabold tracking-tight text-[#EDEDEF]"
          style={{ fontSize: "clamp(20px, 3.2vh, 40px)", lineHeight: "1.1", marginBottom: "clamp(4px, 0.7vh, 10px)" }}
        >
          Canal Mobile de Aquisição e{" "}
          <span className="text-[#2B7FFF]">Conversão 24/7</span>
        </h2>
        <p
          className="text-[#8A8A8E] max-w-4xl mx-auto"
          style={{ fontSize: "clamp(10px, 1.2vh, 15px)", lineHeight: "1.4" }}
        >
          O app conecta o Bradesco diretamente ao consumidor automotivo ao longo de toda a jornada de compra.
        </p>
      </motion.div>

      {/* Flow Line Label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="flex-shrink-0 flex items-center gap-3"
        style={{ marginBottom: "clamp(6px, 0.8vh, 12px)" }}
      >
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#2B7FFF]/20 to-transparent" />
        <p
          className="uppercase tracking-[0.15em] text-[#6B6B70] font-semibold flex-shrink-0"
          style={{ fontSize: "clamp(7px, 0.8vh, 10px)" }}
        >
          Jornada do Consumidor no App
        </p>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#2B7FFF]/20 to-transparent" />
      </motion.div>

      {/* 5 Steps Flow */}
      <div
        className="flex items-stretch flex-1 min-h-0"
        style={{ gap: "clamp(4px, 0.5vw, 10px)" }}
      >
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-stretch" style={{ flex: 1, gap: "clamp(4px, 0.5vw, 10px)" }}>
            {/* Card */}
            <motion.div
              initial={{ opacity: 0, y: 25, scale: step.highlight ? 0.95 : 1 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: step.highlight ? 0.6 : 0.5,
                delay: 0.3 + index * 0.12,
              }}
              className="flex-1 flex flex-col"
            >
              <div
                className="relative rounded-xl flex flex-col h-full transition-all duration-300"
                style={{
                  padding: "clamp(8px, 1.2vh, 16px) clamp(8px, 0.8vw, 14px)",
                  background: step.highlight
                    ? "linear-gradient(180deg, rgba(43,127,255,0.12) 0%, rgba(43,127,255,0.04) 100%)"
                    : "rgba(255,255,255,0.025)",
                  border: step.highlight
                    ? "1.5px solid rgba(43,127,255,0.4)"
                    : "1px solid rgba(255,255,255,0.06)",
                  backdropFilter: "blur(12px)",
                  boxShadow: step.highlight
                    ? "0 0 25px rgba(43,127,255,0.1), 0 0 50px rgba(43,127,255,0.04)"
                    : "inset 0 1px 0 rgba(255,255,255,0.03)",
                }}
              >
                {/* Glow overlay for highlight */}
                {step.highlight && (
                  <div
                    className="absolute inset-0 rounded-xl pointer-events-none"
                    style={{
                      background: "radial-gradient(ellipse at center top, rgba(43,127,255,0.08) 0%, transparent 70%)",
                    }}
                  />
                )}

                {/* Phase Badge */}
                <div className="flex items-center justify-between mb-2 relative">
                  <span
                    className="uppercase tracking-wider font-bold"
                    style={{
                      fontSize: "clamp(6px, 0.7vh, 9px)",
                      color: step.highlight ? "#2B7FFF" : "#6B6B70",
                    }}
                  >
                    Etapa {step.phase}
                  </span>
                  {step.highlight && (
                    <span
                      className="px-1.5 py-0.5 rounded text-[#2B7FFF] font-bold uppercase tracking-wider"
                      style={{
                        fontSize: "clamp(5px, 0.55vh, 7px)",
                        background: "rgba(43,127,255,0.15)",
                        border: "1px solid rgba(43,127,255,0.3)",
                      }}
                    >
                      Destaque
                    </span>
                  )}
                </div>

                {/* Icon */}
                <div
                  className="rounded-lg flex items-center justify-center flex-shrink-0 mb-2"
                  style={{
                    width: "clamp(28px, 3.5vh, 42px)",
                    height: "clamp(28px, 3.5vh, 42px)",
                    background: `rgba(${hexToRgb(step.color)}, ${step.highlight ? "0.15" : "0.08"})`,
                    border: `1px solid rgba(${hexToRgb(step.color)}, ${step.highlight ? "0.35" : "0.2"})`,
                  }}
                >
                  <step.icon
                    style={{
                      width: "clamp(14px, 1.8vh, 22px)",
                      height: "clamp(14px, 1.8vh, 22px)",
                    }}
                    color={step.color}
                  />
                </div>

                {/* Title */}
                <h3
                  className="font-bold text-[#EDEDEF] relative"
                  style={{
                    fontSize: "clamp(11px, 1.4vh, 17px)",
                    lineHeight: "1.2",
                    marginBottom: "clamp(4px, 0.6vh, 8px)",
                  }}
                >
                  {step.title}
                </h3>

                {/* Bullets */}
                <div className="flex flex-col relative" style={{ gap: "clamp(3px, 0.4vh, 6px)" }}>
                  {step.bullets.map((bullet, i) => (
                    <div key={i} className="flex items-start gap-1.5">
                      <div
                        className="rounded-full flex-shrink-0 mt-1"
                        style={{
                          width: "clamp(3px, 0.4vh, 5px)",
                          height: "clamp(3px, 0.4vh, 5px)",
                          background: step.color,
                          opacity: 0.5,
                        }}
                      />
                      <span
                        className="text-[#9A9A9E]"
                        style={{ fontSize: "clamp(8px, 1vh, 13px)", lineHeight: "1.35" }}
                      >
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Phase Label at bottom */}
                <div className="mt-auto pt-2 relative">
                  <p
                    className="font-semibold uppercase tracking-wider text-center"
                    style={{
                      fontSize: "clamp(7px, 0.8vh, 10px)",
                      color: step.color,
                      opacity: 0.7,
                    }}
                  >
                    {step.label}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Arrow between cards */}
            {index < steps.length - 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.12 }}
                className="flex items-center flex-shrink-0"
              >
                <ChevronRight
                  style={{
                    width: "clamp(12px, 1.5vh, 18px)",
                    height: "clamp(12px, 1.5vh, 18px)",
                  }}
                  className="text-[#3A3A3E]"
                />
              </motion.div>
            )}
          </div>
        ))}
      </div>

      {/* Callout Final */}
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
            padding: "clamp(8px, 1.2vh, 16px) clamp(12px, 1.5vw, 28px)",
            background: "linear-gradient(135deg, rgba(43,127,255,0.06) 0%, rgba(204,30,58,0.04) 100%)",
            border: "1px solid rgba(43,127,255,0.2)",
            boxShadow: "0 0 20px rgba(43,127,255,0.04)",
          }}
        >
          <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-10 blur-3xl" style={{ background: "radial-gradient(circle, #2B7FFF, transparent)" }} />
          <p
            className="text-center text-[#C5C5C7] relative font-medium"
            style={{ fontSize: "clamp(11px, 1.4vh, 17px)", lineHeight: "1.4" }}
          >
            <strong className="text-[#2B7FFF]">Originação digital contínua</strong>{" "}
            — independente da loja física.
          </p>
        </div>
      </motion.div>

      <SlideFooter />
    </div>
  );
}
