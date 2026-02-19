import { motion } from "motion/react";
import { ArrowRight, ArrowDown, TrendingUp, DollarSign, Activity, Star, Target, MessageSquare, GraduationCap, Bell, Brain, AlertTriangle, ShoppingCart, PieChart } from "lucide-react";
import SlideFooter from "../SlideFooter";

const dataFlows = [
  {
    title: "Gestor Autoline → Copiloto Comercial",
    items: [
      { icon: TrendingUp, text: "Performance real do lojista (vendas, conversão, ticket médio)" },
      { icon: DollarSign, text: "Volume de financiamentos e produtos Bradesco" },
      { icon: Activity, text: "Engajamento com funcionalidades do sistema" },
      { icon: Star, text: "Qualidade dos anúncios e gestão de estoque" },
    ],
    color: "",
  },
  {
    title: "Copiloto Comercial → Gestor Autoline",
    items: [
      { icon: Target, text: "Prioridades comerciais e campanhas ativas" },
      { icon: MessageSquare, text: "Feedback de campo (objeções, concorrência, práticas de mercado)" },
      { icon: GraduationCap, text: "Treinamentos e suporte direcionado" },
      { icon: Bell, text: "Novidades e atualizações de produtos" },
    ],
    color: "from-[#CC092F] to-red-600",
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
    <div className="flex flex-col items-center justify-start h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-[120px] pt-4 sm:pt-5 md:pt-6 lg:pt-8 pb-4 sm:pb-5 md:pb-6 lg:pb-8 overflow-hidden">
      <div className="max-w-7xl w-full flex flex-col gap-3 md:gap-4 lg:gap-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="font-extrabold tracking-tight text-[#EDEDEF]" style={{ fontSize: 'clamp(24px, 4vh, 48px)', marginBottom: 'clamp(6px, 1vh, 16px)', lineHeight: '1.1' }}>
            <span className="text-[#EDEDEF]">
              <span className="font-bold" style={{ color: '#CC092F' }}>Copiloto Comercial</span> integrado com todo ecossistema
            </span>
          </h2>
          <p className="text-[#8A8A8E] text-xl font-medium max-w-5xl mx-auto leading-snug" style={{ fontSize: 'clamp(12px, 1.6vh, 20px)' }}>
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
              <div className="relative bg-white/[0.06] border border-white/[0.12] rounded-2xl p-6 hover:border-white/40 transition-all interactive-card">
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
              <div className="absolute inset-0 bg-white/[0.04] from-[#CC092F] to-red-600 opacity-40 group-hover:opacity-60 transition-opacity duration-300 rounded-2xl" />
              <div className="relative bg-white/[0.06] border border-[#CC092F]/50 rounded-2xl p-6 transition-all">
                <h3 className="text-xl font-bold text-center" style={{ color: '#CC092F' }}>
                  COPILOTO<br />COMERCIAL
                </h3>
                <span className="block text-center mt-2 text-xs px-2 py-1 rounded-full font-bold" style={{ backgroundColor: '#CC092F', color: 'white' }}>
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
              <div className="relative bg-white/[0.06] border border-white/[0.12] rounded-2xl p-6 hover:border-white/40 transition-all interactive-card">
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
                  flow.highlight ? "border-[#CC092F]/50" : "border-white/[0.08]"
                } rounded-2xl p-5 h-full hover:border-white/[0.12] hover:bg-white/[0.06] transition-all interactive-card`}
              >
                {/* Title */}
                <h3 className={`text-xl mb-4 text-center leading-tight ${flow.highlight ? "font-bold" : "font-bold text-[#EDEDEF]"}`} style={flow.highlight ? { color: '#CC092F' } : {}}>
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