interface SlideBreadcrumbProps {
  chapter: string;
  slideNumber: number;
  totalSlides: number;
}

export default function SlideBreadcrumb({ chapter, slideNumber, totalSlides }: SlideBreadcrumbProps) {
  return (
    <div className="absolute top-4 left-6 right-6 flex items-center justify-between z-20 pointer-events-none">
      {/* Chapter indicator */}
      <span className="text-[11px] font-medium tracking-wider uppercase text-white/[0.15]">
        {chapter}
      </span>

      {/* Slide number */}
      <span className="text-[11px] font-mono text-white/[0.12]">
        {slideNumber} / {totalSlides}
      </span>
    </div>
  );
}
