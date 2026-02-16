import { motion } from "motion/react";
import { Store, User, Building2, Sparkles, Bot } from "lucide-react";
import SlideFooter from "../SlideFooter";

const stakeholders = [
  {
    id: "lojistas",
    title: "Lojistas",
    icon: Store,
    color: "from-blue-500 to-cyan-500",
    description: "Simplifica, digitaliza, organiza e impulsiona os resultados financeiros através do Gestor Autoline.",
  },
  {
    id: "consumidor",
    title: "Consumidor Final",
    icon: User,
    color: "from-purple-500 to-pink-500",
    description: "Acesso facilitado na compra/troca do veículo, a crédito, seguros e serviços em uma jornada digital fluida.",
  },
  {
    id: "bradesco",
    title: "Bradesco (Produtos Financeiros)",
    icon: Building2,
    color: "from-red-500 to-orange-500",
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
          
          <h2 className="text-5xl font-bold text-white mb-4">
            Stakeholders do Ecossistema{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-red-400 to-red-600">
              Tribo de Veículos
            </span>
          </h2>
          <p className="text-xl text-white/80 font-medium max-w-5xl mx-auto leading-relaxed">
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
              <div
                className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-2xl blur-2xl"
                style={{
                  background: `linear-gradient(135deg, ${
                    index === 0
                      ? "#3b82f6"
                      : index === 1
                      ? "#a855f7"
                      : index === 2
                      ? "#ef4444"
                      : "#2B7FFF"
                  }, transparent)`,
                }}
              />
              <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 h-full hover:border-white/30 hover:bg-white/10 transition-all">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${stakeholder.color} p-1 shadow-2xl`}
                  >
                    <div className="w-full h-full bg-[#0a1628] rounded-[14px] flex items-center justify-center">
                      <stakeholder.icon className="w-10 h-10 text-white" />
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white text-center mb-4">
                  {stakeholder.title}
                </h3>

                {/* Description */}
                <p className="text-white/80 text-center leading-relaxed">
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
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-8"
        >
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-500/20 via-red-500/20 to-red-600/20 border border-white/30 p-6 shadow-lg shadow-red-500/10">
            <div className="flex items-center justify-center gap-3">
              <Sparkles className="w-6 h-6 text-white" />
              <span className="text-white font-semibold text-lg">
                Um ecossistema integrado onde todos os stakeholders crescem juntos
              </span>
              <div className="flex gap-1">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"
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
