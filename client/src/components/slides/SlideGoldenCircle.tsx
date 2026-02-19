import { motion } from "motion/react";
import SlideFooter from "../SlideFooter";

export default function SlideGoldenCircle() {
  return (
    <div className="h-full w-full flex flex-col px-6 md:px-12 pt-4 pb-1 overflow-hidden">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="text-center mb-2"
      >
        <h2
          className="font-black tracking-tight text-[#EDEDEF] leading-none"
          style={{ fontSize: "clamp(24px, 3.5vh, 44px)" }}
        >
          Nosso <span className="text-[#2B7FFF]">Golden Circle</span>
        </h2>
      </motion.div>

      {/* Main content — centered */}
      <div className="flex-1 flex items-center justify-center relative">
        {/* Central SVG diagram — large */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
          style={{ width: "min(50vh, 420px)", height: "min(50vh, 420px)" }}
        >
          <svg viewBox="0 0 420 420" className="w-full h-full">
            {/* Outer ring — O que? */}
            <circle cx="210" cy="210" r="200" fill="none" stroke="#2B7FFF" strokeOpacity="0.2" strokeWidth="2" />
            <circle cx="210" cy="210" r="200" fill="#2B7FFF" fillOpacity="0.06" />
            <text x="210" y="38" textAnchor="middle" fill="#8A8A8E" fontSize="15" fontWeight="600" letterSpacing="2">
              O QUE?
            </text>

            {/* Middle ring — Como? */}
            <circle cx="210" cy="210" r="140" fill="none" stroke="#2B7FFF" strokeOpacity="0.35" strokeWidth="2" />
            <circle cx="210" cy="210" r="140" fill="#2B7FFF" fillOpacity="0.12" />
            <text x="210" y="95" textAnchor="middle" fill="#ABABAF" fontSize="15" fontWeight="600" letterSpacing="2">
              COMO?
            </text>

            {/* Inner circle — Por que? (destaque) */}
            <defs>
              <radialGradient id="porqueGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#2B7FFF" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#2B7FFF" stopOpacity="0.35" />
              </radialGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <circle cx="210" cy="210" r="75" fill="url(#porqueGrad)" filter="url(#glow)" />
            <circle cx="210" cy="210" r="75" fill="none" stroke="#2B7FFF" strokeOpacity="0.6" strokeWidth="2" />
            <text x="210" y="200" textAnchor="middle" fill="white" fontSize="16" fontWeight="700" letterSpacing="2">
              POR QUE?
            </text>
            <text x="210" y="224" textAnchor="middle" fill="white" fontSize="11" fontWeight="400" fillOpacity="0.7">
              propósito
            </text>
          </svg>
        </motion.div>

        {/* Text labels positioned around the circle */}

        {/* O QUE — top-left */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="absolute"
          style={{ top: "8%", left: "5%" }}
        >
          <div
            className="rounded-xl px-5 py-4 max-w-[280px]"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(43,127,255,0.15)",
            }}
          >
            <h3
              className="font-black text-[#2B7FFF] mb-1"
              style={{ fontSize: "clamp(18px, 2.5vh, 30px)" }}
            >
              O que?
            </h3>
            <p
              className="text-[#CDCDCF] font-medium leading-snug"
              style={{ fontSize: "clamp(13px, 1.6vh, 19px)" }}
            >
              Ecossistema automotivo em uma plataforma robusta e acessível
            </p>
          </div>
          {/* Connector line */}
          <svg className="absolute -right-8 top-1/2 -translate-y-1/2" width="40" height="2">
            <line x1="0" y1="1" x2="40" y2="1" stroke="#2B7FFF" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="4 3" />
          </svg>
        </motion.div>

        {/* COMO — right */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="absolute"
          style={{ top: "12%", right: "5%" }}
        >
          <div
            className="rounded-xl px-5 py-4 max-w-[280px]"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(43,127,255,0.2)",
            }}
          >
            <h3
              className="font-black text-[#2B7FFF] mb-1"
              style={{ fontSize: "clamp(18px, 2.5vh, 30px)" }}
            >
              Como?
            </h3>
            <p
              className="text-[#CDCDCF] font-medium leading-snug"
              style={{ fontSize: "clamp(13px, 1.6vh, 19px)" }}
            >
              Transformamos complexidade em simplicidade e oportunidades em lucro
            </p>
          </div>
        </motion.div>

        {/* POR QUE — bottom-center (destaque máximo) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="absolute"
          style={{ bottom: "5%", left: "50%", transform: "translateX(-50%)" }}
        >
          <div
            className="rounded-xl px-6 py-4 text-center max-w-[440px]"
            style={{
              background: "linear-gradient(160deg, rgba(43,127,255,0.1), rgba(43,127,255,0.03))",
              border: "2px solid rgba(43,127,255,0.35)",
              boxShadow: "0 0 40px rgba(43,127,255,0.08)",
            }}
          >
            <h3
              className="font-black text-[#2B7FFF] mb-1"
              style={{ fontSize: "clamp(22px, 3vh, 36px)" }}
            >
              Por que existimos?
            </h3>
            <p
              className="text-[#EDEDEF] font-semibold leading-snug"
              style={{ fontSize: "clamp(14px, 1.8vh, 22px)" }}
            >
              Promover igualdade de oportunidades e criar um ecossistema onde revendas prosperam
            </p>
          </div>
        </motion.div>
      </div>

      <SlideFooter />
    </div>
  );
}
