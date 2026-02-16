import { motion } from "motion/react";
import { Calendar, Rocket, Zap, Bot } from "lucide-react";
import SlideFooter from "../SlideFooter";

const autolineDeliveries = [
  { month: 1, title: "Ajuste Arquitetura Discovery", short: "Arquitetura" },
  { month: 2, title: "Ampliação Arquitetura", short: "Ampliação" },
  { month: 3, title: "Observabilidade", short: "Observabilidade" },
  { month: 4, title: "Segurança Governança Protótipo", short: "Segurança" },
  { month: 5, title: "Marketplace V1 + DMS Lite + App Vendedor", short: "MVP V1" },
  { month: 6, title: "Data & Insight (Plataforma)", short: "Plataforma", highlight: true },
  { month: 7, title: "Data & Insight (Continuação)", short: "Dados", highlight: true },
  { month: 8, title: "Ampliação Infra", short: "Infraestrutura" },
  { month: 9, title: "Marketplace V2 + DMS Pro V2 + App Marketplace", short: "Evolução V2" },
  { month: 10, title: "Site Recovery", short: "Recovery" },
  { month: 11, title: "Data & Insight (Refinamento)", short: "Refinamento" },
  { month: 12, title: "Marketplace V3 + DMS Pro V3 + Embedded App Bradesco", short: "Final V3" },
];

const gioPhases = [
  {
    months: "1-2",
    title: "MVP ESSENCIAL",
    items: [
      "Gestão de Visitas",
      "Carteira 360°",
      "Health Score",
      "Comunicação",
    ],
    phase: "PILOTO (20-30 usuários)",
    color: "#8B5CF6",
  },
  {
    months: "3-4",
    title: "INTELIGÊNCIA + INTEGRAÇÕES",
    items: [
      "Priorização IA",
      "Alertas Automáticos",
      "Painel Gerencial",
      "Teams + Outlook",
      "Gestão de Ganhos",
    ],
    phase: "ROLLOUT (50-100 usuários)",
    color: "#8B5CF6",
  },
  {
    months: "5-6",
    title: "IA AVANÇADA + GAMIFICAÇÃO",
    items: [
      "Roteirização Inteligente",
      "First IA",
      "Health Score v2",
      "Gamificação Completa",
      "Power BI",
    ],
    phase: "100% OPERACIONAL",
    color: "#8B5CF6",
  },
];

