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
      { product: "Gestor Autoline", icon: Database, items: ["Discovery e levantamento", "Ajuste de arquitetura base", "Definição de infraestrutura"], color: "#2B7FFF" },
      { product: "Novo GIO", icon: Bot, items: ["MVP Essencial: Gestão de Visitas", "Carteira 360°", "Health Score v1", "Comunicação básica"], color: "#2B7FFF" },
    ],
  },
  {
    month: 2,
    short: "Ampliação",
    title: "Ampliação Arquitetura",
    details: [
      { product: "Gestor Autoline", icon: Database, items: ["Ampliação da arquitetura", "Preparação de ambientes", "Setup de CI/CD"], color: "#2B7FFF" },
      { product: "Novo GIO", icon: Bot, items: ["Priorização por IA", "Alertas automáticos", "Gestão de Ganhos", "Piloto 20-30 usuários"], color: "#2B7FFF" },
    ],
  },
  {
    month: 3,
    short: "Observabilidade",
    title: "Observabilidade",
    details: [
      { product: "Infraestrutura", icon: Eye, items: ["Monitoramento completo", "Logs centralizados", "Alertas de performance"], color: "#2B7FFF" },
      { product: "Novo GIO", icon: Bot, items: ["Painel Gerencial", "Teams + Outlook integrados", "Rollout 50-100 usuários"], color: "#2B7FFF" },
    ],
  },
  {
    month: 4,
    short: "Segurança",
    title: "Segurança & Governança",
    details: [
      { product: "Infraestrutura", icon: Shield, items: ["Governança de dados", "Protocolos de segurança", "Compliance e auditoria"], color: "#2B7FFF" },
      { product: "Novo GIO", icon: Bot, items: ["Gestão de Ganhos avançada", "Alertas refinados", "Rollout 50-100 usuários"], color: "#2B7FFF" },
    ],
  },
  {
    month: 5,
    short: "MVP V1",
    title: "Marketplace V1 + Gestor V1 + App Vendedor",
    highlight: true,
    details: [
      { product: "Marketplace V1", icon: ShoppingCart, items: ["Catálogo básico com filtros", "Busca simples", "Área logada: favoritos e alertas"], color: "#2B7FFF" },
      { product: "Gestor Autoline V1", icon: Database, items: ["Fork Gestor simplificado", "Controle de acessos", "Gestão básica de estoque"], color: "#2B7FFF" },
      { product: "App do Vendedor", icon: Smartphone, items: ["Ferramenta móvel essencial", "Gestão de leads"], color: "#2B7FFF" },
      { product: "Novo GIO", icon: Bot, items: ["Roteirização Inteligente", "First IA assistente", "100% Operacional"], color: "#2B7FFF" },
    ],
  },
  {
    month: 6,
    short: "Plataforma",
    title: "Data & Insight (Plataforma)",
    highlight: true,
    details: [
      { product: "Motor Comercial", icon: Brain, items: ["Plataforma de dados ativa", "Cruzamento de fontes", "Antecipação de demanda"], color: "#2B7FFF" },
      { product: "Novo GIO", icon: Bot, items: ["Gamificação completa", "Power BI integrado", "First IA avançada"], color: "#2B7FFF" },
    ],
  },
  {
    month: 7,
    short: "Dados",
    title: "Data & Insight (Continuação)",
    highlight: true,
    details: [
      { product: "Motor Comercial", icon: Brain, items: ["Refinamento de modelos", "Dados em tempo real", "Estratégia automatizada"], color: "#2B7FFF" },
      { product: "Integração", icon: Wifi, items: ["Autoline ↔ GIO via Plataforma", "APIs bidirecionais"], color: "#2B7FFF" },
    ],
  },
  {
    month: 8,
    short: "Infra",
    title: "Ampliação Infra",
    details: [
      { product: "Infraestrutura", icon: Server, items: ["Ampliação de capacidade", "Escalabilidade horizontal", "Alta disponibilidade"], color: "#2B7FFF" },
    ],
  },
  {
    month: 9,
    short: "Evolução V2",
    title: "Marketplace V2 + Gestor V2 + App",
    highlight: true,
    details: [
      { product: "Marketplace V2", icon: ShoppingCart, items: ["Filtros avançados", "Busca inteligente com IA", "Filtro por localidade"], color: "#2B7FFF" },
      { product: "Gestor Autoline V2", icon: Database, items: ["eConversa", "Integradores de portais", "Originação Bradesco"], color: "#2B7FFF" },
      { product: "App Marketplace", icon: Smartphone, items: ["App nativo iOS/Android", "Push notifications"], color: "#2B7FFF" },
    ],
  },
  {
    month: 10,
    short: "Recovery",
    title: "Site Recovery",
    details: [
      { product: "Infraestrutura", icon: Server, items: ["Disaster recovery completo", "Backup automatizado", "Plano de contingência"], color: "#2B7FFF" },
    ],
  },
  {
    month: 11,
    short: "Refinamento",
    title: "Data & Insight (Refinamento)",
    details: [
      { product: "Motor Comercial", icon: Brain, items: ["Modelos preditivos refinados", "Inteligência competitiva", "Previsão de churn"], color: "#2B7FFF" },
    ],
  },
  {
    month: 12,
    short: "Final V3",
    title: "Marketplace V3 + Gestor V3 + Embedded App",
    highlight: true,
    details: [
      { product: "Marketplace V3", icon: ShoppingCart, items: ["Conteúdo curado", "Selos de qualidade", "IA: simulação financeira"], color: "#2B7FFF" },
      { product: "Gestor Autoline V3", icon: Database, items: ["Copiloto Autoline (IA)", "Carteira avançada", "Automações inteligentes"], color: "#2B7FFF" },
      { product: "Embedded App Bradesco", icon: Layers, items: ["App embarcado no ecossistema Bradesco", "Experiência unificada"], color: "#2B7FFF" },
    ],
  },
];

