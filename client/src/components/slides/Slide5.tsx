import { motion } from "motion/react";
import { Calendar, ArrowRight, Package } from "lucide-react";
import SlideFooter from "../SlideFooter";

export default function Slide5() {
  return (
    <div className="flex flex-col items-center justify-center h-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 pt-3 pb-2 overflow-hidden relative">
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full opacity-[0.04] pointer-events-none" style={{ background: "radial-gradient(circle, #2B7FFF, transparent 70%)" }} />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-[0.03] pointer-events-none" style={{ background: "radial-gradient(circle, #8B5CF6, transparent 70%)" }} />
      <div className="max-w-7xl w-full flex flex-col gap-3 md:gap-4 lg:gap-6 justify-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-extrabold tracking-tight sm: sm: md: lg:" style={{ fontSize: 'clamp(24px, 4vh, 48px)', marginBottom: 'clamp(6px, 1vh, 16px)', lineHeight: '1.1' }}>
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
          <div className="absolute inset-0 rounded-xl pointer-events-none -z-10" style={{ background: "linear-gradient(135deg, rgba(43,127,255,0.03), rgba(139,92,246,0.02))" }} />
          <div className="relative rounded-xl p-6 sm:p-8" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(12px)", boxShadow: "0 4px 30px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.04)" }}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              {/* Left Box */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="flex-1"
              >
                <div className="rounded-2xl p-8" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(43,127,255,0.15)", boxShadow: "0 0 20px rgba(43,127,255,0.04), inset 0 1px 0 rgba(255,255,255,0.03)" }}>
                  <div className="flex items-center gap-3 mb-3">
                    <Package className="w-8 h-8 text-[#2B7FFF]" />
                    <h3 className="text-2xl font-bold text-[#EDEDEF] flex items-center gap-2">
                      Novo Marketplace <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663030817825/oPnqWOABGquuztOR.png" alt="Autoline" className="h-6 inline-block" />
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
                <div className="rounded-2xl p-8" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 0 20px rgba(255,255,255,0.02), inset 0 1px 0 rgba(255,255,255,0.03)" }}>
                  <div className="flex items-center gap-3 mb-3">
                    <Package className="w-8 h-8 text-[#EDEDEF]" />
                    <h3 className="text-2xl font-bold text-[#EDEDEF]">Gestor Autoline Lite</h3>
                  </div>
                  <div className="h-1 w-full bg-white/[0.04] rounded-full mb-5" />
                  <p className="text-[#8A8A8E] text-lg">
                    Sistema de gestão de revenda de veículos
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
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(43,127,255,0.12)", boxShadow: "0 0 15px rgba(43,127,255,0.03)" }}>
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: "rgba(43,127,255,0.4)" }} />
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