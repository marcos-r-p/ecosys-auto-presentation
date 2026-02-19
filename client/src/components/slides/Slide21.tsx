import { motion } from "motion/react";
import { DollarSign, Target, Smartphone, RefreshCw } from "lucide-react";
import SlideFooter from "../SlideFooter";

/*
 * Slide 21 — Integração com App Bradesco
 * EXPANDED: margens reduzidas, grid ampliado, smartphone e cards maiores,
 * fontes aumentadas para leitura a distância. Layout e design inalterados.
 */

const benefits = [
  {
    icon: DollarSign,
    title: "Monetização da Base",
    description: "App como plataforma transacional para veículos",
    position: "top-left" as const,
    color: "#2B7FFF",
  },
  {
    icon: Target,
    title: "Leads Ultra Qualificados",
    description: "Acesso a clientes com perfil de crédito conhecido",
    position: "top-right" as const,
    color: "#2B7FFF",
  },
  {
    icon: Smartphone,
    title: "Engajamento e Retenção",
    description: "Funcionalidade de alto valor e frequência de uso",
    position: "bottom-left" as const,
    color: "#2B7FFF",
  },
  {
    icon: RefreshCw,
    title: "Ofertas Personalizadas",
    description: "Baseadas em perfil de crédito e comportamento",
    position: "bottom-right" as const,
    color: "#CC1E3A",
  },
];

