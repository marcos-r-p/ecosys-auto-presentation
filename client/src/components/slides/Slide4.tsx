import { motion } from "motion/react";
import { TrendingDown, Zap, Brain, Users } from "lucide-react";
import SlideFooter from "../SlideFooter";

const challenges = [
  {
    icon: TrendingDown,
    title: "Diferencial Competitivo",
    description:
      "Produtos financeiros fortes, mas desconectados do fluxo natural de venda.",
    color: "",
  },
  {
    icon: Zap,
    title: "Fricção Operacional",
    description:
      "Processos manuais elevam CAC e reduzem conversão.",
    color: "",
  },
  {
    icon: Brain,
    title: "Falta de Inteligência Comercial",
    description:
      "Sem visão estruturada de performance, engajamento e oportunidades.",
    color: "",
  },
  {
    icon: Users,
    title: "Campo (GEFINS / GIO)",
    description:
      "Baixa priorização, pouca previsibilidade e ausência de alertas acionáveis.",
    color: "",
    hasGio: true,
  },
];

export default function Slide4() {
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
          
          <h2 className="font-extrabold tracking-tight sm: md: sm: text-[#EDEDEF] md:" style={{ fontSize: 'clamp(24px, 4vh, 48px)', marginBottom: 'clamp(6px, 1vh, 16px)', lineHeight: '1.1' }}>
            O Desafio do{" "}
            <span className="text-[#EDEDEF]">
              Bradesco
            </span>
          </h2>
          <p className="text-[#8A8A8E] sm: md:text-lg max-w-3xl mx-auto" style={{ fontSize: 'clamp(12px, 1.6vh, 20px)' }}>
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
<div className="relative bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5 md:p-4 h-full hover:border-white/[0.12] transition-all hover:transform hover:scale-[1.02]">
                <div className="flex items-start gap-4 mb-3">
                  <div
                    className={`w-12 h-12 flex-shrink-0 rounded-xl bg-white/[0.06] p-0.5`}
                  >
                    <div className="w-full h-full bg-[#0A0A0B] rounded-[11px] flex items-center justify-center">
                      <challenge.icon className="w-6 h-6 text-[#EDEDEF]" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-bold text-[#EDEDEF]">
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
                          className="px-2 py-0.5 text-xs font-bold rounded-full text-[#EDEDEF]"
                          style={{ backgroundColor: "#2B7FFF" }}
                        >
                          NOVO
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                
                {challenge.description && (
                  <p className="text-[#8A8A8E] leading-relaxed text-sm">
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
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/[0.04] rounded-full border border-white/[0.08]">
            <div className="w-2 h-2 bg-white/[0.06] rounded-full animate-pulse" />
            <span className="text-[#8A8A8E] text-sm">
              A oportunidade está na integração operacional
            </span>
          </div>
        </motion.div>
      </div>
      
      <SlideFooter />
    </div>
  );
}