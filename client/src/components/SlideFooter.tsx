export default function SlideFooter() {
  return (
    <div className="absolute bottom-4 sm:bottom-6 left-4 right-4 sm:left-auto sm:right-8 flex items-center justify-center sm:justify-end gap-4 sm:gap-6 opacity-40">
      {/* ecosys AUTO Logo */}
      <div className="flex items-center">
        <img
          src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663030817825/KCJZHdgEFRsEMPJa.png"
          alt="ecosys AUTO"
          className="h-7 w-auto"
        />
      </div>

      {/* Separator */}
      <div className="w-px h-5 bg-white/10" />

      {/* Bradesco Logo */}
      <div className="flex items-center">
        <img
          src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663030817825/niLdqFSxPjAEfTYo.svg"
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