export default function Slide30() {
  const [hoveredMonth, setHoveredMonth] = useState<number | null>(null);

  return (
    <div className="flex flex-col items-center h-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 overflow-hidden">
      {/* Título próximo ao header */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center pt-10 pb-2"
      >
        <h2 className="text-xl lg:text-2xl font-bold text-[#EDEDEF] mb-0.5">
          Cronograma de Entregas Integrado
        </h2>
        <p className="text-xs text-[#8A8A8E]">
          Passe o mouse sobre cada mês para ver as entregas detalhadas
        </p>
      </motion.div>

      <div className="max-w-7xl w-full flex flex-col gap-3 flex-1 justify-center">
        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="relative py-4 overflow-x-auto">
            {/* Horizontal Line */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-white/10 transform -translate-y-1/2 min-w-[900px]" />

            {/* Months Grid */}
            <div className="relative grid grid-cols-12 gap-1 min-w-[900px]">
              {autolineDeliveries.map((delivery, idx) => {
                const isOdd = delivery.month % 2 === 1;
                const isHovered = hoveredMonth === delivery.month;

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: isOdd ? -10 : 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.15 + idx * 0.03 }}
                    className="relative flex items-center justify-center"
                    style={{ height: '140px' }}
                    onMouseEnter={() => setHoveredMonth(delivery.month)}
                    onMouseLeave={() => setHoveredMonth(null)}
                  >
                    {isOdd ? (
                      <div className="absolute flex flex-col items-center" style={{ bottom: '50%' }}>
                        <div
                          className={`rounded-md p-1.5 w-full min-h-[40px] flex flex-col items-center justify-center text-center transition-all duration-300 cursor-pointer mb-1 ${
                            isHovered
                              ? "bg-[#2B7FFF]/20 border-2 border-[#2B7FFF] shadow-lg shadow-[#2B7FFF]/20 scale-110"
                              : delivery.highlight
                                ? "bg-white/[0.06] border border-[#2B7FFF]/30"
                                : "bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.06]"
                          }`}
                        >
                          <div className={`text-[10px] font-bold mb-0.5 transition-colors duration-300 ${isHovered ? "text-[#2B7FFF]" : "text-[#8A8A8E]"}`}>
                            Mês {delivery.month}
                          </div>
                          <div className={`text-[8px] leading-tight font-medium transition-colors duration-300 ${isHovered ? "text-white" : "text-[#EDEDEF]"}`}>
                            {delivery.short}
                          </div>
                        </div>
                        <div className={`w-px h-3 transition-colors duration-300 ${isHovered ? "bg-[#2B7FFF]" : "bg-white/10"}`} />
                        <div className={`w-2.5 h-2.5 rounded-full relative z-10 transition-all duration-300 ${
                          isHovered ? "bg-[#2B7FFF] shadow-lg shadow-[#2B7FFF]/60 scale-150" : "bg-white/10 border border-white/20"
                        }`} />
                      </div>
                    ) : (
                      <div className="absolute flex flex-col items-center" style={{ top: '50%' }}>
                        <div className={`w-2.5 h-2.5 rounded-full relative z-10 transition-all duration-300 ${
                          isHovered ? "bg-[#2B7FFF] shadow-lg shadow-[#2B7FFF]/60 scale-150" : "bg-[#2B7FFF]/60 border border-[#2B7FFF]/40"
                        }`} />
                        <div className={`w-px h-3 transition-colors duration-300 ${isHovered ? "bg-[#2B7FFF]" : "bg-[#2B7FFF]/30"}`} />
                        <div
                          className={`rounded-md p-1.5 w-full min-h-[40px] flex flex-col items-center justify-center text-center transition-all duration-300 cursor-pointer mt-1 ${
                            isHovered
                              ? "bg-[#2B7FFF]/20 border-2 border-[#2B7FFF] shadow-lg shadow-[#2B7FFF]/20 scale-110"
                              : delivery.highlight
                                ? "bg-white/[0.06] border border-[#2B7FFF]/30"
                                : "bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.06]"
                          }`}
                        >
                          <div className={`text-[10px] font-bold mb-0.5 transition-colors duration-300 ${isHovered ? "text-white" : "text-[#2B7FFF]"}`}>
                            Mês {delivery.month}
                          </div>
                          <div className={`text-[8px] leading-tight font-medium transition-colors duration-300 ${isHovered ? "text-white" : "text-[#EDEDEF]"}`}>
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
        <div className="min-h-[180px]">
          <AnimatePresence mode="wait">
            {hoveredMonth !== null ? (
              <motion.div
                key={hoveredMonth}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="bg-white/[0.04] border border-white/[0.08] rounded-lg p-3 h-full"
              >
                {/* Month Header */}
                <div className="flex items-center gap-2 mb-2 pb-2 border-b border-white/[0.08]">
                  <div className="w-6 h-6 rounded-md bg-[#2B7FFF]/20 flex items-center justify-center">
                    <Rocket className="w-3 h-3 text-[#2B7FFF]" />
                  </div>
                  <h3 className="text-sm font-bold text-[#EDEDEF]">
                    Mês {hoveredMonth} — {autolineDeliveries.find(d => d.month === hoveredMonth)?.title}
                  </h3>
                </div>

                {/* Deliveries Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                  {autolineDeliveries
                    .find(d => d.month === hoveredMonth)
                    ?.details.map((detail, idx) => {
                      const Icon = detail.icon;
                      return (
                        <div key={idx} className="bg-white/[0.03] border border-white/[0.06] rounded-md p-2">
                          <div className="flex items-center gap-1.5 mb-1">
                            <Icon className="w-3 h-3 text-[#2B7FFF]" />
                            <span className="text-[10px] font-bold text-[#EDEDEF]">{detail.product}</span>
                          </div>
                          <ul className="space-y-0.5">
                            {detail.items.map((item, i) => (
                              <li key={i} className="text-[9px] text-[#8A8A8E] flex items-start gap-1">
                                <span className="text-[#2B7FFF] mt-0.5 text-[7px]">●</span>
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
                transition={{ duration: 0.15 }}
                className="bg-white/[0.02] border border-dashed border-white/[0.06] rounded-lg p-3 flex items-center justify-center h-full"
              >
                <div className="text-center">
                  <div className="text-xs text-[#8A8A8E] mb-0.5">👆 Passe o mouse sobre um mês para ver as entregas</div>
                  <div className="text-[10px] text-[#555]">Cada mês mostra os produtos e funcionalidades que serão entregues</div>
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
