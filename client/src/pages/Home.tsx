import { lazy, Suspense, useCallback, useEffect, useMemo, useRef, useState } from "react";
import FixedBackground from "@/components/BackgroundElements";
import ChapterSeparator from "@/components/ChapterSeparator";
import ProgressDots from "@/components/ProgressDots";
import SlideBreadcrumb from "@/components/SlideBreadcrumb";

// Lazy-loaded slides for better performance
const Slide1 = lazy(() => import("@/components/slides/Slide1"));
const Slide2 = lazy(() => import("@/components/slides/Slide2"));
const Slide3 = lazy(() => import("@/components/slides/Slide3"));
const Slide4 = lazy(() => import("@/components/slides/Slide4"));
const Slide5 = lazy(() => import("@/components/slides/Slide5"));
const Slide6 = lazy(() => import("@/components/slides/Slide6"));
const Slide7 = lazy(() => import("@/components/slides/Slide7"));
const SlideEcosysWhy = lazy(() => import("@/components/slides/SlideEcosysWhy"));
const Slide9 = lazy(() => import("@/components/slides/Slide9"));
const Slide10 = lazy(() => import("@/components/slides/Slide10"));
const Slide11 = lazy(() => import("@/components/slides/Slide11"));
const Slide12 = lazy(() => import("@/components/slides/Slide12"));
const Slide13 = lazy(() => import("@/components/slides/Slide13"));
const Slide14 = lazy(() => import("@/components/slides/Slide14"));
const Slide15 = lazy(() => import("@/components/slides/Slide15"));
const Slide16 = lazy(() => import("@/components/slides/Slide16"));
const Slide17 = lazy(() => import("@/components/slides/Slide17"));
const Slide18 = lazy(() => import("@/components/slides/Slide18"));
const Slide19 = lazy(() => import("@/components/slides/Slide19"));
const Slide20 = lazy(() => import("@/components/slides/Slide20"));
const Slide21 = lazy(() => import("@/components/slides/Slide21"));
const Slide22 = lazy(() => import("@/components/slides/Slide22"));
const Slide23 = lazy(() => import("@/components/slides/Slide23"));
const Slide24 = lazy(() => import("@/components/slides/Slide24"));
const Slide25 = lazy(() => import("@/components/slides/Slide25"));
const Slide26 = lazy(() => import("@/components/slides/Slide26"));
const Slide27 = lazy(() => import("@/components/slides/Slide27"));
const Slide28 = lazy(() => import("@/components/slides/Slide28"));
const Slide30 = lazy(() => import("@/components/slides/Slide30"));
const Slide31 = lazy(() => import("@/components/slides/Slide31"));
const SlideInvestimento1 = lazy(() => import("@/components/slides/SlideInvestimento1"));
const SlideInvestimento2 = lazy(() => import("@/components/slides/SlideInvestimento2"));

// Minimal loading fallback that matches the dark theme
function SlideFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-white/20 border-t-white/60 rounded-full animate-spin" />
    </div>
  );
}

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

// Slide structure
interface SlideEntry {
  type: "separator" | "content";
  component?: React.LazyExoticComponent<React.ComponentType>;
  chapterIndex: number;
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
  { type: "content", component: Slide28, chapterIndex: 6 },
  { type: "content", component: Slide27, chapterIndex: 6 },
  { type: "content", component: Slide24, chapterIndex: 6 },
  { type: "content", component: Slide26, chapterIndex: 6 },
  { type: "content", component: Slide25, chapterIndex: 6 },

  // 08 — Investimento e Roadmap
  { type: "separator", chapterIndex: 7, separatorData: CHAPTERS[7] },
  { type: "content", component: Slide30, chapterIndex: 7 },
  { type: "content", component: Slide31, chapterIndex: 7 },
  { type: "content", component: SlideInvestimento1, chapterIndex: 7 },
  { type: "content", component: SlideInvestimento2, chapterIndex: 7 },
];

const TOTAL_SLIDES = slideEntries.length;
const RENDER_WINDOW = 2; // Render current slide + 2 before and after

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isNavigating = useRef(false);

  // Determine which slides to render (virtualization window)
  const visibleRange = useMemo(() => {
    const start = Math.max(0, currentSlide - RENDER_WINDOW);
    const end = Math.min(TOTAL_SLIDES - 1, currentSlide + RENDER_WINDOW);
    return { start, end };
  }, [currentSlide]);

  // Navigate to a specific slide
  const navigateToSlide = useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(index, TOTAL_SLIDES - 1));
    setCurrentSlide(clamped);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "PageDown" || e.key === " ") {
        e.preventDefault();
        navigateToSlide(currentSlide + 1);
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        navigateToSlide(currentSlide - 1);
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
  }, [currentSlide, navigateToSlide]);

  // Mouse wheel / touch navigation with debounce
  useEffect(() => {
    let lastWheelTime = 0;
    const WHEEL_DEBOUNCE = 600; // ms between slide transitions

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const now = Date.now();
      if (now - lastWheelTime < WHEEL_DEBOUNCE) return;
      lastWheelTime = now;

      if (e.deltaY > 0) {
        navigateToSlide(currentSlide + 1);
      } else if (e.deltaY < 0) {
        navigateToSlide(currentSlide - 1);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [currentSlide, navigateToSlide]);

  // Touch navigation
  useEffect(() => {
    let touchStartY = 0;
    const SWIPE_THRESHOLD = 50;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const deltaY = touchStartY - e.changedTouches[0].clientY;
      if (Math.abs(deltaY) > SWIPE_THRESHOLD) {
        if (deltaY > 0) {
          navigateToSlide(currentSlide + 1);
        } else {
          navigateToSlide(currentSlide - 1);
        }
      }
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [currentSlide, navigateToSlide]);

  // Current slide entry
  const entry = slideEntries[currentSlide];
  const chapter = CHAPTERS[entry.chapterIndex];
  const chapterLabel = `${chapter.number} — ${chapter.title}`;

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Fixed Background */}
      <FixedBackground />

      {/* Progress Dots */}
      <ProgressDots
        currentSlide={currentSlide}
        totalSlides={TOTAL_SLIDES}
        onDotClick={navigateToSlide}
      />

      {/* Single slide viewport - only renders current slide */}
      <div className="relative z-10 w-full h-screen">
        {/* Breadcrumb - only on content slides */}
        {entry.type === "content" && (
          <SlideBreadcrumb
            chapter={chapterLabel}
            slideNumber={currentSlide + 1}
            totalSlides={TOTAL_SLIDES}
          />
        )}

        {/* Slide content with transition */}
        <div
          key={currentSlide}
          className="w-full h-full animate-in fade-in duration-300"
        >
          {entry.type === "separator" && entry.separatorData ? (
            <ChapterSeparator
              number={entry.separatorData.number}
              title={entry.separatorData.title}
              subtitle={entry.separatorData.subtitle}
            />
          ) : entry.component ? (
            <Suspense fallback={<SlideFallback />}>
              <entry.component />
            </Suspense>
          ) : null}
        </div>
      </div>
    </div>
  );
}
