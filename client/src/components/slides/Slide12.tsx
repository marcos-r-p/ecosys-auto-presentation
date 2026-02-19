import { motion } from "motion/react";
import { Bot, UserPlus, Package, DollarSign, Heart, Sparkles } from "lucide-react";
import SlideFooter from "../SlideFooter";

const copilotos = [
  {
    id: "sdr",
    title: "Assistente Pré-Venda (SDR)",
    description: "Qualifica leads automaticamente, agenda visitas e realiza simulações iniciais. Acelera o funil de vendas, garantindo que a equipe foque apenas nas oportunidades mais quentes e com maior potencial de conversão.",
    icon: UserPlus,
  },
  {
    id: "estoque",
    title: "Assistente de Gestão de Estoque",
    description: "Analisa o estoque em tempo real, sugerindo ações para maximizar a margem, como ajuste de preço e melhoria de fotos. Recomenda a compra de veículos de alta demanda na região, criando um estoque inteligente e mais lucrativo.",
    icon: Package,
  },
  {
    id: "financeiro",
    title: "Assistente Financeiro",
    description: "Monitora a saúde financeira da revenda 24/7, identificando gargalos de fluxo de caixa, inadimplências e oportunidades de otimização. Envia alertas proativos sobre vencimentos, sugere estratégias de cobrança e oferece insights sobre rentabilidade por veículo.",
    icon: DollarSign,
    highlight: true,

  },
  {
    id: "pos-venda",
    title: "Assistente Pós-Venda",
    description: "Mantém um relacionamento de longo prazo com o cliente, oferecendo produtos e serviços de forma automatizada e personalizada. Fideliza o cliente e reduz o custo de aquisição (CAC) para futuras vendas, impulsionando o LTV.",
    icon: Heart,
  },
];

export default function Slide12() {
  return (
    <div className="flex flex-col items-center justify-start h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-[120px] pt-4 sm:pt-5 md:pt-6 lg:pt-8 pb-4 sm:pb-5 md:pb-6 lg:pb-8 overflow-hidden">
      <div className="max-w-7xl w-full flex flex-col gap-3 md:gap-4 lg:gap-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="font-extrabold tracking-tight sm: md: text-[#EDEDEF] md:" style={{ fontSize: 'clamp(24px, 4vh, 48px)', marginBottom: 'clamp(6px, 1vh, 16px)', lineHeight: '1.1' }}>
            Assistente IA <span className="text-[#2B7FFF]">do Lojista</span>
          </h2>
          <p className="text-[#8A8A8E] sm: max-w-5xl mx-auto leading-relaxed" style={{ fontSize: 'clamp(12px, 1.6vh, 20px)' }}>
            Uma suíte de agentes de IA que trabalham 24/7, otimizando cada etapa do ciclo de vendas, gestão financeira e pós-venda.
          </p>
        </motion.div>

        {/* Grid - Top 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {copilotos.slice(0, 3).map((copiloto, index) => (
            <motion.div
              key={copiloto.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="relative"
            >
              <div
                className={`bg-white/[0.04] border ${
                  copiloto.highlight
                    ? "border-white/[0.12]"
                    : "border-white/[0.08]"
                } rounded-xl p-4 sm:p-5 h-full`}
              >
                <div className="flex flex-col items-center text-center gap-2 md:gap-3 mb-2 md:mb-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white/[0.06] flex items-center justify-center">
                    <copiloto.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#8A8A8E]" />
                  </div>
                  <div>
                    <h3 className={`text-sm sm:text-base font-medium ${copiloto.highlight ? "text-[#2B7FFF]" : "text-[#EDEDEF]"}`}>
                      {copiloto.title}
                    </h3>
                  </div>
                </div>
                <p className="text-[#8A8A8E] text-xs sm:text-sm leading-relaxed text-center">
                  {copiloto.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Grid - Pós-Venda Centralizado */}
        <div className="flex justify-center">
          {copilotos.slice(3).map((copiloto) => (
            <motion.div
              key={copiloto.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="max-w-md w-full"
            >
              <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-4 sm:p-5 h-full">
                <div className="flex flex-col items-center text-center gap-2 md:gap-3 mb-2 md:mb-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white/[0.06] flex items-center justify-center">
                    <copiloto.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#8A8A8E]" />
                  </div>
                  <h3 className="text-sm sm:text-base font-medium text-[#EDEDEF]">
                    {copiloto.title}
                  </h3>
                </div>
                <p className="text-[#8A8A8E] text-xs sm:text-sm leading-relaxed text-center">
                  {copiloto.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Highlight */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-4 sm:p-5">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
              <Sparkles className="w-5 h-5 text-[#8A8A8E] flex-shrink-0" />
              <span className="text-[#8A8A8E] text-sm text-center sm:text-left leading-relaxed">
                A Inteligência Artificial do Assistente do lojista atua como um parceiro estratégico, fornecendo insights acionáveis que capacitam o lojista a tomar decisões mais inteligentes.
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      <SlideFooter />
    </div>
  );
}
