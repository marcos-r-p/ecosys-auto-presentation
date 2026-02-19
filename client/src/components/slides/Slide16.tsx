import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, Filter, MapPin, Sparkles, ArrowRight, Car, TrendingUp } from "lucide-react";
import SlideFooter from "../SlideFooter";

/*
 * Design: Catálogo de Veículos redesenhado para apresentação presencial
 * - Busca IA como hero central com visual de interface de busca
 * - Filtros e Localidade como cards secundários
 * - Bullets curtos, sem parágrafos longos
 * - Mensagem de resultado final com glow
 * - Animação progressiva: hero → cards → resultado
 */

export default function Slide16() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 300),   // Header
      setTimeout(() => setPhase(2), 800),   // Hero - Busca IA
      setTimeout(() => setPhase(3), 1500),  // Cards secundários
      setTimeout(() => setPhase(4), 2200),  // Resultado
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="flex flex-col items-center justify-start h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-[120px] pr-16 pt-4 sm:pt-5 md:pt-6 lg:pt-8 pb-4 overflow-hidden">
      <div className="max-w-7xl w-full flex flex-col gap-3 md:gap-4 lg:gap-5">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={phase >= 1 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2
            className="font-extrabold tracking-tight text-[#EDEDEF]"
            style={{ fontSize: "clamp(24px, 4vh, 48px)", lineHeight: "1.1" }}
          >
            Catálogo de Veículos:{" "}
            <span className="text-[#2B7FFF]">Encontre o Carro Perfeito</span>
          </h2>
          <p
            className="text-[#8A8A8E] font-medium max-w-4xl mx-auto mt-2"
            style={{ fontSize: "clamp(12px, 1.5vh, 18px)" }}
          >
            Busca inteligente com IA + filtros avançados + localização — leads qualificados desde o primeiro clique
          </p>
        </motion.div>

        {/* Hero — Busca Inteligente com IA */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={phase >= 2 ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative bg-gradient-to-br from-[#2B7FFF]/10 to-[#2B7FFF]/5 border-2 border-[#2B7FFF]/30 rounded-2xl p-5 md:p-6">
            {/* Glow */}
            <div className="absolute inset-0 rounded-2xl bg-[#2B7FFF]/5 blur-xl" />

            <div className="relative flex flex-col md:flex-row gap-5 items-center">
              {/* Left: Search interface mockup */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-[#2B7FFF]/20 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-[#2B7FFF]" />
                  </div>
                  <div>
                    <span
                      className="text-[#2B7FFF] font-bold uppercase tracking-wider"
                      style={{ fontSize: "clamp(9px, 1vh, 12px)" }}
                    >
                      DIFERENCIAL PRINCIPAL
                    </span>
                    <h3
                      className="font-bold text-[#EDEDEF]"
                      style={{ fontSize: "clamp(18px, 2.5vh, 32px)" }}
                    >
                      Busca Inteligente com IA
                    </h3>
                  </div>
                </div>

                {/* Search bar mockup */}
                <div className="bg-white/[0.06] border border-white/10 rounded-xl px-4 py-3 flex items-center gap-3 mb-4">
                  <Search className="w-5 h-5 text-[#8A8A8E]" />
                  <span className="text-[#8A8A8E] italic" style={{ fontSize: "clamp(11px, 1.3vh, 16px)" }}>
                    "Quero um SUV econômico até 80 mil..."
                  </span>
                  <div className="ml-auto bg-[#2B7FFF] rounded-lg px-3 py-1">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Bullets */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    "Entende sinônimos e linguagem natural",
                    "Sugere resultados relevantes automaticamente",
                    "Acelera a jornada de compra em 3x",
                    "Gera leads pré-qualificados por intenção",
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#2B7FFF] mt-2 flex-shrink-0" />
                      <span className="text-[#C0C0C4]" style={{ fontSize: "clamp(11px, 1.3vh, 15px)" }}>
                        {text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Visual flow */}
              <div className="flex flex-col items-center gap-2 md:min-w-[180px]">
                <div className="bg-white/[0.04] border border-white/10 rounded-xl p-3 text-center w-full">
                  <Car className="w-6 h-6 text-[#2B7FFF] mx-auto mb-1" />
                  <span className="text-[#EDEDEF] font-semibold block" style={{ fontSize: "clamp(11px, 1.2vh, 14px)" }}>
                    Cliente digita
                  </span>
                  <span className="text-[#8A8A8E]" style={{ fontSize: "clamp(9px, 1vh, 12px)" }}>
                    linguagem natural
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-[#2B7FFF] rotate-90" />
                <div className="bg-white/[0.04] border border-white/10 rounded-xl p-3 text-center w-full">
                  <Sparkles className="w-6 h-6 text-[#2B7FFF] mx-auto mb-1" />
                  <span className="text-[#EDEDEF] font-semibold block" style={{ fontSize: "clamp(11px, 1.2vh, 14px)" }}>
                    IA processa
                  </span>
                  <span className="text-[#8A8A8E]" style={{ fontSize: "clamp(9px, 1vh, 12px)" }}>
                    sinônimos + contexto
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-[#2B7FFF] rotate-90" />
                <div className="bg-[#2B7FFF]/10 border border-[#2B7FFF]/30 rounded-xl p-3 text-center w-full">
                  <TrendingUp className="w-6 h-6 text-[#2B7FFF] mx-auto mb-1" />
                  <span className="text-[#2B7FFF] font-bold block" style={{ fontSize: "clamp(11px, 1.2vh, 14px)" }}>
                    Lead qualificado
                  </span>
                  <span className="text-[#8A8A8E]" style={{ fontSize: "clamp(9px, 1vh, 12px)" }}>
                    pronto para converter
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Secondary Cards — Filtros + Localidade */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={phase >= 3 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {/* Filtros Avançados */}
          <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-4 hover:border-white/[0.15] transition-all">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-white/[0.06] flex items-center justify-center">
                <Filter className="w-5 h-5 text-[#EDEDEF]" />
              </div>
              <h3 className="font-bold text-[#EDEDEF]" style={{ fontSize: "clamp(16px, 2vh, 24px)" }}>
                Filtros Avançados
              </h3>
            </div>
            <div className="space-y-1.5">
              {[
                "Marca, modelo, ano, faixa de preço",
                "Quilometragem, combustível, transmissão, cor",
                "Personalização total da busca",
                "Otimiza tempo do cliente e do vendedor",
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8A8A8E] mt-2 flex-shrink-0" />
                  <span className="text-[#C0C0C4]" style={{ fontSize: "clamp(11px, 1.3vh, 15px)" }}>
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Filtro por Localidade */}
          <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-4 hover:border-white/[0.15] transition-all">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-white/[0.06] flex items-center justify-center">
                <MapPin className="w-5 h-5 text-[#EDEDEF]" />
              </div>
              <h3 className="font-bold text-[#EDEDEF]" style={{ fontSize: "clamp(16px, 2vh, 24px)" }}>
                Filtro por Localidade
              </h3>
            </div>
            <div className="space-y-1.5">
              {[
                "Busca por região ou cidade específica",
                "Raio de busca configurável",
                "Revenda mais próxima do consumidor",
                "Facilita visita presencial e negociação",
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8A8A8E] mt-2 flex-shrink-0" />
                  <span className="text-[#C0C0C4]" style={{ fontSize: "clamp(11px, 1.3vh, 15px)" }}>
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Resultado Final */}
        <AnimatePresence>
          {phase >= 4 && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-xl bg-[#2B7FFF]/8 blur-2xl" />
              <div className="relative bg-gradient-to-r from-[#2B7FFF]/10 to-transparent border border-[#2B7FFF]/20 rounded-xl px-6 py-4 flex items-center justify-center gap-4">
                <TrendingUp className="w-6 h-6 text-[#2B7FFF] flex-shrink-0" />
                <div className="text-center">
                  <p
                    className="text-[#EDEDEF] font-bold"
                    style={{ fontSize: "clamp(14px, 1.8vh, 22px)" }}
                  >
                    Cada busca é uma oportunidade de venda —{" "}
                    <span className="text-[#2B7FFF]">a IA garante que nenhuma se perca</span>
                  </p>
                  <p className="text-[#8A8A8E] mt-1" style={{ fontSize: "clamp(10px, 1.1vh, 14px)" }}>
                    Descoberta inteligente = leads qualificados = mais conversão = mais receita para o Bradesco
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <SlideFooter />
    </div>
  );
}
