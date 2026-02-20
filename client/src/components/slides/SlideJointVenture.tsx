import { motion } from "motion/react";
import { Handshake, Users, Cpu, Globe, TrendingUp, Target, Crown, Rocket, ArrowRight } from "lucide-react";
import SlideFooter from "../SlideFooter";

/*
 * Design: Slide premium de Joint Venture como alternativa estratégica à aquisição de código.
 * ecosys AUTO + Bradesco Financiamentos = Liderança no mercado automotivo brasileiro
 * Layout: Logo partnership no topo, dois blocos de aportes lado a lado, visão de resultado embaixo.
 */

const ECOSYS_LOGO = "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030817825/KCJZHdgEFRsEMPJa.png";
const BRADESCO_LOGO = "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030817825/niLdqFSxPjAEfTYo.svg";

export default function SlideJointVenture() {
  return (
    <div className="flex flex-col h-full overflow-hidden" style={{ padding: "0 clamp(16px, 3vw, 60px)" }}>
      {/* Título */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center shrink-0"
        style={{ paddingTop: "clamp(10px, 2vh, 28px)", paddingBottom: "clamp(4px, 0.8vh, 12px)" }}
      >
        <div className="flex items-center justify-center gap-2 mb-1">
          <Handshake style={{ width: "clamp(18px, 2.5vh, 32px)", height: "clamp(18px, 2.5vh, 32px)" }} className="text-[#F7B500]" />
          <h2
            className="font-extrabold text-[#EDEDEF] tracking-tight"
            style={{ fontSize: "clamp(20px, 3.5vh, 44px)", lineHeight: "1.1" }}
          >
            Alternativa Estratégica: <span className="text-[#F7B500]">Joint Venture</span>
          </h2>
        </div>
        <p className="text-[#8A8A8E]" style={{ fontSize: "clamp(9px, 1.2vh, 15px)" }}>
          Uma oportunidade além da aquisição de código
        </p>
      </motion.div>

      {/* Conteúdo principal */}
      <div className="flex-1 flex flex-col justify-center w-full max-w-6xl mx-auto" style={{ gap: "clamp(6px, 1vh, 16px)" }}>

        {/* Partnership Header - Logos */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center justify-center rounded-xl"
          style={{
            padding: "clamp(10px, 1.5vh, 22px) clamp(16px, 2vw, 40px)",
            background: "linear-gradient(135deg, rgba(247,181,0,0.06), rgba(43,127,255,0.06))",
            border: "1.5px solid rgba(247,181,0,0.2)",
          }}
        >
          <div className="flex items-center justify-center flex-wrap" style={{ gap: "clamp(12px, 2vw, 40px)" }}>
            {/* ecosys AUTO */}
            <div className="flex items-center" style={{ gap: "clamp(6px, 1vw, 14px)" }}>
              <img
                src={ECOSYS_LOGO}
                alt="ecosys AUTO"
                style={{ height: "clamp(28px, 4vh, 52px)", width: "auto" }}
              />
            </div>

            {/* Plus / Handshake symbol */}
            <div
              className="rounded-full flex items-center justify-center shrink-0"
              style={{
                width: "clamp(32px, 4.5vh, 56px)",
                height: "clamp(32px, 4.5vh, 56px)",
                background: "linear-gradient(135deg, rgba(247,181,0,0.2), rgba(204,9,47,0.2))",
                border: "2px solid rgba(247,181,0,0.4)",
              }}
            >
              <Handshake style={{ width: "clamp(16px, 2vh, 28px)", height: "clamp(16px, 2vh, 28px)" }} className="text-[#F7B500]" />
            </div>

            {/* Bradesco Financiamentos */}
            <div className="flex items-center" style={{ gap: "clamp(6px, 1vw, 14px)" }}>
              <img
                src={BRADESCO_LOGO}
                alt="Bradesco Financiamentos"
                style={{ height: "clamp(24px, 3.5vh, 44px)", width: "auto" }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = document.createElement('span');
                  fallback.className = 'text-[#CC092F] font-bold';
                  fallback.style.fontSize = 'clamp(14px, 2vh, 24px)';
                  fallback.textContent = 'bradesco financiamentos';
                  target.parentElement?.appendChild(fallback);
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* Dois blocos de aportes lado a lado */}
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "clamp(8px, 1vw, 20px)" }}>
          {/* ecosys AUTO - Aportes */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="rounded-xl overflow-hidden"
            style={{
              padding: "clamp(10px, 1.5vh, 22px) clamp(12px, 1.5vw, 28px)",
              background: "linear-gradient(160deg, rgba(43,127,255,0.08), rgba(43,127,255,0.02))",
              border: "1.5px solid rgba(43,127,255,0.25)",
            }}
          >
            <div className="flex items-center gap-2 mb-3">
              <img
                src={ECOSYS_LOGO}
                alt="ecosys AUTO"
                style={{ height: "clamp(18px, 2.2vh, 30px)", width: "auto" }}
              />
              <span className="font-bold text-[#2B7FFF]" style={{ fontSize: "clamp(11px, 1.4vh, 18px)" }}>Aporta</span>
            </div>

            <div className="flex flex-col" style={{ gap: "clamp(5px, 0.7vh, 10px)" }}>
              {[
                { icon: Users, text: "Toda a base de revendas ativas na época da parceria", highlight: "Base de Clientes" },
                { icon: Cpu, text: "Plataforma Autoline completa (DMS + Marketplace + IA)", highlight: "Tecnologia" },
                { icon: Target, text: "7 anos de expertise no ecossistema automotivo", highlight: "Know-how" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2 bg-white/[0.04] rounded-lg"
                  style={{ padding: "clamp(6px, 0.8vh, 14px) clamp(8px, 1vw, 16px)" }}
                >
                  <div
                    className="rounded-md flex items-center justify-center shrink-0 mt-0.5"
                    style={{
                      width: "clamp(22px, 2.8vh, 34px)",
                      height: "clamp(22px, 2.8vh, 34px)",
                      background: "rgba(43,127,255,0.12)",
                      border: "1px solid rgba(43,127,255,0.3)",
                    }}
                  >
                    <item.icon style={{ width: "clamp(11px, 1.3vh, 18px)", height: "clamp(11px, 1.3vh, 18px)" }} className="text-[#2B7FFF]" />
                  </div>
                  <div>
                    <span className="font-bold text-[#2B7FFF] block" style={{ fontSize: "clamp(9px, 1.1vh, 14px)" }}>{item.highlight}</span>
                    <span className="text-[#C8C8CD]" style={{ fontSize: "clamp(8px, 1vh, 13px)" }}>{item.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Bradesco Financiamentos - Aportes */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="rounded-xl overflow-hidden"
            style={{
              padding: "clamp(10px, 1.5vh, 22px) clamp(12px, 1.5vw, 28px)",
              background: "linear-gradient(160deg, rgba(204,9,47,0.08), rgba(204,9,47,0.02))",
              border: "1.5px solid rgba(204,9,47,0.25)",
            }}
          >
            <div className="flex items-center gap-2 mb-3">
              <img
                src={BRADESCO_LOGO}
                alt="Bradesco Financiamentos"
                style={{ height: "clamp(16px, 2vh, 26px)", width: "auto" }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = document.createElement('span');
                  fallback.className = 'text-[#CC092F] font-bold';
                  fallback.style.fontSize = 'clamp(11px, 1.4vh, 18px)';
                  fallback.textContent = 'Bradesco Financiamentos';
                  target.parentElement?.appendChild(fallback);
                }}
              />
              <span className="font-bold text-[#CC092F]" style={{ fontSize: "clamp(11px, 1.4vh, 18px)" }}>Aporta</span>
            </div>

            <div className="flex flex-col" style={{ gap: "clamp(5px, 0.7vh, 10px)" }}>
              {[
                { icon: Crown, text: "Marca líder e credibilidade institucional no mercado financeiro", highlight: "Força Estratégica" },
                { icon: TrendingUp, text: "Capital e estrutura para escalar operação nacionalmente", highlight: "Força Financeira" },
                { icon: Globe, text: "Rede de relacionamentos para expansão internacional", highlight: "Alcance Global" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2 bg-white/[0.04] rounded-lg"
                  style={{ padding: "clamp(6px, 0.8vh, 14px) clamp(8px, 1vw, 16px)" }}
                >
                  <div
                    className="rounded-md flex items-center justify-center shrink-0 mt-0.5"
                    style={{
                      width: "clamp(22px, 2.8vh, 34px)",
                      height: "clamp(22px, 2.8vh, 34px)",
                      background: "rgba(204,9,47,0.12)",
                      border: "1px solid rgba(204,9,47,0.3)",
                    }}
                  >
                    <item.icon style={{ width: "clamp(11px, 1.3vh, 18px)", height: "clamp(11px, 1.3vh, 18px)" }} className="text-[#CC092F]" />
                  </div>
                  <div>
                    <span className="font-bold text-[#CC092F] block" style={{ fontSize: "clamp(9px, 1.1vh, 14px)" }}>{item.highlight}</span>
                    <span className="text-[#C8C8CD]" style={{ fontSize: "clamp(8px, 1vh, 13px)" }}>{item.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Resultado da JV - Bloco de impacto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="rounded-xl relative overflow-hidden"
          style={{
            padding: "clamp(12px, 1.8vh, 26px) clamp(16px, 2vw, 36px)",
            background: "linear-gradient(135deg, rgba(247,181,0,0.1), rgba(247,181,0,0.03))",
            border: "1.5px solid rgba(247,181,0,0.3)",
          }}
        >
          {/* Glow effect */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at center, rgba(247,181,0,0.06) 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <Rocket style={{ width: "clamp(16px, 2vh, 24px)", height: "clamp(16px, 2vh, 24px)" }} className="text-[#F7B500]" />
              <h3 className="font-bold text-[#F7B500]" style={{ fontSize: "clamp(13px, 1.7vh, 22px)" }}>
                Resultado da Joint Venture
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "clamp(8px, 1vw, 20px)" }}>
              {/* Liderança */}
              <div
                className="rounded-lg text-center"
                style={{
                  padding: "clamp(10px, 1.3vh, 20px)",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(247,181,0,0.15)",
                }}
              >
                <div className="flex items-center justify-center gap-1 mb-2">
                  <Crown style={{ width: "clamp(14px, 1.6vh, 22px)", height: "clamp(14px, 1.6vh, 22px)" }} className="text-[#F7B500]" />
                </div>
                <p className="font-extrabold text-[#EDEDEF]" style={{ fontSize: "clamp(12px, 1.5vh, 20px)" }}>
                  Liderança com folga
                </p>
                <p className="text-[#C8C8CD]" style={{ fontSize: "clamp(8px, 1vh, 13px)" }}>
                  no market share do financiamento auto no Brasil
                </p>
              </div>

              {/* Expansão */}
              <div
                className="rounded-lg text-center"
                style={{
                  padding: "clamp(10px, 1.3vh, 20px)",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(247,181,0,0.15)",
                }}
              >
                <div className="flex items-center justify-center gap-1 mb-2">
                  <Globe style={{ width: "clamp(14px, 1.6vh, 22px)", height: "clamp(14px, 1.6vh, 22px)" }} className="text-[#F7B500]" />
                </div>
                <p className="font-extrabold text-[#EDEDEF]" style={{ fontSize: "clamp(12px, 1.5vh, 20px)" }}>
                  Expansão internacional
                </p>
                <p className="text-[#C8C8CD]" style={{ fontSize: "clamp(8px, 1vh, 13px)" }}>
                  Oportunidades em mercados automotivos de outros países
                </p>
              </div>

              {/* Ecossistema */}
              <div
                className="rounded-lg text-center"
                style={{
                  padding: "clamp(10px, 1.3vh, 20px)",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(247,181,0,0.15)",
                }}
              >
                <div className="flex items-center justify-center gap-1 mb-2">
                  <TrendingUp style={{ width: "clamp(14px, 1.6vh, 22px)", height: "clamp(14px, 1.6vh, 22px)" }} className="text-[#F7B500]" />
                </div>
                <p className="font-extrabold text-[#EDEDEF]" style={{ fontSize: "clamp(12px, 1.5vh, 20px)" }}>
                  Ecossistema completo
                </p>
                <p className="text-[#C8C8CD]" style={{ fontSize: "clamp(8px, 1vh, 13px)" }}>
                  Tecnologia + Capital + Rede = plataforma imbatível
                </p>
              </div>
            </div>

            {/* Call to action */}
            <div className="flex items-center justify-center mt-3" style={{ gap: "clamp(6px, 1vw, 14px)" }}>
              <ArrowRight style={{ width: "clamp(12px, 1.4vh, 18px)", height: "clamp(12px, 1.4vh, 18px)" }} className="text-[#F7B500]" />
              <p className="text-[#EDEDEF] font-semibold text-center" style={{ fontSize: "clamp(10px, 1.3vh, 17px)" }}>
                Uma parceria que une <span className="text-[#2B7FFF]">inovação tecnológica</span> e <span className="text-[#CC092F]">potência financeira</span> para dominar o mercado
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <SlideFooter />
    </div>
  );
}
