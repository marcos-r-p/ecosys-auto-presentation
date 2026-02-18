import { motion } from "motion/react";
import { TrendingUp, UserX, DollarSign, Brain, Calendar, ArrowRight } from "lucide-react";
import SlideFooter from "../SlideFooter";

const impacts = [
  {
    icon: TrendingUp,
    title: "Produtividade Multiplicada",
    items: [
      "+40-60% visitas efetivas (roteirização + priorização)",
      "-50% tempo em tarefas administrativas",
      "2-3x mais assertividade (IA direcionando ações)",
    ],
  },
  {
    icon: UserX,
    title: "Redução de Churn",
    items: [
      "Identificação precoce de risco (30-60 dias antes)",
      "Ações preventivas automatizadas",
      "Taxa de reativação 3-4x maior",
    ],
  },
  {
    icon: DollarSign,
    title: "Crescimento de Performance",
    items: [
      "Conversão de lojistas inativos/baixa performance",
      "Cross-sell estruturado (crédito + seguro + conta PJ)",
      "Expansão de share of wallet em cada parceiro",
    ],
  },
  {
    icon: Brain,
    title: "Inteligência Estratégica",
    items: [
      "Feedback estruturado do campo em tempo real",
      "Identificação de tendências por região/segmento",
      "Teste rápido de campanhas com métricas claras",
    ],
  },
];

const roadmap = [
  {
    phase: "Mês 1-2",
    label: "MVP Essencial",
    items: [
      "Gestão de visitas (GPS + registro)",
      "Carteira 360° (cadastro + histórico)",
      "Health Score v1 (score + semáforo)",
      "Comunicação rápida (\"Buzina\")",
    ],
    deliverable: "MVP funcional + Piloto (20-30 usuários)",
  },
  {
    phase: "Mês 3-4",
    label: "Inteligência + Integrações",
    items: [
      "Direcionamento e priorização (IA)",
      "Alertas automáticos (performance + risco)",
      "Painel gerencial v1 (dashboard)",
      "Microsoft Teams + Outlook",
      "Gestão de ganhos e comissões",
    ],
    deliverable: "Rollout expandido (50-100 usuários)",
    highlight: true,
  },
  {
    phase: "Mês 5-6",
    label: "IA Avançada + Gamificação",
    items: [
      "Roteirização inteligente (mapa calor)",
      "First IA - Assistente (resumo + sugestões)",
      "Health Score v2 (previsão churn)",
      "Gamificação (pontos + badges + ranking)",
      "Power BI (dashboards executivos)",
    ],
    deliverable: "Sistema completo + 100% usuários",
    highlight: true,
  },
];

export default function Slide25() {
  return (
    <div className="flex flex-col items-center justify-start h-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 pt-3 pb-2 overflow-hidden">
      <div className="max-w-7xl w-full flex flex-col h-full gap-3">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="font-extrabold tracking-tight text-[#EDEDEF]" style={{ fontSize: 'clamp(18px, 2.8vh, 36px)', lineHeight: '1.1' }}>
            <span className="font-bold" style={{ color: '#CC092F' }}>Copiloto Comercial</span>
            <span className="text-[#EDEDEF]">: Impacto e Roadmap</span>
          </h2>
          <p className="text-[#8A8A8E] font-medium mt-1" style={{ fontSize: 'clamp(11px, 1.4vh, 18px)' }}>
            Transformação mensurável em 6 meses
          </p>
        </motion.div>

        {/* Two-column layout: Impacto + Roadmap side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 flex-1">
          {/* Left: Impacto Esperado */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col"
          >
            <h3 className="text-sm font-bold text-[#EDEDEF] mb-2 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-[#CC092F]" />
              Impacto Esperado nos Resultados
            </h3>
            <div className="grid grid-cols-2 gap-2 flex-1">
              {impacts.map((impact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 + index * 0.04 }}
                  className="bg-white/[0.04] border border-white/[0.08] rounded-lg p-3 hover:border-white/[0.12] transition-all flex flex-col"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 rounded-md bg-white/[0.06] flex items-center justify-center flex-shrink-0">
                      <impact.icon className="w-4 h-4 text-[#CC092F]" />
                    </div>
                    <h4 className="text-[11px] font-bold text-[#EDEDEF] leading-tight">{impact.title}</h4>
                  </div>
                  <ul className="space-y-0.5 flex-1">
                    {impact.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-1">
                        <span className="text-[#CC092F] flex-shrink-0 mt-0.5 text-[7px]">●</span>
                        <span className="text-[#8A8A8E] text-[9px] leading-tight">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Roadmap */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col"
          >
            <h3 className="text-sm font-bold text-[#EDEDEF] mb-2 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#CC092F]" />
              Roadmap de Entrega (6 Meses)
            </h3>
            <div className="flex flex-col gap-2 flex-1">
              {roadmap.map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                  className="flex-1"
                >
                  <div
                    className={`bg-white/[0.04] border ${
                      phase.highlight ? "border-[#CC092F]/40" : "border-white/[0.08]"
                    } rounded-lg p-3 h-full hover:border-white/[0.12] transition-all flex flex-col`}
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        phase.highlight 
                          ? "bg-[#CC092F]/20 text-[#CC092F]" 
                          : "bg-white/[0.06] text-[#8A8A8E]"
                      }`}>
                        {phase.phase}
                      </span>
                      <h4 className={`text-[11px] font-bold leading-tight ${phase.highlight ? "text-[#CC092F]" : "text-[#EDEDEF]"}`}>
                        {phase.label}
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-x-3 gap-y-0.5 flex-1">
                      {phase.items.map((item, itemIndex) => (
                        <span key={itemIndex} className="text-[9px] text-[#8A8A8E] leading-tight flex items-center gap-1">
                          <span className="text-[#CC092F] text-[6px]">●</span>
                          {item}
                        </span>
                      ))}
                    </div>
                    <div className={`pt-1.5 mt-1.5 border-t ${phase.highlight ? "border-[#CC092F]/20" : "border-white/[0.06]"} flex items-center gap-1.5`}>
                      <ArrowRight className="w-3 h-3 text-[#8A8A8E]" />
                      <p className={`text-[10px] font-bold leading-tight ${phase.highlight ? "text-[#CC092F]" : "text-[#EDEDEF]"}`}>
                        {phase.deliverable}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <SlideFooter />
    </div>
  );
}
