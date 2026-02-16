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
      "Risco de inativação identificado com 30-60 dias de antecedência",
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
      "Gatilhos comerciais automáticos baseados em regras",
      "Gestão de comissões e ganhos transparente",
    ],
  },
  {
    icon: MessageCircle,
    title: "Comunicação Rápida",
    items: [
      "\"Buzina\" - Pedido de apoio com escalação contextual",
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
      "Perguntas respondidas: \"O que fazer com essa loja?\" / \"Qual minha prioridade hoje?\"",
    ],
    highlight: true,
  },
];

export default function Slide24() {
  return (
    <div className="flex flex-col items-center justify-start h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-[120px] pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-8 sm:pb-10 md:pb-12 lg:pb-15 overflow-y-auto">
      <div className="max-w-7xl w-full flex flex-col gap-6 md:gap-10 lg:gap-14">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="text-5xl font-bold text-white mb-2">
            <span className="font-bold" style={{ color: '#2B7FFF' }}>GIO - Copiloto do GEFIN</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-red-400 to-red-600 drop-shadow-lg">: Funcionalidades e Tecnologia</span>
          </h2>
          
        </motion.div>

        {/* Funcionalidades Core */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-5"
        >
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.05 }}
                className="relative group"
              >
                {feature.highlight && (
                  <div className="absolute inset-0 bg-gradient-to-r from-[#2B7FFF] via-blue-500 to-cyan-500 opacity-20 group-hover:opacity-30 transition-opacity duration-300 rounded-xl blur-xl" />
                )}
                <div
                  className={`relative bg-white/5 backdrop-blur-md border ${
                    feature.highlight ? "border-[#2B7FFF]/50" : "border-white/10"
                  } rounded-xl p-4 h-full hover:border-white/30 hover:bg-white/10 transition-all`}
                >
                  {/* Icon */}
                  <div className="flex justify-center mb-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 p-1 shadow-lg">
                      <div className="w-full h-full bg-[#0a1628] rounded-[10px] flex items-center justify-center">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h4 className={`text-base font-bold text-center mb-3 leading-tight ${feature.highlight ? "" : "text-white"}`} style={feature.highlight ? { color: '#2B7FFF' } : {}}>
                    {feature.title}
                    {feature.highlight && (
                      <span className="ml-1 text-xs px-2 py-0.5 rounded-full shadow-lg font-bold" style={{ backgroundColor: '#2B7FFF', color: 'white' }}>
                        NOVO
                      </span>
                    )}
                  </h4>

                  {/* Items */}
                  <ul className="space-y-1.5">
                    {feature.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <span className="text-blue-400 flex-shrink-0 mt-1">•</span>
                        <span className="text-white/80 text-sm leading-tight">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Health Score + Automação + Ecossistema */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Health Score */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 hover:border-white/30 hover:bg-white/10 transition-all"
          >
            {/* Icon */}
            <div className="flex justify-center mb-3">
              <div className="w-12 h-12 rounded-xl bg-white p-1 shadow-lg">
                <div className="w-full h-full bg-[#0a1628] rounded-[10px] flex items-center justify-center">
                  <Activity className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>

            <h4 className="text-base font-bold text-white text-center mb-3">Health Score Inteligente (0-100)</h4>
            <div className="space-y-2 mb-3">
              <div className="text-xs text-white/80 leading-tight">
                <span className="font-bold">30%</span> Performance Financeira
              </div>
              <div className="text-xs text-white/80 leading-tight">
                <span className="font-bold">20%</span> Qualidade
              </div>
              <div className="text-xs text-white/80 leading-tight">
                <span className="font-bold">20%</span> Engajamento
              </div>
              <div className="text-xs text-white/80 leading-tight">
                <span className="font-bold">15%</span> Produtos
              </div>
              <div className="text-xs text-white/80 leading-tight">
                <span className="font-bold">15%</span> Relacionamento
              </div>
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold">✓</span>
                <span className="text-xs text-white/80">80-100: Manutenção + upsell</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center text-white text-xs font-bold">!</span>
                <span className="text-xs text-white/80">50-79: Atenção + plano</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center text-white text-xs font-bold">✕</span>
                <span className="text-xs text-white/80">&lt;50: Risco + ação imediata</span>
              </div>
            </div>
          </motion.div>

          {/* Automação */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 hover:border-white/30 hover:bg-white/10 transition-all"
          >
            {/* Icon */}
            <div className="flex justify-center mb-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 p-1 shadow-lg">
                <div className="w-full h-full bg-[#0a1628] rounded-[10px] flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>

            <h4 className="text-base font-bold text-white text-center mb-3">Automação Inteligente - Exemplos</h4>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2">
                <Settings className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                <span className="text-xs text-white/80 leading-tight">
                  Performance -20% → Tarefa urgente + Gestor notificado + Campanha sugerida
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Settings className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                <span className="text-xs text-white/80 leading-tight">
                  Sem visita &gt;30 dias → Roteiro prioritário + Checklist reativação
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Settings className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                <span className="text-xs text-white/80 leading-tight">
                  Health Score &lt;40 → Plano de recuperação automático
                </span>
              </div>
            </div>
          </motion.div>

          {/* Ecossistema Microsoft */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 hover:border-white/30 hover:bg-white/10 transition-all"
          >
            {/* Icon */}
            <div className="flex justify-center mb-3">
              <div className="w-12 h-12 rounded-xl bg-white p-1 shadow-lg">
                <div className="w-full h-full bg-[#0a1628] rounded-[10px] flex items-center justify-center">
                  <Cloud className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>

            <h4 className="text-base font-bold text-white text-center mb-3">Ecossistema Microsoft</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-blue-400 flex-shrink-0 mt-0.5">•</span>
                <span className="text-xs text-white/80 leading-tight">
                  <span className="font-bold">Teams:</span> Comunicação + alertas + colaboração
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-400 flex-shrink-0 mt-0.5">•</span>
                <span className="text-xs text-white/80 leading-tight">
                  <span className="font-bold">Outlook:</span> Sincronização de agenda e lembretes
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-400 flex-shrink-0 mt-0.5">•</span>
                <span className="text-xs text-white/80 leading-tight">
                  <span className="font-bold">Power BI:</span> Dashboards executivos
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-400 flex-shrink-0 mt-0.5">•</span>
                <span className="text-xs text-white/80 leading-tight">
                  <span className="font-bold">Azure AD:</span> SSO + governança + auditoria
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