import { motion } from "motion/react";
import { TrendingDown, Zap, Brain, Users } from "lucide-react";
import SlideFooter from "../SlideFooter";

const challenges = [
  {
    icon: TrendingDown,
    title: "Diferencial Competitivo",
    description:
      "Produtos financeiros fortes, mas desconectados do fluxo natural de venda.",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Zap,
    title: "Fricção Operacional",
    description:
      "Processos manuais elevam CAC e reduzem conversão.",
    color: "from-orange-500 to-yellow-500",
  },
  {
    icon: Brain,
    title: "Falta de Inteligência Comercial",
    description:
      "Sem visão estruturada de performance, engajamento e oportunidades.",
    color: "from-yellow-500 to-green-500",
  },
  {
    icon: Users,
    title: "Campo (GEFINS / GIO)",
    description:
      "Baixa priorização, pouca previsibilidade e ausência de alertas acionáveis.",
    color: "from-green-500 to-teal-500",
    hasGio: true,
  },
];

export default function Slide4() {
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
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 md:mb-3">
            O Desafio do{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
              Bradesco
            </span>
          </h2>
          <p className="text-white/70 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
            A baixa adoção não é de produto. É de integração operacional.
          </p>
        </motion.div>

        {/* Challenge Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          {challenges.map((challenge, index) => (
            <motion.div
              key={challenge.title}
              initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.1 + index * 0.1,
                ease: "easeOut",
              }}
              className="relative group"
            >
              <div
                className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-2xl blur-2xl pointer-events-none -z-10"
                style={{
                  background: `linear-gradient(135deg, ${
                    index === 0
                      ? "#ef4444"
                      : index === 1
                      ? "#f97316"
                      : index === 2
                      ? "#eab308"
                      : "#22c55e"
                  }, transparent)`,
                }}
              />
              <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 md:p-6 h-full hover:border-white/20 transition-all hover:transform hover:scale-[1.02]">
                <div className="flex items-start gap-4 mb-3">
                  <div
                    className={`w-12 h-12 flex-shrink-0 rounded-xl bg-gradient-to-br ${challenge.color} p-0.5`}
                  >
                    <div className="w-full h-full bg-[#0a1628] rounded-[11px] flex items-center justify-center">
                      <challenge.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-bold text-white">
                        {challenge.hasGio ? (
                          <>
                            Campo (GEFINS /{" "}
                            <span className="font-bold" style={{ color: "#2B7FFF" }}>
                              GIO
                            </span>
                            )
                          </>
                        ) : (
                          challenge.title
                        )}
                      </h3>
                      {challenge.hasGio && (
                        <span
                          className="px-2 py-0.5 text-xs font-bold rounded-full text-white"
                          style={{ backgroundColor: "#2B7FFF" }}
                        >
                          NOVO
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                
                {challenge.description && (
                  <p className="text-white/70 leading-relaxed text-sm">
                    {challenge.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Accent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500/10 to-blue-500/10 rounded-full border border-white/10">
            <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
            <span className="text-white/60 text-sm">
              A oportunidade está na integração operacional
            </span>
          </div>
        </motion.div>
      </div>
      
      <SlideFooter />
    </div>
  );
}