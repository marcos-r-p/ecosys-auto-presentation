import { motion } from "motion/react";
import { TrendingUp, DollarSign } from "lucide-react";
import SlideFooter from "../SlideFooter";

const monthlyInvestments = [
  { month: 1, value: "R$ 955.065,75", position: "top" },
  { month: 2, value: "R$ 1.463.779,50", position: "bottom" },
  { month: 3, value: "R$ 1.716.294,75", position: "top" },
  { month: 4, value: "R$ 1.726.304,25", position: "bottom" },
  { month: 5, value: "R$ 1.742.877,75", position: "top" },
  { month: 6, value: "R$ 1.785.426,00", position: "bottom" },
  { month: 7, value: "R$ 1.804.019,25", position: "top" },
  { month: 8, value: "R$ 1.833.491,25", position: "bottom" },
  { month: 9, value: "R$ 1.845.116,25", position: "top" },
  { month: 10, value: "R$ 1.858.839,75", position: "bottom" },
  { month: 11, value: "R$ 1.901.844,00", position: "top" },
  { month: 12, value: "R$ 1.921.492,50", position: "bottom" },
];

export default function Slide32() {
  return (
    <div className="flex flex-col items-center justify-start h-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 pt-3 pb-2 overflow-hidden">
      <div className="max-w-7xl w-full flex flex-col gap-2">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-1">
            <DollarSign className="w-7 h-7 text-[#EDEDEF]" />
            <h2 className="font-extrabold tracking-tight sm: text-[#EDEDEF]" style={{ fontSize: 'clamp(24px, 4vh, 48px)', marginBottom: 'clamp(6px, 1vh, 16px)', lineHeight: '1.1' }}>
              AUTOLINE - Investimento Mensal (12 Meses)
            </h2>
          </div>
          <p className="text-[#8A8A8E] max-w-4xl mx-auto leading-snug" style={{ fontSize: 'clamp(12px, 1.6vh, 20px)' }}>
            Projeção do investimento mensal ao longo de um ano, evidenciando o aumento gradual dos recursos alocados.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative py-6 overflow-x-auto flex-1"
        >
          {/* Horizontal Timeline Line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-white/10 transform -translate-y-1/2 min-w-[900px]" />

          {/* Grid Container */}
          <div className="relative grid grid-cols-12 gap-1 min-w-[900px] overflow-hidden">
            {monthlyInvestments.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: item.position === "top" ? -15 : 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + idx * 0.03 }}
                className="relative flex items-center justify-center"
                style={{ height: '95px' }}
              >
                {item.position === "top" ? (
                  <div className="absolute flex flex-col items-center" style={{ bottom: '50%' }}>
                    <div className="bg-white/[0.04] border border-white/[0.08] rounded-md p-1.5 w-full flex flex-col items-center justify-center text-center mb-1">
                      <div className="text-[9px] font-bold text-[#8A8A8E] mb-0.5">
                        Mês {item.month}
                      </div>
                      <div className="text-[8px] font-bold text-[#EDEDEF] leading-tight">
                        {item.value}
                      </div>
                    </div>
                    <div className="w-px h-3 bg-white/10" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10 border border-white/20 relative z-10" />
                  </div>
                ) : (
                  <div className="absolute flex flex-col items-center" style={{ top: '50%' }}>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#2B7FFF]/60 border border-[#2B7FFF]/40 relative z-10" />
                    <div className="w-px h-3 bg-[#2B7FFF]/30" />
                    <div className="bg-white/[0.04] border border-white/[0.08] rounded-md p-1.5 w-full flex flex-col items-center justify-center text-center mt-1">
                      <div className="text-[9px] font-bold text-[#2B7FFF] mb-0.5">
                        Mês {item.month}
                      </div>
                      <div className="text-[8px] font-bold text-[#EDEDEF] leading-tight">
                        {item.value}
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Summary Cards */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-3 gap-2"
        >
          <div className="bg-white/[0.04] border border-white/[0.08] rounded-lg p-2.5 text-center">
            <div className="flex items-center justify-center gap-1.5 mb-1">
              <TrendingUp className="w-4 h-4 text-[#8A8A8E]" />
              <h4 className="text-[10px] font-bold text-[#8A8A8E]">Investimento Inicial</h4>
            </div>
            <p className="text-lg font-bold text-[#EDEDEF]">R$ 955.065,75</p>
            <p className="text-[9px] text-[#8A8A8E]">Mês 1</p>
          </div>

          <div className="bg-white/[0.04] border border-white/[0.08] rounded-lg p-2.5 text-center">
            <div className="flex items-center justify-center gap-1.5 mb-1">
              <TrendingUp className="w-4 h-4 text-[#EDEDEF]" />
              <h4 className="text-[10px] font-bold text-[#8A8A8E]">Investimento Final</h4>
            </div>
            <p className="text-lg font-bold text-[#EDEDEF]">R$ 1.921.492,50</p>
            <p className="text-[9px] text-[#8A8A8E]">Mês 12</p>
          </div>

          <div className="bg-white/[0.04] border border-white/[0.08] rounded-lg p-2.5 text-center">
            <div className="flex items-center justify-center gap-1.5 mb-1">
              <DollarSign className="w-4 h-4 text-[#2B7FFF]" />
              <h4 className="text-[10px] font-bold text-[#2B7FFF]">Investimento Total</h4>
            </div>
            <p className="text-lg font-bold text-[#EDEDEF]">R$ 20.554.551,00</p>
            <p className="text-[9px] text-[#8A8A8E]">Ou 12x de R$ 1.712.879,25</p>
          </div>
        </motion.div>
      </div>

      <SlideFooter />
    </div>
  );
}
