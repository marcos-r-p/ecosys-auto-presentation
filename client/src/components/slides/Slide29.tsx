import { motion } from "motion/react";
import { Bot, TrendingUp, Shield, DollarSign, Database } from "lucide-react";
import SlideFooter from "../SlideFooter";

const productivityMetrics = [
  {
    icon: TrendingUp,
    metric: "+40-60%",
    title: "Visitas Efetivas",
    description: "Roteirização + priorização inteligente",
    color: "",
  },
  {
    icon: TrendingUp,
    metric: "-50%",
    title: "Tempo em Tarefas Administrativas",
    description: "Automação de processos manuais",
    color: "",
  },
  {
    icon: TrendingUp,
    metric: "2-3x",
    title: "Mais Assertividade",
    description: "IA sugerindo o que fazer e quando",
    color: "",
  },
];

const churnMetrics = [
  {
    icon: Shield,
    title: "Identificação Precoce de Risco",
    description: "30-60 dias de antecedência",
  },
  {
    icon: Shield,
    title: "Ações Preventivas Automatizadas",
    description: "Intervenção no momento certo",
  },
  {
    icon: Shield,
    title: "Taxa de Reativação 3-4x Maior",
    description: "Ação estratégica baseada em dados",
  },
];

const growthMetrics = [
  {
    icon: DollarSign,
    title: "Conversão de Inativos em Ativos",
    description: "Lojistas de baixa performance recuperados",
  },
  {
    icon: DollarSign,
    title: "Cross-sell Estruturado",
    description: "Crédito + seguro + conta PJ",
  },
  {
    icon: DollarSign,
    title: "Expansão de Share of Wallet",
    description: "Maior penetração em cada parceiro",
  },
];

const dataMetrics = [
  {
    icon: Database,
    title: "Inteligência Competitiva em Tempo Real",
    description: "Feedback estruturado do campo",
  },
  {
    icon: Database,
    title: "Identificação de Tendências",
    description: "Por região e segmento",
  },
  {
    icon: Database,
    title: "Teste Rápido de Campanhas",
    description: "Com feedback estruturado",
  },
];

export default function Slide29() {
  return (
    <div className="flex flex-col items-center justify-start h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-[120px] pt-4 sm:pt-5 md:pt-6 lg:pt-8 pb-4 sm:pb-5 md:pb-6 lg:pb-8 overflow-hidden">
      <div className="max-w-7xl w-full flex flex-col gap-3 md:gap-4 lg:gap-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <Bot className="w-14 h-14 text-[#2B7FFF]" />
            <h2 className="font-extrabold tracking-tight text-[#EDEDEF]" style={{ fontSize: 'clamp(24px, 4vh, 48px)', marginBottom: 'clamp(6px, 1vh, 16px)', lineHeight: '1.1' }}>
              Impacto Estratégico do <span className="text-[#2B7FFF]">GIO</span>
            </h2>
          </div>
          <h3 className="text-2xl font-bold text-[#EDEDEF]">
            nos Resultados Bradesco
          </h3>
        </motion.div>

        {/* Productivity */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-4"
        >
          <h4 className="text-xl font-bold text-[#EDEDEF] mb-3 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-[#EDEDEF]" />
            Aumento de Produtividade
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {productivityMetrics.map((metric, idx) => (
              <div key={idx} className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-4 text-center hover:border-white/[0.12] transition-all interactive-card">
                <div className="w-12 h-12 rounded-lg bg-white p-1 mx-auto mb-3">
                  <div className="w-full h-full bg-[#0A0A0B] rounded-[8px] flex items-center justify-center">
                    <metric.icon className="w-6 h-6 text-[#EDEDEF]" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-[#EDEDEF] mb-2">{metric.metric}</div>
                <h5 className="text-sm font-bold text-[#EDEDEF] mb-1">{metric.title}</h5>
                <p className="text-xs text-[#8A8A8E]">{metric.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-4">
          {/* Churn */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-xl font-bold text-[#EDEDEF] mb-3 flex items-center gap-2">
              <Shield className="w-6 h-6 text-[#EDEDEF]" />
              Redução de Churn
            </h4>
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-4">
              <div className="space-y-3">
                {churnMetrics.map((metric, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <metric.icon className="w-5 h-5 text-[#EDEDEF] mt-0.5 flex-shrink-0" />
                    <div>
                      <h5 className="text-sm font-bold text-[#EDEDEF]">{metric.title}</h5>
                      <p className="text-xs text-[#8A8A8E]">{metric.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Growth */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h4 className="text-xl font-bold text-[#EDEDEF] mb-3 flex items-center gap-2">
              <DollarSign className="w-6 h-6 text-[#8A8A8E]" />
              Crescimento de Performance
            </h4>
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-4">
              <div className="space-y-3">
                {growthMetrics.map((metric, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <metric.icon className="w-5 h-5 text-[#8A8A8E] mt-0.5 flex-shrink-0" />
                    <div>
                      <h5 className="text-sm font-bold text-[#EDEDEF]">{metric.title}</h5>
                      <p className="text-xs text-[#8A8A8E]">{metric.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Data for Strategy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h4 className="text-xl font-bold text-[#EDEDEF] mb-3 flex items-center gap-2">
            <Database className="w-6 h-6 text-[#2B7FFF]" />
            Dados para Estratégia
          </h4>
          <div className="bg-white/[0.04] from-[#2B7FFF]/20 to-blue-600/20 border border-white/[0.12] rounded-xl p-5 shadow-[#2B7FFF]/20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {dataMetrics.map((metric, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <metric.icon className="w-5 h-5 text-[#2B7FFF] mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="text-sm font-bold text-[#EDEDEF] mb-1">{metric.title}</h5>
                    <p className="text-xs text-[#8A8A8E]">{metric.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <SlideFooter />
    </div>
  );
}