export default function Slide30() {
  return (
    <div className="flex flex-col items-center justify-start h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-[120px] pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-8 sm:pb-10 md:pb-12 lg:pb-15 overflow-y-auto">
      <div className="max-w-7xl w-full flex flex-col gap-6 md:gap-10 lg:gap-14">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="text-5xl font-bold text-white mb-2">
            Cronograma de Entregas Integrado
          </h2>
          <p className="text-xl text-white/80">
            <span className="text-[#2B7FFF] font-bold">Autoline (12 meses)</span> +{" "}
            <span className="font-bold" style={{ color: '#8B5CF6' }}>GIO - Copiloto do GEFIN (6 meses)</span>
          </p>
        </motion.div>

        {/* Autoline Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <h3 className="text-lg font-bold text-[#2B7FFF] mb-6 text-center">
            AUTOLINE (12 MESES)
          </h3>

          {/* Timeline Container */}
          <div className="relative py-24 overflow-x-auto">
            {/* Horizontal Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-green-500/30 via-[#2B7FFF]/30 to-purple-500/30 transform -translate-y-1/2 min-w-[900px]" />

            {/* Curved connectors between dots */}
            <svg className="absolute top-1/2 left-0 w-full h-full transform -translate-y-1/2 pointer-events-none min-w-[900px]" style={{ overflow: 'visible' }}>
              <defs>
                <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(34, 197, 94, 0.2)" />
                  <stop offset="50%" stopColor="rgba(59, 130, 246, 0.2)" />
                  <stop offset="100%" stopColor="rgba(168, 85, 247, 0.2)" />
                </linearGradient>
              </defs>
              {autolineDeliveries.slice(0, -1).map((_, idx) => {
                const isOdd = (idx + 1) % 2 === 1;
                const nextIsOdd = (idx + 2) % 2 === 1;
                const curveDirection = isOdd !== nextIsOdd ? 60 : -60;
                
                return (
                  <path
                    key={idx}
                    d={`M ${(idx + 0.5) * (100 / 12)}% 0 Q ${((idx + 0.5) * (100 / 12) + (idx + 1.5) * (100 / 12)) / 2}% ${curveDirection} ${(idx + 1.5) * (100 / 12)}% 0`}
                    fill="none"
                    stroke="url(#curveGradient)"
                    strokeWidth="1.5"
                    opacity="0.4"
                  />
                );
              })}
            </svg>

            {/* Months Grid */}
            <div className="relative grid grid-cols-12 gap-2 min-w-[900px]">
              {autolineDeliveries.map((delivery, idx) => {
                const isOdd = delivery.month % 2 === 1;
                
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: isOdd ? -20 : 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + idx * 0.05 }}
                    className="relative flex items-center justify-center"
                    style={{ height: '240px' }}
                  >
                    {isOdd ? (
                      <div className="absolute flex flex-col items-center" style={{ bottom: '50%' }}>
                        {/* Card Above */}
                        <div
                          className={`bg-gradient-to-br from-green-500/10 to-emerald-500/10 border rounded-lg p-2.5 w-full min-h-[70px] flex flex-col items-center justify-center text-center transition-all cursor-default shadow-lg mb-2 ${
                            delivery.highlight 
                              ? "border-green-400 bg-green-500/15 shadow-green-500/20" 
                              : "border-green-500/30 hover:bg-green-500/15 hover:border-green-400/50"
                          }`}
                        >
                          <div className="text-xs font-bold text-green-400 mb-1">
                            Mês {delivery.month}
                          </div>
                          <div className="text-[10px] text-white/90 leading-tight font-medium">
                            {delivery.short}
                          </div>
                        </div>
                        
                        {/* Connector Line */}
                        <div className="w-0.5 h-10 bg-green-500/40" />
                        
                        {/* Dot on Timeline */}
                        <div
                          className={`w-4 h-4 rounded-full bg-green-500 shadow-lg border-2 border-[#0a1628] relative z-10 transition-all ${
                            delivery.highlight ? "shadow-green-500/60 scale-110" : "shadow-green-500/40"
                          }`}
                        />
                      </div>
                    ) : (
                      <div className="absolute flex flex-col items-center" style={{ top: '50%' }}>
                        {/* Dot on Timeline */}
                        <div
                          className={`w-4 h-4 rounded-full bg-[#2B7FFF] shadow-lg border-2 border-[#0a1628] relative z-10 transition-all ${
                            delivery.highlight ? "shadow-[#2B7FFF]/60 scale-110" : "shadow-[#2B7FFF]/40"
                          }`}
                        />
                        
                        {/* Connector Line */}
                        <div className="w-0.5 h-10 bg-[#2B7FFF]/40" />
                        
                        {/* Card Below */}
                        <div
                          className={`bg-gradient-to-br from-blue-500/10 to-purple-500/10 border rounded-lg p-2.5 w-full min-h-[70px] flex flex-col items-center justify-center text-center transition-all cursor-default shadow-lg mt-2 ${
                            delivery.highlight 
                              ? "border-[#2B7FFF] bg-blue-500/15 shadow-[#2B7FFF]/20" 
                              : "border-blue-500/30 hover:bg-blue-500/15 hover:border-[#2B7FFF]/50"
                          }`}
                        >
                          <div className="text-xs font-bold text-[#2B7FFF] mb-1">
                            Mês {delivery.month}
                          </div>
                          <div className="text-[10px] text-white/90 leading-tight font-medium">
                            {delivery.short}
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* GIO Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-6"
        >
          <h3 className="text-lg font-bold whitespace-nowrap flex items-center justify-center gap-2 mb-3" style={{ color: '#8B5CF6' }}>
            <Bot className="w-5 h-5" />
            GIO - COPILOTO DO GEFIN (6 MESES)
          </h3>

          {/* GIO Phases */}
          <div className="relative">
            {/* Horizontal Line */}
            <div className="absolute top-2 left-0 right-0 h-0.5 bg-purple-500/30" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {gioPhases.map((phase, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + idx * 0.15 }}
                  className="relative"
                >
                  {/* Dot */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: phase.color }} />
                  </div>

                  <div className="bg-white/5 border border-purple-500/30 rounded-xl p-4 mt-6">
                    <div className="text-center mb-3">
                      <div className="text-xs font-bold text-purple-400 mb-1">
                        Meses {phase.months}
                      </div>
                      <h4 className="text-sm font-bold text-white leading-tight">
                        {phase.title}
                      </h4>
                    </div>

                    <ul className="space-y-1.5 mb-3">
                      {phase.items.map((item, i) => (
                        <li key={i} className="text-[10px] text-white/70 flex items-start gap-1">
                          <span className="text-purple-400">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="text-center pt-2 border-t border-purple-400/20">
                      <div className="text-[10px] font-bold text-purple-300">
                        {phase.phase}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Integration Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-white/5 border border-green-400/30 rounded-xl p-4">
            <div className="flex items-center justify-center gap-8">
              <div className="text-center">
                <div className="text-xs font-bold text-green-400 mb-1">Integração a partir do Mês 7</div>
                <div className="text-[10px] text-white/60">
                  Autoline ↔ GIO integrados via Plataforma de Dados
                </div>
              </div>
              <div className="text-2xl text-green-400">⚡</div>
              <div className="text-center">
                <div className="text-xs font-bold text-white">Time to Market</div>
                <div className="text-[10px] text-white/60">
                  GIO: 6 meses | Autoline: 12 meses
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <SlideFooter />
    </div>
  );
}