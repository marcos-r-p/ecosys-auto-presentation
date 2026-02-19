import { motion } from "motion/react";
import { TrendingUp, UserX, DollarSign, Brain, ArrowRight, CheckCircle2 } from "lucide-react";
import SlideFooter from "../SlideFooter";

const impacts = [
  { icon: TrendingUp, title: "Produtividade", metric: "+60%", desc: "visitas efetivas" },
  { icon: UserX, title: "Redução de Churn", metric: "3-4x", desc: "taxa de reativação" },
  { icon: DollarSign, title: "Performance", metric: "+40%", desc: "cross-sell estruturado" },
  { icon: Brain, title: "Inteligência", metric: "Real-time", desc: "feedback do campo" },
];

const roadmap = [
  {
    phase: "Mês 1-2",
    label: "MVP Essencial",
    items: ["Gestão de visitas GPS", "Carteira 360°", "Health Score v1", "Comunicação rápida"],
    deliverable: "Piloto 20-30 usuários",
    progress: 33,
  },
  {
    phase: "Mês 3-4",
    label: "Inteligência + Integrações",
    items: ["Priorização com IA", "Alertas automáticos", "Dashboard gerencial", "Teams + Outlook"],
    deliverable: "Rollout 50-100 usuários",
    progress: 66,
    highlight: true,
  },
  {
    phase: "Mês 5-6",
    label: "IA Avançada + Gamificação",
    items: ["First IA Assistente", "Roteirização inteligente", "Health Score v2", "Power BI executivo"],
    deliverable: "100% dos usuários",
    progress: 100,
    highlight: true,
  },
];

