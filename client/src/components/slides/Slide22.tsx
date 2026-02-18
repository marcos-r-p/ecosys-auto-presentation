import { motion } from "motion/react";
import { Link2, Globe, Radio, Rocket } from "lucide-react";
import SlideFooter from "../SlideFooter";

const integrations = [
  {
    icon: Link2,
    title: "Integração com Outros Sistemas",
    description: "Conexão fluida com diversos sistemas de gestão de concessionárias, garantindo dados sempre atualizados",
    color: "",
  },
  {
    icon: Globe,
    title: "Integração com Outros Marketplaces",
    description: "Autoline como agregador e distribuidor de ofertas, ampliando alcance exponencialmente",
    color: "",
  },
  {
    icon: Radio,
    title: "APIs para Novo GIO",
    description: "Fluxo bidirecional de dados entre força comercial e operação dos lojistas",
    color: "from-[#2B7FFF] to-blue-600",
    highlight: true,
  },
  {
    icon: Rocket,
    title: "Distribuição Ampliada",
    description: "Inventário dos lojistas exposto em múltiplas plataformas, maximizando geração de leads",
    color: "",
  },
];

export default function Slide22() {
  return (
    <div className="flex flex-col items-center justify-start h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-[120px] pt-4 sm:pt-5 md:pt-6 lg:pt-8 pb-4 sm:pb-5 md:pb-6 lg:pb-8 overflow-hidden">
      <div className="max-w-7xl w-full flex flex-col gap-3 md:gap-4 lg:gap-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="font-extrabold tracking-tight text-[#EDEDEF]" style={{ fontSize: 'clamp(24px, 4vh, 48px)', marginBottom: 'clamp(6px, 1vh, 16px)', lineHeight: '1.1' }}>
            <span className="text-[#EDEDEF]">
              APIs Abertas: Expandindo o Ecossistema
            </span>
          </h2>
          <p className="text-[#8A8A8E] text-xl font-medium max-w-5xl mx-auto leading-snug" style={{ fontSize: 'clamp(12px, 1.6vh, 20px)' }}>
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
          <h4 className="text-2xl font-bold text-[#EDEDEF] text-center">
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
<div
                className={`relative bg-white/[0.04] border ${
                  integration.highlight ? "border-[#2B7FFF]/50" : "border-white/[0.08]"
                } rounded-2xl p-7 h-full hover:border-white/[0.12] hover:bg-white/[0.06] transition-all`}
              >
                {/* Icon */}
                <div className="flex justify-center mb-5">
                  <div className="w-16 h-16 rounded-xl bg-white p-1 shadow-2xl">
                    <div className="w-full h-full bg-[#0A0A0B] rounded-[14px] flex items-center justify-center">
                      <integration.icon className="w-8 h-8 text-[#EDEDEF]" />
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className={`text-2xl mb-4 text-center leading-tight ${integration.highlight ? "text-[#2B7FFF] font-bold" : "text-[#EDEDEF] font-bold"}`}>
                  {integration.title}
                  {integration.highlight && (
                    <span className="ml-2 text-sm px-2 py-1 rounded-full font-bold" style={{ backgroundColor: '#2B7FFF', color: 'white' }}>
                      NOVO
                    </span>
                  )}
                </h3>

                {/* Description */}
                <p className="text-[#8A8A8E] text-base leading-relaxed text-center">
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