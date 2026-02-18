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
    color: "",
  },
  {
    id: "gefins",
    emoji: "💼",
    title: "Força Comercial (GEFINS)",
    description: "Visibilidade 360° da rede de parceiros, priorização inteligente de visitas, alertas preditivos de performance e ferramentas para maximizar resultados em campo",
    icon: Briefcase,
    color: "",
  },
  {
    id: "consumidores",
    emoji: "👤",
    title: "Consumidores",
    description: "Recomendações personalizadas e jornada de compra otimizada",
    icon: User,
    color: "",
  },
  {
    id: "bradesco",
    emoji: "🏦",
    title: "Bradesco",
    description: "Inteligência competitiva, análise de risco em tempo real e decisões estratégicas baseadas em dados",
    icon: Building2,
    color: "",
  },
];

export default function Slide20() {
  return (
    <div className="flex flex-col items-center justify-start h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-[120px] pt-4 sm:pt-5 md:pt-6 lg:pt-8 pb-4 sm:pb-5 md:pb-6 lg:pb-8 overflow-hidden">
      <div className="max-w-7xl w-full flex flex-col gap-3 md:gap-4 lg:gap-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          
          <h2 className="font-extrabold tracking-tight text-[#EDEDEF]" style={{ fontSize: 'clamp(24px, 4vh, 48px)', marginBottom: 'clamp(6px, 1vh, 16px)', lineHeight: '1.1' }}>
            Integrações e Dados:{" "}
            <span className="text-[#EDEDEF]">
              A Inteligência que Conecta o Ecossistema
            </span>
          </h2>
          <p className="text-[#8A8A8E] text-lg font-medium max-w-5xl mx-auto leading-relaxed" style={{ fontSize: 'clamp(12px, 1.6vh, 20px)' }}>
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
          <h3 className="text-2xl font-bold text-center text-[#EDEDEF]">
            Para Quem Geramos Valor:
          </h3>
        </motion.div>

        {/* Stakeholders Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-3">
          {stakeholders.map((stakeholder, index) => (
            <motion.div
              key={stakeholder.id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="relative group"
            >
<div className="relative bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 h-full hover:border-white/[0.12] hover:bg-white/[0.06] transition-all">
                {/* Icon and Emoji */}
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`w-14 h-14 rounded-xl bg-white/[0.06] p-1 flex-shrink-0`}
                  >
                    <div className="w-full h-full bg-[#0A0A0B] rounded-[11px] flex items-center justify-center">
                      <stakeholder.icon className="w-7 h-7 text-[#EDEDEF]" />
                    </div>
                  </div>
                  
                  {/* Title with Emoji */}
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      
                      <h3 className="text-xl font-bold text-[#EDEDEF]">
                        {stakeholder.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[#8A8A8E] text-sm leading-relaxed">
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
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <div className="relative overflow-hidden rounded-2xl bg-white/[0.04] border-2 border-white/[0.08] p-6">
            <div className="flex items-center justify-center gap-3">
              <Database className="w-6 h-6 text-[#EDEDEF]" />
              <span className="text-[#EDEDEF] font-semibold text-lg text-center">
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