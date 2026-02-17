import { motion } from "motion/react";
import { Calendar, ArrowRight, Package } from "lucide-react";
import SlideFooter from "../SlideFooter";

export default function Slide5() {
  return (
    <div className="flex flex-col items-center justify-center h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-[120px] pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-8 sm:pb-10 md:pb-12 lg:pb-15 overflow-y-auto">
      <div className="max-w-7xl w-full flex flex-col gap-6 md:gap-10 lg:gap-14 justify-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            Proposta{" "}
            <span className="text-[#EDEDEF]">
              Inicial
            </span>
          </h2>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-white/[0.04] rounded-xl pointer-events-none -z-10" />
          <div className="relative bg-white/[0.04] border border-white/[0.08] rounded-xl p-10">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              {/* Left Box */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="flex-1"
              >
                <div className="bg-white/[0.04] rounded-2xl p-8 border border-white/[0.08]">
                  <div className="flex items-center gap-3 mb-3">
                    <Package className="w-8 h-8 text-[#2B7FFF]" />
                    <h3 className="text-2xl font-bold text-[#EDEDEF]">
                      Marketplace Whitelabel
                    </h3>
                  </div>
                  <div className="h-1 w-full bg-white/[0.04] rounded-full mb-5" />
                  <p className="text-[#8A8A8E] text-lg">
                    Plataforma de vendas personalizada
                  </p>
                </div>
              </motion.div>

              {/* Plus Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="flex-shrink-0"
              >
                <div className="w-16 h-16 rounded-full bg-white/[0.04] flex items-center justify-center">
                  <span className="text-[#EDEDEF] text-3xl font-bold">+</span>
                </div>
              </motion.div>

              {/* Right Box */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="flex-1"
              >
                <div className="bg-white/[0.04] rounded-2xl p-8 border border-white/[0.08]">
                  <div className="flex items-center gap-3 mb-3">
                    <Package className="w-8 h-8 text-[#EDEDEF]" />
                    <h3 className="text-2xl font-bold text-[#EDEDEF]">DMS Lite</h3>
                  </div>
                  <div className="h-1 w-full bg-white/[0.04] rounded-full mb-5" />
                  <p className="text-[#8A8A8E] text-lg">
                    Sistema de gestão simplificado
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Bottom Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-8 text-center"
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/[0.04] rounded-full border border-white/[0.08]">
                <div className="w-2 h-2 bg-white/[0.06] rounded-full animate-pulse" />
                <span className="text-[#8A8A8E]">
                  Fundação para a transformação digital
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Arrow Down */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="flex justify-center"
        >
          <ArrowRight className="w-8 h-8 text-[#EDEDEF] rotate-90" />
        </motion.div>
      </div>
      
      <SlideFooter />
    </div>
  );
}