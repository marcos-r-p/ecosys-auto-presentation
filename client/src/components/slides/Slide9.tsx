import { motion } from "motion/react";
import { Database, Brain, Building2, Package, Users, BarChart3, MessageSquare, Smartphone, Target, HeartPulse, BellRing, TrendingUp, Lightbulb, CreditCard, PieChart, Bell, LayoutDashboard, Link } from "lucide-react";
import SlideFooter from "../SlideFooter";

const blocks = [
  {
    icon: Database,
    title: "Base Operacional Validada",
    subtitle: "Ecosys Core",
    color: "#2B7FFF",
    items: [
      { icon: Package, text: "Gestão completa de estoque e vendas" },
      { icon: Users, text: "CRM estruturado e funil comercial" },
      { icon: BarChart3, text: "Controle financeiro e DRE simplificada" },
      { icon: MessageSquare, text: "Comunicação omnichannel integrada" },
      { icon: Smartphone, text: "App do vendedor conectado ao sistema" },
    ],
  },
  {
    icon: Brain,
    title: "Camada de Inteligência",
    subtitle: "IA",
    color: "#8B5CF6",
    items: [
      { icon: Target, text: "Priorização automática de oportunidades" },
      { icon: HeartPulse, text: "Health Score da carteira de lojistas" },
      { icon: BellRing, text: "Alertas preditivos de performance" },
      { icon: TrendingUp, text: "Recomendações de margem e precificação" },
      { icon: Lightbulb, text: "Insights acionáveis para GEFINS" },
    ],
  },
  {
    icon: Building2,
    title: "Evoluções Exclusivas",
    subtitle: "Bradesco",
    color: "#CC092F",
    items: [
      { icon: CreditCard, text: "Originação nativa de crédito e seguros" },
      { icon: PieChart, text: "Monitoramento de share-of-wallet" },
      { icon: Bell, text: "Alertas automáticos de cross-sell" },
      { icon: LayoutDashboard, text: "Dashboard executivo consolidado" },
      { icon: Link, text: "Integração com sistemas internos Bradesco" },
    ],
  },
];

export default function Slide9() {
  return (
    <div className="flex flex-col items-center justify-start h-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-3 sm:pt-4 md:pt-5 pb-3 sm:pb-4 overflow-hidden">
      <div className="max-w-7xl w-full flex flex-col h-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-3 md:mb-4"
        >
          <h2 className="font-extrabold tracking-tight text-[#EDEDEF] leading-[1.1]" style={{ fontSize: 'clamp(20px, 3.2vh, 40px)' }}>
            Gestor Autoline:{" "}
            <span className="text-[#2B7FFF]">Plataforma Estratégica</span>
            {" "}de Integração Comercial
          </h2>
          <p className="text-[#8A8A8E] font-medium max-w-5xl mx-auto mt-1" style={{ fontSize: 'clamp(11px, 1.4vh, 17px)' }}>
            Sistema central que conecta operação da revenda, força comercial Bradesco e originação financeira em um único fluxo inteligente.
          </p>
        </motion.div>

        {/* Three Blocks */}
        <div className="flex-1 grid grid-cols-3 gap-3 md:gap-4 lg:gap-5 min-h-0">
          {blocks.map((block, blockIndex) => (
            <motion.div
              key={block.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + blockIndex * 0.15 }}
              className="flex flex-col"
            >
              <div
                className="relative bg-white/[0.03] border border-white/[0.08] rounded-2xl p-4 md:p-5 h-full flex flex-col hover:border-white/[0.12] transition-all duration-300"
              >
                {/* Block Header */}
                <div className="flex items-center gap-3 mb-3 md:mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${block.color}15`, border: `1px solid ${block.color}30` }}
                  >
                    <block.icon className="w-5 h-5" style={{ color: block.color }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#EDEDEF] leading-tight" style={{ fontSize: 'clamp(13px, 1.6vh, 19px)' }}>
                      {block.title}
                    </h3>
                    <span
                      className="font-semibold uppercase tracking-wider"
                      style={{ fontSize: 'clamp(9px, 1vh, 12px)', color: block.color }}
                    >
                      {block.subtitle}
                    </span>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px w-full mb-3" style={{ background: `linear-gradient(to right, ${block.color}40, transparent)` }} />

                {/* Items */}
                <div className="flex flex-col gap-2 md:gap-2.5 flex-1">
                  {block.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 + blockIndex * 0.15 + itemIndex * 0.06 }}
                      className="flex items-start gap-2.5"
                    >
                      <div
                        className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ backgroundColor: `${block.color}10` }}
                      >
                        <item.icon className="w-3.5 h-3.5" style={{ color: block.color, opacity: 0.8 }} />
                      </div>
                      <span className="text-[#B0B0B5] leading-snug" style={{ fontSize: 'clamp(11px, 1.3vh, 15px)' }}>
                        {item.text}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Strategic Footer Message */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-3 md:mt-4"
        >
          <div className="relative overflow-hidden rounded-xl bg-white/[0.03] border border-white/[0.08] px-5 py-3">
            <div className="absolute inset-0 bg-gradient-to-r from-[#2B7FFF]/[0.04] via-[#8B5CF6]/[0.04] to-[#CC092F]/[0.04]" />
            <p className="text-center text-[#8A8A8E] relative z-10" style={{ fontSize: 'clamp(11px, 1.2vh, 15px)' }}>
              O Gestor Autoline torna-se a <span className="text-[#EDEDEF] font-semibold">infraestrutura digital da distribuição Bradesco</span> no mercado de seminovos.
            </p>
          </div>
        </motion.div>
      </div>

      <SlideFooter />
    </div>
  );
}
