import { motion } from "motion/react";
import SlideFooter from "../SlideFooter";

export default function Slide1() {
  return (
    <div className="flex items-center justify-center h-full px-6 sm:px-10 md:px-16 lg:px-24 py-16">
      <div className="max-w-4xl w-full flex flex-col gap-10 items-center text-center">
        {/* Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-8"
        >
          <div className="flex items-center">
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663030817825/KCJZHdgEFRsEMPJa.png"
              alt="ecosys AUTO"
              className="h-12 w-auto"
            />
          </div>

          <div className="w-px h-10 bg-white/10" />

          <div className="flex items-center">
            <img
              src="https://financiamentos.bradesco/content/dam/banco-bradesco/financiamentos/static-files/bradesco-financiamentos.svg"
              alt="Bradesco Financiamentos"
              className="h-10 w-auto opacity-60"
            />
          </div>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col gap-3"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#EDEDEF] leading-tight">
            Ecossistema <span className="text-brand-blue">Autoline</span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-normal text-[#8A8A8E] leading-snug">
            Transformando Revendas em Hubs Financeiros
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[15px] text-[#8A8A8E] leading-relaxed max-w-2xl"
        >
          A parceria estratégica entre <span className="text-brand-blue font-medium">ecosys AUTO</span> e{" "}
          <span className="text-brand-red font-medium">Bradesco</span> para revolucionar o mercado automotivo
          brasileiro por meio da plataforma Autoline, oferecendo soluções integradas de gestão, vendas e
          produtos financeiros.
        </motion.p>

        {/* Minimal divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-16 h-px bg-white/10"
        />
      </div>

      <SlideFooter />
    </div>
  );
}
