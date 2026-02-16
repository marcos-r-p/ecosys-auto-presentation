import { motion } from "motion/react";
import { Bot, Activity, TrendingUp, Award, Package, Users, CircleAlert, Zap } from "lucide-react";
import SlideFooter from "../SlideFooter";

const scoreComponents = [
  { label: "Engajamento", percentage: 20, description: "Frequência de interação, adesão a campanhas", icon: Activity },
  { label: "Performance Financeira", percentage: 30, description: "Volume, ticket médio", icon: TrendingUp },
  { label: "Qualidade", percentage: 20, description: "Taxa de aprovação, fichas pagas", icon: Award },
  { label: "Produtos", percentage: 15, description: "Diversificação (crédito + seguro + conta PJ)", icon: Package },
  { label: "Relacionamento", percentage: 15, description: "Satisfação, tempo parceria, visitas", icon: Users },
];

const scoreOutputs = [
  { color: "🟢", range: "80-100", label: "Verde", action: "Manutenção + upsell" },
  { color: "🟡", range: "50-79", label: "Amarelo", action: "Atenção + plano de melhoria" },
  { color: "🔴", range: "<50", label: "Vermelho", action: "Risco crítico + ação imediata" },
];

const automationRules = [
  {
    icon: CircleAlert,
    trigger: "Performance -20%",
    action: "tarefa urgente + notificar gestor + campanha reativação",
    color: "text-red-400",
  },
  {
    icon: Activity,
    trigger: "Sem visita >30 dias",
    action: "roteiro prioritário + checklist",
    color: "text-yellow-400",
  },
  {
    icon: TrendingUp,
    trigger: "Alto potencial não convertido",
    action: "escalar squad especializado",
    color: "text-blue-400",
  },
  {
    icon: Zap,
    trigger: "Health Score <40",
    action: "plano recuperação automático",
    color: "text-orange-400",
  },
];

export default function Slide27() {
  return (
    <div className="flex flex-col items-center justify-start h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-[120px] pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-8 sm:pb-10 md:pb-12 lg:pb-15 overflow-y-auto">
      <div className="max-w-7xl w-full flex flex-col gap-6 md:gap-10 lg:gap-14">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <Bot className="w-12 h-12 text-[#2B7FFF]" />
            <h2 className="text-4xl font-bold text-[#2B7FFF]">
              GIO - Copiloto do GEFIN
            </h2>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">
            Health Score e Automação Inteligente
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-4">
          {/* Health Score */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5 h-full">
              <h4 className="text-xl font-bold text-white mb-4">
                📊 Health Score dos Lojistas (0-100)
              </h4>
              
              {/* Composition */}
              <div className="mb-4">
                <h5 className="text-base font-bold text-blue-400 mb-3">Composição do Score:</h5>
                <div className="space-y-2">
                  {scoreComponents.map((component, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <component.icon className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-white">{component.label}</span>
                          <span className="text-xs text-blue-400">({component.percentage}%)</span>
                        </div>
                        <p className="text-xs text-white/70">{component.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Outputs */}
              <div>
                <h5 className="text-base font-bold text-green-400 mb-3">Saídas Práticas:</h5>
                <div className="space-y-2">
                  {scoreOutputs.map((output, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-white/5 rounded-lg p-2">
                      <span className="text-xl">{output.color}</span>
                      <div className="flex-1">
                        <span className="text-sm font-bold text-white">{output.label} ({output.range})</span>
                        <p className="text-xs text-white/70">{output.action}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Automation */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-gradient-to-br from-[#2B7FFF]/20 to-blue-600/20 border-2 border-[#2B7FFF]/50 rounded-xl p-5 h-full shadow-lg shadow-[#2B7FFF]/20">
              <h4 className="text-xl font-bold text-[#2B7FFF] mb-4 flex items-center gap-2">
                <Zap className="w-6 h-6" />
                Automação Baseada em Indicadores
              </h4>
              
              <h5 className="text-base font-bold text-white mb-3">⚙️ Regras Inteligentes (Exemplos):</h5>
              
              <div className="space-y-3">
                {automationRules.map((rule, idx) => (
                  <div key={idx} className="bg-[#0a1628]/60 border border-white/10 rounded-lg p-3">
                    <div className="flex items-start gap-3">
                      <rule.icon className={`w-5 h-5 ${rule.color} mt-0.5 flex-shrink-0`} />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-bold text-white">{rule.trigger}</span>
                          <span className="text-white/60">→</span>
                        </div>
                        <p className="text-sm text-white/80">{rule.action}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <SlideFooter />
    </div>
  );
}