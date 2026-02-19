import { motion } from "motion/react";
import SlideFooter from "../SlideFooter";

const timelineItems = [
  { year: "2018", label: "Nascimento", desc: "Projeto batcar veículos e sistema de gestão", highlight: false },
  { year: "2022", label: "Autotech b.car", desc: "CVP + 4P Capital", highlight: false },
  { year: "2023", label: "Fundação ecosys", desc: "Spinoff com aporte de R$ 4M", highlight: false },
  { year: "Out 2024", label: "Parcerias MoU", desc: "Auto Avaliar e Anautos", highlight: false },
  { year: "Dez 2024", label: "FENAUTO", desc: "Lançamento ecosys AUTO", highlight: false },
  { year: "Mai 2025", label: "ecosys na estrada", desc: "Expansão com G30", highlight: false },
  { year: "Jun 2025", label: "Correio Motors", desc: "Migração de base + MoU BWA", highlight: false },
  { year: "Jul 2025", label: "POC Bradesco", desc: "Início da parceria estratégica", highlight: true },
];

const goal = { year: "2027", label: "Startup mais valiosa", desc: "SaaS Automotivo do Brasil" };

const ITEM_COUNT = timelineItems.length + 1; // +1 for goal

export default function SlideLinhaTempo2() {
  return (
    <div className="h-full w-full flex flex-col px-6 md:px-10 pt-4 pb-1 overflow-hidden">
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
          Nossa <span className="text-[#2B7FFF]">Trajetória</span>
        </h2>
        <p className="text-[#8A8A8E] mt-1" style={{ fontSize: "clamp(12px, 1.4vh, 18px)" }}>
          Do projeto inicial à parceria estratégica com o Bradesco
        </p>
      </motion.div>

      {/* Timeline content — centered */}
      <div className="flex-1 flex items-center justify-center pr-12">
        <div className="w-full max-w-[92%] relative">

          {/* === ROW: TOP TEXT BLOCKS (for even-index items) === */}
          <div className="flex items-end justify-between" style={{ marginBottom: 0 }}>
            {timelineItems.map((item, index) => {
              const isTop = index % 2 === 0;
              const isBradesco = item.highlight;
              return (
                <motion.div
                  key={`top-${index}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
                  className="text-center px-1"
                  style={{ width: `${100 / ITEM_COUNT}%`, visibility: isTop ? "visible" : "hidden" }}
                >
                  <p
                    className={`font-black leading-none ${isBradesco ? "text-[#CC092F]" : "text-[#2B7FFF]"}`}
                    style={{ fontSize: "clamp(12px, 1.6vh, 20px)" }}
                  >
                    {item.year}
                  </p>
                  <p className="font-bold text-[#EDEDEF] mt-1 leading-tight" style={{ fontSize: "clamp(11px, 1.4vh, 17px)" }}>
                    {item.label}
                  </p>
                  <p className="text-[#8A8A8E] mt-0.5 leading-tight" style={{ fontSize: "clamp(9px, 1.1vh, 14px)" }}>
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
            {/* Goal top text */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="text-center px-1"
              style={{ width: `${100 / ITEM_COUNT}%` }}
            >
              <p className="font-black text-[#CC092F] leading-none" style={{ fontSize: "clamp(16px, 2.2vh, 26px)" }}>
                {goal.year}
              </p>
              <p className="font-bold text-[#EDEDEF] mt-1 leading-tight" style={{ fontSize: "clamp(12px, 1.5vh, 18px)" }}>
                {goal.label}
              </p>
              <p className="text-[#CC092F] font-semibold mt-0.5 leading-tight" style={{ fontSize: "clamp(10px, 1.2vh, 15px)" }}>
                {goal.desc}
              </p>
            </motion.div>
          </div>

          {/* === ROW: TOP CONNECTORS (lines from text to node) === */}
          <div className="flex items-stretch justify-between" style={{ height: "24px" }}>
            {timelineItems.map((item, index) => {
              const isTop = index % 2 === 0;
              const isBradesco = item.highlight;
              return (
                <div key={`conn-top-${index}`} className="flex justify-center" style={{ width: `${100 / ITEM_COUNT}%` }}>
                  <div
                    className="h-full"
                    style={{
                      width: "2px",
                      background: isTop ? (isBradesco ? "#CC092F" : "rgba(43,127,255,0.5)") : "transparent",
                    }}
                  />
                </div>
              );
            })}
            {/* Goal top connector */}
            <div className="flex justify-center" style={{ width: `${100 / ITEM_COUNT}%` }}>
              <div className="h-full" style={{ width: "2px", background: "#CC092F" }} />
            </div>
          </div>

          {/* === ROW: NODES + HORIZONTAL LINE === */}
          <div className="relative flex items-center justify-between" style={{ height: "20px" }}>
            {/* Horizontal line behind nodes */}
            <div
              className="absolute left-0 right-0"
              style={{
                top: "50%",
                transform: "translateY(-50%)",
                height: "3px",
                background: "linear-gradient(to right, rgba(43,127,255,0.2), rgba(43,127,255,0.6), rgba(204,9,47,0.8))",
              }}
            />

            {timelineItems.map((item, index) => {
              const isBradesco = item.highlight;
              return (
                <motion.div
                  key={`node-${index}`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.15 + index * 0.08 }}
                  className="flex justify-center relative z-10"
                  style={{ width: `${100 / ITEM_COUNT}%` }}
                >
                  <div
                    className={`rounded-full ${isBradesco ? "ring-2 ring-[#CC092F]/50" : ""}`}
                    style={{
                      width: isBradesco ? "16px" : "12px",
                      height: isBradesco ? "16px" : "12px",
                      background: isBradesco ? "#CC092F" : "#2B7FFF",
                      boxShadow: isBradesco
                        ? "0 0 16px rgba(204,9,47,0.5)"
                        : "0 0 8px rgba(43,127,255,0.3)",
                    }}
                  />
                </motion.div>
              );
            })}

            {/* Goal node */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 1.0 }}
              className="flex justify-center relative z-10"
              style={{ width: `${100 / ITEM_COUNT}%` }}
            >
              <div
                className="rounded-full ring-2 ring-[#CC092F]/40"
                style={{
                  width: "20px",
                  height: "20px",
                  background: "linear-gradient(135deg, #CC092F, #FF2D55)",
                  boxShadow: "0 0 24px rgba(204,9,47,0.6)",
                }}
              />
            </motion.div>
          </div>

          {/* === ROW: BOTTOM CONNECTORS (lines from node to text) === */}
          <div className="flex items-stretch justify-between" style={{ height: "24px" }}>
            {timelineItems.map((item, index) => {
              const isTop = index % 2 === 0;
              const isBradesco = item.highlight;
              return (
                <div key={`conn-bot-${index}`} className="flex justify-center" style={{ width: `${100 / ITEM_COUNT}%` }}>
                  <div
                    className="h-full"
                    style={{
                      width: "2px",
                      background: !isTop ? (isBradesco ? "#CC092F" : "rgba(43,127,255,0.5)") : "transparent",
                    }}
                  />
                </div>
              );
            })}
            {/* Goal has no bottom connector */}
            <div className="flex justify-center" style={{ width: `${100 / ITEM_COUNT}%` }}>
              <div className="h-full" style={{ width: "2px", background: "transparent" }} />
            </div>
          </div>

          {/* === ROW: BOTTOM TEXT BLOCKS (for odd-index items) === */}
          <div className="flex items-start justify-between" style={{ marginTop: 0 }}>
            {timelineItems.map((item, index) => {
              const isTop = index % 2 === 0;
              const isBradesco = item.highlight;
              return (
                <motion.div
                  key={`bot-${index}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
                  className="text-center px-1"
                  style={{ width: `${100 / ITEM_COUNT}%`, visibility: !isTop ? "visible" : "hidden" }}
                >
                  <p
                    className={`font-black leading-none ${isBradesco ? "text-[#CC092F]" : "text-[#2B7FFF]"}`}
                    style={{ fontSize: "clamp(12px, 1.6vh, 20px)" }}
                  >
                    {item.year}
                  </p>
                  <p className="font-bold text-[#EDEDEF] mt-1 leading-tight" style={{ fontSize: "clamp(11px, 1.4vh, 17px)" }}>
                    {item.label}
                  </p>
                  <p className="text-[#8A8A8E] mt-0.5 leading-tight" style={{ fontSize: "clamp(9px, 1.1vh, 14px)" }}>
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
            {/* Goal has no bottom text */}
            <div style={{ width: `${100 / ITEM_COUNT}%` }} />
          </div>

        </div>
      </div>

      <SlideFooter />
    </div>
  );
}
