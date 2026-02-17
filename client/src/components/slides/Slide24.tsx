import { motion } from "motion/react";
import { MapPin, Users, Target, Settings, MessageCircle, Bot, Activity, Zap, Cloud } from "lucide-react";
import SlideFooter from "../SlideFooter";

const features = [
  {
    icon: MapPin,
    title: "Gestão de Visitas Inteligente",
    items: [
      "Planejamento com frequência definida",
      "Check-in/out GPS com validação por raio",
      "Histórico completo com evidências",
      "Roteirização inteligente (proximidade + prioridade)",
    ],
  },
  {
    icon: Users,
    title: "Carteira de Parceiros 360°",
    items: [
      "Cadastro completo centralizado",
      "Memória institucional do relacionamento",
      "Performance e indicadores em tempo real",
      "Health Score visual (verde/amarelo/vermelho)",
    ],
  },
  {
    icon: Target,
    title: "Direcionamento e Priorização com IA",
    items: [
      "HQ define prioridades para campo",
      "Alertas preditivos de queda de performance",
      "Risco de inativação identificado 30-60 dias antes",
      "Sugestão automática de próximas ações",
    ],
    highlight: true,
  },
  {
    icon: Settings,
    title: "Operação Comercial Automatizada",
    items: [
      "Kanban de tarefas por lojista",
      "Checklist pós-visita estruturado",
      "Gatilhos comerciais automáticos",
      "Gestão de comissões e ganhos transparente",
    ],
  },
  {
    icon: MessageCircle,
    title: "Comunicação Rápida",
    items: [
      "\"Buzina\" - Pedido de apoio com escalação",
      "Integração nativa com Microsoft Teams",
      "Chat com histórico e evidências",
    ],
  },
  {
    icon: Bot,
    title: "First IA - Assistente Inteligente",
    items: [
      "Resumo automático de visitas por voz",
      "Sugestões do que registrar",
      "\"O que fazer com essa loja?\" / \"Qual minha prioridade?\"",
    ],
    highlight: true,
  },
];

