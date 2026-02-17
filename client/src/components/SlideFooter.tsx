export default function SlideFooter() {
  return (
    <div className="absolute bottom-4 sm:bottom-6 left-4 right-4 sm:left-auto sm:right-8 flex items-center justify-center sm:justify-end gap-4 sm:gap-6 opacity-40">
      {/* ecosys AUTO Logo */}
      <div className="flex items-center gap-1.5">
        <div className="w-5 h-5 rounded bg-[#EDEDEF] flex items-center justify-center">
          <span className="text-[#0A0A0B] text-[10px] font-bold">e</span>
        </div>
        <div className="flex flex-col leading-none">
          <span className="text-[#EDEDEF] text-[11px] font-medium tracking-wide">ecosys</span>
          <span className="text-[#8A8A8E] text-[9px] font-medium tracking-widest">AUTO</span>
        </div>
      </div>

      {/* Separator */}
      <div className="w-px h-5 bg-white/10" />

      {/* Bradesco Logo */}
      <div className="flex items-center">
        <img
          src="https://financiamentos.bradesco/content/dam/banco-bradesco/financiamentos/static-files/bradesco-financiamentos.svg"
          alt="Bradesco Financiamentos"
          className="h-5 sm:h-6 w-auto"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            const fallback = document.createElement('span');
            fallback.className = 'text-[#8A8A8E] text-[10px] font-medium';
            fallback.textContent = 'bradesco financiamentos';
            target.parentElement?.appendChild(fallback);
          }}
        />
      </div>
    </div>
  );
}
