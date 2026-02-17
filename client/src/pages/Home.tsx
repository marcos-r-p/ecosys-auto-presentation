import { useCallback, useEffect, useRef, useState } from "react";
import FixedBackground from "@/components/BackgroundElements";
import ChapterSeparator from "@/components/ChapterSeparator";
import ProgressDots from "@/components/ProgressDots";
import SlideBreadcrumb from "@/components/SlideBreadcrumb";

// Slides
import Slide1 from "@/components/slides/Slide1";
import Slide2 from "@/components/slides/Slide2";
import Slide3 from "@/components/slides/Slide3";
import Slide4 from "@/components/slides/Slide4";
import Slide5 from "@/components/slides/Slide5";
import Slide6 from "@/components/slides/Slide6";
import Slide7 from "@/components/slides/Slide7";
import SlideEcosysWhy from "@/components/slides/SlideEcosysWhy";
import Slide9 from "@/components/slides/Slide9";
import Slide10 from "@/components/slides/Slide10";
import Slide11 from "@/components/slides/Slide11";
import Slide12 from "@/components/slides/Slide12";
import Slide13 from "@/components/slides/Slide13";
import Slide14 from "@/components/slides/Slide14";
import Slide15 from "@/components/slides/Slide15";
import Slide16 from "@/components/slides/Slide16";
import Slide17 from "@/components/slides/Slide17";
import Slide18 from "@/components/slides/Slide18";
import Slide19 from "@/components/slides/Slide19";
import Slide20 from "@/components/slides/Slide20";
import Slide21 from "@/components/slides/Slide21";
import Slide22 from "@/components/slides/Slide22";
import Slide23 from "@/components/slides/Slide23";
import Slide24 from "@/components/slides/Slide24";
import Slide25 from "@/components/slides/Slide25";
import Slide26 from "@/components/slides/Slide26";
import Slide27 from "@/components/slides/Slide27";
import Slide28 from "@/components/slides/Slide28";
import Slide30 from "@/components/slides/Slide30";
import Slide31 from "@/components/slides/Slide31";
import Slide32 from "@/components/slides/Slide32";
import Slide33 from "@/components/slides/Slide33";
import Slide34 from "@/components/slides/Slide34";

// Chapter definitions
const CHAPTERS = [
  { number: "01", title: "Contexto e Visão", subtitle: "Por que estamos aqui e qual é a oportunidade" },
  { number: "02", title: "A Proposta", subtitle: "O que estamos propondo, para quem e como evoluiu" },
  { number: "03", title: "Por que a ecosys AUTO", subtitle: "Inovação, tecnologia e maturidade corporativa" },
  { number: "04", title: "Gestor Autoline", subtitle: "Gestão inteligente para lojistas, dados estratégicos para o Bradesco" },
  { number: "05", title: "Marketplace Autoline", subtitle: "Vitrine digital que conecta lojistas, consumidores e financiamento Bradesco" },
  { number: "06", title: "Motor Comercial", subtitle: "Inteligência que antecipa demanda e amplifica resultados" },
  { number: "07", title: "Novo GIO", subtitle: "O copiloto inteligente que transforma estratégia em execução para o GEFIN" },
  { number: "08", title: "Investimento e Roadmap", subtitle: "Cronograma, valores e modelo de sustentação" },
];

// Slide structure: each entry is either a chapter separator or a content slide
interface SlideEntry {
  type: "separator" | "content";
  component?: React.ComponentType;
  chapterIndex: number; // which chapter this belongs to
  separatorData?: { number: string; title: string; subtitle: string };
}

