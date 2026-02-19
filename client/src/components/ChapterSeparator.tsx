import { motion } from "motion/react";
import SlideFooter from "./SlideFooter";

interface ChapterSeparatorProps {
  number: string;
  title: string;
  subtitle: string;
}

export default function ChapterSeparator({ number, title, subtitle }: ChapterSeparatorProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full px-8 md:px-20 relative">
      <div className="flex flex-col items-center gap-6 max-w-3xl text-center">
        {/* Chapter number */}
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-[120px] md:text-[160px] font-bold leading-none text-white/[0.04] select-none"
        >
          {number}
        </motion.span>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-3xl md:text-4xl font-semibold text-[#EDEDEF] -mt-20 md:-mt-24"
        >
          {title}
        </motion.h2>

        {/* Divider line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="w-16 h-px bg-white/[0.12]"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="text-lg text-[#8A8A8E] font-normal leading-relaxed max-w-xl"
        >
          {subtitle}
        </motion.p>
      </div>

      <SlideFooter />
    </div>
  );
}
