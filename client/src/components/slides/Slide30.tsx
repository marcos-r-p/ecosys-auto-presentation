import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Bot, Database, ShoppingCart, Smartphone, MessageSquare, Wifi, Zap, BarChart3, Brain, Sparkles, Search, Bell, Trophy, Map, Shield, Server, Eye, Layers, Rocket } from "lucide-react";
import SlideFooter from "../SlideFooter";

interface DeliveryDetail {
  product: string;
  icon: React.ElementType;
  items: string[];
  color: string;
}

interface TimelineMonth {
  month: number;
  short: string;
  title: string;
  highlight?: boolean;
  details: DeliveryDetail[];
}

const autolineDeliveries: TimelineMonth[] = [
  {
    month: 1,
    short: "Arquitetura",
    title: "Ajuste Arquitetura & Discovery",
    details: [
      {
        product: "DMS Autoline",
        icon: Database,
        items: ["Discovery e levantamento", "Ajuste de arquitetura base", "Definição de infraestrutura"],
        color: "#2B7FFF",
      },
      {
        product: "Novo GIO",
        icon: Bot,
        items: ["MVP Essencial: Gestão de Visitas", "Carteira 360°", "Health Score v1", "Comunicação básica"],
        color: "#2B7FFF",
      },
    ],
  },
  {
    month: 2,
    short: "Ampliação",
    title: "Ampliação Arquitetura",
    details: [
      {
        product: "DMS Autoline",
        icon: Database,
        items: ["Ampliação da arquitetura", "Preparação de ambientes", "Setup de CI/CD"],
        color: "#2B7FFF",
      },
      {
        product: "Novo GIO",
        icon: Bot,
        items: ["Priorização por IA", "Alertas automáticos", "Gestão de Ganhos", "Piloto 20-30 usuários"],
        color: "#2B7FFF",
      },
    ],
  },
  {
    month: 3,
    short: "Observabilidade",
    title: "Observabilidade",
    details: [
      {
        product: "Infraestrutura",
        icon: Eye,
        items: ["Monitoramento completo", "Logs centralizados", "Alertas de performance", "Dashboards operacionais"],
        color: "#2B7FFF",
      },
      {
        product: "Novo GIO",
        icon: Bot,
        items: ["Painel Gerencial", "Teams + Outlook integrados", "Rollout 50-100 usuários"],
        color: "#2B7FFF",
      },
    ],
  },
  {
    month: 4,
    short: "Segurança",
    title: "Segurança & Governança",
    details: [
      {
        product: "Infraestrutura",
        icon: Shield,
        items: ["Governança de dados", "Protocolos de segurança", "Compliance e auditoria", "Protótipo de segurança"],
        color: "#2B7FFF",
      },
      {
        product: "Novo GIO",
        icon: Bot,
        items: ["Gestão de Ganhos avançada", "Alertas automáticos refinados", "Rollout 50-100 usuários"],
        color: "#2B7FFF",
      },
    ],
  },
  {
    month: 5,
    short: "MVP V1",
    title: "Marketplace V1 + DMS Lite + App Vendedor",
    highlight: true,
    details: [
      {
        product: "Marketplace V1",
        icon: ShoppingCart,
        items: ["Catálogo básico com filtros", "Busca simples", "Listagem com fotos", "Área logada: favoritos e alertas"],
        color: "#2B7FFF",
      },
      {
        product: "DMS Lite V1",
        icon: Database,
        items: ["Fork DMS simplificado", "Controle de acessos", "Gestão básica de estoque"],
        color: "#2B7FFF",
      },
      {
        product: "App do Vendedor",
        icon: Smartphone,
        items: ["Ferramenta móvel essencial", "Gestão de leads", "Equipe de vendas conectada"],
        color: "#2B7FFF",
      },
      {
        product: "Novo GIO",
        icon: Bot,
        items: ["Roteirização Inteligente", "First IA assistente", "Health Score v2", "100% Operacional"],
        color: "#2B7FFF",
      },
    ],
  },
  {
    month: 6,
    short: "Plataforma",
    title: "Data & Insight (Plataforma)",
    highlight: true,
    details: [
      {
        product: "Motor Comercial",
        icon: Brain,
        items: ["Plataforma de dados ativa", "Cruzamento de fontes do banco", "Inteligência de antecipação de demanda", "Alimentação do Novo GIO"],
        color: "#2B7FFF",
      },
      {
        product: "Novo GIO",
        icon: Bot,
        items: ["Gamificação completa", "Power BI integrado", "First IA avançada", "100% Operacional"],
        color: "#2B7FFF",
      },
    ],
  },
  {
    month: 7,
    short: "Dados",
    title: "Data & Insight (Continuação)",
    highlight: true,
    details: [
      {
        product: "Motor Comercial",
        icon: Brain,
        items: ["Refinamento de modelos analíticos", "Integração Autoline ↔ GIO", "Dados em tempo real", "Estratégia comercial automatizada"],
        color: "#2B7FFF",
      },
      {
        product: "Integração",
        icon: Wifi,
        items: ["Autoline ↔ GIO via Plataforma de Dados", "APIs bidirecionais", "Sincronização em tempo real"],
        color: "#2B7FFF",
      },
    ],
  },
  {
    month: 8,
    short: "Infraestrutura",
    title: "Ampliação Infra",
    details: [
      {
        product: "Infraestrutura",
        icon: Server,
        items: ["Ampliação de capacidade", "Escalabilidade horizontal", "Redundância e alta disponibilidade", "Otimização de performance"],
        color: "#2B7FFF",
      },
    ],
  },
  {
    month: 9,
    short: "Evolução V2",
    title: "Marketplace V2 + DMS Pro V2 + App Marketplace",
    highlight: true,
    details: [
      {
        product: "Marketplace V2",
        icon: ShoppingCart,
        items: ["Filtros avançados (combustível, km, cor)", "Busca inteligente com IA", "Filtro por localidade"],
        color: "#2B7FFF",
      },
      {
        product: "DMS Pro V2",
        icon: Database,
        items: ["Comunicação Unificada (eConversa)", "Integradores de portais e redes sociais", "Originação Bradesco integrada", "Analytics e dashboards avançados"],
        color: "#2B7FFF",
      },
      {
        product: "App Marketplace",
        icon: Smartphone,
        items: ["App nativo iOS/Android", "Push notifications", "Jornada mobile completa"],
        color: "#2B7FFF",
      },
    ],
  },
  {
    month: 10,
    short: "Recovery",
    title: "Site Recovery",
    details: [
      {
        product: "Infraestrutura",
        icon: Server,
        items: ["Disaster recovery completo", "Backup automatizado", "Plano de contingência", "Testes de failover"],
        color: "#2B7FFF",
      },
    ],
  },
  {
    month: 11,
    short: "Refinamento",
    title: "Data & Insight (Refinamento)",
    details: [
      {
        product: "Motor Comercial",
        icon: Brain,
        items: ["Refinamento de modelos preditivos", "Inteligência competitiva", "Previsão de churn refinada", "Otimização contínua de estratégia"],
        color: "#2B7FFF",
      },
    ],
  },
  {
    month: 12,
    short: "Final V3",
    title: "Marketplace V3 + DMS Pro V3 + Embedded App Bradesco",
    highlight: true,
    details: [
      {
        product: "Marketplace V3",
        icon: ShoppingCart,
        items: ["Plataforma de conteúdo curado", "Selos de qualidade", "IA avançada: simulação financeira", "Leads com crédito pré-aprovado", "SEO avançado"],
        color: "#2B7FFF",
      },
      {
        product: "DMS Pro V3",
        icon: Database,
        items: ["Copiloto Autoline (IA assistente)", "Carteira de Clientes avançada", "Relacionamento e fidelização", "Automações inteligentes"],
        color: "#2B7FFF",
      },
      {
        product: "Embedded App Bradesco",
        icon: Layers,
        items: ["App embarcado no ecossistema Bradesco", "Integração nativa", "Experiência unificada"],
        color: "#2B7FFF",
      },
    ],
  },
];

