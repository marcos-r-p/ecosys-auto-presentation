import { useState } from "react";
import { motion } from "motion/react";
import { Share2, MessageCircle, TrendingUp, CheckCircle2, ArrowRight } from "lucide-react";
import SlideFooter from "../SlideFooter";

/*
 * Design: Comunicação Unificada para Maximizar a Conversão
 * - Dois blocos com bullets curtos e canais visuais em badges
 * - CRM Omnichannel com maior destaque (borda azul + glow)
 * - Resultado central com glow pulsante
 * - Animação sequencial: Redes Sociais → CRM → Resultado
 */

const socialChannels = [
  { name: "Facebook", color: "#1877F2" },
  { name: "Instagram", color: "#E4405F" },
  { name: "Meta Marketplace", color: "#0084FF" },
];

const crmChannels = [
  { name: "WhatsApp", color: "#25D366" },
  { name: "OLX", color: "#6E0AD6" },
  { name: "Instagram", color: "#E4405F" },
  { name: "Facebook", color: "#1877F2" },
  { name: "Marketplace", color: "#2B7FFF" },
];

const socialBullets = [
  "Publicação automática do estoque nas redes",
  "Leads qualificados direto das redes sociais",
  "Visibilidade massiva sem esforço manual",
];

const crmBullets = [
  "Todas as conversas em uma única plataforma",
  "Nenhuma proposta fica sem resposta",
  "Tempo de resposta reduzido drasticamente",
  "Taxa de conversão de leads ampliada",
];

export default function Slide11() {
  const [hoveredBlock, setHoveredBlock] = useState<string | null>(null);

  return (
    <div className="flex flex-col items-center justify-start h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-[120px] pt-4 sm:pt-5 md:pt-6 lg:pt-8 pb-4 overflow-hidden">
      <div className="max-w-7xl w-full flex flex-col h-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <h2
            className="font-extrabold tracking-tight text-[#EDEDEF]"
            style={{ fontSize: "clamp(24px, 3.8vh, 44px)", lineHeight: "1.1", marginBottom: "clamp(4px, 0.8vh, 12px)" }}
          >
            Comunicação Unificada para{" "}
            <span className="text-[#2B7FFF]">Maximizar a Conversão</span>
          </h2>
          <p className="text-[#8A8A8E] max-w-3xl mx-auto" style={{ fontSize: "clamp(12px, 1.5vh, 18px)" }}>
            Integrar e centralizar a comunicação do lojista para que nenhuma oportunidade de venda seja perdida
          </p>
        </motion.div>

        {/* Two blocks side by side */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-5 flex-1 min-h-0">
          {/* Block 1: Integração Redes Sociais — 2/5 width */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2 relative group"
            onMouseEnter={() => setHoveredBlock("social")}
            onMouseLeave={() => setHoveredBlock(null)}
          >
            <div
              className={`relative h-full rounded-2xl border transition-all duration-300 p-5 flex flex-col ${
                hoveredBlock === "social"
                  ? "bg-white/[0.06] border-white/[0.15]"
                  : "bg-white/[0.03] border-white/[0.08]"
              }`}
            >
              {/* Icon + Title */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-white/[0.06] flex items-center justify-center flex-shrink-0">
                  <Share2 className="w-5 h-5 text-[#8A8A8E]" />
                </div>
                <h3 className="font-bold text-[#EDEDEF]" style={{ fontSize: "clamp(16px, 2vh, 22px)" }}>
                  Redes Sociais
                </h3>
              </div>

              {/* Channel badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {socialChannels.map((ch) => (
                  <span
                    key={ch.name}
                    className="px-3 py-1 rounded-full text-xs font-semibold text-white"
                    style={{ backgroundColor: ch.color + "22", border: `1px solid ${ch.color}55`, color: ch.color }}
                  >
                    {ch.name}
                  </span>
                ))}
              </div>

              {/* Bullets */}
              <div className="space-y-2.5 flex-1">
                {socialBullets.map((bullet, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                    className="flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#8A8A8E] mt-0.5 flex-shrink-0" />
                    <span className="text-[#C0C0C4] leading-snug" style={{ fontSize: "clamp(12px, 1.4vh, 16px)" }}>
                      {bullet}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Block 2: eConversa CRM Omnichannel — 3/5 width, maior destaque */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-3 relative group"
            onMouseEnter={() => setHoveredBlock("crm")}
            onMouseLeave={() => setHoveredBlock(null)}
          >
            {/* Glow background for CRM */}
            <div
              className="absolute -inset-[1px] rounded-2xl opacity-40 blur-sm transition-opacity duration-300"
              style={{
                background: "linear-gradient(135deg, #2B7FFF33, #8B5CF633)",
                opacity: hoveredBlock === "crm" ? 0.6 : 0.25,
              }}
            />
            <div
              className={`relative h-full rounded-2xl border transition-all duration-300 p-5 flex flex-col ${
                hoveredBlock === "crm"
                  ? "bg-white/[0.06] border-[#2B7FFF]/40"
                  : "bg-white/[0.03] border-[#2B7FFF]/20"
              }`}
            >
              {/* Icon + Title + Badge */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#2B7FFF]/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-[#2B7FFF]" />
                </div>
                <h3 className="font-bold text-[#EDEDEF]" style={{ fontSize: "clamp(16px, 2vh, 22px)" }}>
                  eConversa — CRM Omnichannel
                </h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#2B7FFF]/15 text-[#2B7FFF] border border-[#2B7FFF]/30">
                  Principal
                </span>
              </div>

              {/* Channel badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {crmChannels.map((ch) => (
                  <span
                    key={ch.name}
                    className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ backgroundColor: ch.color + "18", border: `1px solid ${ch.color}44`, color: ch.color }}
                  >
                    {ch.name}
                  </span>
                ))}
              </div>

              {/* Bullets in 2 columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5 flex-1">
                {crmBullets.map((bullet, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}
                    className="flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#2B7FFF] mt-0.5 flex-shrink-0" />
                    <span className="text-[#C0C0C4] leading-snug" style={{ fontSize: "clamp(12px, 1.4vh, 16px)" }}>
                      {bullet}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Visual flow: channels → single platform */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 1 }}
                className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-center gap-3"
              >
                <span className="text-[#8A8A8E] text-xs">5 canais</span>
                <ArrowRight className="w-4 h-4 text-[#2B7FFF]" />
                <span className="text-[#EDEDEF] text-xs font-semibold">1 plataforma</span>
                <ArrowRight className="w-4 h-4 text-[#2B7FFF]" />
                <span className="text-[#2B7FFF] text-xs font-bold">0 leads perdidos</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Result Banner — central conclusion */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-5 relative"
        >
          {/* Glow behind */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#2B7FFF]/20 via-[#2B7FFF]/10 to-[#2B7FFF]/20 blur-lg animate-pulse" />
          <div className="relative rounded-xl border border-[#2B7FFF]/30 bg-[#2B7FFF]/[0.06] px-6 py-4 flex items-center justify-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#2B7FFF]/15 flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-5 h-5 text-[#2B7FFF]" />
            </div>
            <div className="text-center">
              <p className="text-[#EDEDEF] font-bold" style={{ fontSize: "clamp(14px, 1.8vh, 20px)" }}>
                Nenhuma oportunidade de venda será perdida
              </p>
              <p className="text-[#2B7FFF] text-sm font-medium mt-0.5">
                Comunicação centralizada = mais conversão = mais receita
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <SlideFooter />
    </div>
  );
}
