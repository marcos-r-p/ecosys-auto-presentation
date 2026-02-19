import { motion } from "motion/react";
import { TrendingUp, Zap, Clock } from "lucide-react";
import SlideFooter from "../SlideFooter";

const reasons = [
  {
    icon: TrendingUp,
    title: "Oportunidade de Mercado",
    points: [
      "O setor automotivo brasileiro movimenta bilhões anualmente, mas permanece fragmentado e com baixa digitalização nas revendas independentes.",
      "A ecosys AUTO já atende centenas de lojistas com soluções transacionais comprovadas.",
    ],
    color: "",
  },
  {
    icon: Zap,
    title: "Sinergia Estratégica",
    points: [
      "O Bradesco possui produtos financeiros e capilaridade robusta, porém enfrenta dificuldades em se diferenciar no segmento automotivo.",
      "ecosys AUTO está pronta para ser o ecossistema tecnológico Auto do Bradesco, potencializando os resultados.",
    ],
    color: "",
  },
];

export default function Slide3() {
  return (
    <div className="flex flex-col items-center justify-start h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-[120px] pt-4 sm:pt-5 md:pt-6 lg:pt-8 pb-4 sm:pb-5 md:pb-6 lg:pb-8 overflow-hidden">
      <div className="max-w-7xl w-full flex flex-col gap-3 md:gap-4 lg:gap-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 mb-2 md:mb-3 px-3 py-1.5 bg-white/[0.04] rounded-full border border-white/[0.08]">
            <Clock className="w-4 h-4 text-[#EDEDEF]" />
            <span className="text-[#8A8A8E] text-xs font-medium">
              Momento Ideal
            </span>
          </div>
          <h2 className="font-extrabold tracking-tight sm: md: sm: text-[#EDEDEF]" style={{ fontSize: 'clamp(24px, 4vh, 48px)', marginBottom: 'clamp(6px, 1vh, 16px)', lineHeight: '1.1' }}>
            Por Que Esta Parceria Faz Sentido{" "}
            <span className="text-[#EDEDEF]">
              Agora
            </span>
          </h2>
        </motion.div>

        {/* Reason Cards */}
        <div className="space-y-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 + index * 0.2 }}
              className="relative group"
            >
<div className="relative bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5 hover:border-white/[0.12] transition-all interactive-card">
                <div className="flex items-start gap-4">
                  <div
                    className={`flex-shrink-0 w-14 h-14 rounded-xl bg-white/[0.06] p-0.5`}
                  >
                    <div className="w-full h-full bg-[#0A0A0B] rounded-[11px] flex items-center justify-center">
                      <reason.icon className="w-7 h-7 text-[#EDEDEF]" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#EDEDEF] mb-3">
                      {reason.title}
                    </h3>
                    <div className="space-y-2">
                      {reason.points.map((point, pointIndex) => (
                        <motion.div
                          key={pointIndex}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: 0.15 + index * 0.2 + pointIndex * 0.1,
                          }}
                          className="flex items-start gap-3"
                        >
                          <div className="flex-shrink-0 w-1.5 h-1.5 bg-white/[0.06] rounded-full mt-2" />
                          <p className="text-[#8A8A8E] text-sm leading-relaxed">
                            {point}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <SlideFooter />
    </div>
  );
}