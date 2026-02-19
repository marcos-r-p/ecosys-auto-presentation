import { motion } from "motion/react";
import { Car, DollarSign, TrendingUp, ArrowRight, Zap, Target, CreditCard } from "lucide-react";
import SlideFooter from "../SlideFooter";

/*
 * Slide 17 — IA no Marketplace: Geração de Leads com Crédito Pré-Aprovado
 * Design: Fluxo horizontal de 3 etapas conectadas por setas
 * Hero: Vantagem Bradesco com glow vermelho
 * Resultado: Banner de impacto com conversão e crédito
 * Animação: Revelação sequencial das etapas → vantagem → resultado
 */

const steps = [
  {
    step: "01",
    title: "Descubra o Carro Ideal",
    subtitle: "IA recomenda veículos",
    icon: Car,
    bullets: [
      "Perfil + capacidade financeira",
      "Leads qualificados para revendas",
      "Jornada personalizada",
    ],
    color: "#3B82F6",
  },
  {
    step: "02",
    title: "Quanto Vale Meu Carro?",
    subtitle: "Captação de leads de troca",
    icon: DollarSign,
    bullets: [
      "Avaliação instantânea online",
      "Leads de troca para lojistas",
      "Base de captação ampliada",
    ],
    color: "#10B981",
  },
  {
    step: "03",
    title: "Simulação Digital",
    subtitle: "Crédito antes da revenda",
    icon: TrendingUp,
    bullets: [
      "Financiamento + seguros Bradesco",
      "Crédito pré-aprovado no anúncio",
      "Consumidor já chega qualificado",
    ],
    color: "#F59E0B",
  },
];

