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

/* Reusable detail panel */
function DetailPanel({ data, monthNum }: { data: TimelineMonth; monthNum: number }) {
  return (
    <motion.div
      key={`panel-${monthNum}`}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.2 }}
      className="w-full bg-white/[0.04] border border-[#2B7FFF]/20 rounded-lg backdrop-blur-sm"
      style={{ padding: 'clamp(8px, 1.2vh, 16px)' }}
    >
      <div className="flex items-center gap-2 pb-1.5 border-b border-white/[0.08]" style={{ marginBottom: 'clamp(4px, 0.6vh, 10px)' }}>
        <Rocket style={{ width: 'clamp(12px, 1.4vh, 18px)', height: 'clamp(12px, 1.4vh, 18px)' }} className="text-[#2B7FFF]" />
        <h3 className="font-bold text-[#EDEDEF]" style={{ fontSize: 'clamp(10px, 1.3vh, 16px)' }}>
          Mês {monthNum} — {data.title}
        </h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4" style={{ gap: 'clamp(4px, 0.6vh, 10px)' }}>
        {data.details.map((detail, idx) => {
          const Icon = detail.icon;
          return (
            <div key={idx} className="bg-white/[0.03] border border-white/[0.06] rounded-md" style={{ padding: 'clamp(4px, 0.7vh, 10px)' }}>
              <div className="flex items-center mb-1" style={{ gap: 'clamp(3px, 0.4vh, 8px)' }}>
                <Icon style={{ width: 'clamp(10px, 1.2vh, 16px)', height: 'clamp(10px, 1.2vh, 16px)' }} className="text-[#2B7FFF] shrink-0" />
                <span className="font-bold text-[#EDEDEF]" style={{ fontSize: 'clamp(8px, 1vh, 13px)' }}>{detail.product}</span>
              </div>
              <ul style={{ gap: 'clamp(1px, 0.3vh, 4px)' }} className="flex flex-col">
                {detail.items.map((item, i) => (
                  <li key={i} className="text-[#8A8A8E] flex items-start" style={{ gap: 'clamp(2px, 0.3vh, 6px)', fontSize: 'clamp(7px, 0.9vh, 12px)' }}>
                    <span className="text-[#2B7FFF] shrink-0" style={{ marginTop: '2px', fontSize: 'clamp(4px, 0.5vh, 8px)' }}>●</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default function Slide30() {
  const [activeMonth, setActiveMonth] = useState<number | null>(null);

  const activeData = activeMonth !== null
    ? autolineDeliveries.find(d => d.month === activeMonth)
    : null;

  const isActiveOdd = activeMonth !== null ? activeMonth % 2 === 1 : true;

  return (
    <div className="flex flex-col h-full overflow-hidden" style={{ padding: '0 clamp(16px, 3vw, 80px)' }}>
      {/* Título */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center shrink-0"
        style={{ paddingTop: 'clamp(16px, 3vh, 48px)', paddingBottom: 'clamp(6px, 1.5vh, 20px)' }}
      >
        <h2 className="font-extrabold text-[#EDEDEF] tracking-tight" style={{ fontSize: 'clamp(24px, 4.5vh, 56px)', marginBottom: 'clamp(4px, 0.8vh, 12px)', lineHeight: '1.1' }}>
          Cronograma de Entregas Integrado
        </h2>
        <p className="text-[#8A8A8E]" style={{ fontSize: 'clamp(11px, 1.6vh, 20px)' }}>
          Clique em cada mês para ver as entregas detalhadas
        </p>
      </motion.div>

      {/* Área principal: flex-1 distribui o espaço proporcionalmente */}
      <div className="flex-1 flex flex-col justify-center w-full max-w-7xl mx-auto" style={{ gap: 'clamp(4px, 0.5vh, 12px)' }}>
        
        {/* TOP DETAIL PANEL — meses ímpares (acima da timeline) */}
        <div className="flex-1 flex items-end" style={{ paddingBottom: 'clamp(4px, 0.6vh, 12px)', maxHeight: '42%' }}>
          <AnimatePresence mode="wait">
            {activeData && isActiveOdd ? (
              <DetailPanel data={activeData} monthNum={activeMonth!} />
            ) : !activeData ? (
              <motion.div
                key="placeholder-top"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                exit={{ opacity: 0 }}
                className="w-full flex items-center justify-center"
              >
                <div className="text-center" style={{ fontSize: 'clamp(9px, 1.1vh, 14px)' }}>
                  <span className="text-[#555]">👆 Passe o mouse sobre um mês para ver as entregas</span>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>

        {/* TIMELINE — linha horizontal central com meses */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="shrink-0"
        >
          <div className="relative" style={{ padding: 'clamp(2px, 0.4vh, 8px) 0' }}>
            {/* Linha horizontal */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-white/10 transform -translate-y-1/2" />

            {/* Grid de meses */}
            <div className="relative grid grid-cols-12" style={{ gap: 'clamp(1px, 0.3vw, 6px)' }}>
              {autolineDeliveries.map((delivery, idx) => {
                const isOdd = delivery.month % 2 === 1;
                const isActive = activeMonth === delivery.month;

                /* Tamanhos responsivos via clamp */
                const dotSize = 'clamp(6px, 1vh, 14px)';
                const connectorH = 'clamp(4px, 0.6vh, 10px)';
                const labelFontSize = 'clamp(7px, 1vh, 14px)';
                const rowH = 'clamp(36px, 5vh, 80px)';

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: isOdd ? -10 : 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.15 + idx * 0.03 }}
                    className="relative flex items-center justify-center cursor-pointer"
                    style={{ height: rowH }}
                    onMouseEnter={() => setActiveMonth(delivery.month)}
                    onMouseLeave={() => setActiveMonth(null)}
                    onClick={() => setActiveMonth(activeMonth === delivery.month ? null : delivery.month)}
                  >
                    {isOdd ? (
                      <div className="absolute flex flex-col items-center" style={{ bottom: '50%' }}>
                        <div
                          className={`rounded-md flex items-center justify-center text-center transition-all duration-300 ${
                            isActive
                              ? "bg-[#2B7FFF]/20 border-2 border-[#2B7FFF] shadow-lg shadow-[#2B7FFF]/20 scale-110"
                              : delivery.highlight
                                ? "bg-white/[0.06] border border-[#2B7FFF]/30"
                                : "bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.06]"
                          }`}
                          style={{ padding: 'clamp(1px, 0.3vh, 4px) clamp(2px, 0.4vw, 8px)', fontSize: labelFontSize }}
                        >
                          <span className={`font-bold transition-colors duration-300 ${isActive ? "text-[#2B7FFF]" : "text-[#8A8A8E]"}`}>
                            M{delivery.month}
                          </span>
                        </div>
                        <div className={`w-px transition-colors duration-300 ${isActive ? "bg-[#2B7FFF]" : "bg-white/10"}`} style={{ height: connectorH }} />
                        <div className={`rounded-full relative z-10 transition-all duration-300 ${
                          isActive ? "bg-[#2B7FFF] shadow-lg shadow-[#2B7FFF]/60 scale-150" : "bg-white/10 border border-white/20"
                        }`} style={{ width: dotSize, height: dotSize }} />
                      </div>
                    ) : (
                      <div className="absolute flex flex-col items-center" style={{ top: '50%' }}>
                        <div className={`rounded-full relative z-10 transition-all duration-300 ${
                          isActive ? "bg-[#2B7FFF] shadow-lg shadow-[#2B7FFF]/60 scale-150" : "bg-[#2B7FFF]/60 border border-[#2B7FFF]/40"
                        }`} style={{ width: dotSize, height: dotSize }} />
                        <div className={`w-px transition-colors duration-300 ${isActive ? "bg-[#2B7FFF]" : "bg-[#2B7FFF]/30"}`} style={{ height: connectorH }} />
                        <div
                          className={`rounded-md flex items-center justify-center text-center transition-all duration-300 ${
                            isActive
                              ? "bg-[#2B7FFF]/20 border-2 border-[#2B7FFF] shadow-lg shadow-[#2B7FFF]/20 scale-110"
                              : delivery.highlight
                                ? "bg-white/[0.06] border border-[#2B7FFF]/30"
                                : "bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.06]"
                          }`}
                          style={{ padding: 'clamp(1px, 0.3vh, 4px) clamp(2px, 0.4vw, 8px)', fontSize: labelFontSize }}
                        >
                          <span className={`font-bold transition-colors duration-300 ${isActive ? "text-white" : "text-[#2B7FFF]"}`}>
                            M{delivery.month}
                          </span>
                        </div>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* BOTTOM DETAIL PANEL — meses pares (abaixo da timeline) */}
        <div className="flex-1 flex items-start" style={{ paddingTop: 'clamp(4px, 0.6vh, 12px)', maxHeight: '42%' }}>
          <AnimatePresence mode="wait">
            {activeData && !isActiveOdd ? (
              <DetailPanel data={activeData} monthNum={activeMonth!} />
            ) : null}
          </AnimatePresence>
        </div>
      </div>

      <SlideFooter />
    </div>
  );
}
