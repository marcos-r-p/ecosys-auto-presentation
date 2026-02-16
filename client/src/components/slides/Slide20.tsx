import { motion } from "motion/react";
import { Database, BarChart3, Users, Briefcase, User, Building2 } from "lucide-react";
import SlideFooter from "../SlideFooter";

const stakeholders = [
  {
    id: "lojistas",
    emoji: "📊",
    title: "Lojistas",
    description: "Performance operacional, insights de estoque e precificação inteligente",
    icon: BarChart3,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "gefins",
    emoji: "💼",
    title: "Força Comercial (GEFINS)",
    description: "Visibilidade 360° da rede de parceiros, priorização inteligente de visitas, alertas preditivos de performance e ferramentas para maximizar resultados em campo",
    icon: Briefcase,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "consumidores",
    emoji: "👤",
    title: "Consumidores",
    description: "Recomendações personalizadas e jornada de compra otimizada",
    icon: User,
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "bradesco",
    emoji: "🏦",
    title: "Bradesco",
    description: "Inteligência competitiva, análise de risco em tempo real e decisões estratégicas baseadas em dados",
    icon: Building2,
    color: "from-red-500 to-orange-500",
  },
];

export default function Slide20() {
  return (
    <div className="flex flex-col items-center justify-start h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-[120px] pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-8 sm:pb-10 md:pb-12 lg:pb-15 overflow-y-auto">
      <div className="max-w-7xl w-full flex flex-col gap-6 md:gap-10 lg:gap-14">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          
          <h2 className="text-5xl font-bold text-white mb-4">
            Integrações e Dados:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-red-400 to-red-600 drop-shadow-lg">
              A Inteligência que Conecta o Ecossistema
            </span>
          </h2>
          <p className="text-lg text-white/80 font-medium max-w-5xl mx-auto leading-relaxed">
            Este pilar é a infraestrutura tecnológica que coleta, processa e transforma dados brutos em inteligência acionável, criando valor para lojistas, consumidores, força comercial e o Bradesco, garantindo a fluidez de todo o ecossistema Autoline.
          </p>
        </motion.div>

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <h3 className="text-2xl font-bold text-center text-white/90">
            Para Quem Geramos Valor:
          </h3>
        </motion.div>

        {/* Stakeholders Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
          {stakeholders.map((stakeholder, index) => (
            <motion.div
              key={stakeholder.id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="relative group"
            >
              <div
                className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-2xl blur-2xl"
                style={{
                  background: `linear-gradient(135deg, ${
                    index === 0
                      ? "#3b82f6"
                      : index === 1
                      ? "#a855f7"
                      : index === 2
                      ? "#22c55e"
                      : "#ef4444"
                  }, transparent)`,
                }}
              />
              <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 h-full hover:border-white/30 hover:bg-white/10 transition-all">
                {/* Icon and Emoji */}
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stakeholder.color} p-1 shadow-2xl flex-shrink-0`}
                  >
                    <div className="w-full h-full bg-[#0a1628] rounded-[11px] flex items-center justify-center">
                      <stakeholder.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  
                  {/* Title with Emoji */}
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      
                      <h3 className="text-xl font-bold text-white">
                        {stakeholder.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/80 text-sm leading-relaxed">
                  {stakeholder.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-500/20 via-red-500/20 to-red-600/20 border-2 border-blue-400/50 p-6 shadow-lg shadow-blue-500/20">
            <div className="flex items-center justify-center gap-3">
              <Database className="w-6 h-6 text-white" />
              <span className="text-white font-semibold text-lg text-center">
                Visão 360° do mercado automotivo com dados fluindo entre todos os stakeholders, alimentando decisões inteligentes e impulsionando crescimento
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      <SlideFooter />
    </div>
  );
}