export default function Slide30() {
  const [hoveredMonth, setHoveredMonth] = useState<number | null>(null);

  return (
    <div className="flex flex-col items-center justify-start h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-[120px] pt-8 sm:pt-10 pb-8 sm:pb-10 overflow-y-auto">
      <div className="max-w-7xl w-full flex flex-col gap-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-2"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-[#EDEDEF] mb-1">
            Cronograma de Entregas Integrado
          </h2>
          <p className="text-sm text-[#8A8A8E]">
            Passe o mouse sobre cada mês para ver as entregas detalhadas
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {/* Timeline Container */}
          <div className="relative py-16 overflow-x-auto">
            {/* Horizontal Line */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-white/10 transform -translate-y-1/2 min-w-[900px]" />

            {/* Months Grid */}
            <div className="relative grid grid-cols-12 gap-1.5 min-w-[900px]">
              {autolineDeliveries.map((delivery, idx) => {
                const isOdd = delivery.month % 2 === 1;
                const isHovered = hoveredMonth === delivery.month;

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: isOdd ? -15 : 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + idx * 0.04 }}
                    className="relative flex items-center justify-center"
                    style={{ height: '180px' }}
                    onMouseEnter={() => setHoveredMonth(delivery.month)}
                    onMouseLeave={() => setHoveredMonth(null)}
                  >
                    {isOdd ? (
                      <div className="absolute flex flex-col items-center" style={{ bottom: '50%' }}>
                        {/* Card Above */}
                        <div
                          className={`rounded-lg p-2 w-full min-h-[56px] flex flex-col items-center justify-center text-center transition-all duration-300 cursor-pointer mb-1.5 ${
                            isHovered
                              ? "bg-[#2B7FFF]/20 border-2 border-[#2B7FFF] shadow-lg shadow-[#2B7FFF]/20 scale-110"
                              : delivery.highlight
                                ? "bg-white/[0.06] border border-white/[0.12]"
                                : "bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.06]"
                          }`}
                        >
                          <div className={`text-[11px] font-bold mb-0.5 transition-colors duration-300 ${isHovered ? "text-[#2B7FFF]" : "text-[#8A8A8E]"}`}>
                            Mês {delivery.month}
                          </div>
                          <div className={`text-[9px] leading-tight font-medium transition-colors duration-300 ${isHovered ? "text-white" : "text-[#EDEDEF]"}`}>
                            {delivery.short}
                          </div>
                        </div>

                        {/* Connector Line */}
                        <div className={`w-px h-6 transition-colors duration-300 ${isHovered ? "bg-[#2B7FFF]" : "bg-white/10"}`} />

                        {/* Dot on Timeline */}
                        <div
                          className={`w-3 h-3 rounded-full relative z-10 transition-all duration-300 ${
                            isHovered
                              ? "bg-[#2B7FFF] shadow-lg shadow-[#2B7FFF]/60 scale-150"
                              : "bg-white/10 border border-white/20"
                          }`}
                        />
                      </div>
                    ) : (
                      <div className="absolute flex flex-col items-center" style={{ top: '50%' }}>
                        {/* Dot on Timeline */}
                        <div
                          className={`w-3 h-3 rounded-full relative z-10 transition-all duration-300 ${
                            isHovered
                              ? "bg-[#2B7FFF] shadow-lg shadow-[#2B7FFF]/60 scale-150"
                              : "bg-[#2B7FFF]/60 border border-[#2B7FFF]/40"
                          }`}
                        />

                        {/* Connector Line */}
                        <div className={`w-px h-6 transition-colors duration-300 ${isHovered ? "bg-[#2B7FFF]" : "bg-[#2B7FFF]/30"}`} />

                        {/* Card Below */}
                        <div
                          className={`rounded-lg p-2 w-full min-h-[56px] flex flex-col items-center justify-center text-center transition-all duration-300 cursor-pointer mt-1.5 ${
                            isHovered
                              ? "bg-[#2B7FFF]/20 border-2 border-[#2B7FFF] shadow-lg shadow-[#2B7FFF]/20 scale-110"
                              : delivery.highlight
                                ? "bg-white/[0.06] border border-[#2B7FFF]/30"
                                : "bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.06]"
                          }`}
                        >
                          <div className={`text-[11px] font-bold mb-0.5 transition-colors duration-300 ${isHovered ? "text-white" : "text-[#2B7FFF]"}`}>
                            Mês {delivery.month}
                          </div>
                          <div className={`text-[9px] leading-tight font-medium transition-colors duration-300 ${isHovered ? "text-white" : "text-[#EDEDEF]"}`}>
                            {delivery.short}
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Detail Panel — appears on hover */}
        <div className="min-h-[220px]">
          <AnimatePresence mode="wait">
            {hoveredMonth !== null ? (
              <motion.div
                key={hoveredMonth}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-5"
              >
                {/* Month Header */}
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/[0.08]">
                  <div className="w-8 h-8 rounded-lg bg-[#2B7FFF]/20 flex items-center justify-center">
                    <Rocket className="w-4 h-4 text-[#2B7FFF]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#EDEDEF]">
                      Mês {hoveredMonth} — {autolineDeliveries.find(d => d.month === hoveredMonth)?.title}
                    </h3>
                  </div>
                </div>

                {/* Deliveries Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                  {autolineDeliveries
                    .find(d => d.month === hoveredMonth)
                    ?.details.map((detail, idx) => {
                      const Icon = detail.icon;
                      return (
                        <div
                          key={idx}
                          className="bg-white/[0.03] border border-white/[0.06] rounded-lg p-3"
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <Icon className="w-4 h-4 text-[#2B7FFF]" />
                            <span className="text-xs font-bold text-[#EDEDEF]">
                              {detail.product}
                            </span>
                          </div>
                          <ul className="space-y-1">
                            {detail.items.map((item, i) => (
                              <li key={i} className="text-[10px] text-[#8A8A8E] flex items-start gap-1.5">
                                <span className="text-[#2B7FFF] mt-0.5 text-[8px]">●</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="placeholder"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="bg-white/[0.02] border border-dashed border-white/[0.06] rounded-xl p-5 flex items-center justify-center min-h-[220px]"
              >
                <div className="text-center">
                  <div className="text-sm text-[#8A8A8E] mb-1">👆 Passe o mouse sobre um mês para ver as entregas</div>
                  <div className="text-xs text-[#555]">Cada mês mostra os produtos e funcionalidades que serão entregues</div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <SlideFooter />
    </div>
  );
}
