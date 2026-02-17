import { motion } from "motion/react";
import { ArrowRight, ArrowDown, TrendingUp, DollarSign, Activity, Star, Target, MessageSquare, GraduationCap, Bell, Brain, AlertTriangle, ShoppingCart, PieChart } from "lucide-react";
import SlideFooter from "../SlideFooter";

const dataFlows = [
  {
    title: "Gestor Autoline → GIO Copiloto",
    items: [
      { icon: TrendingUp, text: "Performance real do lojista (vendas, conversão, ticket médio)" },
      { icon: DollarSign, text: "Volume de financiamentos e produtos Bradesco" },
      { icon: Activity, text: "Engajamento com funcionalidades do sistema" },
      { icon: Star, text: "Qualidade dos anúncios e gestão de estoque" },
    ],
    color: "",
  },
  {
    title: "GIO Copiloto → Gestor Autoline",
    items: [
      { icon: Target, text: "Prioridades comerciais e campanhas ativas" },
      { icon: MessageSquare, text: "Feedback de campo (objeções, concorrência, práticas de mercado)" },
      { icon: GraduationCap, text: "Treinamentos e suporte direcionado" },
      { icon: Bell, text: "Novidades e atualizações de produtos" },
    ],
    color: "from-[#2B7FFF] to-blue-600",
    highlight: true,
  },
  {
    title: "Ambos → Plataforma de Dados",
    items: [
      { icon: Brain, text: "Inteligência consolidada 360° do lojista" },
      { icon: AlertTriangle, text: "Previsão de churn e risco de inativação" },
      { icon: ShoppingCart, text: "Oportunidades de cross-sell (crédito + seguro + conta PJ)" },
      { icon: PieChart, text: "Share of wallet e potencial não explorado" },
    ],
    color: "",
  },
];

export default function Slide26() {
  return (
    <div className="flex flex-col items-center justify-start h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-[120px] pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-8 sm:pb-10 md:pb-12 lg:pb-15 overflow-y-auto">
      <div className="max-w-7xl w-full flex flex-col gap-6 md:gap-10 lg:gap-14">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-5xl font-bold text-[#EDEDEF] mb-3">
            <span className="text-[#EDEDEF]">
              Integração <span className="font-bold" style={{ color: '#2B7FFF' }}>GIO - Copiloto do GEFIN</span> com Autoline
            </span>
          </h2>
          <p className="text-xl text-[#8A8A8E] font-medium max-w-5xl mx-auto leading-snug">
            Fluxo Bidirecional de Dados para Máxima Inteligência
          </p>
        </motion.div>

        {/* Integration Diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {/* Gestor Autoline */}
            <div className="relative group w-full sm:w-56">
              <div className="absolute inset-0 bg-white/[0.04] opacity-30 group-hover:opacity-50 transition-opacity duration-300 rounded-2xl" />
              <div className="relative bg-white/[0.06] border border-white/[0.12] rounded-2xl p-6 hover:border-white/40 transition-all">
                <h3 className="text-xl font-bold text-[#EDEDEF] text-center">
                  GESTOR<br />AUTOLINE
                </h3>
                <p className="text-sm text-[#8A8A8E] text-center mt-2">(Lojista)</p>
              </div>
            </div>

            {/* Double Arrow */}
            <div className="flex flex-col items-center gap-1">
              <ArrowRight className="w-8 h-8 text-[#EDEDEF] rotate-90 sm:rotate-0" />
              <ArrowRight className="w-8 h-8 text-[#EDEDEF] -rotate-90 sm:rotate-180" />
            </div>

            {/* GIO Copiloto */}
            <div className="relative group w-full sm:w-56">
              <div className="absolute inset-0 bg-white/[0.04] from-[#2B7FFF] to-blue-600 opacity-40 group-hover:opacity-60 transition-opacity duration-300 rounded-2xl" />
              <div className="relative bg-white/[0.06] border border-[#2B7FFF]/50 rounded-2xl p-6 transition-all">
                <h3 className="text-xl font-bold text-center" style={{ color: '#2B7FFF' }}>
                  GIO COPILOTO<br />GEFIN
                </h3>
                <span className="block text-center mt-2 text-xs px-2 py-1 rounded-full font-bold" style={{ backgroundColor: '#2B7FFF', color: 'white' }}>
                  NOVO
                </span>
              </div>
            </div>
          </div>

          {/* Arrow Down to Platform */}
          <div className="flex justify-center my-4">
            <ArrowDown className="w-8 h-8 text-[#EDEDEF]" />
          </div>

          {/* Plataforma de Dados */}
          <div className="flex justify-center">
            <div className="relative group w-full sm:w-64">
              <div className="absolute inset-0 bg-white/[0.04] opacity-30 group-hover:opacity-50 transition-opacity duration-300 rounded-2xl" />
              <div className="relative bg-white/[0.06] border border-white/[0.12] rounded-2xl p-6 hover:border-white/40 transition-all">
                <h3 className="text-xl font-bold text-[#EDEDEF] text-center">
                  PLATAFORMA<br />DE DADOS
                </h3>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Data Flows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {dataFlows.map((flow, flowIndex) => (
            <motion.div
              key={flowIndex}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 + flowIndex * 0.1 }}
              className="relative group"
            >
              <div
                className={`relative bg-white/[0.04] border ${
                  flow.highlight ? "border-[#2B7FFF]/50" : "border-white/[0.08]"
                } rounded-2xl p-5 h-full hover:border-white/[0.12] hover:bg-white/[0.06] transition-all`}
              >
                {/* Title */}
                <h3 className={`text-xl mb-4 text-center leading-tight ${flow.highlight ? "font-bold" : "font-bold text-[#EDEDEF]"}`} style={flow.highlight ? { color: '#2B7FFF' } : {}}>
                  {flow.title}
                </h3>

                {/* Items */}
                <div className="space-y-3">
                  {flow.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-3">
                      <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-white/[0.06] p-1 shadow-lg`}>
                        <div className="w-full h-full bg-[#0A0A0B] rounded-[6px] flex items-center justify-center">
                          <item.icon className="w-5 h-5 text-[#EDEDEF]" />
                        </div>
                      </div>
                      <p className="text-[#8A8A8E] text-base leading-tight flex-1">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <SlideFooter />
    </div>
  );
}