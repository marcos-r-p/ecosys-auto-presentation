import { motion } from "motion/react";
import SlideFooter from "../SlideFooter";

export default function Slide1() {
  return (
    <div className="flex items-center justify-center h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-[120px] pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-8 sm:pb-10 md:pb-12 lg:pb-15 overflow-y-auto">
      <div className="max-w-7xl w-full flex flex-col gap-6 md:gap-10 lg:gap-14 items-center">
        {/* Logo ecosys AUTO + PARCERIA + Bradesco */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center"
        >
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
            {/* ecosys AUTO Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <span className="text-white text-lg font-bold">e</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-white text-2xl font-semibold tracking-wide">ecosys</span>
                <span className="text-green-400 text-sm font-bold tracking-widest">AUTO</span>
              </div>
            </div>

            {/* Partnership Separator */}
            <div className="flex md:flex-col items-center gap-2">
              <div className="h-px w-16 md:w-px md:h-16 bg-gradient-to-r md:bg-gradient-to-b from-transparent via-white/30 to-transparent" />
              <div className="text-white/40 text-xs font-medium tracking-wider">PARCERIA</div>
              <div className="h-px w-16 md:w-px md:h-16 bg-gradient-to-r md:bg-gradient-to-b from-transparent via-white/30 to-transparent" />
            </div>

            {/* Bradesco Logo */}
            <div className="w-48 h-16 sm:w-56 sm:h-20 md:w-60 md:h-24 lg:w-64 lg:h-28 flex items-center">
              <img
                src="https://financiamentos.bradesco/content/dam/banco-bradesco/financiamentos/static-files/bradesco-financiamentos.svg"
                alt="Bradesco Financiamentos"
                className="w-full h-auto"
              />
            </div>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center leading-tight flex flex-col items-center gap-2 md:gap-3"
        >
          <div className="flex items-center justify-center gap-2 md:gap-3 flex-wrap">
            <span>Ecossistema</span>
            <img
              src="https://autoline.com.br/assets/resources/logo_autoline_white_165_50.png"
              alt="Autoline"
              className="h-6 sm:h-8 md:h-9 lg:h-10"
            />
            <span>:</span>
          </div>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-500">
            Transformando Revendas em Hubs Financeiros
          </span>
        </motion.h1>

        {/* Subtitle Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-5 md:p-6 w-full"
        >
          <div className="flex items-start gap-4">
            <div className="relative z-10">
              <p className="text-white/90 leading-relaxed text-sm sm:text-base">
                A parceria estratégica entre{" "}
                <span className="text-blue-400 font-semibold">ecosys AUTO</span> e{" "}
                <span className="text-red-500 font-semibold">Bradesco</span> para
                revolucionar o mercado automotivo brasileiro por meio da plataforma Autoline, oferecendo soluções integradas de gestão, vendas e produtos financeiros.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Decorative Lines */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="flex justify-center gap-4"
        >
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full" />
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full" />
        </motion.div>
      </div>

      <SlideFooter />
    </div>
  );
}
