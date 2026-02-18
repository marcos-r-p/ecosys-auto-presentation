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

const bottomCards = [
  {
    icon: Activity,
    title: "Health Score (0-100)",
    content: (
      <div className="space-y-1">
        <div className="grid grid-cols-2 gap-x-3 gap-y-0.5">
          <div className="text-[10px] text-[#8A8A8E]"><span className="font-bold text-[#EDEDEF]">30%</span> Performance Financeira</div>
          <div className="text-[10px] text-[#8A8A8E]"><span className="font-bold text-[#EDEDEF]">20%</span> Qualidade</div>
          <div className="text-[10px] text-[#8A8A8E]"><span className="font-bold text-[#EDEDEF]">20%</span> Engajamento</div>
          <div className="text-[10px] text-[#8A8A8E]"><span className="font-bold text-[#EDEDEF]">15%</span> Produtos</div>
          <div className="text-[10px] text-[#8A8A8E]"><span className="font-bold text-[#EDEDEF]">15%</span> Relacionamento</div>
        </div>
        <div className="flex gap-2 mt-1.5 pt-1.5 border-t border-white/[0.06]">
          <span className="text-[9px] text-green-400 font-medium">80-100: Upsell</span>
          <span className="text-[9px] text-yellow-400 font-medium">50-79: Atenção</span>
          <span className="text-[9px] text-red-400 font-medium">&lt;50: Ação imediata</span>
        </div>
      </div>
    ),
  },
  {
    icon: Zap,
    title: "Automação Inteligente",
    content: (
      <div className="space-y-1">
        <div className="flex items-start gap-1.5">
          <span className="text-[#CC092F] flex-shrink-0 mt-0.5 text-[7px]">●</span>
          <span className="text-[10px] text-[#8A8A8E] leading-tight">Performance -20% → Tarefa urgente + Gestor notificado</span>
        </div>
        <div className="flex items-start gap-1.5">
          <span className="text-[#CC092F] flex-shrink-0 mt-0.5 text-[7px]">●</span>
          <span className="text-[10px] text-[#8A8A8E] leading-tight">Sem visita &gt;30 dias → Roteiro prioritário + Checklist</span>
        </div>
        <div className="flex items-start gap-1.5">
          <span className="text-[#CC092F] flex-shrink-0 mt-0.5 text-[7px]">●</span>
          <span className="text-[10px] text-[#8A8A8E] leading-tight">Health Score &lt;40 → Plano de recuperação automático</span>
        </div>
      </div>
    ),
  },
  {
    icon: Cloud,
    title: "Ecossistema Microsoft",
    content: (
      <div className="grid grid-cols-2 gap-1">
        <div className="text-[10px] text-[#8A8A8E]"><span className="font-bold text-[#EDEDEF]">Teams:</span> Comunicação + alertas</div>
        <div className="text-[10px] text-[#8A8A8E]"><span className="font-bold text-[#EDEDEF]">Outlook:</span> Sincronização de agenda</div>
        <div className="text-[10px] text-[#8A8A8E]"><span className="font-bold text-[#EDEDEF]">Power BI:</span> Dashboards executivos</div>
        <div className="text-[10px] text-[#8A8A8E]"><span className="font-bold text-[#EDEDEF]">Azure AD:</span> SSO + governança</div>
      </div>
    ),
  },
];

export default function Slide24() {
  return (
    <div className="flex flex-col items-center justify-start h-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 pt-3 pb-2 overflow-hidden">
      <div className="max-w-7xl w-full flex flex-col h-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-3"
        >
          <h2 className="font-extrabold tracking-tight text-[#EDEDEF]" style={{ fontSize: 'clamp(18px, 2.8vh, 36px)', lineHeight: '1.1' }}>
            <span className="font-bold" style={{ color: '#CC092F' }}>Copiloto Comercial</span>
            <span className="text-[#EDEDEF]">: Funcionalidades e Tecnologia</span>
          </h2>
        </motion.div>

        {/* Funcionalidades Core - 3x2 grid */}
        <div className="grid grid-cols-3 gap-2.5 mb-2.5 flex-1">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.04 }}
              className="flex"
            >
              <div
                className={`bg-white/[0.04] border ${
                  feature.highlight ? "border-[#CC092F]/50" : "border-white/[0.08]"
                } rounded-lg p-3 w-full hover:border-white/[0.12] transition-all flex flex-col`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 rounded-md bg-white/[0.06] flex items-center justify-center flex-shrink-0">
                    <feature.icon className={`w-4 h-4 ${feature.highlight ? "text-[#CC092F]" : "text-[#EDEDEF]"}`} />
                  </div>
                  <h4 className={`text-[11px] font-bold leading-tight ${feature.highlight ? "text-[#CC092F]" : "text-[#EDEDEF]"}`}>
                    {feature.title}
                    {feature.highlight && (
                      <span className="ml-1 text-[8px] px-1.5 py-0.5 rounded-full font-bold" style={{ backgroundColor: '#CC092F', color: 'white' }}>
                        NOVO
                      </span>
                    )}
                  </h4>
                </div>
                <ul className="space-y-0.5 flex-1">
                  {feature.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-1">
                      <span className="text-[#CC092F] flex-shrink-0 mt-0.5 text-[7px]">●</span>
                      <span className="text-[#8A8A8E] text-[9px] leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom row - Health Score + Automação + Ecossistema */}
        <div className="grid grid-cols-3 gap-2.5">
          {bottomCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
              className="bg-white/[0.04] border border-white/[0.08] rounded-lg p-3 hover:border-white/[0.12] transition-all"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-md bg-white/[0.06] flex items-center justify-center flex-shrink-0">
                  <card.icon className="w-4 h-4 text-[#EDEDEF]" />
                </div>
                <h4 className="text-[11px] font-bold text-[#EDEDEF]">{card.title}</h4>
              </div>
              {card.content}
            </motion.div>
          ))}
        </div>
      </div>

      <SlideFooter />
    </div>
  );
}
