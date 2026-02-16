import { motion } from "motion/react";
import { Link2, Globe, Radio, Rocket } from "lucide-react";
import SlideFooter from "../SlideFooter";

const integrations = [
  {
    icon: Link2,
    title: "Integração com Outros DMS",
    description: "Conexão fluida com diversos sistemas de gestão de concessionárias, garantindo dados sempre atualizados",
    color: "from-blue-500 to-cyan-600",
  },
  {
    icon: Globe,
    title: "Integração com Outros Marketplaces",
    description: "Autoline como agregador e distribuidor de ofertas, ampliando alcance exponencialmente",
    color: "from-purple-500 to-pink-600",
  },
  {
    icon: Radio,
    title: "APIs para GIO - Copiloto do GEFIN",
    description: "Fluxo bidirecional de dados entre força comercial e operação dos lojistas",
    color: "from-[#2B7FFF] to-blue-600",
    highlight: true,
  },
  {
    icon: Rocket,
    title: "Distribuição Ampliada",
    description: "Inventário dos lojistas exposto em múltiplas plataformas, maximizando geração de leads",
    color: "from-orange-500 to-red-600",
  },
];

export default function Slide22() {
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
          <h2 className="text-5xl font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-red-400 to-red-600 drop-shadow-lg">
              APIs Abertas: Expandindo o Ecossistema
            </span>
          </h2>
          <p className="text-xl text-white/80 font-medium max-w-5xl mx-auto leading-snug">
            Posicionando a Autoline como hub central do comércio automotivo.
          </p>
        </motion.div>

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <h4 className="text-2xl font-bold text-white text-center">
            Interoperabilidade Simplificada
          </h4>
        </motion.div>

        {/* Integrations Grid - 2x2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="relative group"
            >
              {integration.highlight && (
                <div className="absolute inset-0 bg-gradient-to-r from-[#2B7FFF] via-blue-500 to-cyan-500 opacity-20 group-hover:opacity-30 transition-opacity duration-300 rounded-2xl blur-2xl" />
              )}
              <div
                className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-2xl blur-xl"
                style={{
                  background: `linear-gradient(135deg, ${
                    index === 0
                      ? "#3b82f6"
                      : index === 1
                      ? "#a855f7"
                      : index === 2
                      ? "#2B7FFF"
                      : "#f97316"
                  }, transparent)`,
                }}
              />
              <div
                className={`relative bg-white/5 backdrop-blur-md border ${
                  integration.highlight ? "border-[#2B7FFF]/50" : "border-white/10"
                } rounded-2xl p-7 h-full hover:border-white/30 hover:bg-white/10 transition-all`}
              >
                {/* Icon */}
                <div className="flex justify-center mb-5">
                  <div className="w-16 h-16 rounded-xl bg-white p-1 shadow-2xl">
                    <div className="w-full h-full bg-[#0a1628] rounded-[14px] flex items-center justify-center">
                      <integration.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className={`text-2xl mb-4 text-center leading-tight ${integration.highlight ? "text-[#2B7FFF] font-bold" : "text-white font-bold"}`}>
                  {integration.title}
                  {integration.highlight && (
                    <span className="ml-2 text-sm px-2 py-1 rounded-full shadow-lg font-bold" style={{ backgroundColor: '#2B7FFF', color: 'white' }}>
                      NOVO
                    </span>
                  )}
                </h3>

                {/* Description */}
                <p className="text-white/80 text-base leading-relaxed text-center">
                  {integration.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <SlideFooter />
    </div>
  );
}