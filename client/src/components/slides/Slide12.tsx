import { motion } from "motion/react";
import { Bot, UserPlus, Package, DollarSign, Heart, Sparkles } from "lucide-react";
import SlideFooter from "../SlideFooter";

const copilotos = [
  {
    id: "sdr",
    number: "1.3.1",
    title: "Copiloto Pré-Venda (SDR)",
    description: "Qualifica leads automaticamente, agenda visitas e realiza simulações iniciais. Acelera o funil de vendas, garantindo que a equipe foque apenas nas oportunidades mais quentes e com maior potencial de conversão.",
    icon: UserPlus,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "estoque",
    number: "1.3.2",
    title: "Copiloto de Gestão de Estoque",
    description: "Analisa o estoque em tempo real, sugerindo ações para maximizar a margem, como ajuste de preço e melhoria de fotos. Recomenda a compra de veículos de alta demanda na região, criando um estoque inteligente e mais lucrativo.",
    icon: Package,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "gio",
    number: "1.3.3",
    title: "Copiloto Financeiro",
    description: "Monitora a saúde financeira da revenda 24/7, identificando gargalos de fluxo de caixa, inadimplências e oportunidades de otimização. Envia alertas proativos sobre vencimentos, sugere estratégias de cobrança e oferece insights sobre rentabilidade por veículo. Automatiza reconciliações bancárias e oferece previsões de caixa baseadas em IA, permitindo que o lojista tome decisões financeiras mais inteligentes e mantenha a operação saudável.",
    icon: DollarSign,
    color: "from-[#2B7FFF] to-blue-600",
    highlight: true,
    badge: "NOVO",
  },
  {
    id: "pos-venda",
    number: "1.3.4",
    title: "Copiloto Pós-Venda",
    description: "Mantém um relacionamento de longo prazo com o cliente, oferecendo produtos e serviços de forma automatizada e personalizada. Fideliza o cliente e reduz o custo de aquisição (CAC) para futuras vendas, impulsionando o LTV.",
    icon: Heart,
    color: "from-green-500 to-emerald-500",
  },
];

export default function Slide12() {
  return (
    <div className="flex flex-col items-center justify-start h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-[120px] pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-8 sm:pb-10 md:pb-12 lg:pb-15 overflow-y-auto">
      <div className="max-w-7xl w-full flex flex-col gap-6 md:gap-10 lg:gap-14">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 md:mb-3">
            Copiloto Autoline:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-red-400 to-red-600 drop-shadow-lg">
              Inteligência Artificial para Potencializar as Vendas
            </span>
          </h2>
          <p className="text-sm sm:text-base text-white/80 font-medium max-w-5xl mx-auto leading-relaxed">
            O Copiloto Autoline é uma suíte de agentes de IA que trabalham 24/7, otimizando cada etapa do ciclo de vendas, gestão financeira e pós-venda.
          </p>
        </motion.div>

        {/* Grid - Top 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {copilotos.slice(0, 3).map((copiloto, index) => (
            <motion.div
              key={copiloto.id}
              initial={{ opacity: 0, y: 30, rotateX: -10 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="relative group"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-xl blur-xl pointer-events-none -z-10 ${
                  copiloto.highlight ? "blur-2xl" : ""
                }`}
                style={{
                  background: `linear-gradient(135deg, ${
                    index === 0
                      ? "#3b82f6"
                      : index === 1
                      ? "#a855f7"
                      : "#2B7FFF"
                  }, transparent)`,
                }}
              />
              <div
                className={`relative bg-white/5 backdrop-blur-md border ${
                  copiloto.highlight
                    ? "border-[#2B7FFF]/50 hover:border-[#2B7FFF]/80"
                    : "border-white/10 hover:border-white/30"
                } rounded-xl p-4 sm:p-5 h-full hover:bg-white/10 transition-all`}
              >
                <div className="flex flex-col items-center text-center gap-2 md:gap-3 mb-2 md:mb-3">
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br ${copiloto.color} p-0.5 shadow-lg flex-shrink-0`}
                  >
                    <div className="w-full h-full bg-[#0a1628] rounded-[9px] flex items-center justify-center">
                      <copiloto.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    {copiloto.badge && (
                      null
                    )}
                    <h3
                      className={`text-sm sm:text-base font-bold ${ copiloto.highlight ? "text-[#2B7FFF]" : "text-white" } text-[#f1f3f6]`}
                    >
                      {copiloto.title}
                    </h3>
                  </div>
                </div>
                <p className="text-white/80 text-xs sm:text-sm leading-relaxed text-center">
                  {copiloto.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Grid - GIO Centralizado */}
        <div className="flex justify-center">
          {copilotos.slice(3).map((copiloto, index) => (
            <motion.div
              key={copiloto.id}
              initial={{ opacity: 0, y: 30, rotateX: -10 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative group max-w-md w-full"
            >
              <div
                className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-xl blur-xl pointer-events-none -z-10"
                style={{
                  background: `linear-gradient(135deg, #22c55e, transparent)`,
                }}
              />
              <div className="relative bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/30 rounded-xl p-4 sm:p-5 h-full hover:bg-white/10 transition-all">
                <div className="flex flex-col items-center text-center gap-2 md:gap-3 mb-2 md:mb-3">
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br ${copiloto.color} p-0.5 shadow-lg flex-shrink-0`}
                  >
                    <div className="w-full h-full bg-[#0a1628] rounded-[9px] flex items-center justify-center">
                      <copiloto.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white">
                      {copiloto.title}
                    </h3>
                  </div>
                </div>
                <p className="text-white/80 text-xs sm:text-sm leading-relaxed text-center">
                  {copiloto.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-2 md:mt-4"
        >
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-500/20 via-red-500/20 to-red-600/20 border border-white/30 p-4 sm:p-5 shadow-lg shadow-red-500/10">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0" />
              <span className="text-white font-semibold text-sm sm:text-base text-center sm:text-left">
                A Inteligência Artificial do Copiloto Autoline transcende a função de uma simples ferramenta; ela atua como um parceiro estratégico, fornecendo insights acionáveis que capacitam o lojista a tomar decisões mais inteligentes e a operar com máxima eficiência.
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      <SlideFooter />
    </div>
  );
}