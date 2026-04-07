import { useState } from "react";

const chapters = [
  { id: 1, label: "Contexto", startSlide: 0, endSlide: 10 },
  { id: 2, label: "Proposta", startSlide: 11, endSlide: 12 },
  { id: 3, label: "Marketplace", startSlide: 13, endSlide: 18 },
  { id: 4, label: "Encerramento", startSlide: 19, endSlide: 20 },
];

interface ProgressDotsProps {
  currentSlide: number;
  totalSlides: number;
  onDotClick: (slideIndex: number) => void;
}

export default function ProgressDots({ currentSlide, totalSlides, onDotClick }: ProgressDotsProps) {
  const [hoveredChapter, setHoveredChapter] = useState<number | null>(null);

  const activeChapter = chapters.find(
    (ch) => currentSlide >= ch.startSlide && currentSlide <= ch.endSlide
  ) || chapters[0];

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end gap-3">
      {chapters.map((chapter) => {
        const isActive = activeChapter.id === chapter.id;
        const isHovered = hoveredChapter === chapter.id;

        return (
          <button
            key={chapter.id}
            onClick={() => onDotClick(chapter.startSlide)}
            onMouseEnter={() => setHoveredChapter(chapter.id)}
            onMouseLeave={() => setHoveredChapter(null)}
            className="flex items-center gap-3 group cursor-pointer"
          >
            {/* Label */}
            <span
              className={`text-xs font-medium transition-all duration-300 whitespace-nowrap ${
                isActive || isHovered
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-2"
              } ${isActive ? "text-[#2B7FFF]" : "text-[#8A8A8E]"}`}
            >
              {chapter.label}
            </span>

            {/* Dot */}
            <div
              className={`rounded-full transition-all duration-300 nav-dot-interactive ${
                isActive
                  ? "w-2.5 h-2.5 bg-[#2B7FFF]"
                  : "w-1.5 h-1.5 bg-white/20 group-hover:bg-white/40"
              }`}
            />
          </button>
        );
      })}

      {/* Slide counter */}
      <div className="mt-4 text-[10px] text-white/20 font-mono text-right">
        {currentSlide + 1} / {totalSlides}
      </div>
    </div>
  );
}
