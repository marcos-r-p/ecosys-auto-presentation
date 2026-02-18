import { motion } from "motion/react";
import { Rocket, Shield, Zap, Users } from "lucide-react";
import SlideFooter from "../SlideFooter";

const pillars = [
  {
    icon: Rocket,
    title: "Startup Inovadora",
    description:
      "Nascemos com a missão de transformar o segmento de veículos no Brasil. Pensamos diferente, agimos rápido e desafiamos o status quo do setor automotivo.",
  },
  {
    icon: Zap,
    title: "Tecnologia de Ponta",
    description:
      "Estamos à frente das tecnologias mais impactantes disponíveis globalmente — IA generativa, automação inteligente, análise preditiva e plataformas escaláveis.",
  },
  {
    icon: Shield,
    title: "Maturidade Corporativa",
    description:
      "Nossos grupos sócios trazem experiência e solidez corporativa. Entendemos a complexidade de grandes organizações e sabemos navegar nesse ambiente.",
  },
  {
    icon: Users,
    title: "Parceria com o Bradesco",
    description:
      "Provocamos inovação e mudança, mas compreendemos a estrutura corporativa. Ajudamos a desdobrar a estratégia para colher resultados em conjunto.",
  },
];

export default function SlideEcosysWhy() {
  return (
    <div className="flex flex-col items-center justify-center h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-[120px] pt-4 pb-4 overflow-hidden">
      <div className="max-w-6xl w-full flex flex-col gap-6 md:gap-8">
        {/* Header - mais destaque */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2
            className="font-extrabold tracking-tight text-[#EDEDEF]"
            style={{
              fontSize: "clamp(28px, 5vh, 56px)",
              marginBottom: "clamp(8px, 1.5vh, 20px)",
              lineHeight: "1.1",
            }}
          >
            Por que a{" "}
            <span className="text-[#2B7FFF]">ecosys AUTO</span>?
          </h2>
          <p
            className="text-[#9A9AA0] font-medium max-w-3xl mx-auto leading-relaxed"
            style={{ fontSize: "clamp(14px, 2vh, 22px)" }}
          >
            Combinamos a agilidade e inovação de uma startup com a maturidade e
            solidez de grupos corporativos consolidados — o equilíbrio perfeito
            para uma parceria estratégica com o Bradesco.
          </p>
        </motion.div>

        {/* Pillars Grid - maior */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
              className="relative bg-white/[0.03] border border-white/[0.06] rounded-xl p-5 sm:p-6 md:p-7 hover:border-white/[0.10] hover:bg-white/[0.05] transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-white/[0.04]">
                  <pillar.icon
                    className="w-6 h-6 text-[#9A9AA0]"
                    strokeWidth={1.5}
                  />
                </div>
                <div className="flex-1">
                  <h3
                    className="font-semibold text-[#EDEDEF] mb-2"
                    style={{ fontSize: "clamp(16px, 2.2vh, 24px)" }}
                  >
                    {pillar.title}
                  </h3>
                  <p
                    className="text-[#8A8A8E] leading-relaxed"
                    style={{ fontSize: "clamp(12px, 1.6vh, 18px)" }}
                  >
                    {pillar.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <p
            className="text-[#8A8A8E]/60 italic max-w-2xl mx-auto"
            style={{ fontSize: "clamp(12px, 1.5vh, 16px)" }}
          >
            Inovação com responsabilidade. Velocidade com maturidade. Tecnologia
            com visão de negócio.
          </p>
        </motion.div>
      </div>

      <SlideFooter />
    </div>
  );
}