export default function Slide21() {
  return (
    <div
      className="flex flex-col h-full overflow-hidden"
      style={{ padding: "clamp(6px, 0.8vh, 12px) clamp(10px, 1.2vw, 30px)" }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center flex-shrink-0"
        style={{ marginBottom: "clamp(2px, 0.4vh, 8px)" }}
      >
        <h2
          className="font-extrabold tracking-tight text-[#EDEDEF]"
          style={{ fontSize: "clamp(26px, 3.8vh, 50px)", lineHeight: "1.1", marginBottom: "clamp(2px, 0.3vh, 5px)" }}
        >
          Integração com App Bradesco
        </h2>
        <h3
          className="font-bold text-[#2B7FFF]"
          style={{ fontSize: "clamp(16px, 2.4vh, 30px)", lineHeight: "1.2", marginBottom: "clamp(3px, 0.5vh, 8px)" }}
        >
          O Ecossistema na Mão de Milhões
        </h3>
        <p
          className="text-[#8A8A8E] max-w-5xl mx-auto"
          style={{ fontSize: "clamp(12px, 1.4vh, 18px)", lineHeight: "1.4" }}
        >
          Embedded Marketplace dentro do App Bradesco — conectando o ecossistema automotivo à vasta base de clientes do banco.
        </p>
      </motion.div>

      {/* Main Content - Phone + Benefits */}
      <div className="flex-1 flex items-center justify-center min-h-0 relative">
        {/* SVG Connection Lines */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ zIndex: 0 }}
        >
          <defs>
            <linearGradient id="lineTL" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(43,127,255,0.3)" />
              <stop offset="100%" stopColor="rgba(43,127,255,0.05)" />
            </linearGradient>
            <linearGradient id="lineTR" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(43,127,255,0.3)" />
              <stop offset="100%" stopColor="rgba(43,127,255,0.05)" />
            </linearGradient>
            <linearGradient id="lineBL" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(43,127,255,0.3)" />
              <stop offset="100%" stopColor="rgba(43,127,255,0.05)" />
            </linearGradient>
            <linearGradient id="lineBR" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="rgba(204,30,58,0.3)" />
              <stop offset="100%" stopColor="rgba(204,30,58,0.05)" />
            </linearGradient>
          </defs>
          {/* Top-left to center */}
          <motion.line
            x1="18%" y1="22%" x2="42%" y2="40%"
            stroke="url(#lineTL)" strokeWidth="1.5"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          />
          {/* Top-right to center */}
          <motion.line
            x1="82%" y1="22%" x2="58%" y2="40%"
            stroke="url(#lineTR)" strokeWidth="1.5"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          />
          {/* Bottom-left to center */}
          <motion.line
            x1="18%" y1="78%" x2="42%" y2="60%"
            stroke="url(#lineBL)" strokeWidth="1.5"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          />
          {/* Bottom-right to center */}
          <motion.line
            x1="82%" y1="78%" x2="58%" y2="60%"
            stroke="url(#lineBR)" strokeWidth="1.5"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          />
        </svg>

        {/* Layout Grid */}
        <div
          className="relative grid w-full h-full"
          style={{
            gridTemplateColumns: "1fr auto 1fr",
            gridTemplateRows: "1fr 1fr",
            gap: "clamp(6px, 1vh, 14px)",
            maxWidth: "1200px",
            maxHeight: "clamp(380px, 62vh, 560px)",
          }}
        >
          {/* Top-Left: Monetização */}
          <motion.div
            initial={{ opacity: 0, x: -20, y: -20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-end justify-end"
            style={{ gridColumn: "1", gridRow: "1" }}
          >
            <BenefitCard benefit={benefits[0]} />
          </motion.div>

          {/* Top-Right: Leads */}
          <motion.div
            initial={{ opacity: 0, x: 20, y: -20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-end justify-start"
            style={{ gridColumn: "3", gridRow: "1" }}
          >
            <BenefitCard benefit={benefits[1]} />
          </motion.div>

          {/* Center Phone Mockup (spans 2 rows) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center"
            style={{ gridColumn: "2", gridRow: "1 / 3" }}
          >
            <div className="relative flex flex-col items-center">
              {/* Phone Frame */}
              <div
                className="relative rounded-3xl flex flex-col items-center justify-center"
                style={{
                  width: "clamp(150px, 18vw, 240px)",
                  height: "clamp(260px, 40vh, 420px)",
                  background: "linear-gradient(180deg, rgba(43,127,255,0.08) 0%, rgba(15,15,18,0.95) 30%, rgba(15,15,18,0.95) 70%, rgba(43,127,255,0.05) 100%)",
                  border: "2px solid rgba(43,127,255,0.25)",
                  boxShadow: "0 0 40px rgba(43,127,255,0.08), 0 0 80px rgba(43,127,255,0.04), inset 0 0 20px rgba(43,127,255,0.02)",
                }}
              >
                {/* Animated pulse */}
                <motion.div
                  className="absolute inset-0 rounded-3xl pointer-events-none"
                  animate={{
                    boxShadow: [
                      "0 0 15px rgba(43,127,255,0.06)",
                      "0 0 35px rgba(43,127,255,0.12)",
                      "0 0 15px rgba(43,127,255,0.06)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Notch */}
                <div
                  className="absolute top-3 rounded-full"
                  style={{
                    width: "clamp(36px, 5vw, 60px)",
                    height: "clamp(5px, 0.6vh, 8px)",
                    background: "rgba(255,255,255,0.08)",
                  }}
                />

                {/* Screen Content */}
                <div className="flex flex-col items-center gap-2">
                  <div
                    className="rounded-lg flex items-center justify-center"
                    style={{
                      width: "clamp(44px, 6vh, 68px)",
                      height: "clamp(44px, 6vh, 68px)",
                      background: "rgba(43,127,255,0.12)",
                      border: "1px solid rgba(43,127,255,0.3)",
                    }}
                  >
                    <Smartphone style={{ width: "clamp(22px, 3vh, 36px)", height: "clamp(22px, 3vh, 36px)" }} color="#2B7FFF" />
                  </div>
                  <p
                    className="font-bold text-[#EDEDEF] text-center"
                    style={{ fontSize: "clamp(11px, 1.4vh, 17px)" }}
                  >
                    Marketplace
                  </p>
                  <p
                    className="text-[#2B7FFF] text-center font-semibold"
                    style={{ fontSize: "clamp(9px, 1.1vh, 14px)" }}
                  >
                    Autoline
                  </p>
                </div>

                {/* Home indicator */}
                <div
                  className="absolute bottom-3 rounded-full"
                  style={{
                    width: "clamp(30px, 4vw, 50px)",
                    height: "clamp(4px, 0.5vh, 6px)",
                    background: "rgba(255,255,255,0.12)",
                  }}
                />
              </div>

              {/* Badge below phone */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                className="mt-3"
              >
                <span
                  className="px-4 py-1.5 rounded-full text-[#2B7FFF] font-bold uppercase tracking-wider"
                  style={{
                    fontSize: "clamp(8px, 0.9vh, 12px)",
                    background: "rgba(43,127,255,0.1)",
                    border: "1px solid rgba(43,127,255,0.25)",
                  }}
                >
                  Milhões de usuários ativos
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Bottom-Left: Engajamento */}
          <motion.div
            initial={{ opacity: 0, x: -20, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-start justify-end"
            style={{ gridColumn: "1", gridRow: "2" }}
          >
            <BenefitCard benefit={benefits[2]} />
          </motion.div>

          {/* Bottom-Right: Ofertas */}
          <motion.div
            initial={{ opacity: 0, x: 20, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex items-start justify-start"
            style={{ gridColumn: "3", gridRow: "2" }}
          >
            <BenefitCard benefit={benefits[3]} />
          </motion.div>
        </div>
      </div>

      {/* Callout Bottom */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="flex-shrink-0"
        style={{ marginTop: "clamp(4px, 0.6vh, 10px)" }}
      >
        <div
          className="relative rounded-xl overflow-hidden"
          style={{
            padding: "clamp(10px, 1.4vh, 18px) clamp(14px, 1.8vw, 32px)",
            background: "linear-gradient(135deg, rgba(43,127,255,0.06) 0%, rgba(204,30,58,0.04) 100%)",
            border: "1px solid rgba(43,127,255,0.15)",
            boxShadow: "0 0 20px rgba(43,127,255,0.04)",
          }}
        >
          <p
            className="text-center text-[#C5C5C7] font-medium"
            style={{ fontSize: "clamp(13px, 1.6vh, 20px)", lineHeight: "1.4" }}
          >
            <strong className="text-[#2B7FFF]">Embedded Marketplace</strong>{" "}
            — escala do Bradesco + inteligência Autoline = originação contínua de crédito automotivo.
          </p>
        </div>
      </motion.div>

      <SlideFooter />
    </div>
  );
}

function BenefitCard({ benefit }: { benefit: typeof benefits[number] }) {
  const isRed = benefit.color === "#CC1E3A";
  return (
    <div
      className="rounded-xl"
      style={{
        padding: "clamp(14px, 2vh, 24px) clamp(14px, 1.6vw, 26px)",
        background: "rgba(255,255,255,0.025)",
        border: `1px solid rgba(${isRed ? "204,30,58" : "43,127,255"}, 0.15)`,
        backdropFilter: "blur(12px)",
        maxWidth: "clamp(220px, 26vw, 340px)",
      }}
    >
      <div
        className="rounded-lg flex items-center justify-center"
        style={{
          width: "clamp(36px, 4.5vh, 54px)",
          height: "clamp(36px, 4.5vh, 54px)",
          background: `rgba(${isRed ? "204,30,58" : "43,127,255"}, 0.1)`,
          border: `1px solid rgba(${isRed ? "204,30,58" : "43,127,255"}, 0.25)`,
          marginBottom: "clamp(6px, 0.8vh, 12px)",
        }}
      >
        <benefit.icon
          style={{ width: "clamp(18px, 2.2vh, 28px)", height: "clamp(18px, 2.2vh, 28px)" }}
          color={benefit.color}
        />
      </div>
      <h4
        className="font-bold text-[#EDEDEF]"
        style={{ fontSize: "clamp(14px, 1.8vh, 22px)", lineHeight: "1.2", marginBottom: "clamp(3px, 0.4vh, 6px)" }}
      >
        {benefit.title}
      </h4>
      <p
        className="text-[#9A9A9E]"
        style={{ fontSize: "clamp(11px, 1.3vh, 16px)", lineHeight: "1.3" }}
      >
        {benefit.description}
      </p>
    </div>
  );
}
