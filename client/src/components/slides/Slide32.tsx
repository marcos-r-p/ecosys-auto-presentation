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
            <DollarSign className="w-10 h-10 text-white" />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              AUTOLINE - Investimento Mensal (12 Meses)
            </h2>
          </div>
          <p className="text-base text-white/70 max-w-4xl mx-auto leading-relaxed">
            A linha do tempo abaixo ilustra a projeção do investimento mensal ao longo de um ano, 
            evidenciando o aumento gradual dos recursos alocados à medida que o projeto avança.
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
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-green-500/30 via-blue-500/30 to-purple-500/30 transform -translate-y-1/2 min-w-[900px]" />

          {/* Grid Container */}
          <div className="relative grid grid-cols-12 gap-3 min-w-[900px]">
            {monthlyInvestments.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: item.position === "top" ? -20 : 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + idx * 0.05 }}
                className="relative flex items-center justify-center"
                style={{ height: '280px' }}
              >
                {item.position === "top" ? (
                  <div className="absolute flex flex-col items-center" style={{ bottom: '50%' }}>
                    {/* Card Above */}
                    <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-lg p-3 w-full min-h-[80px] flex flex-col items-center justify-center text-center hover:bg-green-500/20 hover:border-green-500/50 transition-all cursor-default shadow-lg mb-2">
                      <div className="text-xs font-bold text-green-400 mb-1">
                        Mês {item.month}
                      </div>
                      <div className="text-[10px] font-bold text-white leading-tight">
                        {item.value}
                      </div>
                    </div>
                    
                    {/* Connector Line to Timeline */}
                    <div className="w-0.5 h-12 bg-green-500/40" />
                    
                    {/* Dot on Timeline */}
                    <div className="w-4 h-4 rounded-full bg-green-500 shadow-lg shadow-green-500/60 border-2 border-[#0a1628] relative z-10" />
                  </div>
                ) : (
                  <div className="absolute flex flex-col items-center" style={{ top: '50%' }}>
                    {/* Dot on Timeline */}
                    <div className="w-4 h-4 rounded-full bg-blue-500 shadow-lg shadow-blue-500/60 border-2 border-[#0a1628] relative z-10" />
                    
                    {/* Connector Line from Timeline */}
                    <div className="w-0.5 h-12 bg-blue-500/40" />
                    
                    {/* Card Below */}
                    <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-lg p-3 w-full min-h-[80px] flex flex-col items-center justify-center text-center hover:bg-blue-500/20 hover:border-blue-500/50 transition-all cursor-default shadow-lg mt-2">
                      <div className="text-xs font-bold text-blue-400 mb-1">
                        Mês {item.month}
                      </div>
                      <div className="text-[10px] font-bold text-white leading-tight">
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
          transition={{ duration: 0.6, delay: 0.9 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-8"
        >
          {/* Investimento Inicial */}
          <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/40 rounded-xl p-5 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-green-400" />
              <h4 className="text-sm font-bold text-green-400">Investimento Inicial</h4>
            </div>
            <p className="text-2xl font-bold text-white">R$ 955.065,75</p>
            <p className="text-xs text-white/60 mt-1">Mês 1</p>
          </div>

          {/* Investimento Final */}
          <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/40 rounded-xl p-5 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-white" />
              <h4 className="text-sm font-bold text-purple-400">Investimento Final</h4>
            </div>
            <p className="text-2xl font-bold text-white">R$ 1.921.492,50</p>
            <p className="text-xs text-white/60 mt-1">Mês 12</p>
          </div>

          {/* Crescimento */}
          <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/40 rounded-xl p-5 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <DollarSign className="w-5 h-5 text-blue-400" />
              <h4 className="text-sm font-bold text-blue-400">Investimento Total</h4>
            </div>
            <p className="text-2xl font-bold text-white">R$ 20.554.551,00</p>
            <p className="text-xs text-white/60 mt-1">Ou 12x de R$ 1.712.879,25</p>
          </div>
        </motion.div>
      </div>

      <SlideFooter />
    </div>
  );
}