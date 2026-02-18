import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Bot, Database, ShoppingCart, Smartphone, Wifi, Brain, Shield, Server, Eye, Layers, Rocket } from "lucide-react";
import SlideFooter from "../SlideFooter";

interface DeliveryDetail {
  product: string;
  icon: React.ElementType;
  items: string[];
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
    month: 1, short: "Arquitetura", title: "Ajuste Arquitetura & Discovery",
    details: [
      { product: "Gestor Autoline", icon: Database, items: ["Discovery e levantamento", "Ajuste de arquitetura base", "Definição de infraestrutura"] },
      { product: "Novo GIO", icon: Bot, items: ["MVP Essencial: Gestão de Visitas", "Carteira 360°", "Health Score v1"] },
    ],
  },
  {
    month: 2, short: "Ampliação", title: "Ampliação Arquitetura",
    details: [
      { product: "Gestor Autoline", icon: Database, items: ["Ampliação da arquitetura", "Preparação de ambientes", "Setup de CI/CD"] },
      { product: "Novo GIO", icon: Bot, items: ["Priorização por IA", "Alertas automáticos", "Piloto 20-30 usuários"] },
    ],
  },
  {
    month: 3, short: "Observabilidade", title: "Observabilidade",
    details: [
      { product: "Infraestrutura", icon: Eye, items: ["Monitoramento completo", "Logs centralizados"] },
      { product: "Novo GIO", icon: Bot, items: ["Painel Gerencial", "Teams + Outlook integrados"] },
    ],
  },
  {
    month: 4, short: "Segurança", title: "Segurança & Governança",
    details: [
      { product: "Infraestrutura", icon: Shield, items: ["Governança de dados", "Protocolos de segurança"] },
      { product: "Novo GIO", icon: Bot, items: ["Gestão de Ganhos avançada", "Alertas refinados"] },
    ],
  },
  {
    month: 5, short: "MVP V1", title: "Marketplace V1 + Gestor V1 + App", highlight: true,
    details: [
      { product: "Marketplace V1", icon: ShoppingCart, items: ["Catálogo com filtros", "Busca simples"] },
      { product: "Gestor V1", icon: Database, items: ["Fork simplificado", "Controle de acessos"] },
      { product: "App Vendedor", icon: Smartphone, items: ["Ferramenta móvel", "Gestão de leads"] },
      { product: "Novo GIO", icon: Bot, items: ["Roteirização IA", "100% Operacional"] },
    ],
  },
  {
    month: 6, short: "Plataforma", title: "Data & Insight (Plataforma)", highlight: true,
    details: [
      { product: "Motor Comercial", icon: Brain, items: ["Plataforma de dados ativa", "Antecipação de demanda"] },
      { product: "Novo GIO", icon: Bot, items: ["Gamificação completa", "Power BI integrado"] },
    ],
  },
  {
    month: 7, short: "Dados", title: "Data & Insight (Continuação)", highlight: true,
    details: [
      { product: "Motor Comercial", icon: Brain, items: ["Refinamento de modelos", "Dados em tempo real"] },
      { product: "Integração", icon: Wifi, items: ["Autoline ↔ GIO", "APIs bidirecionais"] },
    ],
  },
  {
    month: 8, short: "Infra", title: "Ampliação Infra",
    details: [
      { product: "Infraestrutura", icon: Server, items: ["Escalabilidade horizontal", "Alta disponibilidade"] },
    ],
  },
  {
    month: 9, short: "Evolução V2", title: "Marketplace V2 + Gestor V2 + App", highlight: true,
    details: [
      { product: "Marketplace V2", icon: ShoppingCart, items: ["Busca inteligente IA", "Filtro localidade"] },
      { product: "Gestor V2", icon: Database, items: ["eConversa", "Originação Bradesco"] },
      { product: "App Marketplace", icon: Smartphone, items: ["App nativo iOS/Android"] },
    ],
  },
  {
    month: 10, short: "Recovery", title: "Site Recovery",
    details: [
      { product: "Infraestrutura", icon: Server, items: ["Disaster recovery", "Backup automatizado"] },
    ],
  },
  {
    month: 11, short: "Refinamento", title: "Data & Insight (Refinamento)",
    details: [
      { product: "Motor Comercial", icon: Brain, items: ["Modelos preditivos", "Previsão de churn"] },
    ],
  },
  {
    month: 12, short: "Final V3", title: "Marketplace V3 + Gestor V3 + Embedded", highlight: true,
    details: [
      { product: "Marketplace V3", icon: ShoppingCart, items: ["Conteúdo curado", "IA financeira"] },
      { product: "Gestor V3", icon: Database, items: ["Copiloto IA", "Automações"] },
      { product: "Embedded App", icon: Layers, items: ["App Bradesco", "Experiência unificada"] },
    ],
  },
];