const slideEntries: SlideEntry[] = [
  // 01 — Contexto e Visão
  { type: "separator", chapterIndex: 0, separatorData: CHAPTERS[0] },
  { type: "content", component: Slide1, chapterIndex: 0 },
  { type: "content", component: Slide2, chapterIndex: 0 },
  { type: "content", component: Slide3, chapterIndex: 0 },
  { type: "content", component: Slide4, chapterIndex: 0 },

  // 02 — A Proposta
  { type: "separator", chapterIndex: 1, separatorData: CHAPTERS[1] },
  { type: "content", component: Slide5, chapterIndex: 1 },
  { type: "content", component: Slide6, chapterIndex: 1 },
  { type: "content", component: Slide7, chapterIndex: 1 },

  // 03 — Por que a ecosys AUTO
  { type: "separator", chapterIndex: 2, separatorData: CHAPTERS[2] },
  { type: "content", component: SlideEcosysWhy, chapterIndex: 2 },

  // 04 — Gestor Autoline
  { type: "separator", chapterIndex: 3, separatorData: CHAPTERS[3] },
  { type: "content", component: Slide9, chapterIndex: 3 },
  { type: "content", component: Slide10, chapterIndex: 3 },
  { type: "content", component: Slide11, chapterIndex: 3 },
  { type: "content", component: Slide12, chapterIndex: 3 },

  // 05 — Marketplace Autoline
  { type: "separator", chapterIndex: 4, separatorData: CHAPTERS[4] },
  { type: "content", component: Slide13, chapterIndex: 4 },
  { type: "content", component: Slide14, chapterIndex: 4 },
  { type: "content", component: Slide15, chapterIndex: 4 },
  { type: "content", component: Slide16, chapterIndex: 4 },
  { type: "content", component: Slide17, chapterIndex: 4 },
  { type: "content", component: Slide18, chapterIndex: 4 },
  { type: "content", component: Slide19, chapterIndex: 4 },

  // 06 — Motor Comercial
  { type: "separator", chapterIndex: 5, separatorData: CHAPTERS[5] },
  { type: "content", component: Slide20, chapterIndex: 5 },
  { type: "content", component: Slide21, chapterIndex: 5 },
  { type: "content", component: Slide22, chapterIndex: 5 },

  // 07 — Novo GIO
  { type: "separator", chapterIndex: 6, separatorData: CHAPTERS[6] },
  { type: "content", component: Slide23, chapterIndex: 6 },
  { type: "content", component: Slide24, chapterIndex: 6 },
  { type: "content", component: Slide26, chapterIndex: 6 },
  { type: "content", component: Slide27, chapterIndex: 6 },
  { type: "content", component: Slide28, chapterIndex: 6 },
  { type: "content", component: Slide25, chapterIndex: 6 },

  // 08 — Investimento e Roadmap
  { type: "separator", chapterIndex: 7, separatorData: CHAPTERS[7] },
  { type: "content", component: Slide30, chapterIndex: 7 },
  { type: "content", component: Slide31, chapterIndex: 7 },
  { type: "content", component: Slide32, chapterIndex: 7 },
  { type: "content", component: Slide33, chapterIndex: 7 },
  { type: "content", component: Slide34, chapterIndex: 7 },
];

const TOTAL_SLIDES = slideEntries.length;

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Track current slide via IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = slideRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) {
              setCurrentSlide(index);
            }
          }
        });
      },
      {
        root: containerRef.current,
        threshold: 0.5,
      }
    );

    slideRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        navigateToSlide(Math.min(currentSlide + 1, TOTAL_SLIDES - 1));
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        navigateToSlide(Math.max(currentSlide - 1, 0));
      } else if (e.key === "Home") {
        e.preventDefault();
        navigateToSlide(0);
      } else if (e.key === "End") {
        e.preventDefault();
        navigateToSlide(TOTAL_SLIDES - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide]);

  const navigateToSlide = useCallback((index: number) => {
    const target = slideRefs.current[index];
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-y-scroll snap-y snap-mandatory hide-scrollbar"
    >
      {/* Fixed Background */}
      <FixedBackground />

      {/* Progress Dots */}
      <ProgressDots
        currentSlide={currentSlide}
        totalSlides={TOTAL_SLIDES}
        onDotClick={navigateToSlide}
      />

      {/* Slides */}
      <div className="relative z-10">
        {slideEntries.map((entry, index) => {
          const chapter = CHAPTERS[entry.chapterIndex];
          const chapterLabel = `${chapter.number} — ${chapter.title}`;

          return (
            <div
              key={index}
              ref={(el) => { slideRefs.current[index] = el; }}
              className="w-full h-screen snap-start snap-always relative"
            >
              {/* Breadcrumb - only on content slides, not separators */}
              {entry.type === "content" && (
                <SlideBreadcrumb
                  chapter={chapterLabel}
                  slideNumber={index + 1}
                  totalSlides={TOTAL_SLIDES}
                />
              )}

              {/* Slide content */}
              {entry.type === "separator" && entry.separatorData ? (
                <ChapterSeparator
                  number={entry.separatorData.number}
                  title={entry.separatorData.title}
                  subtitle={entry.separatorData.subtitle}
                />
              ) : entry.component ? (
                <entry.component />
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
