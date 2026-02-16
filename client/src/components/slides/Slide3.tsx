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
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Zap,
    title: "Sinergia Estratégica",
    points: [
      "O Bradesco possui produtos financeiros e capilaridade robusta, porém enfrenta dificuldades em se diferenciar no segmento automotivo.",
      "ecosys AUTO está pronta para ser o ecossistema tecnológico Auto do Bradesco, potencializando os resultados.",
    ],
    color: "from-purple-500 to-pink-500",
  },
];

export default function Slide3() {
  return (
    <div className="flex flex-col items-center justify-start h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-[120px] pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-8 sm:pb-10 md:pb-12 lg:pb-15 overflow-y-auto">
      <div className="max-w-7xl w-full flex flex-col gap-6 md:gap-10 lg:gap-14">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 mb-2 md:mb-3 px-3 py-1.5 bg-purple-500/20 rounded-full border border-purple-400/30">
            <Clock className="w-4 h-4 text-white" />
            <span className="text-purple-400 text-xs font-medium">
              Momento Ideal
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            Por Que Esta Parceria Faz Sentido{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
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
              <div
                className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl blur-xl pointer-events-none -z-10"
                style={{
                  background: `linear-gradient(135deg, ${
                    index === 0 ? "#3b82f6" : "#a855f7"
                  }, transparent)`,
                }}
              />
              <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-all">
                <div className="flex items-start gap-4">
                  <div
                    className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${reason.color} p-0.5`}
                  >
                    <div className="w-full h-full bg-[#0a1628] rounded-[11px] flex items-center justify-center">
                      <reason.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3">
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
                            delay: 0.4 + index * 0.2 + pointIndex * 0.1,
                          }}
                          className="flex items-start gap-3"
                        >
                          <div className="flex-shrink-0 w-1.5 h-1.5 bg-blue-400 rounded-full mt-2" />
                          <p className="text-white/80 text-sm leading-relaxed">
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