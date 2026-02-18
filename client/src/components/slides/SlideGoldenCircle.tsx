import { motion } from "motion/react";
import SlideFooter from "../SlideFooter";

export default function SlideGoldenCircle() {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center px-8 md:px-16 py-8 relative">
      <div className="w-full flex-1 flex items-center justify-center gap-4 md:gap-8">
        {/* Left text blocks */}
        <div className="w-[30%] flex flex-col justify-between" style={{ height: '60%' }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-[#2B7FFF] font-bold mb-2" style={{ fontSize: 'clamp(14px, 2vh, 24px)' }}>O que?</h3>
            <p className="text-[#EDEDEF]" style={{ fontSize: 'clamp(11px, 1.5vh, 18px)', lineHeight: '1.4' }}>
              Um ecossistema automotivo em uma plataforma robusta, intuitiva e acessível.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-[#2B7FFF] font-bold mb-2" style={{ fontSize: 'clamp(14px, 2vh, 24px)' }}>Por que?</h3>
            <p className="text-[#EDEDEF]" style={{ fontSize: 'clamp(11px, 1.5vh, 18px)', lineHeight: '1.4' }}>
              Existimos para promover a igualdade de oportunidades e criar um ecossistema onde as revendas possam prosperar.
            </p>
          </motion.div>
        </div>

        {/* Center circles */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="w-[35%] flex items-center justify-center"
        >
          <svg viewBox="0 0 400 400" className="w-full max-w-[300px]">
            <circle cx="200" cy="200" r="180" fill="#2B7FFF" fillOpacity="0.15" stroke="#2B7FFF" strokeOpacity="0.3" strokeWidth="1" />
            <text x="200" y="50" textAnchor="middle" fill="#EDEDEF" fontSize="18" fontWeight="600">O que?</text>
            <circle cx="200" cy="200" r="120" fill="#2B7FFF" fillOpacity="0.35" stroke="#2B7FFF" strokeOpacity="0.5" strokeWidth="1" />
            <text x="200" y="110" textAnchor="middle" fill="#EDEDEF" fontSize="18" fontWeight="600">Como?</text>
            <circle cx="200" cy="200" r="60" fill="#2B7FFF" fillOpacity="0.7" />
            <text x="200" y="205" textAnchor="middle" fill="#EDEDEF" fontSize="16" fontWeight="600">Porque?</text>
          </svg>
        </motion.div>

        {/* Right text block */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="w-[30%]"
        >
          <h3 className="text-[#2B7FFF] font-bold mb-2" style={{ fontSize: 'clamp(14px, 2vh, 24px)' }}>Como?</h3>
          <p className="text-[#EDEDEF]" style={{ fontSize: 'clamp(11px, 1.5vh, 18px)', lineHeight: '1.4' }}>
            Transformamos o complexo em simples e oportunidades em lucro.
          </p>
        </motion.div>
      </div>

      {/* Golden Circle label */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="absolute bottom-12 right-12 text-[#8A8A8E]/30 font-bold"
        style={{ fontSize: 'clamp(24px, 5vh, 64px)' }}
      >
        Golden Circle
      </motion.h2>

      <SlideFooter />
    </div>
  );
}
