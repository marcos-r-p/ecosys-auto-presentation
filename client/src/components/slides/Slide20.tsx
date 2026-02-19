import { motion } from "motion/react";
import { BarChart3, Briefcase, User, Building2, Database } from "lucide-react";
import SlideFooter from "../SlideFooter";

const stakeholders = [
  {
    id: "lojistas",
    title: "Lojistas",
    description: "Performance operacional e precificação inteligente",
    icon: BarChart3,
    position: "left" as const,
    color: "#2B7FFF",
  },
  {
    id: "gefins",
    title: "Força Comercial",
    subtitle: "(GEFINS)",
    description: "Visibilidade 360° e priorização de visitas",
    icon: Briefcase,
    position: "top" as const,
    color: "#2B7FFF",
  },
  {
    id: "bradesco",
    title: "Bradesco",
    description: "Inteligência competitiva e decisões baseadas em dados",
    icon: Building2,
    position: "right" as const,
    color: "#CC1E3A",
  },
  {
    id: "consumidores",
    title: "Consumidores",
    description: "Recomendações personalizadas e jornada otimizada",
    icon: User,
    position: "bottom" as const,
    color: "#2B7FFF",
  },
];

function hexToRgb(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
}

export default function Slide20() {
  return (
    <div
      className="flex flex-col h-full overflow-hidden"
      style={{ padding: "clamp(8px, 1.2vh, 16px) clamp(16px, 2vw, 60px)" }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center flex-shrink-0"
        style={{ marginBottom: "clamp(6px, 1vh, 14px)" }}
      >
        <h2
          className="font-extrabold tracking-tight text-[#EDEDEF]"
          style={{ fontSize: "clamp(22px, 3.2vh, 42px)", lineHeight: "1.1", marginBottom: "clamp(4px, 0.6vh, 10px)" }}
        >
          Integrações e Dados:{" "}
          <span className="text-[#2B7FFF]">A Inteligência que Conecta</span>
        </h2>
        <p
          className="text-[#8A8A8E] max-w-4xl mx-auto"
          style={{ fontSize: "clamp(10px, 1.2vh, 16px)", lineHeight: "1.4" }}
        >
          Infraestrutura que transforma dados brutos em inteligência acionável para todo o ecossistema.
        </p>
      </motion.div>

      {/* Hub Architecture - Central Layout */}
      <div className="flex-1 flex items-center justify-center min-h-0 relative">
        {/* SVG Connection Lines */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ zIndex: 0 }}
        >
          <defs>
            <linearGradient id="lineGradH" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(43,127,255,0.05)" />
              <stop offset="50%" stopColor="rgba(43,127,255,0.35)" />
              <stop offset="100%" stopColor="rgba(43,127,255,0.05)" />
            </linearGradient>
            <linearGradient id="lineGradV" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(43,127,255,0.05)" />
              <stop offset="50%" stopColor="rgba(43,127,255,0.35)" />
              <stop offset="100%" stopColor="rgba(43,127,255,0.05)" />
            </linearGradient>
          </defs>
          {/* Horizontal line */}
          <motion.line
            x1="15%" y1="50%" x2="85%" y2="50%"
            stroke="url(#lineGradH)"
            strokeWidth="1.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          {/* Vertical line */}
          <motion.line
            x1="50%" y1="10%" x2="50%" y2="90%"
            stroke="url(#lineGradV)"
            strokeWidth="1.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </svg>

        {/* Grid Layout for Hub Architecture */}
        <div
          className="relative grid w-full h-full"
          style={{
            gridTemplateColumns: "1fr auto 1fr",
            gridTemplateRows: "1fr auto 1fr",
            gap: "clamp(8px, 1vh, 16px)",
            maxWidth: "900px",
            maxHeight: "clamp(340px, 52vh, 500px)",
          }}
        >
          {/* Top Card - GEFINS (row 1, col 2) */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-end justify-center"
            style={{ gridColumn: "2", gridRow: "1" }}
          >
            <div
              className="rounded-xl text-center"
              style={{
                padding: "clamp(10px, 1.5vh, 20px) clamp(16px, 2vw, 32px)",
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(43,127,255,0.15)",
                backdropFilter: "blur(12px)",
                minWidth: "clamp(160px, 18vw, 240px)",
              }}
            >
              <div
                className="rounded-lg flex items-center justify-center mx-auto"
                style={{
                  width: "clamp(32px, 4vh, 48px)",
                  height: "clamp(32px, 4vh, 48px)",
                  background: "rgba(43,127,255,0.1)",
                  border: "1px solid rgba(43,127,255,0.25)",
                  marginBottom: "clamp(4px, 0.6vh, 10px)",
                }}
              >
                <Briefcase style={{ width: "clamp(16px, 2vh, 24px)", height: "clamp(16px, 2vh, 24px)" }} color="#2B7FFF" />
              </div>
              <h4
                className="font-bold text-[#EDEDEF]"
                style={{ fontSize: "clamp(12px, 1.6vh, 20px)", lineHeight: "1.2" }}
              >
                Força Comercial
              </h4>
              <p
                className="text-[#6B6B70] font-medium"
                style={{ fontSize: "clamp(7px, 0.7vh, 9px)" }}
              >
                (GEFINS)
              </p>
              <p
                className="text-[#9A9A9E] mt-1"
                style={{ fontSize: "clamp(9px, 1vh, 13px)", lineHeight: "1.3" }}
              >
                Visibilidade 360° e priorização de visitas
              </p>
            </div>
          </motion.div>

          {/* Left Card - Lojistas (row 2, col 1) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center justify-end"
            style={{ gridColumn: "1", gridRow: "2" }}
          >
            <div
              className="rounded-xl text-center"
              style={{
                padding: "clamp(10px, 1.5vh, 20px) clamp(12px, 1.5vw, 24px)",
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(43,127,255,0.15)",
                backdropFilter: "blur(12px)",
                minWidth: "clamp(150px, 16vw, 220px)",
              }}
            >
              <div
                className="rounded-lg flex items-center justify-center mx-auto"
                style={{
                  width: "clamp(32px, 4vh, 48px)",
                  height: "clamp(32px, 4vh, 48px)",
                  background: "rgba(43,127,255,0.1)",
                  border: "1px solid rgba(43,127,255,0.25)",
                  marginBottom: "clamp(4px, 0.6vh, 10px)",
                }}
              >
                <BarChart3 style={{ width: "clamp(16px, 2vh, 24px)", height: "clamp(16px, 2vh, 24px)" }} color="#2B7FFF" />
              </div>
              <h4
                className="font-bold text-[#EDEDEF]"
                style={{ fontSize: "clamp(12px, 1.6vh, 20px)", lineHeight: "1.2" }}
              >
                Lojistas
              </h4>
              <p
                className="text-[#9A9A9E] mt-1"
                style={{ fontSize: "clamp(9px, 1vh, 13px)", lineHeight: "1.3" }}
              >
                Performance operacional e precificação inteligente
              </p>
            </div>
          </motion.div>

          {/* Center Hub (row 2, col 2) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center justify-center"
            style={{ gridColumn: "2", gridRow: "2" }}
          >
            <div
              className="relative rounded-2xl flex flex-col items-center justify-center"
              style={{
                width: "clamp(140px, 18vw, 220px)",
                height: "clamp(140px, 18vw, 220px)",
                background: "linear-gradient(135deg, rgba(43,127,255,0.12) 0%, rgba(43,127,255,0.04) 100%)",
                border: "1.5px solid rgba(43,127,255,0.35)",
                backdropFilter: "blur(16px)",
                boxShadow: "0 0 40px rgba(43,127,255,0.1), 0 0 80px rgba(43,127,255,0.05), inset 0 0 30px rgba(43,127,255,0.03)",
              }}
            >
              {/* Animated glow ring */}
              <motion.div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(43,127,255,0.08)",
                    "0 0 40px rgba(43,127,255,0.15)",
                    "0 0 20px rgba(43,127,255,0.08)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <div
                className="rounded-xl flex items-center justify-center"
                style={{
                  width: "clamp(40px, 5vh, 56px)",
                  height: "clamp(40px, 5vh, 56px)",
                  background: "rgba(43,127,255,0.15)",
                  border: "1px solid rgba(43,127,255,0.4)",
                  marginBottom: "clamp(6px, 0.8vh, 12px)",
                }}
              >
                <Database style={{ width: "clamp(20px, 2.5vh, 30px)", height: "clamp(20px, 2.5vh, 30px)" }} color="#2B7FFF" />
              </div>
              <h3
                className="font-extrabold text-[#EDEDEF] text-center"
                style={{ fontSize: "clamp(11px, 1.4vh, 17px)", lineHeight: "1.2" }}
              >
                Plataforma de
              </h3>
              <h3
                className="font-extrabold text-[#2B7FFF] text-center"
                style={{ fontSize: "clamp(11px, 1.4vh, 17px)", lineHeight: "1.2" }}
              >
                Dados Autoline
              </h3>
              <p
                className="text-[#6B6B70] text-center mt-1"
                style={{ fontSize: "clamp(7px, 0.8vh, 10px)" }}
              >
                Centro de Inteligência
              </p>
            </div>
          </motion.div>

          {/* Right Card - Bradesco (row 2, col 3) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center justify-start"
            style={{ gridColumn: "3", gridRow: "2" }}
          >
            <div
              className="rounded-xl text-center"
              style={{
                padding: "clamp(10px, 1.5vh, 20px) clamp(12px, 1.5vw, 24px)",
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(204,30,58,0.2)",
                backdropFilter: "blur(12px)",
                minWidth: "clamp(150px, 16vw, 220px)",
              }}
            >
              <div
                className="rounded-lg flex items-center justify-center mx-auto"
                style={{
                  width: "clamp(32px, 4vh, 48px)",
                  height: "clamp(32px, 4vh, 48px)",
                  background: "rgba(204,30,58,0.1)",
                  border: "1px solid rgba(204,30,58,0.25)",
                  marginBottom: "clamp(4px, 0.6vh, 10px)",
                }}
              >
                <Building2 style={{ width: "clamp(16px, 2vh, 24px)", height: "clamp(16px, 2vh, 24px)" }} color="#CC1E3A" />
              </div>
              <h4
                className="font-bold text-[#EDEDEF]"
                style={{ fontSize: "clamp(12px, 1.6vh, 20px)", lineHeight: "1.2" }}
              >
                Bradesco
              </h4>
              <p
                className="text-[#9A9A9E] mt-1"
                style={{ fontSize: "clamp(9px, 1vh, 13px)", lineHeight: "1.3" }}
              >
                Inteligência competitiva e decisões baseadas em dados
              </p>
            </div>
          </motion.div>

          {/* Bottom Card - Consumidores (row 3, col 2) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-start justify-center"
            style={{ gridColumn: "2", gridRow: "3" }}
          >
            <div
              className="rounded-xl text-center"
              style={{
                padding: "clamp(10px, 1.5vh, 20px) clamp(16px, 2vw, 32px)",
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(43,127,255,0.15)",
                backdropFilter: "blur(12px)",
                minWidth: "clamp(160px, 18vw, 240px)",
              }}
            >
              <div
                className="rounded-lg flex items-center justify-center mx-auto"
                style={{
                  width: "clamp(32px, 4vh, 48px)",
                  height: "clamp(32px, 4vh, 48px)",
                  background: "rgba(43,127,255,0.1)",
                  border: "1px solid rgba(43,127,255,0.25)",
                  marginBottom: "clamp(4px, 0.6vh, 10px)",
                }}
              >
                <User style={{ width: "clamp(16px, 2vh, 24px)", height: "clamp(16px, 2vh, 24px)" }} color="#2B7FFF" />
              </div>
              <h4
                className="font-bold text-[#EDEDEF]"
                style={{ fontSize: "clamp(12px, 1.6vh, 20px)", lineHeight: "1.2" }}
              >
                Consumidores
              </h4>
              <p
                className="text-[#9A9A9E] mt-1"
                style={{ fontSize: "clamp(9px, 1vh, 13px)", lineHeight: "1.3" }}
              >
                Recomendações personalizadas e jornada otimizada
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Callout Bottom */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="flex-shrink-0"
        style={{ marginTop: "clamp(6px, 1vh, 14px)" }}
      >
        <div
          className="relative rounded-xl overflow-hidden"
          style={{
            padding: "clamp(8px, 1.2vh, 16px) clamp(12px, 1.5vw, 28px)",
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(43,127,255,0.15)",
            boxShadow: "0 0 20px rgba(43,127,255,0.04)",
          }}
        >
          <p
            className="text-center text-[#C5C5C7] font-medium"
            style={{ fontSize: "clamp(11px, 1.3vh, 16px)", lineHeight: "1.4" }}
          >
            <strong className="text-[#2B7FFF]">Visão 360°</strong> do mercado automotivo
            — dados fluindo entre todos os stakeholders, alimentando decisões inteligentes.
          </p>
        </div>
      </motion.div>

      <SlideFooter />
    </div>
  );
}
