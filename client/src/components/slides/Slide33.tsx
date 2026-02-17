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
    <div className="flex flex-col items-center justify-center h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-[120px] pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-8 sm:pb-10 md:pb-12 lg:pb-15 overflow-y-auto">
      <div className="max-w-7xl w-full flex flex-col gap-6 md:gap-10 lg:gap-14">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <Bot className="w-10 h-10" style={{ color: '#2B7FFF' }} />
            <h2 className="text-4xl font-bold bg-white/[0.04] bg-clip-text text-transparent">
              <span className="font-bold">GIO</span> - COPILOTO DO GEFIN - Investimento Mensal (6 Meses)
            </h2>
          </div>
          <p className="text-base text-[#8A8A8E] max-w-4xl mx-auto leading-relaxed">
            Investimento concentrado em 6 meses com entregas aceleradas e validação rápida no mercado.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative py-32 overflow-x-auto"
        >
          {/* Horizontal Timeline Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-white/[0.04] transform -translate-y-1/2 min-w-[500px]" />

          {/* Grid Container */}
          <div className="relative grid grid-cols-3 sm:grid-cols-6 gap-4 sm:gap-6 min-w-[500px]">
            {monthlyInvestments.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: item.position === "top" ? -20 : 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                className="relative flex items-center justify-center"
                style={{ height: '280px' }}
              >
                {item.position === "top" ? (
                  <div className="absolute flex flex-col items-center" style={{ bottom: '50%' }}>
                    {/* Card Above */}
                    <div className="bg-white/[0.04] border border-white/[0.08] rounded-lg p-3 w-full min-h-[80px] flex flex-col items-center justify-center text-center hover:bg-white/[0.04] hover:border-white/[0.08] transition-all cursor-default mb-2">
                      <div className="text-xs font-bold text-[#8A8A8E] mb-1">
                        Mês {item.month}
                      </div>
                      <div className="text-[10px] font-bold text-[#EDEDEF] leading-tight">
                        {item.value}
                      </div>
                    </div>
                    
                    {/* Connector Line to Timeline */}
                    <div className="w-0.5 h-12 bg-white/[0.04]" />
                    
                    {/* Dot on Timeline */}
                    <div className="w-4 h-4 rounded-full bg-white/[0.06] border border-white/[0.12] relative z-10" />
                  </div>
                ) : (
                  <div className="absolute flex flex-col items-center" style={{ top: '50%' }}>
                    {/* Dot on Timeline */}
                    <div className="w-4 h-4 rounded-full bg-violet-500 border border-white/[0.12] relative z-10" />
                    
                    {/* Connector Line from Timeline */}
                    <div className="w-0.5 h-12 bg-violet-500/40" />
                    
                    {/* Card Below */}
                    <div className="bg-white/[0.04] border border-violet-500/30 rounded-lg p-3 w-full min-h-[80px] flex flex-col items-center justify-center text-center hover:bg-violet-500/20 hover:border-violet-500/50 transition-all cursor-default mt-2">
                      <div className="text-xs font-bold text-violet-400 mb-1">
                        Mês {item.month}
                      </div>
                      <div className="text-[10px] font-bold text-[#EDEDEF] leading-tight">
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8"
        >
          {/* Total Investment */}
          <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <DollarSign className="w-6 h-6 text-[#EDEDEF]" />
              <h4 className="text-base font-bold text-[#8A8A8E]">TOTAL <span className="font-bold">GIO</span> (6 MESES)</h4>
            </div>
            <p className="text-3xl font-bold text-[#EDEDEF]">R$ 6.000.000,00</p>
          </div>

          {/* Average Monthly */}
          <div className="bg-white/[0.04] border border-violet-500/40 rounded-xl p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Zap className="w-6 h-6 text-[#EDEDEF]" />
              <h4 className="text-base font-bold text-violet-400">Média Mensal</h4>
            </div>
            <p className="text-3xl font-bold text-[#EDEDEF]">R$ 1.000.000,00</p>
          </div>
        </motion.div>
      </div>

      <SlideFooter />
    </div>
  );
}