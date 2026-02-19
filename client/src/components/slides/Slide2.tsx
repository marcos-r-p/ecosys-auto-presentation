import { motion } from "motion/react";
import { Users, Store, Building2, Bot, Sparkles } from "lucide-react";
import SlideFooter from "../SlideFooter";

const stakeholders = [
  {
    icon: Users,
    title: "Consumidor Final",
    description: "Acesso facilitado na compra/troca do veículo, crédito, seguros e serviços em uma jornada digital fluida.",
  },
  {
    icon: Store,
    title: "Lojistas",
    description: "Simplifica, digitaliza, organiza e impulsiona os resultados financeiros através do Gestor Autoline.",
  },
  {
    icon: Building2,
    title: "Bradesco",
    description: "Distribuição massiva de produtos financeiros com baixo CAC e alto LTV em comunicação direta com o Lojista.",
  },
  {
    icon: Bot,
    title: "GEFINS",
    badge: "NOVO",
    description: "Potencializa a força de campo do Bradesco com inteligência, automação e gestão estratégica da rede de parceiros.",
  },
];

export default function Slide2() {
  return (
    <div className="flex flex-col items-center justify-start h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-[120px] pt-4 sm:pt-5 md:pt-6 lg:pt-8 pb-4 sm:pb-5 md:pb-6 lg:pb-8 overflow-hidden">
      <div className="max-w-7xl w-full h-full flex flex-col">
        {/* Main Content: Asymmetric Layout */}
        <div className="flex-1 flex flex-col lg:flex-row gap-6 lg:gap-10 items-stretch">
          
          {/* Left Side - Strategic Vision (40%) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:w-[38%] flex flex-col justify-center gap-4 lg:gap-6"
          >
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-[#2B7FFF] font-semibold uppercase tracking-widest mb-2"
                style={{ fontSize: 'clamp(10px, 1.2vh, 14px)' }}
              >
                Nossa Visão
              </motion.p>
              <h2 className="font-extrabold text-[#EDEDEF] tracking-tight leading-[1.1]" style={{ fontSize: 'clamp(24px, 4vh, 52px)' }}>
                O Ecossistema{" "}
                <span className="text-[#2B7FFF]">Tribo de Veículos</span>
              </h2>
            </div>

            <p className="text-[#8A8A8E] leading-relaxed" style={{ fontSize: 'clamp(12px, 1.5vh, 18px)' }}>
              A <span className="text-[#EDEDEF] font-semibold">ecosys</span> será o principal motor da Tribo de Veículos do Bradesco, conectando todos os stakeholders em um ecossistema integrado onde todos ganham.
            </p>

            {/* Highlight Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="relative overflow-hidden rounded-xl border border-[#2B7FFF]/20 bg-[#2B7FFF]/[0.06] p-4"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-[#2B7FFF]" />
              <div className="flex items-start gap-3 pl-2">
                <Sparkles className="w-5 h-5 text-[#2B7FFF] mt-0.5 flex-shrink-0" />
                <p className="text-[#EDEDEF]/80 leading-relaxed" style={{ fontSize: 'clamp(11px, 1.3vh, 16px)' }}>
                  O Bradesco traz os produtos financeiros e a força da marca. Juntos, criamos um ecossistema automotivo <span className="text-[#EDEDEF] font-bold">líder do Brasil</span>.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Stakeholders Grid (60%) */}
          <div className="lg:w-[62%] grid grid-cols-2 gap-3 md:gap-4 content-center">
            {stakeholders.map((stakeholder, index) => (
              <motion.div
                key={stakeholder.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.12 }}
                className="relative group"
              >
                <div className="relative bg-white/[0.04] border border-white/[0.08] rounded-2xl p-4 sm:p-5 h-full hover:border-white/[0.15] hover:bg-white/[0.06] transition-all duration-300">
                  {/* Icon */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/[0.06] p-0.5 flex-shrink-0">
                      <div className="w-full h-full bg-[#0A0A0B] rounded-[11px] flex items-center justify-center">
                        <stakeholder.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#EDEDEF]" />
                      </div>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-bold text-[#EDEDEF]" style={{ fontSize: 'clamp(14px, 1.8vh, 22px)' }}>
                        {stakeholder.title}
                      </h3>
                      {"badge" in stakeholder && stakeholder.badge && (
                        <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-[#2B7FFF] text-white">
                          {stakeholder.badge}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-[#8A8A8E] leading-relaxed" style={{ fontSize: 'clamp(11px, 1.3vh, 15px)' }}>
                    {stakeholder.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <SlideFooter />
    </div>
  );
}