export default function Slide24() {
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
          <h2 className="text-xl sm:text-2xl font-bold text-[#EDEDEF] mb-1">
            <span className="font-bold" style={{ color: '#2B7FFF' }}>Novo GIO</span>
            <span className="text-[#EDEDEF]">: Funcionalidades e Tecnologia</span>
          </h2>
        </motion.div>

        {/* Funcionalidades Core - 3x2 grid */}
        <div className="grid grid-cols-3 gap-2">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.04 }}
            >
              <div
                className={`bg-white/[0.04] border ${
                  feature.highlight ? "border-[#2B7FFF]/50" : "border-white/[0.08]"
                } rounded-lg p-2.5 h-full hover:border-white/[0.12] transition-all`}
              >
                <div className="flex justify-center mb-1.5">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.04] p-0.5 shadow-lg">
                    <div className="w-full h-full bg-[#0A0A0B] rounded-[6px] flex items-center justify-center">
                      <feature.icon className="w-4 h-4 text-[#EDEDEF]" />
                    </div>
                  </div>
                </div>
                <h4 className={`text-[11px] font-bold text-center mb-1.5 leading-tight ${feature.highlight ? "text-[#2B7FFF]" : "text-[#EDEDEF]"}`}>
                  {feature.title}
                  {feature.highlight && (
                    <span className="ml-1 text-[8px] px-1.5 py-0.5 rounded-full font-bold" style={{ backgroundColor: '#2B7FFF', color: 'white' }}>
                      NOVO
                    </span>
                  )}
                </h4>
                <ul className="space-y-0.5">
                  {feature.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-1">
                      <span className="text-[#2B7FFF] flex-shrink-0 mt-0.5 text-[7px]">●</span>
                      <span className="text-[#8A8A8E] text-[9px] leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Health Score + Automação + Ecossistema */}
        <div className="grid grid-cols-3 gap-2">
          {/* Health Score */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-white/[0.04] border border-white/[0.08] rounded-lg p-2.5 hover:border-white/[0.12] transition-all"
          >
            <div className="flex justify-center mb-1.5">
              <div className="w-8 h-8 rounded-lg bg-white p-0.5 shadow-lg">
                <div className="w-full h-full bg-[#0A0A0B] rounded-[6px] flex items-center justify-center">
                  <Activity className="w-4 h-4 text-[#EDEDEF]" />
                </div>
              </div>
            </div>
            <h4 className="text-[11px] font-bold text-[#EDEDEF] text-center mb-1.5">Health Score (0-100)</h4>
            <div className="space-y-0.5 mb-1.5">
              <div className="text-[9px] text-[#8A8A8E]"><span className="font-bold">30%</span> Performance Financeira</div>
              <div className="text-[9px] text-[#8A8A8E]"><span className="font-bold">20%</span> Qualidade</div>
              <div className="text-[9px] text-[#8A8A8E]"><span className="font-bold">20%</span> Engajamento</div>
              <div className="text-[9px] text-[#8A8A8E]"><span className="font-bold">15%</span> Produtos</div>
              <div className="text-[9px] text-[#8A8A8E]"><span className="font-bold">15%</span> Relacionamento</div>
            </div>
            <div className="space-y-0.5">
              <div className="flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-white/[0.06] flex items-center justify-center text-[#EDEDEF] text-[8px] font-bold">✓</span>
                <span className="text-[9px] text-[#8A8A8E]">80-100: Manutenção + upsell</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-white/[0.06] flex items-center justify-center text-[#EDEDEF] text-[8px] font-bold">!</span>
                <span className="text-[9px] text-[#8A8A8E]">50-79: Atenção + plano</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-white/[0.06] flex items-center justify-center text-[#EDEDEF] text-[8px] font-bold">✕</span>
                <span className="text-[9px] text-[#8A8A8E]">&lt;50: Risco + ação imediata</span>
              </div>
            </div>
          </motion.div>

          {/* Automação */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="bg-white/[0.04] border border-white/[0.08] rounded-lg p-2.5 hover:border-white/[0.12] transition-all"
          >
            <div className="flex justify-center mb-1.5">
              <div className="w-8 h-8 rounded-lg bg-white/[0.04] p-0.5 shadow-lg">
                <div className="w-full h-full bg-[#0A0A0B] rounded-[6px] flex items-center justify-center">
                  <Zap className="w-4 h-4 text-[#EDEDEF]" />
                </div>
              </div>
            </div>
            <h4 className="text-[11px] font-bold text-[#EDEDEF] text-center mb-1.5">Automação Inteligente</h4>
            <div className="space-y-1.5">
              <div className="flex items-start gap-1.5">
                <Settings className="w-3 h-3 text-[#EDEDEF] flex-shrink-0 mt-0.5" />
                <span className="text-[9px] text-[#8A8A8E] leading-tight">
                  Performance -20% → Tarefa urgente + Gestor notificado
                </span>
              </div>
              <div className="flex items-start gap-1.5">
                <Settings className="w-3 h-3 text-[#EDEDEF] flex-shrink-0 mt-0.5" />
                <span className="text-[9px] text-[#8A8A8E] leading-tight">
                  Sem visita &gt;30 dias → Roteiro prioritário + Checklist
                </span>
              </div>
              <div className="flex items-start gap-1.5">
                <Settings className="w-3 h-3 text-[#EDEDEF] flex-shrink-0 mt-0.5" />
                <span className="text-[9px] text-[#8A8A8E] leading-tight">
                  Health Score &lt;40 → Plano de recuperação automático
                </span>
              </div>
            </div>
          </motion.div>

          {/* Ecossistema Microsoft */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="bg-white/[0.04] border border-white/[0.08] rounded-lg p-2.5 hover:border-white/[0.12] transition-all"
          >
            <div className="flex justify-center mb-1.5">
              <div className="w-8 h-8 rounded-lg bg-white p-0.5 shadow-lg">
                <div className="w-full h-full bg-[#0A0A0B] rounded-[6px] flex items-center justify-center">
                  <Cloud className="w-4 h-4 text-[#EDEDEF]" />
                </div>
              </div>
            </div>
            <h4 className="text-[11px] font-bold text-[#EDEDEF] text-center mb-1.5">Ecossistema Microsoft</h4>
            <div className="space-y-1">
              <div className="flex items-start gap-1">
                <span className="text-[#2B7FFF] flex-shrink-0 mt-0.5 text-[7px]">●</span>
                <span className="text-[9px] text-[#8A8A8E] leading-tight">
                  <span className="font-bold">Teams:</span> Comunicação + alertas
                </span>
              </div>
              <div className="flex items-start gap-1">
                <span className="text-[#2B7FFF] flex-shrink-0 mt-0.5 text-[7px]">●</span>
                <span className="text-[9px] text-[#8A8A8E] leading-tight">
                  <span className="font-bold">Outlook:</span> Sincronização de agenda
                </span>
              </div>
              <div className="flex items-start gap-1">
                <span className="text-[#2B7FFF] flex-shrink-0 mt-0.5 text-[7px]">●</span>
                <span className="text-[9px] text-[#8A8A8E] leading-tight">
                  <span className="font-bold">Power BI:</span> Dashboards executivos
                </span>
              </div>
              <div className="flex items-start gap-1">
                <span className="text-[#2B7FFF] flex-shrink-0 mt-0.5 text-[7px]">●</span>
                <span className="text-[9px] text-[#8A8A8E] leading-tight">
                  <span className="font-bold">Azure AD:</span> SSO + governança
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <SlideFooter />
    </div>
  );
}