export default function Slide17() {
  return (
    <div className="flex flex-col items-center justify-start h-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-3 sm:pt-4 md:pt-5 pb-3 overflow-hidden">
      <div className="max-w-7xl w-full flex flex-col flex-1">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-3"
        >
          <p className="text-[#8A8A8E] uppercase tracking-[0.2em] mb-1" style={{ fontSize: "clamp(9px, 1.1vh, 13px)" }}>
            Jornada do consumidor no marketplace
          </p>
          <h2
            className="font-extrabold tracking-tight text-[#EDEDEF]"
            style={{ fontSize: "clamp(22px, 3.8vh, 44px)", lineHeight: "1.1", marginBottom: "clamp(4px, 0.8vh, 10px)" }}
          >
            IA Gerando Leads com{" "}
            <span className="text-[#E63946]">Crédito Pré-Aprovado</span>
          </h2>
          <p className="text-[#8A8A8E] max-w-4xl mx-auto" style={{ fontSize: "clamp(11px, 1.4vh, 17px)" }}>
            Cada interação no Marketplace origina crédito Bradesco antes do contato com a revenda
          </p>
        </motion.div>

        {/* Flow: 3 Steps connected by arrows */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex-1 flex flex-col justify-center"
        >
          <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-start gap-2 mb-4">
            {steps.map((step, index) => (
              <>
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                  className="relative"
                >
                  {/* Step number badge */}
                  <div
                    className="absolute -top-2 left-3 px-2 py-0.5 rounded-full text-white font-bold z-10"
                    style={{ backgroundColor: step.color, fontSize: "clamp(9px, 1vh, 12px)" }}
                  >
                    ETAPA {step.step}
                  </div>

                  <div
                    className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-4 pt-5 h-full"
                    style={{ borderTopColor: step.color, borderTopWidth: "2px" }}
                  >
                    {/* Icon + Title */}
                    <div className="flex items-center gap-2 mb-2">
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${step.color}20` }}
                      >
                        <step.icon className="w-5 h-5" style={{ color: step.color }} />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#EDEDEF] leading-tight" style={{ fontSize: "clamp(13px, 1.8vh, 20px)" }}>
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-[#8A8A8E] mb-2" style={{ fontSize: "clamp(10px, 1.2vh, 14px)" }}>
                      {step.subtitle}
                    </p>

                    {/* Bullets */}
                    <div className="space-y-1.5">
                      {step.bullets.map((bullet, i) => (
                        <div key={i} className="flex items-start gap-1.5">
                          <div
                            className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                            style={{ backgroundColor: step.color }}
                          />
                          <span className="text-[#C5C5C7]" style={{ fontSize: "clamp(10px, 1.3vh, 15px)" }}>
                            {bullet}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Arrow between steps */}
                {index < 2 && (
                  <motion.div
                    key={`arrow-${index}`}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.2 }}
                    className="flex items-center justify-center self-center pt-4"
                  >
                    <ArrowRight className="w-6 h-6 text-[#8A8A8E]" />
                  </motion.div>
                )}
              </>
            ))}
          </div>

          {/* Vantagem Bradesco — Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mb-3"
          >
            <div
              className="relative overflow-hidden rounded-xl p-4"
              style={{
                background: "linear-gradient(135deg, rgba(230,57,70,0.12) 0%, rgba(230,57,70,0.04) 100%)",
                border: "1.5px solid rgba(230,57,70,0.3)",
                boxShadow: "0 0 30px rgba(230,57,70,0.08)",
              }}
            >
              {/* Glow effect */}
              <div
                className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-20 blur-3xl"
                style={{ background: "radial-gradient(circle, #E63946, transparent)" }}
              />

              <div className="relative flex items-center gap-4">
                {/* Bradesco icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-[#E63946]/20 border border-[#E63946]/30 flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-[#E63946]" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-bold text-[#EDEDEF]" style={{ fontSize: "clamp(14px, 2vh, 22px)" }}>
                      Vantagem Bradesco
                    </h4>
                    <span
                      className="px-2 py-0.5 rounded-full text-[#E63946] font-semibold border border-[#E63946]/30"
                      style={{ fontSize: "clamp(8px, 0.9vh, 11px)", background: "rgba(230,57,70,0.1)" }}
                    >
                      DIFERENCIAL COMPETITIVO
                    </span>
                  </div>
                  <p className="text-[#C5C5C7]" style={{ fontSize: "clamp(11px, 1.4vh, 16px)" }}>
                    Crédito originado <strong className="text-[#E63946]">no início da jornada</strong> — o Bradesco captura dados do consumidor e envia ao lojista um lead com crédito pré-aprovado
                  </p>
                </div>

                {/* Metrics */}
                <div className="flex-shrink-0 flex gap-3">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1">
                      <Target className="w-4 h-4 text-[#E63946]" />
                      <span className="font-bold text-[#EDEDEF]" style={{ fontSize: "clamp(14px, 2vh, 22px)" }}>+Lead</span>
                    </div>
                    <span className="text-[#8A8A8E]" style={{ fontSize: "clamp(8px, 0.9vh, 11px)" }}>qualificado</span>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1">
                      <Zap className="w-4 h-4 text-[#E63946]" />
                      <span className="font-bold text-[#EDEDEF]" style={{ fontSize: "clamp(14px, 2vh, 22px)" }}>+Conversão</span>
                    </div>
                    <span className="text-[#8A8A8E]" style={{ fontSize: "clamp(8px, 0.9vh, 11px)" }}>garantida</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Result Banner */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            <div
              className="rounded-lg py-2.5 px-4 text-center"
              style={{
                background: "linear-gradient(135deg, rgba(230,57,70,0.15) 0%, rgba(59,130,246,0.1) 100%)",
                border: "1px solid rgba(230,57,70,0.2)",
              }}
            >
              <p className="text-[#EDEDEF] font-semibold" style={{ fontSize: "clamp(12px, 1.5vh, 18px)" }}>
                🎯 Cada interação gera um lead com crédito — <span className="text-[#E63946]">mais conversão</span> = <span className="text-[#10B981]">mais receita</span> para o Bradesco
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <SlideFooter />
    </div>
  );
}
