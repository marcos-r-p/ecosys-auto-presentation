import { motion } from "motion/react";
import { Database, Brain, Building2 } from "lucide-react";
import SlideFooter from "../SlideFooter";

export default function Slide9() {
  return (
    <div className="flex flex-col h-full px-6 sm:px-8 md:px-12 lg:px-16 pt-4 pb-1 overflow-hidden">
      {/* Header — título dominante */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center mb-3"
      >
        <h2
          className="font-black tracking-tight text-[#EDEDEF] leading-none"
          style={{ fontSize: "clamp(28px, 4.5vh, 56px)" }}
        >
          Gestor Autoline
        </h2>
        <p
          className="text-[#8A8A8E] font-medium mt-1"
          style={{ fontSize: "clamp(13px, 1.5vh, 18px)" }}
        >
          Plataforma que conecta revenda, força comercial e originação financeira
        </p>
      </motion.div>

      {/* Three Blocks — flex-1 para preencher toda a altura disponível */}
      <div className="flex-1 grid grid-cols-3 gap-3 md:gap-4 min-h-0">
        {/* BLOCO 1 — Base Operacional */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.12 }}
          className="flex"
        >
          <div
            className="flex flex-col w-full rounded-2xl px-5 md:px-6 py-4 md:py-5"
            style={{
              background: "rgba(43,127,255,0.05)",
              border: "1px solid rgba(43,127,255,0.15)",
            }}
          >
            {/* Icon grande + Title */}
            <div className="flex items-center gap-3 mb-3">
              <div
                className="w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg, rgba(43,127,255,0.2), rgba(43,127,255,0.08))",
                  border: "1.5px solid rgba(43,127,255,0.35)",
                }}
              >
                <Database className="w-7 h-7 md:w-8 md:h-8 text-[#2B7FFF]" />
              </div>
              <div>
                <h3
                  className="font-extrabold text-[#EDEDEF] leading-tight"
                  style={{ fontSize: "clamp(18px, 2.5vh, 30px)" }}
                >
                  Base Operacional
                </h3>
                <span
                  className="font-bold uppercase tracking-[0.15em] text-[#2B7FFF]"
                  style={{ fontSize: "clamp(9px, 1vh, 12px)" }}
                >
                  ECOSYS CORE
                </span>
              </div>
            </div>

            {/* Divider */}
            <div
              className="h-px w-full mb-4"
              style={{ background: "linear-gradient(to right, rgba(43,127,255,0.4), transparent)" }}
            />

            {/* Items — espaçados para preencher */}
            <ul className="flex flex-col justify-between flex-1 gap-3 md:gap-4">
              {[
                "Gestão de estoque e vendas",
                "CRM e funil comercial",
                "Controle financeiro e DRE",
                "Comunicação omnichannel",
                "App do vendedor mobile",
              ].map((item, j) => (
                <li key={j} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full flex-shrink-0 bg-[#2B7FFF] opacity-70" />
                  <span
                    className="text-[#C8C8CD] font-medium leading-snug"
                    style={{ fontSize: "clamp(14px, 1.8vh, 22px)" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* BLOCO 2 — Inteligência IA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.24 }}
          className="flex"
        >
          <div
            className="flex flex-col w-full rounded-2xl px-5 md:px-6 py-4 md:py-5"
            style={{
              background: "rgba(139,92,246,0.05)",
              border: "1px solid rgba(139,92,246,0.15)",
            }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div
                className="w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg, rgba(139,92,246,0.2), rgba(139,92,246,0.08))",
                  border: "1.5px solid rgba(139,92,246,0.35)",
                }}
              >
                <Brain className="w-7 h-7 md:w-8 md:h-8 text-[#8B5CF6]" />
              </div>
              <div>
                <h3
                  className="font-extrabold text-[#EDEDEF] leading-tight"
                  style={{ fontSize: "clamp(18px, 2.5vh, 30px)" }}
                >
                  Inteligência IA
                </h3>
                <span
                  className="font-bold uppercase tracking-[0.15em] text-[#8B5CF6]"
                  style={{ fontSize: "clamp(9px, 1vh, 12px)" }}
                >
                  COPILOTO
                </span>
              </div>
            </div>

            <div
              className="h-px w-full mb-4"
              style={{ background: "linear-gradient(to right, rgba(139,92,246,0.4), transparent)" }}
            />

            <ul className="flex flex-col justify-between flex-1 gap-3 md:gap-4">
              {[
                "Priorização de oportunidades",
                "Health Score de lojistas",
                "Alertas de performance",
                "Margem e precificação",
                "Insights para GEFINS",
              ].map((item, j) => (
                <li key={j} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full flex-shrink-0 bg-[#8B5CF6] opacity-70" />
                  <span
                    className="text-[#C8C8CD] font-medium leading-snug"
                    style={{ fontSize: "clamp(14px, 1.8vh, 22px)" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* BLOCO 3 — Exclusivo Bradesco (DESTAQUE) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.36 }}
          className="flex"
        >
          <div
            className="flex flex-col w-full rounded-2xl px-5 md:px-6 py-4 md:py-5 relative overflow-hidden"
            style={{
              background: "rgba(204,9,47,0.08)",
              border: "2px solid rgba(204,9,47,0.35)",
              boxShadow: "0 0 40px rgba(204,9,47,0.08), inset 0 1px 0 rgba(204,9,47,0.15)",
            }}
          >
            {/* Badge de destaque */}
            <div
              className="absolute top-0 right-0 px-3 py-1 rounded-bl-lg font-bold uppercase tracking-wider text-white"
              style={{
                fontSize: "clamp(8px, 0.9vh, 11px)",
                background: "linear-gradient(135deg, #CC092F, #E01040)",
              }}
            >
              Diferencial
            </div>

            {/* Glow sutil no fundo */}
            <div
              className="absolute -top-20 -right-20 w-48 h-48 rounded-full opacity-20 pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(204,9,47,0.3), transparent 70%)",
              }}
            />

            <div className="flex items-center gap-3 mb-3 relative z-10">
              <div
                className="w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg, rgba(204,9,47,0.25), rgba(204,9,47,0.1))",
                  border: "1.5px solid rgba(204,9,47,0.45)",
                }}
              >
                <Building2 className="w-7 h-7 md:w-8 md:h-8 text-[#CC092F]" />
              </div>
              <div>
                <h3
                  className="font-extrabold text-white leading-tight"
                  style={{ fontSize: "clamp(18px, 2.5vh, 30px)" }}
                >
                  Exclusivo Bradesco
                </h3>
                <span
                  className="font-bold uppercase tracking-[0.15em] text-[#CC092F]"
                  style={{ fontSize: "clamp(9px, 1vh, 12px)" }}
                >
                  DIFERENCIAL COMPETITIVO
                </span>
              </div>
            </div>

            <div
              className="h-px w-full mb-4 relative z-10"
              style={{ background: "linear-gradient(to right, rgba(204,9,47,0.5), transparent)" }}
            />

            <ul className="flex flex-col justify-between flex-1 gap-3 md:gap-4 relative z-10">
              {[
                "Originação de crédito e seguros",
                "Share-of-wallet em tempo real",
                "Alertas de cross-sell",
                "Dashboard executivo",
                "Integração sistemas Bradesco",
              ].map((item, j) => (
                <li key={j} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full flex-shrink-0 bg-[#CC092F]" />
                  <span
                    className="text-[#E0E0E4] font-semibold leading-snug"
                    style={{ fontSize: "clamp(14px, 1.8vh, 22px)" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Footer message */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.6 }}
        className="text-center text-[#6A6A6E] italic mt-2"
        style={{ fontSize: "clamp(11px, 1.2vh, 15px)" }}
      >
        Infraestrutura digital da distribuição Bradesco no mercado de seminovos
      </motion.p>

      <SlideFooter />
    </div>
  );
}
