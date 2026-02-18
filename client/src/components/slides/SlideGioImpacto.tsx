import { motion } from "motion/react";
import { TrendingUp, UserX, DollarSign, Brain, Calendar, Rocket, Zap, Crown } from "lucide-react";
import SlideFooter from "../SlideFooter";

const impacts = [
  {
    icon: TrendingUp,
    title: "Produtividade Multiplicada",
    metrics: [
      "+40-60% visitas efetivas",
      "-50% tempo administrativo",
      "2-3x mais assertividade",
    ],
    color: "#2B7FFF",
  },
  {
    icon: UserX,
    title: "Redução de Churn",
    metrics: [
      "Risco identificado 30-60 dias antes",
      "Ações preventivas automatizadas",
      "Taxa de reativação 3-4x maior",
    ],
    color: "#CC092F",
  },
  {
    icon: DollarSign,
    title: "Crescimento de Performance",
    metrics: [
      "Conversão de lojistas inativos",
      "Cross-sell estruturado",
      "Expansão de share of wallet",
    ],
    color: "#22C55E",
  },
  {
    icon: Brain,
    title: "Inteligência Estratégica",
    metrics: [
      "Feedback do campo em tempo real",
      "Tendências por região/segmento",
      "Teste rápido de campanhas",
    ],
    color: "#8B5CF6",
  },
];

const roadmap = [
  {
    icon: Rocket,
    phase: "Mês 1-2",
    title: "MVP Essencial",
    deliverable: "Gestão + Health Score v1",
    milestone: "Piloto com 20-30 usuários",
    color: "#2B7FFF",
  },
  {
    icon: Zap,
    phase: "Mês 3-4",
    title: "Inteligência + Integrações",
    deliverable: "IA + Alertas + Teams/Outlook",
    milestone: "Rollout 50-100 usuários",
    color: "#8B5CF6",
  },
  {
    icon: Crown,
    phase: "Mês 5-6",
    title: "IA Avançada + Gamificação",
    deliverable: "First IA + Health Score v2 + Gamificação",
    milestone: "100% dos usuários",
    color: "#22C55E",
  },
];

