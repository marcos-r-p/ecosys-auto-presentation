import { motion } from "motion/react";
import { Bot, DollarSign, Zap } from "lucide-react";
import SlideFooter from "../SlideFooter";

const monthlyInvestments = [
  { month: 1, value: "R$ 900.000,00", position: "top" },
  { month: 2, value: "R$ 950.000,00", position: "bottom" },
  { month: 3, value: "R$ 1.000.000,00", position: "top" },
  { month: 4, value: "R$ 1.050.000,00", position: "bottom" },
  { month: 5, value: "R$ 1.100.000,00", position: "top" },
  { month: 6, value: "R$ 1.000.000,00", position: "bottom" },
];

export default function Slide33() {
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
            <Bot className="w-7 h-7" style={{ color: '#2B7FFF' }} />
            <h2 className="font-extrabold tracking-tight sm: text-[#EDEDEF]" style={{ fontSize: 'clamp(24px, 4vh, 48px)', marginBottom: 'clamp(6px, 1vh, 16px)', lineHeight: '1.1' }}>
              <span className="font-bold">GIO</span> - COPILOTO DO GEFIN - Investimento Mensal (6 Meses)
            </h2>
          </div>
          <p className="text-[#8A8A8E] max-w-4xl mx-auto leading-snug" style={{ fontSize: 'clamp(12px, 1.6vh, 20px)' }}>
            Investimento concentrado em 6 meses com entregas aceleradas e validação rápida no mercado.
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
          <div className="absolute top-1/2 left-0 right-0 h-px bg-white/10 transform -translate-y-1/2 min-w-[500px]" />

          {/* Grid Container */}
          <div className="relative grid grid-cols-2 md:grid-cols-6 gap-3 md:min-w-[500px] overflow-hidden">
            {monthlyInvestments.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: item.position === "top" ? -15 : 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + idx * 0.05 }}
                className="relative flex items-center justify-center"
                style={{ height: '90px' }}
              >
                {item.position === "top" ? (
                  <div className="absolute flex flex-col items-center" style={{ bottom: '50%' }}>
                    <div className="bg-white/[0.04] border border-white/[0.08] rounded-md p-2 w-full flex flex-col items-center justify-center text-center mb-1">
                      <div className="text-[10px] font-bold text-[#8A8A8E] mb-0.5">
                        Mês {item.month}
                      </div>
                      <div className="text-[9px] font-bold text-[#EDEDEF] leading-tight">
                        {item.value}
                      </div>
                    </div>
                    <div className="w-px h-3 bg-white/10" />
                    <div className="w-3 h-3 rounded-full bg-white/10 border border-white/20 relative z-10" />
                  </div>
                ) : (
                  <div className="absolute flex flex-col items-center" style={{ top: '50%' }}>
                    <div className="w-3 h-3 rounded-full bg-violet-500 border border-white/20 relative z-10" />
                    <div className="w-px h-3 bg-violet-500/40" />
                    <div className="bg-white/[0.04] border border-violet-500/30 rounded-md p-2 w-full flex flex-col items-center justify-center text-center mt-1 hover:bg-violet-500/10 transition-all">
                      <div className="text-[10px] font-bold text-violet-400 mb-0.5">
                        Mês {item.month}
                      </div>
                      <div className="text-[9px] font-bold text-[#EDEDEF] leading-tight">
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
          className="grid grid-cols-1 md:grid-cols-2 gap-3"
        >
          <div className="bg-white/[0.04] border border-white/[0.08] rounded-lg p-3 text-center">
            <div className="flex items-center justify-center gap-1.5 mb-1">
              <DollarSign className="w-4 h-4 text-[#EDEDEF]" />
              <h4 className="text-xs font-bold text-[#8A8A8E]">TOTAL <span className="font-bold">GIO</span> (6 MESES)</h4>
            </div>
            <p className="text-xl font-bold text-[#EDEDEF]">R$ 6.000.000,00</p>
          </div>

          <div className="bg-white/[0.04] border border-violet-500/40 rounded-lg p-3 text-center">
            <div className="flex items-center justify-center gap-1.5 mb-1">
              <Zap className="w-4 h-4 text-[#EDEDEF]" />
              <h4 className="text-xs font-bold text-violet-400">Média Mensal</h4>
            </div>
            <p className="text-xl font-bold text-[#EDEDEF]">R$ 1.000.000,00</p>
          </div>
        </motion.div>
      </div>

      <SlideFooter />
    </div>
  );
}
