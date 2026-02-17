import { motion } from "motion/react";
import { Store, User, Building2, Sparkles, Bot } from "lucide-react";
import SlideFooter from "../SlideFooter";

const stakeholders = [
  {
    id: "lojistas",
    title: "Lojistas",
    icon: Store,
    color: "",
    description: "Simplifica, digitaliza, organiza e impulsiona os resultados financeiros através do Gestor Autoline.",
  },
  {
    id: "consumidor",
    title: "Consumidor Final",
    icon: User,
    color: "",
    description: "Acesso facilitado na compra/troca do veículo, a crédito, seguros e serviços em uma jornada digital fluida.",
  },
  {
    id: "bradesco",
    title: "Bradesco (Produtos Financeiros)",
    icon: Building2,
    color: "",
    description: "Distribuição massiva de produtos com baixo CAC e alto LTV em um processo de comunicação direta com o Lojista.",
  },
  {
    id: "gefins",
    title: (
      <div className="flex items-center justify-center gap-2 flex-wrap">
        <span>GEFINS (Gestão Comercial Bradesco)</span>
        <span className="text-lg">⭐</span>
        <span className="px-2 py-1 text-xs font-bold rounded-full" style={{ backgroundColor: '#2B7FFF', color: 'white' }}>
          NOVO
        </span>
      </div>
    ),
    icon: Bot,
    color: "from-[#2B7FFF] to-blue-600",
    description: "Potencializa a força de campo do Bradesco com inteligência, automação e gestão estratégica da rede de parceiros através do GIO - Copiloto Comercial.",
  },
];

export default function Slide7() {
  return (
    <div className="flex flex-col items-center justify-start h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-[120px] pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-8 sm:pb-10 md:pb-12 lg:pb-15 overflow-y-auto">
      <div className="max-w-7xl w-full flex flex-col gap-6 md:gap-10 lg:gap-14">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          
          <h2 className="text-5xl font-bold text-[#EDEDEF] mb-4">
            Stakeholders do Ecossistema{" "}
            <span className="text-[#EDEDEF]">
              Tribo de Veículos
            </span>
          </h2>
          <p className="text-xl text-[#8A8A8E] font-medium max-w-5xl mx-auto leading-relaxed">
            A ecosys AUTO será responsável por criar a conexão entre os quatro pilares que formam o Ecossistema Tribo de Veículos. O Bradesco traz os produtos financeiros e a força da marca. Juntos, criamos um ecossistema onde todos ganham.
          </p>
        </motion.div>

        {/* Stakeholders Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
          {stakeholders.map((stakeholder, index) => (
            <motion.div
              key={stakeholder.id}
              initial={{ opacity: 0, y: 40, rotateX: -15 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.7, delay: 0.2 + index * 0.15 }}
              className="relative group"
            >
<div className="relative bg-white/[0.04] border border-white/[0.08] rounded-2xl p-8 h-full hover:border-white/[0.12] hover:bg-white/[0.06] transition-all">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div
                    className={`w-20 h-20 rounded-2xl bg-white/[0.06] p-1 shadow-2xl`}
                  >
                    <div className="w-full h-full bg-[#0A0A0B] rounded-[14px] flex items-center justify-center">
                      <stakeholder.icon className="w-10 h-10 text-[#EDEDEF]" />
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[#EDEDEF] text-center mb-4">
                  {stakeholder.title}
                </h3>

                {/* Description */}
                <p className="text-[#8A8A8E] text-center leading-relaxed">
                  {stakeholder.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8"
        >
          <div className="relative overflow-hidden rounded-2xl bg-white/[0.04] border border-white/[0.12] p-6">
            <div className="flex items-center justify-center gap-3">
              <Sparkles className="w-6 h-6 text-[#EDEDEF]" />
              <span className="text-[#EDEDEF] font-semibold text-lg">
                Um ecossistema integrado onde todos os stakeholders crescem juntos
              </span>
              <div className="flex gap-1">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 bg-white/[0.06] rounded-full animate-pulse"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <SlideFooter />
    </div>
  );
}