export default function Slide30() {
  const [hoveredMonth, setHoveredMonth] = useState<number | null>(null);

  const hoveredData = hoveredMonth !== null
    ? autolineDeliveries.find(d => d.month === hoveredMonth)
    : null;

  const isHoveredOdd = hoveredMonth !== null ? hoveredMonth % 2 === 1 : true;

  return (
    <div className="flex flex-col items-center h-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 overflow-hidden">
      {/* Título próximo ao header */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center pt-10 pb-1"
      >
        <h2 className="text-xl lg:text-2xl font-bold text-[#EDEDEF] mb-0.5">
          Cronograma de Entregas Integrado
        </h2>
        <p className="text-xs text-[#8A8A8E]">
          Clique em cada mês para ver as entregas detalhadas
        </p>
      </motion.div>

      <div className="max-w-6xl w-full flex flex-col flex-1 justify-center">
        {/* TOP DETAIL PANEL — for odd months (above timeline) */}
        <div className="h-[280px] flex items-end pb-2">
          <AnimatePresence mode="wait">
            {hoveredData && isHoveredOdd ? (
              <motion.div
                key={`top-${hoveredMonth}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="w-full bg-white/[0.04] border border-[#2B7FFF]/20 rounded-lg p-3 backdrop-blur-sm"
              >
                <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-white/[0.08]">
                  <Rocket className="w-3.5 h-3.5 text-[#2B7FFF]" />
                  <h3 className="text-xs font-bold text-[#EDEDEF]">
                    Mês {hoveredMonth} — {hoveredData.title}
                  </h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                  {hoveredData.details.map((detail, idx) => {
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
                              <span className="text-[#2B7FFF] mt-0.5 text-[6px]">●</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ) : !hoveredData ? (
              <motion.div
                key="placeholder-top"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                exit={{ opacity: 0 }}
                className="w-full flex items-center justify-center py-4"
              >
                <div className="text-center">
                  <div className="text-[11px] text-[#555]">👆 Passe o mouse sobre um mês para ver as entregas</div>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>

        {/* TIMELINE — centered horizontal line with months */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="relative py-1">
            {/* Horizontal Line */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-white/10 transform -translate-y-1/2" />

            {/* Months Grid */}
            <div className="relative grid grid-cols-12 gap-0.5">
              {autolineDeliveries.map((delivery, idx) => {
                const isOdd = delivery.month % 2 === 1;
                const isHovered = hoveredMonth === delivery.month;

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: isOdd ? -10 : 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.15 + idx * 0.03 }}
                    className="relative flex items-center justify-center cursor-pointer"
                    style={{ height: '60px' }}
                    onMouseEnter={() => setHoveredMonth(delivery.month)}
                    onMouseLeave={() => setHoveredMonth(null)}
                    onClick={() => setHoveredMonth(hoveredMonth === delivery.month ? null : delivery.month)}
                  >
                    {isOdd ? (
                      <div className="absolute flex flex-col items-center" style={{ bottom: '50%' }}>
                        <div
                          className={`rounded-md px-1 py-0.5 w-full flex flex-col items-center justify-center text-center transition-all duration-300 ${
                            isHovered
                              ? "bg-[#2B7FFF]/20 border-2 border-[#2B7FFF] shadow-lg shadow-[#2B7FFF]/20 scale-110"
                              : delivery.highlight
                                ? "bg-white/[0.06] border border-[#2B7FFF]/30"
                                : "bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.06]"
                          }`}
                        >
                          <div className={`text-[8px] font-bold transition-colors duration-300 ${isHovered ? "text-[#2B7FFF]" : "text-[#8A8A8E]"}`}>
                            M{delivery.month}
                          </div>
                        </div>
                        <div className={`w-px h-1.5 transition-colors duration-300 ${isHovered ? "bg-[#2B7FFF]" : "bg-white/10"}`} />
                        <div className={`w-2 h-2 rounded-full relative z-10 transition-all duration-300 ${
                          isHovered ? "bg-[#2B7FFF] shadow-lg shadow-[#2B7FFF]/60 scale-150" : "bg-white/10 border border-white/20"
                        }`} />
                      </div>
                    ) : (
                      <div className="absolute flex flex-col items-center" style={{ top: '50%' }}>
                        <div className={`w-2 h-2 rounded-full relative z-10 transition-all duration-300 ${
                          isHovered ? "bg-[#2B7FFF] shadow-lg shadow-[#2B7FFF]/60 scale-150" : "bg-[#2B7FFF]/60 border border-[#2B7FFF]/40"
                        }`} />
                        <div className={`w-px h-1.5 transition-colors duration-300 ${isHovered ? "bg-[#2B7FFF]" : "bg-[#2B7FFF]/30"}`} />
                        <div
                          className={`rounded-md px-1 py-0.5 w-full flex flex-col items-center justify-center text-center transition-all duration-300 ${
                            isHovered
                              ? "bg-[#2B7FFF]/20 border-2 border-[#2B7FFF] shadow-lg shadow-[#2B7FFF]/20 scale-110"
                              : delivery.highlight
                                ? "bg-white/[0.06] border border-[#2B7FFF]/30"
                                : "bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.06]"
                          }`}
                        >
                          <div className={`text-[8px] font-bold transition-colors duration-300 ${isHovered ? "text-white" : "text-[#2B7FFF]"}`}>
                            M{delivery.month}
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

        {/* BOTTOM DETAIL PANEL — for even months (below timeline) */}
        <div className="h-[280px] flex items-start pt-2">
          <AnimatePresence mode="wait">
            {hoveredData && !isHoveredOdd ? (
              <motion.div
                key={`bottom-${hoveredMonth}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="w-full bg-white/[0.04] border border-[#2B7FFF]/20 rounded-lg p-3 backdrop-blur-sm"
              >
                <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-white/[0.08]">
                  <Rocket className="w-3.5 h-3.5 text-[#2B7FFF]" />
                  <h3 className="text-xs font-bold text-[#EDEDEF]">
                    Mês {hoveredMonth} — {hoveredData.title}
                  </h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                  {hoveredData.details.map((detail, idx) => {
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
                              <span className="text-[#2B7FFF] mt-0.5 text-[6px]">●</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>

      <SlideFooter />
    </div>
  );
}
