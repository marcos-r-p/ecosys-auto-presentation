import { motion } from "motion/react";
import SlideFooter from "../SlideFooter";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

const Shape = ({ label, className }: { label: string; className?: string }) => (
  <motion.div
    variants={itemVariants}
    className={`flex items-center justify-center rounded-3xl border border-white/10 p-8 text-center ${className}`}
  >
    <span className="text-lg font-medium text-white/90" style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}>
      {label}
    </span>
  </motion.div>
);

export default function SlideQuemSomos2() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-[#0A0A0B] p-8 text-[#EDEDEF] md:p-16">
      <motion.div
        className="flex h-full w-full flex-col items-center justify-center gap-12 lg:flex-row"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Side */}
        <motion.div className="w-full lg:w-2/5" variants={itemVariants}>
          <h1 
            className="font-bold leading-tight tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
          >
            O <span className="text-[#2B7FFF]">ecosys</span> auto mais completo do mercado
          </h1>
          <p 
            className="mt-4 text-[#8A8A8E]"
            style={{ fontSize: "clamp(1rem, 2vw, 1.125rem)" }}
          >
            Gestão simplificada, integrações, marketing e vendas em uma única plataforma, acelerando o resultado das revendas de veículos.
          </p>
        </motion.div>

        {/* Right Side */}
        <div className="w-full lg:w-3/5">
          <motion.div 
            className="grid grid-cols-2 grid-rows-2 gap-4"
            variants={containerVariants}
          >
            <Shape label="Digitalizar" className="bg-gradient-to-br from-white/5 to-transparent" />
            <Shape label="Impulsionar" className="bg-gradient-to-bl from-white/5 to-transparent" />
            <Shape label="Organizar" className="bg-gradient-to-tr from-white/5 to-transparent" />
            <Shape label="Colher resultados" className="bg-gradient-to-tl from-white/5 to-transparent" />
          </motion.div>
        </div>
      </motion.div>
      <SlideFooter />
    </div>
  );
}