export default function Slide25() {
  return (
    <div className="flex flex-col h-full px-6 sm:px-10 md:px-14 lg:px-20 pt-4 pb-1 overflow-hidden">
      <div className="flex-1 flex flex-col justify-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="text-center mb-8"
        >
          <h2
            className="font-black tracking-tight leading-none"
            style={{ fontSize: "clamp(26px, 4.5vh, 52px)" }}
          >
            <span className="text-[#CC092F]">Copiloto Comercial</span>
            <span className="text-[#EDEDEF]">: Impacto e Roadmap</span>
          </h2>
          <p
            className="text-[#8A8A8E] font-medium mt-3"
            style={{ fontSize: "clamp(13px, 1.6vh, 20px)" }}
          >
            Transformação mensurável em 6 meses
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-[35%_1fr] gap-6 lg:gap-8">
          {/* Left: Impacto — compacto com métricas grandes */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h3
              className="font-bold text-[#EDEDEF] mb-3 flex items-center gap-2"
              style={{ fontSize: "clamp(14px, 1.8vh, 22px)" }}
            >
              <TrendingUp className="w-5 h-5 text-[#CC092F]" />
              Impacto Esperado
            </h3>
            <div className="flex flex-col gap-3">
              {impacts.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.15 + i * 0.05 }}
                  className="flex items-center gap-3 rounded-lg px-4 py-3"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "linear-gradient(135deg, rgba(204,9,47,0.15), rgba(204,9,47,0.05))",
                      border: "1px solid rgba(204,9,47,0.3)",
                    }}
                  >
                    <item.icon className="w-5 h-5 text-[#CC092F]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-2">
                      <span
                        className="font-black text-[#CC092F]"
                        style={{ fontSize: "clamp(18px, 2.8vh, 32px)" }}
                      >
                        {item.metric}
                      </span>
                      <span
                        className="font-medium text-[#9A9AA0] truncate"
                        style={{ fontSize: "clamp(11px, 1.2vh, 15px)" }}
                      >
                        {item.desc}
                      </span>
                    </div>
                    <p
                      className="font-bold text-[#EDEDEF] leading-tight"
                      style={{ fontSize: "clamp(12px, 1.4vh, 17px)" }}
                    >
                      {item.title}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Roadmap — com timeline vertical */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            <h3
              className="font-bold text-[#EDEDEF] mb-3 flex items-center gap-2"
              style={{ fontSize: "clamp(14px, 1.8vh, 22px)" }}
            >
              <CheckCircle2 className="w-5 h-5 text-[#CC092F]" />
              Roadmap de Entrega
              <span className="text-[#8A8A8E] font-normal" style={{ fontSize: "clamp(11px, 1.3vh, 16px)" }}>
                (6 Meses)
              </span>
            </h3>

            <div className="relative flex flex-col gap-4">
              {/* Linha vertical de timeline */}
              <div
                className="absolute left-[18px] top-4 bottom-4 w-[2px]"
                style={{
                  background: "linear-gradient(to bottom, rgba(204,9,47,0.1), rgba(204,9,47,0.5), rgba(204,9,47,0.8))",
                }}
              />

              {roadmap.map((phase, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.2 + i * 0.08 }}
                  className="flex gap-4 relative"
                >
                  {/* Node da timeline */}
                  <div className="flex-shrink-0 relative z-10">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center font-black text-white"
                      style={{
                        fontSize: "clamp(10px, 1.1vh, 13px)",
                        background: phase.highlight
                          ? "linear-gradient(135deg, #CC092F, #E01040)"
                          : "rgba(255,255,255,0.08)",
                        border: phase.highlight ? "none" : "2px solid rgba(255,255,255,0.15)",
                        boxShadow: phase.highlight ? "0 0 16px rgba(204,9,47,0.3)" : "none",
                        color: phase.highlight ? "white" : "#8A8A8E",
                      }}
                    >
                      {i + 1}
                    </div>
                  </div>

                  {/* Card da fase */}
                  <div
                    className="flex-1 rounded-xl px-5 py-3"
                    style={{
                      background: phase.highlight
                        ? "linear-gradient(160deg, rgba(204,9,47,0.08), rgba(204,9,47,0.02))"
                        : "rgba(255,255,255,0.03)",
                      border: phase.highlight
                        ? "1.5px solid rgba(204,9,47,0.35)"
                        : "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    {/* Phase header */}
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className="font-black px-3 py-0.5 rounded-full"
                        style={{
                          fontSize: "clamp(10px, 1.1vh, 13px)",
                          background: phase.highlight ? "rgba(204,9,47,0.2)" : "rgba(255,255,255,0.06)",
                          color: phase.highlight ? "#CC092F" : "#8A8A8E",
                        }}
                      >
                        {phase.phase}
                      </span>
                      <h4
                        className="font-extrabold leading-tight"
                        style={{
                          fontSize: "clamp(14px, 1.8vh, 22px)",
                          color: phase.highlight ? "#FFFFFF" : "#EDEDEF",
                        }}
                      >
                        {phase.label}
                      </h4>
                    </div>

                    {/* Items em linha */}
                    <div className="flex flex-wrap gap-x-4 gap-y-1 mb-2">
                      {phase.items.map((item, j) => (
                        <span
                          key={j}
                          className="flex items-center gap-1.5"
                          style={{ fontSize: "clamp(11px, 1.3vh, 16px)" }}
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{
                              backgroundColor: phase.highlight ? "#CC092F" : "#555",
                            }}
                          />
                          <span className="text-[#9A9AA0]">{item}</span>
                        </span>
                      ))}
                    </div>

                    {/* Deliverable */}
                    <div
                      className="flex items-center gap-2 pt-2"
                      style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
                    >
                      <ArrowRight
                        className="w-4 h-4 flex-shrink-0"
                        style={{ color: phase.highlight ? "#CC092F" : "#6A6A6E" }}
                      />
                      <span
                        className="font-bold"
                        style={{
                          fontSize: "clamp(12px, 1.4vh, 17px)",
                          color: phase.highlight ? "#CC092F" : "#ABABAF",
                        }}
                      >
                        {phase.deliverable}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <SlideFooter />
    </div>
  );
}
