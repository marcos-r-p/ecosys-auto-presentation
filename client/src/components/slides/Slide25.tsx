import { motion } from "motion/react";
import { TrendingUp, UserX, DollarSign, Brain, Calendar } from "lucide-react";
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
    phase: "Mês 1-2: MVP Essencial",
    items: [
      "Gestão de visitas (GPS + registro)",
      "Carteira 360° (cadastro + histórico)",
      "Health Score v1 (score + semáforo)",
      "Comunicação rápida (\"Buzina\")",
    ],
    deliverable: "MVP funcional + Piloto (20-30 usuários)",
  },
  {
    phase: "Mês 3-4: Inteligência + Integrações",
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
    phase: "Mês 5-6: IA Avançada + Gamificação",
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
    <div className="flex flex-col items-center justify-start h-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 pt-2 pb-1 overflow-hidden">
      <div className="max-w-7xl w-full flex flex-col gap-2">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-xl font-bold text-[#EDEDEF] mb-0.5">
            <span className="font-bold" style={{ color: '#2B7FFF' }}>Novo GIO</span>
            <span className="text-[#EDEDEF]">: Impacto, Roadmap e Integração</span>
          </h2>
          <p className="text-xs text-[#8A8A8E] font-medium">
            Transformação mensurável em 6 meses
          </p>
        </motion.div>

        {/* Impacto Esperado */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="text-sm font-bold text-[#EDEDEF] text-center mb-2">
            Impacto Esperado nos Resultados
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {impacts.map((impact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 + index * 0.04 }}
                className="bg-white/[0.04] border border-white/[0.08] rounded-lg p-3 hover:border-white/[0.12] transition-all"
              >
                <div className="flex justify-center mb-2">
                  <div className="w-8 h-8 rounded-lg bg-white p-0.5 shadow-lg">
                    <div className="w-full h-full bg-[#0A0A0B] rounded-[6px] flex items-center justify-center">
                      <impact.icon className="w-4 h-4 text-[#EDEDEF]" />
                    </div>
                  </div>
                </div>
                <h4 className="text-[11px] font-bold text-[#EDEDEF] text-center mb-1.5 leading-tight">{impact.title}</h4>
                <ul className="space-y-0.5">
                  {impact.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-1">
                      <span className="text-[#8A8A8E] flex-shrink-0 mt-0.5 text-[8px]">✓</span>
                      <span className="text-[#8A8A8E] text-[9px] leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Roadmap */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <h3 className="text-sm font-bold text-[#EDEDEF] text-center mb-2">
            Roadmap de Entrega (6 Meses)
          </h3>
          <div className="grid grid-cols-3 gap-2">
            {roadmap.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
              >
                <div
                  className={`bg-white/[0.04] border ${
                    phase.highlight ? "border-[#2B7FFF]/50" : "border-white/[0.08]"
                  } rounded-lg p-3 h-full hover:border-white/[0.12] transition-all`}
                >
                  <div className="flex items-center gap-1.5 mb-2">
                    <Calendar className={`w-3.5 h-3.5 ${phase.highlight ? "text-[#2B7FFF]" : "text-[#2B7FFF]"}`} />
                    <h4 className={`text-[11px] font-bold leading-tight ${phase.highlight ? "text-[#2B7FFF]" : "text-[#EDEDEF]"}`}>
                      {phase.phase}
                    </h4>
                  </div>
                  <ul className="space-y-0.5 mb-2">
                    {phase.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-1">
                        <span className="text-[#8A8A8E] flex-shrink-0 mt-0.5 text-[8px]">✓</span>
                        <span className="text-[#8A8A8E] text-[9px] leading-tight">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className={`pt-2 border-t ${phase.highlight ? "border-[#2B7FFF]/30" : "border-white/[0.08]"}`}>
                    <p className="text-[8px] font-bold text-[#8A8A8E] mb-0.5">Entregável:</p>
                    <p className={`text-[10px] font-bold leading-tight ${phase.highlight ? "text-[#2B7FFF]" : "text-[#EDEDEF]"}`}>
                      {phase.deliverable}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <SlideFooter />
    </div>
  );
}
