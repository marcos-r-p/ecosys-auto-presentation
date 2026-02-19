import { motion } from "motion/react";
import SlideFooter from "../SlideFooter";

export default function SlideEquipe1() {
  return (
    <motion.div
      className="h-full w-full absolute flex flex-col items-center justify-center bg-[#0A0A0B] text-[#EDEDEF] p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative flex flex-col items-center justify-center text-center">
        <motion.span
          className="absolute font-bold text-white"
          style={{
            fontSize: "160px",
            opacity: 0.04,
            lineHeight: 1,
            top: "-8rem",
          }}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 0.04 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          IV
        </motion.span>
        <motion.h1
          className="font-bold text-white"
          style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Quem está por trás
        </motion.h1>
        <motion.div
          className="w-24 h-1 bg-[#2B7FFF] my-6"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
        />
        <motion.p
          className="text-[#8A8A8E]"
          style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Os executivos por trás da ecosys AUTO
        </motion.p>
      </div>
      <SlideFooter />
    </motion.div>
  );
}