export default function SlideGioImpacto() {
  return (
    <div className="flex flex-col items-center justify-start h-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 pt-3 pb-2 overflow-hidden">
      <div className="max-w-7xl w-full flex flex-col flex-1" style={{ gap: 'clamp(8px, 1.2vh, 20px)' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2
            className="font-extrabold tracking-tight text-[#EDEDEF]"
            style={{ fontSize: 'clamp(20px, 3.2vh, 44px)', marginBottom: 'clamp(2px, 0.4vh, 8px)', lineHeight: '1.1' }}
          >
            <span style={{ color: '#2B7FFF' }}>Copiloto do GEFIN</span>
            <span className="text-[#EDEDEF]">: Impacto e Roadmap</span>
          </h2>
          <p className="text-[#8A8A8E] font-medium" style={{ fontSize: 'clamp(11px, 1.4vh, 18px)' }}>
            Transformação mensurável em 6 meses
          </p>
        </motion.div>

        {/* Impacto - 4 cards */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3
            className="font-bold text-[#EDEDEF] text-center"
            style={{ fontSize: 'clamp(11px, 1.4vh, 18px)', marginBottom: 'clamp(4px, 0.6vh, 12px)' }}
          >
            Impacto Esperado nos Resultados
          </h3>
          <div className="grid grid-cols-4" style={{ gap: 'clamp(6px, 0.8vh, 14px)' }}>
            {impacts.map((impact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 + index * 0.05 }}
                className="bg-white/[0.04] border border-white/[0.08] rounded-xl hover:border-white/[0.15] transition-all"
                style={{ padding: 'clamp(8px, 1.2vh, 18px)' }}
              >
                <div className="flex items-center mb-2" style={{ gap: 'clamp(4px, 0.5vh, 8px)' }}>
                  <div
                    className="rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      width: 'clamp(24px, 3vh, 36px)',
                      height: 'clamp(24px, 3vh, 36px)',
                      backgroundColor: `${impact.color}20`,
                    }}
                  >
                    <impact.icon
                      style={{ width: 'clamp(12px, 1.4vh, 20px)', height: 'clamp(12px, 1.4vh, 20px)', color: impact.color }}
                    />
                  </div>
                  <h4 className="font-bold text-[#EDEDEF] leading-tight" style={{ fontSize: 'clamp(9px, 1.2vh, 15px)' }}>
                    {impact.title}
                  </h4>
                </div>
                <div className="flex flex-col" style={{ gap: 'clamp(2px, 0.3vh, 5px)' }}>
                  {impact.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-start" style={{ gap: 'clamp(3px, 0.4vh, 6px)' }}>
                      <span style={{ color: impact.color, fontSize: 'clamp(6px, 0.7vh, 10px)', marginTop: '2px' }}>●</span>
                      <span className="text-[#8A8A8E] leading-snug" style={{ fontSize: 'clamp(8px, 1vh, 13px)' }}>
                        {metric}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Roadmap - 3 phases horizontal */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1 flex flex-col"
        >
          <h3
            className="font-bold text-[#EDEDEF] text-center"
            style={{ fontSize: 'clamp(11px, 1.4vh, 18px)', marginBottom: 'clamp(4px, 0.6vh, 12px)' }}
          >
            Roadmap de Entrega (6 Meses)
          </h3>

          {/* Timeline connector */}
          <div className="relative flex-1 flex flex-col justify-center">
            {/* Horizontal line */}
            <div
              className="absolute left-0 right-0 bg-white/[0.08]"
              style={{ height: '2px', top: 'clamp(20px, 3vh, 36px)' }}
            />

            <div className="grid grid-cols-3 relative" style={{ gap: 'clamp(8px, 1vw, 20px)' }}>
              {roadmap.map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.25 + index * 0.08 }}
                  className="flex flex-col items-center"
                >
                  {/* Phase dot */}
                  <div
                    className="rounded-full flex items-center justify-center z-10 mb-2"
                    style={{
                      width: 'clamp(32px, 4vh, 52px)',
                      height: 'clamp(32px, 4vh, 52px)',
                      backgroundColor: `${phase.color}20`,
                      border: `2px solid ${phase.color}`,
                    }}
                  >
                    <phase.icon style={{ width: 'clamp(14px, 1.8vh, 24px)', height: 'clamp(14px, 1.8vh, 24px)', color: phase.color }} />
                  </div>

                  {/* Phase card */}
                  <div
                    className="bg-white/[0.04] border rounded-xl w-full text-center"
                    style={{
                      borderColor: `${phase.color}40`,
                      padding: 'clamp(8px, 1.2vh, 18px)',
                    }}
                  >
                    <span
                      className="font-bold"
                      style={{ fontSize: 'clamp(9px, 1.1vh, 14px)', color: phase.color }}
                    >
                      {phase.phase}
                    </span>
                    <h4
                      className="font-bold text-[#EDEDEF]"
                      style={{ fontSize: 'clamp(11px, 1.4vh, 18px)', margin: 'clamp(2px, 0.3vh, 6px) 0' }}
                    >
                      {phase.title}
                    </h4>
                    <p className="text-[#8A8A8E] leading-snug" style={{ fontSize: 'clamp(8px, 1vh, 13px)', marginBottom: 'clamp(4px, 0.5vh, 8px)' }}>
                      {phase.deliverable}
                    </p>
                    <div
                      className="bg-white/[0.04] rounded-lg"
                      style={{ padding: 'clamp(3px, 0.4vh, 6px) clamp(6px, 0.8vh, 12px)' }}
                    >
                      <span className="font-bold" style={{ fontSize: 'clamp(8px, 1vh, 13px)', color: phase.color }}>
                        {phase.milestone}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <SlideFooter />
    </div>
  );
}
