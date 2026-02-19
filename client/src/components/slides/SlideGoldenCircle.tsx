import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import SlideFooter from "../SlideFooter";

/*
 * Design: Golden Circle — animação narrativa centro→fora
 * Estilo: minimalista, tecnológico, institucional
 * Interação: hover nos cards destaca o anel correspondente
 */

const layers = [
  {
    id: "why",
    label: "POR QUÊ?",
    sublabel: "propósito",
    title: "Por que existimos?",
    description:
      "Promover igualdade de oportunidades e criar um ecossistema onde revendas prosperam",
    color: "#2B7FFF",
    delay: 0.6,
  },
  {
    id: "how",
    label: "COMO?",
    sublabel: "processo",
    title: "Como?",
    description:
      "Transformamos complexidade em simplicidade e oportunidades em lucro",
    color: "#2B7FFF",
    delay: 1.6,
  },
  {
    id: "what",
    label: "O QUÊ?",
    sublabel: "produto",
    title: "O que?",
    description:
      "Ecossistema automotivo em uma plataforma robusta e acessível",
    color: "#2B7FFF",
    delay: 2.6,
  },
] as const;

type LayerId = (typeof layers)[number]["id"];

export default function SlideGoldenCircle() {
  const [revealedCount, setRevealedCount] = useState(0);
  const [hoveredLayer, setHoveredLayer] = useState<LayerId | null>(null);
  const [animationDone, setAnimationDone] = useState(false);

  // Sequential reveal animation
  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    layers.forEach((layer, i) => {
      timers.push(
        setTimeout(() => {
          setRevealedCount(i + 1);
          if (i === layers.length - 1) {
            setTimeout(() => setAnimationDone(true), 600);
          }
        }, layer.delay * 1000)
      );
    });

    return () => timers.forEach(clearTimeout);
  }, []);

  const isRevealed = (idx: number) => revealedCount > idx;
  const isHighlighted = (id: LayerId) => hoveredLayer === id;

  // Ring radii
  const outerR = 195;
  const midR = 135;
  const innerR = 72;

  return (
    <div className="h-full w-full flex flex-col px-6 md:px-12 pt-4 pb-1 overflow-hidden">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="text-center mb-1"
      >
        <h2
          className="font-black tracking-tight text-[#EDEDEF] leading-none"
          style={{ fontSize: "clamp(24px, 3.5vh, 44px)" }}
        >
          Nosso <span className="text-[#2B7FFF]">Golden Circle</span>
        </h2>
      </motion.div>

      {/* Main layout: cards left — circle center — cards right */}
      <div className="flex-1 flex items-center justify-center gap-0 relative">
        {/* Left card: O QUÊ */}
        <div className="flex-1 flex justify-end pr-4 md:pr-6 max-w-[320px]">
          <AnimatePresence>
            {isRevealed(2) && (
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full"
                onMouseEnter={() => setHoveredLayer("what")}
                onMouseLeave={() => setHoveredLayer(null)}
              >
                <div
                  className="rounded-xl px-5 py-4 cursor-pointer transition-all duration-300"
                  style={{
                    background: isHighlighted("what")
                      ? "rgba(43,127,255,0.08)"
                      : "rgba(255,255,255,0.02)",
                    border: isHighlighted("what")
                      ? "1px solid rgba(43,127,255,0.4)"
                      : "1px solid rgba(43,127,255,0.12)",
                    boxShadow: isHighlighted("what")
                      ? "0 0 30px rgba(43,127,255,0.1)"
                      : "none",
                    transform: isHighlighted("what")
                      ? "scale(1.03)"
                      : "scale(1)",
                  }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ background: "#2B7FFF", opacity: 0.5 }}
                    />
                    <span
                      className="text-[#8A8A8E] font-semibold uppercase tracking-widest"
                      style={{ fontSize: "clamp(9px, 1vh, 12px)" }}
                    >
                      Produto
                    </span>
                  </div>
                  <h3
                    className="font-black text-[#2B7FFF] mb-2"
                    style={{ fontSize: "clamp(20px, 2.8vh, 34px)" }}
                  >
                    O que?
                  </h3>
                  <p
                    className="text-[#CDCDCF] font-medium leading-snug"
                    style={{ fontSize: "clamp(13px, 1.5vh, 18px)" }}
                  >
                    Ecossistema automotivo em uma plataforma robusta e acessível
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Central SVG diagram */}
        <div
          className="relative flex-shrink-0"
          style={{ width: "min(48vh, 400px)", height: "min(48vh, 400px)" }}
        >
          <svg viewBox="0 0 420 420" className="w-full h-full">
            <defs>
              <radialGradient id="porqueGradNew" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#2B7FFF" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#2B7FFF" stopOpacity="0.3" />
              </radialGradient>
              <filter id="glowInner">
                <feGaussianBlur stdDeviation="10" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="glowMid">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="glowOuter">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Outer ring — O QUÊ */}
            <motion.g
              initial={{ opacity: 0, scale: 0.85 }}
              animate={
                isRevealed(2)
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.85 }
              }
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={{ transformOrigin: "210px 210px" }}
            >
              <circle
                cx="210"
                cy="210"
                r={outerR}
                fill="#2B7FFF"
                fillOpacity={isHighlighted("what") ? 0.1 : 0.04}
                style={{ transition: "fill-opacity 0.3s" }}
              />
              <circle
                cx="210"
                cy="210"
                r={outerR}
                fill="none"
                stroke="#2B7FFF"
                strokeOpacity={isHighlighted("what") ? 0.6 : 0.15}
                strokeWidth={isHighlighted("what") ? 2.5 : 1.5}
                filter={isHighlighted("what") ? "url(#glowOuter)" : undefined}
                style={{ transition: "stroke-opacity 0.3s, stroke-width 0.3s" }}
              />
              <text
                x="210"
                y="36"
                textAnchor="middle"
                fill={isHighlighted("what") ? "#EDEDEF" : "#6A6A6E"}
                fontSize="13"
                fontWeight="700"
                letterSpacing="3"
                style={{ transition: "fill 0.3s" }}
              >
                O QUÊ?
              </text>
            </motion.g>

            {/* Middle ring — COMO */}
            <motion.g
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isRevealed(1)
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={{ transformOrigin: "210px 210px" }}
            >
              <circle
                cx="210"
                cy="210"
                r={midR}
                fill="#2B7FFF"
                fillOpacity={isHighlighted("how") ? 0.16 : 0.08}
                style={{ transition: "fill-opacity 0.3s" }}
              />
              <circle
                cx="210"
                cy="210"
                r={midR}
                fill="none"
                stroke="#2B7FFF"
                strokeOpacity={isHighlighted("how") ? 0.7 : 0.25}
                strokeWidth={isHighlighted("how") ? 2.5 : 1.5}
                filter={isHighlighted("how") ? "url(#glowMid)" : undefined}
                style={{ transition: "stroke-opacity 0.3s, stroke-width 0.3s" }}
              />
              <text
                x="210"
                y="96"
                textAnchor="middle"
                fill={isHighlighted("how") ? "#EDEDEF" : "#8A8A8E"}
                fontSize="13"
                fontWeight="700"
                letterSpacing="3"
                style={{ transition: "fill 0.3s" }}
              >
                COMO?
              </text>
            </motion.g>

            {/* Inner circle — POR QUÊ (always first to appear) */}
            <motion.g
              initial={{ opacity: 0, scale: 0.5 }}
              animate={
                isRevealed(0)
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.5 }
              }
              transition={{ duration: 0.7, ease: "easeOut" }}
              style={{ transformOrigin: "210px 210px" }}
            >
              <circle
                cx="210"
                cy="210"
                r={innerR}
                fill="url(#porqueGradNew)"
                filter={isHighlighted("why") ? "url(#glowInner)" : "url(#glowInner)"}
              />
              <circle
                cx="210"
                cy="210"
                r={innerR}
                fill="none"
                stroke="#2B7FFF"
                strokeOpacity={isHighlighted("why") ? 0.9 : 0.5}
                strokeWidth={isHighlighted("why") ? 3 : 2}
                style={{ transition: "stroke-opacity 0.3s, stroke-width 0.3s" }}
              />
              {/* Pulsing ring on hover */}
              {isHighlighted("why") && (
                <motion.circle
                  cx="210"
                  cy="210"
                  r={innerR + 5}
                  fill="none"
                  stroke="#2B7FFF"
                  strokeWidth="1"
                  initial={{ opacity: 0.6, scale: 1 }}
                  animate={{ opacity: 0, scale: 1.15 }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                  style={{ transformOrigin: "210px 210px" }}
                />
              )}
              <text
                x="210"
                y="202"
                textAnchor="middle"
                fill="white"
                fontSize="15"
                fontWeight="800"
                letterSpacing="3"
              >
                POR QUÊ?
              </text>
              <text
                x="210"
                y="224"
                textAnchor="middle"
                fill="white"
                fontSize="11"
                fontWeight="400"
                fillOpacity="0.6"
              >
                propósito
              </text>
            </motion.g>
          </svg>

          {/* Connector lines (visible after animation) */}
          {animationDone && (
            <>
              {/* Left connector to O QUÊ card */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="absolute top-1/2 -translate-y-1/2"
                style={{ left: "-8px" }}
              >
                <svg width="12" height="2">
                  <line
                    x1="0"
                    y1="1"
                    x2="12"
                    y2="1"
                    stroke="#2B7FFF"
                    strokeOpacity="0.25"
                    strokeWidth="1"
                    strokeDasharray="3 2"
                  />
                </svg>
              </motion.div>
              {/* Right connector to COMO card */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="absolute top-1/2 -translate-y-1/2"
                style={{ right: "-8px" }}
              >
                <svg width="12" height="2">
                  <line
                    x1="0"
                    y1="1"
                    x2="12"
                    y2="1"
                    stroke="#2B7FFF"
                    strokeOpacity="0.25"
                    strokeWidth="1"
                    strokeDasharray="3 2"
                  />
                </svg>
              </motion.div>
            </>
          )}
        </div>

        {/* Right card: COMO */}
        <div className="flex-1 flex justify-start pl-4 md:pl-6 max-w-[320px]">
          <AnimatePresence>
            {isRevealed(1) && (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full"
                onMouseEnter={() => setHoveredLayer("how")}
                onMouseLeave={() => setHoveredLayer(null)}
              >
                <div
                  className="rounded-xl px-5 py-4 cursor-pointer transition-all duration-300"
                  style={{
                    background: isHighlighted("how")
                      ? "rgba(43,127,255,0.08)"
                      : "rgba(255,255,255,0.02)",
                    border: isHighlighted("how")
                      ? "1px solid rgba(43,127,255,0.4)"
                      : "1px solid rgba(43,127,255,0.12)",
                    boxShadow: isHighlighted("how")
                      ? "0 0 30px rgba(43,127,255,0.1)"
                      : "none",
                    transform: isHighlighted("how")
                      ? "scale(1.03)"
                      : "scale(1)",
                  }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ background: "#2B7FFF", opacity: 0.6 }}
                    />
                    <span
                      className="text-[#8A8A8E] font-semibold uppercase tracking-widest"
                      style={{ fontSize: "clamp(9px, 1vh, 12px)" }}
                    >
                      Processo
                    </span>
                  </div>
                  <h3
                    className="font-black text-[#2B7FFF] mb-2"
                    style={{ fontSize: "clamp(20px, 2.8vh, 34px)" }}
                  >
                    Como?
                  </h3>
                  <p
                    className="text-[#CDCDCF] font-medium leading-snug"
                    style={{ fontSize: "clamp(13px, 1.5vh, 18px)" }}
                  >
                    Transformamos complexidade em simplicidade e oportunidades em
                    lucro
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom card: POR QUÊ (destaque máximo) */}
        <div
          className="absolute"
          style={{ bottom: "2%", left: "50%", transform: "translateX(-50%)" }}
        >
          <AnimatePresence>
            {isRevealed(0) && (
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                onMouseEnter={() => setHoveredLayer("why")}
                onMouseLeave={() => setHoveredLayer(null)}
              >
                <div
                  className="rounded-xl px-6 py-4 text-center cursor-pointer transition-all duration-300"
                  style={{
                    maxWidth: "440px",
                    background: isHighlighted("why")
                      ? "linear-gradient(160deg, rgba(43,127,255,0.15), rgba(43,127,255,0.06))"
                      : "linear-gradient(160deg, rgba(43,127,255,0.1), rgba(43,127,255,0.03))",
                    border: isHighlighted("why")
                      ? "2px solid rgba(43,127,255,0.55)"
                      : "2px solid rgba(43,127,255,0.3)",
                    boxShadow: isHighlighted("why")
                      ? "0 0 50px rgba(43,127,255,0.15), 0 0 100px rgba(43,127,255,0.05)"
                      : "0 0 40px rgba(43,127,255,0.06)",
                    transform: isHighlighted("why")
                      ? "scale(1.04)"
                      : "scale(1)",
                  }}
                >
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div
                      className="w-2.5 h-2.5 rounded-full"
                      style={{
                        background: "#2B7FFF",
                        boxShadow: "0 0 8px rgba(43,127,255,0.5)",
                      }}
                    />
                    <span
                      className="text-[#8A8A8E] font-semibold uppercase tracking-widest"
                      style={{ fontSize: "clamp(9px, 1vh, 12px)" }}
                    >
                      Propósito
                    </span>
                  </div>
                  <h3
                    className="font-black text-[#2B7FFF] mb-2"
                    style={{ fontSize: "clamp(22px, 3vh, 38px)" }}
                  >
                    Por que existimos?
                  </h3>
                  <p
                    className="text-[#EDEDEF] font-semibold leading-snug"
                    style={{ fontSize: "clamp(14px, 1.7vh, 21px)" }}
                  >
                    Promover igualdade de oportunidades e criar um ecossistema
                    onde revendas prosperam
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <SlideFooter />
    </div>
  );
}
