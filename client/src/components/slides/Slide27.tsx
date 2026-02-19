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
    color: "text-[#CC092F]",
  },
  {
    icon: Activity,
    trigger: "Sem visita >30 dias",
    action: "roteiro prioritário + checklist",
    color: "text-[#8A8A8E]",
  },
  {
    icon: TrendingUp,
    trigger: "Alto potencial não convertido",
    action: "escalar squad especializado",
    color: "text-[#CC092F]",
  },
  {
    icon: Zap,
    trigger: "Health Score <40",
    action: "plano recuperação automático",
    color: "text-[#8A8A8E]",
  },
];

export default function Slide27() {
  return (
    <div className="flex flex-col items-center justify-start h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-[120px] pt-4 sm:pt-5 md:pt-6 lg:pt-8 pb-4 sm:pb-5 md:pb-6 lg:pb-8 overflow-hidden">
      <div className="max-w-7xl w-full flex flex-col gap-3 md:gap-4 lg:gap-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <Bot className="w-12 h-12 text-[#CC092F]" />
            <h2 className="font-extrabold tracking-tight text-[#CC092F]" style={{ fontSize: 'clamp(24px, 4vh, 48px)', marginBottom: 'clamp(6px, 1vh, 16px)', lineHeight: '1.1' }}>
              Copiloto Comercial
            </h2>
          </div>
          <h3 className="text-2xl font-bold text-[#EDEDEF] mb-2">
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
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-5 h-full">
              <h4 className="text-xl font-bold text-[#EDEDEF] mb-4">
                📊 Health Score dos Lojistas (0-100)
              </h4>
              
              {/* Composition */}
              <div className="mb-4">
                <h5 className="text-base font-bold text-[#CC092F] mb-3">Composição do Score:</h5>
                <div className="space-y-2">
                  {scoreComponents.map((component, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <component.icon className="w-4 h-4 text-[#EDEDEF] mt-0.5 flex-shrink-0" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-[#EDEDEF]">{component.label}</span>
                          <span className="text-xs text-[#CC092F]">({component.percentage}%)</span>
                        </div>
                        <p className="text-xs text-[#8A8A8E]">{component.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Outputs */}
              <div>
                <h5 className="text-base font-bold text-[#8A8A8E] mb-3">Saídas Práticas:</h5>
                <div className="space-y-2">
                  {scoreOutputs.map((output, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-white/[0.04] rounded-lg p-2">
                      <span className="text-xl">{output.color}</span>
                      <div className="flex-1">
                        <span className="text-sm font-bold text-[#EDEDEF]">{output.label} ({output.range})</span>
                        <p className="text-xs text-[#8A8A8E]">{output.action}</p>
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
            <div className="bg-white/[0.04] from-[#CC092F]/20 to-red-600/20 border border-white/[0.12] rounded-xl p-5 h-full shadow-[#CC092F]/20">
              <h4 className="text-xl font-bold text-[#CC092F] mb-4 flex items-center gap-2">
                <Zap className="w-6 h-6" />
                Automação Baseada em Indicadores
              </h4>
              
              <h5 className="text-base font-bold text-[#EDEDEF] mb-3">⚙️ Regras Inteligentes (Exemplos):</h5>
              
              <div className="space-y-3">
                {automationRules.map((rule, idx) => (
                  <div key={idx} className="bg-[#0A0A0B]/60 border border-white/[0.08] rounded-lg p-3">
                    <div className="flex items-start gap-3">
                      <rule.icon className={`w-5 h-5 ${rule.color} mt-0.5 flex-shrink-0`} />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-bold text-[#EDEDEF]">{rule.trigger}</span>
                          <span className="text-[#8A8A8E]">→</span>
                        </div>
                        <p className="text-sm text-[#8A8A8E]">{rule.action}</p>
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