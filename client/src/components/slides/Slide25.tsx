import { motion } from "motion/react";
import { TrendingUp, UserX, DollarSign, Brain, Calendar } from "lucide-react";
import SlideFooter from "../SlideFooter";

const impacts = [
  {
    icon: TrendingUp,
    title: "Produtividade Multiplicada",
    items: [
      "+40-60% visitas efetivas (roteirização + priorização)",
      "-50% tempo em tarefas administrativas (automação)",
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
      "Roteirização inteligente (mapa calor + próxima visita)",
      "First IA - Assistente (resumo + sugestões)",
      "Health Score v2 (algoritmo refinado + previsão churn)",
      "Gamificação completa (pontos + badges + ranking)",
      "Kanban de projetos (campanhas + boards)",
      "Integração Power BI (dashboards executivos)",
    ],
    deliverable: "Sistema completo + 100% usuários",
    highlight: true,
  },
];

export default function Slide25() {
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
          <h2 className="text-3xl font-bold text-[#EDEDEF] mb-2">
            <span className="font-bold" style={{ color: '#2B7FFF' }}>Novo GIO</span>
            <span className="text-[#EDEDEF]">: Impacto, Roadmap e Integração</span>
          </h2>
          <p className="text-base text-[#8A8A8E] font-medium">
            Transformação mensurável em 6 meses
          </p>
        </motion.div>

        {/* Impacto Esperado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-xl font-bold text-[#EDEDEF] text-center mb-4">
            Impacto Esperado nos Resultados
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {impacts.map((impact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.05 }}
                className="relative bg-white/[0.04] border border-white/[0.08] rounded-xl p-5 hover:border-white/[0.12] hover:bg-white/[0.06] transition-all"
              >
                {/* Icon */}
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 rounded-xl bg-white p-1 shadow-lg">
                    <div className="w-full h-full bg-[#0A0A0B] rounded-[10px] flex items-center justify-center">
                      <impact.icon className="w-6 h-6 text-[#EDEDEF]" />
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h4 className="text-base font-bold text-[#EDEDEF] text-center mb-3 leading-tight">{impact.title}</h4>

                {/* Items */}
                <ul className="space-y-2">
                  {impact.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <span className="text-[#8A8A8E] flex-shrink-0 mt-0.5">✓</span>
                      <span className="text-[#8A8A8E] text-sm leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Roadmap */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-[#EDEDEF] text-center mb-4">
            🗓️ Roadmap de Entrega (6 Meses)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {roadmap.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 + index * 0.1 }}
                className="relative group"
              >
                <div
                  className={`relative bg-white/[0.04] border ${
                    phase.highlight ? "border-[#2B7FFF]/50" : "border-white/[0.08]"
                  } rounded-xl p-4 h-full hover:border-white/[0.12] hover:bg-white/[0.06] transition-all`}
                >
                  {/* Phase Title */}
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className={`w-5 h-5 ${phase.highlight ? "" : "text-[#2B7FFF]"}`} style={phase.highlight ? { color: '#2B7FFF' } : {}} />
                    <h4 className={`text-base font-bold leading-tight ${phase.highlight ? "" : "text-[#EDEDEF]"}`} style={phase.highlight ? { color: '#2B7FFF' } : {}}>
                      {phase.phase}
                    </h4>
                  </div>

                  {/* Items */}
                  <ul className="space-y-1.5 mb-3">
                    {phase.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <span className="text-[#8A8A8E] flex-shrink-0 mt-0.5">✓</span>
                        <span className="text-[#8A8A8E] text-sm leading-tight">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Deliverable */}
                  <div className={`mt-3 pt-3 border-t ${phase.highlight ? "border-[#2B7FFF]/30" : "border-white/[0.08]"}`}>
                    <p className="text-xs font-bold text-[#8A8A8E] mb-1">Entregável:</p>
                    <p className={`text-sm font-bold leading-tight ${phase.highlight ? "" : "text-[#EDEDEF]"}`} style={phase.highlight ? { color: '#2B7FFF' } : {}}>
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