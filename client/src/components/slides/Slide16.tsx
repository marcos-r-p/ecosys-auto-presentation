import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Search,
  Filter,
  MapPin,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Users,
  Target,
} from "lucide-react";
import SlideFooter from "../SlideFooter";

/*
 * Design: Catálogo de Veículos — Valor Comercial
 * Foco: geração de leads qualificados + melhoria da experiência de compra
 * Layout: Busca IA como hero (protagonista) → 2 cards secundários lado a lado → resultado de impacto
 * Hierarquia: IA > Filtros > Localidade > Resultado
 * Animação: header → hero IA → cards → resultado com glow
 * Estilo executivo, escaneável à distância
 */

export default function Slide16() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 300),
      setTimeout(() => setPhase(2), 800),
      setTimeout(() => setPhase(3), 1600),
      setTimeout(() => setPhase(4), 2400),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="flex flex-col items-center justify-start h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-[120px] pr-16 pt-2 sm:pt-3 md:pt-3 lg:pt-4 pb-2 overflow-hidden">
      <div className="max-w-7xl w-full flex flex-col h-full">
        {/* ── HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={phase >= 1 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center flex-shrink-0"
        >
          <h2
            className="font-extrabold tracking-tight text-[#EDEDEF]"
            style={{
              fontSize: "clamp(22px, 3.6vh, 42px)",
              lineHeight: "1.1",
              marginBottom: "clamp(4px, 0.5vh, 8px)",
            }}
          >
            Catálogo de Veículos:{" "}
            <span className="text-[#2B7FFF]">Geração de Leads Qualificados</span>
          </h2>
          <p
            className="text-[#8A8A8E] max-w-3xl mx-auto"
            style={{ fontSize: "clamp(11px, 1.3vh, 16px)" }}
          >
            Experiência de busca que converte visitantes em oportunidades reais de venda
          </p>
        </motion.div>

        {/* ── CONTEÚDO PRINCIPAL ── */}
        <div className="flex-1 flex flex-col justify-center min-h-0">

          {/* HERO — Busca Inteligente com IA */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={phase >= 2 ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="relative mb-3"
          >
            <div className="absolute -inset-1 rounded-2xl bg-[#2B7FFF]/8 blur-xl" />
            <div className="relative bg-gradient-to-br from-[#2B7FFF]/[0.08] to-[#2B7FFF]/[0.02] border-2 border-[#2B7FFF]/30 rounded-2xl p-4">
              <div className="flex items-start gap-4">
                {/* Left: Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-11 h-11 rounded-xl bg-[#2B7FFF]/20 flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-6 h-6 text-[#2B7FFF]" />
                    </div>
                    <div>
                      <span
                        className="text-[#2B7FFF] font-bold uppercase tracking-wider"
                        style={{ fontSize: "clamp(8px, 0.9vh, 11px)" }}
                      >
                        Diferencial Principal
                      </span>
                      <h3
                        className="font-bold text-[#EDEDEF]"
                        style={{ fontSize: "clamp(17px, 2.4vh, 28px)", lineHeight: "1.2" }}
                      >
                        Busca Inteligente com IA
                      </h3>
                    </div>
                  </div>

                  {/* Search bar mockup */}
                  <div className="bg-white/[0.05] border border-white/10 rounded-xl px-4 py-2.5 flex items-center gap-3 mb-3">
                    <Search className="w-4 h-4 text-[#8A8A8E] flex-shrink-0" />
                    <span className="text-[#8A8A8E] italic" style={{ fontSize: "clamp(10px, 1.2vh, 14px)" }}>
                      "Quero um SUV econômico até 80 mil..."
                    </span>
                    <div className="ml-auto bg-[#2B7FFF] rounded-lg px-2.5 py-1 flex-shrink-0">
                      <ArrowRight className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>

                  {/* Bullets — benefícios de negócio */}
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
                    {[
                      { icon: Sparkles, text: "Entende linguagem natural", color: "#2B7FFF" },
                      { icon: Target, text: "Leads pré-qualificados por intenção", color: "#10B981" },
                      { icon: TrendingUp, text: "Jornada de compra 3x mais rápida", color: "#F59E0B" },
                      { icon: Users, text: "Mais conversão por vendedor", color: "#8B5CF6" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <item.icon
                          className="w-3.5 h-3.5 flex-shrink-0"
                          style={{ color: item.color }}
                        />
                        <span
                          className="text-[#C0C0C4]"
                          style={{ fontSize: "clamp(10px, 1.2vh, 14px)" }}
                        >
                          {item.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Visual flow vertical */}
                <div className="hidden md:flex flex-col items-center gap-1.5 flex-shrink-0" style={{ width: "clamp(130px, 14vw, 170px)" }}>
                  {[
                    { icon: Search, label: "Cliente digita", sub: "linguagem natural", bg: "bg-white/[0.04]", border: "border-white/10", iconColor: "text-[#8A8A8E]" },
                    { icon: Sparkles, label: "IA processa", sub: "sinônimos + contexto", bg: "bg-white/[0.04]", border: "border-white/10", iconColor: "text-[#2B7FFF]" },
                    { icon: TrendingUp, label: "Lead qualificado", sub: "pronto para converter", bg: "bg-[#2B7FFF]/10", border: "border-[#2B7FFF]/30", iconColor: "text-[#2B7FFF]" },
                  ].map((step, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 15 }}
                      animate={phase >= 2 ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: 0.2 + i * 0.15 }}
                      className="w-full"
                    >
                      {i > 0 && (
                        <div className="flex justify-center mb-1">
                          <ArrowRight className="w-3 h-3 text-[#2B7FFF]/50 rotate-90" />
                        </div>
                      )}
                      <div className={`${step.bg} border ${step.border} rounded-lg p-2 text-center`}>
                        <step.icon className={`w-4 h-4 ${step.iconColor} mx-auto mb-0.5`} />
                        <span className="text-[#EDEDEF] font-semibold block" style={{ fontSize: "clamp(9px, 1vh, 12px)" }}>
                          {step.label}
                        </span>
                        <span className="text-[#8A8A8E]" style={{ fontSize: "clamp(8px, 0.8vh, 10px)" }}>
                          {step.sub}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* CARDS SECUNDÁRIOS — Filtros + Localidade */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={phase >= 3 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 gap-3 mb-3"
          >
            {/* Filtros Avançados */}
            <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-3.5 hover:border-white/[0.15] transition-all">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-9 h-9 rounded-lg bg-white/[0.06] flex items-center justify-center flex-shrink-0">
                  <Filter className="w-5 h-5 text-[#EDEDEF]" />
                </div>
                <h3 className="font-bold text-[#EDEDEF]" style={{ fontSize: "clamp(14px, 1.8vh, 20px)" }}>
                  Filtros Avançados
                </h3>
              </div>
              <div className="space-y-1">
                {[
                  "Marca, modelo, ano, preço",
                  "Km, combustível, câmbio, cor",
                  "Otimiza tempo do vendedor",
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-[#8A8A8E] flex-shrink-0" />
                    <span className="text-[#C0C0C4]" style={{ fontSize: "clamp(10px, 1.1vh, 13px)" }}>
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Filtro por Localidade */}
            <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-3.5 hover:border-white/[0.15] transition-all">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-9 h-9 rounded-lg bg-white/[0.06] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#EDEDEF]" />
                </div>
                <h3 className="font-bold text-[#EDEDEF]" style={{ fontSize: "clamp(14px, 1.8vh, 20px)" }}>
                  Filtro por Localidade
                </h3>
              </div>
              <div className="space-y-1">
                {[
                  "Busca por região ou cidade",
                  "Revenda mais próxima do cliente",
                  "Facilita visita e negociação",
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-[#8A8A8E] flex-shrink-0" />
                    <span className="text-[#C0C0C4]" style={{ fontSize: "clamp(10px, 1.1vh, 13px)" }}>
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── RESULTADO DE IMPACTO ── */}
          <AnimatePresence>
            {phase >= 4 && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative flex-shrink-0"
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#2B7FFF]/10 via-[#10B981]/6 to-[#F59E0B]/6 blur-lg animate-pulse" />
                <div className="relative rounded-xl border border-[#2B7FFF]/20 bg-white/[0.03] px-5 py-3 flex items-center justify-center gap-3">
                  <TrendingUp className="w-5 h-5 text-[#2B7FFF] flex-shrink-0" />
                  <p
                    className="text-[#EDEDEF] font-bold text-center"
                    style={{ fontSize: "clamp(12px, 1.5vh, 18px)" }}
                  >
                    Cada busca é uma oportunidade —{" "}
                    <span className="text-[#10B981]">leads qualificados</span> ={" "}
                    <span className="text-[#F59E0B]">mais receita</span> para o Bradesco
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
