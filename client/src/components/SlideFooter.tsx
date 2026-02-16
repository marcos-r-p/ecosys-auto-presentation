import { motion } from "motion/react";

export default function SlideFooter() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="absolute bottom-4 sm:bottom-6 left-4 right-4 sm:left-auto sm:right-8 flex items-center justify-center sm:justify-end gap-4 sm:gap-6"
    >
      {/* ecosys AUTO Logo */}
      <div className="flex items-center gap-1.5">
        <div className="w-6 h-6 rounded-md bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
          <span className="text-white text-xs font-bold">e</span>
        </div>
        <div className="flex flex-col leading-none">
          <span className="text-white/70 text-xs font-semibold tracking-wide">ecosys</span>
          <span className="text-green-400 text-[10px] font-bold tracking-widest">AUTO</span>
        </div>
      </div>

      {/* Separator */}
      <div className="w-px h-8 bg-white/20" />

      {/* Bradesco Logo */}
      <div className="flex items-center">
        <img
          src="https://financiamentos.bradesco/content/dam/banco-bradesco/financiamentos/static-files/bradesco-financiamentos.svg"
          alt="Bradesco Financiamentos"
          className="h-6 sm:h-8 w-auto opacity-70 hover:opacity-100 transition-opacity"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            const fallback = document.createElement('span');
            fallback.className = 'text-red-400/70 text-xs font-semibold';
            fallback.textContent = 'bradesco financiamentos';
            target.parentElement?.appendChild(fallback);
          }}
        />
      </div>
    </motion.div>
  );
}
