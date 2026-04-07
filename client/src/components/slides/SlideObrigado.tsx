import { motion } from "motion/react";
import SlideFooter from "../SlideFooter";

export default function SlideObrigado() {
  return (
    <div className="flex flex-col h-full overflow-hidden justify-center items-center relative">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2B7FFF]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#CC1E3A]/10 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center z-10 px-8"
      >
        <p className="uppercase tracking-[0.3em] text-[#2B7FFF] font-semibold text-sm mb-4">
          Próximos Passos
        </p>
        <h2 className="font-extrabold tracking-tight text-white mb-8 leading-tight" style={{ fontSize: "clamp(32px, 5vh, 64px)" }}>
          Vamos transformar<br />
          o mercado juntos?
        </h2>
        
        <p className="text-[#9A9A9E] max-w-2xl mx-auto mb-16 leading-relaxed" style={{ fontSize: "clamp(16px, 2vh, 20px)" }}>
          A <strong className="text-white">ecosys AUTO</strong> e o <strong className="text-[#CC1E3A]">Bradesco Financiamentos</strong> unidos para revolucionar a jornada de compra e financiamento de veículos no Brasil.
        </p>

        {/* Fake CTA line to look premium */}
        <div className="inline-flex items-center gap-4 bg-white/5 border border-white/10 px-6 py-3 rounded-full backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-[#2B7FFF] animate-pulse" />
          <span className="text-white font-medium tracking-wide">Obrigado pela atenção!</span>
        </div>
      </motion.div>

      <SlideFooter />
    </div>
  );
}
